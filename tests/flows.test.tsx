import React from 'react';
import { afterEach,test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanup,fireEvent,render,screen,waitFor,within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Landing } from '../components/landing';
import { TeamPage } from '../components/team-page';
import { LeadDialog } from '../components/lead-dialog';
afterEach(()=>{cleanup();});

test('budget values enter the application; validation, backwards navigation and honest demo completion work',async()=>{
 render(<Landing/>);const user=userEvent.setup();let calls=0;const originalFetch=globalThis.fetch;globalThis.fetch=async()=>{calls++;throw Error('No live request expected');};
 try{
 fireEvent.change(screen.getByLabelText('Araç fiyatı'),{target:{value:'1250000'}});
 await user.click(screen.getByRole('button',{name:'Seçeneklerimi görüş'}));
 await waitFor(()=>assert.equal((screen.getByLabelText('Araç fiyatı (TL)') as HTMLInputElement).value,'1250000'));
 assert.equal((screen.getByLabelText('Peşinatınız (TL)') as HTMLInputElement).value,'400000');
 await user.click(screen.getByRole('button',{name:'Devam et'}));
 await waitFor(()=>assert.ok(screen.getByLabelText('Adınız soyadınız')));
 fireEvent.change(screen.getByLabelText('Adınız soyadınız'),{target:{value:'Test Kullanıcı'}});
 fireEvent.change(screen.getByLabelText('Cep telefonu'),{target:{value:'123'}});
 await user.click(screen.getByRole('button',{name:'Devam et'}));assert.ok(screen.getByRole('alert').textContent?.includes('Geçerli bir cep'));
 fireEvent.change(screen.getByLabelText('Cep telefonu'),{target:{value:'0542 401 40 04'}});
 await user.click(screen.getByRole('button',{name:'Geri'}));
 await waitFor(()=>assert.ok(screen.getByLabelText('Araç fiyatı (TL)')));
 await user.click(screen.getByRole('button',{name:'Devam et'}));
 await waitFor(()=>assert.equal((screen.getByLabelText('Adınız soyadınız') as HTMLInputElement).value,'Test Kullanıcı'));
 await user.click(screen.getByRole('button',{name:'Devam et'}));
 await waitFor(()=>assert.ok(screen.getByText('Her şey doğru mu?')));
 assert.ok(within(screen.getByRole('dialog')).getByText('850.000 TL'));
 await user.click(screen.getByRole('button',{name:'Önizlemeyi tamamla'}));
 await waitFor(()=>assert.ok(screen.getByText('Akışı tamamladınız.')));assert.equal(calls,0);
 await user.click(screen.getAllByRole('button',{name:'Kapat'})[0]);
 await waitFor(()=>assert.equal(screen.queryByRole('dialog'),null));
 assert.equal(document.activeElement,screen.getByRole('button',{name:'Seçeneklerimi görüş'}));
 }finally{globalThis.fetch=originalFetch;}
});

test('custom select supports the no-car path without requiring vehicle fields',async()=>{
 render(<LeadDialog request={{mode:'apply'}} onClose={()=>{}}/>);const user=userEvent.setup();
 await user.click(screen.getByRole('combobox',{name:'Aracınızı seçtiniz mi?'}));
 await user.click(screen.getByRole('option',{name:'Henüz araç seçmedim'}));
 await waitFor(()=>assert.equal(screen.queryByLabelText('Araç fiyatı (TL)'),null));
 await user.click(screen.getByRole('button',{name:'Devam et'}));
 await waitFor(()=>assert.ok(screen.getByLabelText('Adınız soyadınız')));
});

test('branch selection changes the actual map URL and address together',async()=>{
 render(<Landing/>);const user=userEvent.setup();
 await user.click(screen.getByRole('button',{name:'Mersin'}));
 await waitFor(()=>assert.ok(screen.getByText(/Aydınlıkevler Mh/)));
 await user.click(screen.getByRole('button',{name:'Canlı haritayı aç'}));
 let frame=screen.getByTitle('Mersin şubesi konumu') as HTMLIFrameElement;assert.ok(decodeURIComponent(frame.src).includes('Mersin'));
 await user.click(screen.getByRole('button',{name:'Mardin'}));
 await waitFor(()=>assert.ok(screen.getByText(/İpekyolu No:79/)));
 frame=screen.getByTitle('Mardin / Kızıltepe şubesi konumu') as HTMLIFrameElement;assert.ok(decodeURIComponent(frame.src).includes('Kızıltepe'));
});

test('real customer video is only embedded after interaction and can be dismissed',async()=>{
 render(<Landing/>);const user=userEvent.setup();assert.equal(screen.queryByTitle('Samet Bey’in KrediCars deneyimi'),null);
 await user.click(screen.getByRole('button',{name:'Samet Bey’in deneyimi, videoyu izle'}));
 const frame=screen.getByTitle('Samet Bey’in KrediCars deneyimi') as HTMLIFrameElement;assert.ok(frame.src.includes('youtube-nocookie.com/embed/jJSbWa59-D4'));
 await user.keyboard('{Escape}');await waitFor(()=>assert.equal(screen.queryByRole('dialog'),null));assert.equal(document.activeElement,screen.getByRole('button',{name:'Samet Bey’in deneyimi, videoyu izle'}));
});

test('team filters and Turkish name search show the correct real person',async()=>{
 render(<TeamPage/>);const user=userEvent.setup();assert.ok(screen.getByText('17 ekip üyesi'));
 await user.click(screen.getByRole('button',{name:'Mardin'}));
 await waitFor(()=>assert.ok(screen.getByText('1 ekip üyesi')));assert.ok(screen.getByText('Abdullah Urtekin'));
 await user.click(screen.getByRole('button',{name:'Tüm ekip'}));
 fireEvent.change(screen.getByLabelText('İsim veya görevle ekipte ara'),{target:{value:'yelda'}});
 await waitFor(()=>assert.ok(screen.getByText('1 ekip üyesi')));assert.ok(screen.getByText('Yelda Dönmez'));
});

test('budget presets update the need and impossible budgets block continuation',async()=>{
 render(<Landing/>);const user=userEvent.setup();
 await user.click(screen.getByRole('button',{name:'750.000'}));
 assert.equal((screen.getByLabelText('Araç fiyatı') as HTMLInputElement).value,'750000');
 fireEvent.change(screen.getByLabelText('Ayırdığınız peşinat'),{target:{value:'800000'}});
 assert.equal((screen.getByRole('button',{name:'Seçeneklerimi görüş'}) as HTMLButtonElement).disabled,true);
 assert.ok(screen.getByRole('alert').textContent?.includes('aşmayan'));
 fireEvent.change(screen.getByLabelText('Ayırdığınız peşinat'),{target:{value:'250000'}});
 assert.equal((screen.getByRole('button',{name:'Seçeneklerimi görüş'}) as HTMLButtonElement).disabled,false);
});

test('process tabs expose their selected content and support keyboard navigation',async()=>{
 render(<Landing/>);const user=userEvent.setup();
 const tabs=screen.getAllByRole('tab');await user.click(tabs[0]);await user.keyboard('{ArrowDown}');
 assert.equal(tabs[1].getAttribute('aria-selected'),'true');
 await waitFor(()=>assert.ok(within(screen.getByRole('tabpanel')).getByText('Karar vermeden önce netlik')));
});
