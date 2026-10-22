// Optional integration check. Reuses an existing Playwright installation;
// does not add browser packages to the application dependency graph.
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { mkdir,writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { articles } from '../lib/articles.ts';
const require=createRequire(import.meta.url);
let playwright;
try{playwright=require(process.env.PLAYWRIGHT_MODULE||'playwright');}
catch{playwright=require(path.join(tmpdir(),'opencode/node_modules/playwright'));}
const base=process.env.PREVIEW_URL||'http://127.0.0.1:3001';
const artifacts=path.join(tmpdir(),'opencode/kredicars-check');await mkdir(artifacts,{recursive:true});
const browser=await playwright.chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
 const errors=[];const consoleErrors=[];let posts=0;
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')consoleErrors.push(m.text());});
 page.on('request',r=>{if(r.method()==='POST'&&r.url().startsWith(base))posts++;});
 await page.goto(base,{waitUntil:'networkidle'});
 for(const width of [390,360,768,1024,1440]){await page.setViewportSize({width,height:900});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);}
 await page.setViewportSize({width:390,height:844});
 await page.getByLabel('Araç fiyatı',{exact:true}).fill('1250000');
 await page.getByRole('button',{name:'Başvuruya devam et'}).click();
 assert.equal(await page.getByLabel('Araç fiyatı (TL)',{exact:true}).inputValue(),'1250000');
 for(let i=0;i<12;i++){await page.keyboard.press('Tab');assert.ok(await page.evaluate(()=>document.querySelector('[role="dialog"]').contains(document.activeElement)),'Focus escaped dialog');}
 await page.getByRole('button',{name:'Devam et',exact:true}).click();
 await page.getByLabel('Adınız soyadınız').fill('Sunum Kullanıcısı');await page.getByLabel('Cep telefonu').fill('0542 401 4004');
 await page.getByRole('button',{name:'Geri',exact:true}).click();assert.equal(await page.getByLabel('Araç fiyatı (TL)',{exact:true}).inputValue(),'1250000');
 await page.getByRole('button',{name:'Devam et',exact:true}).click();assert.equal(await page.getByLabel('Adınız soyadınız').inputValue(),'Sunum Kullanıcısı');
 await page.getByRole('button',{name:'Devam et',exact:true}).click();await page.getByRole('button',{name:'Önizlemeyi tamamla'}).click();
 await page.getByText('Akışı tamamladınız.',{exact:true}).waitFor();await page.getByRole('button',{name:'Atla',exact:true}).click();
 await page.getByRole('button',{name:'Kapat',exact:true}).first().click();assert.equal(posts,0);
 await page.getByRole('button',{name:'Samet Bey’in deneyimi, videoyu izle'}).click();
 assert.equal(await page.locator('.customer-media iframe').count(),1);assert.equal(await page.getByRole('dialog').count(),0);
 await page.getByRole('button',{name:'Videoyu kapat'}).click();
 for(let i=0;i<5&&!await page.getByRole('button',{name:'Sonraki müşteri kartı'}).isDisabled();i++)await page.getByRole('button',{name:'Sonraki müşteri kartı'}).click();
 assert.ok(await page.getByRole('button',{name:'Sonraki müşteri kartı'}).isDisabled());
 for(let i=0;i<5&&!await page.getByRole('button',{name:'Önceki müşteri kartı'}).isDisabled();i++)await page.getByRole('button',{name:'Önceki müşteri kartı'}).click();
 assert.ok(await page.getByRole('button',{name:'Önceki müşteri kartı'}).isDisabled());
 await page.getByRole('button',{name:'Mersin',exact:true}).click();await page.getByText('Yelda Dönmez',{exact:true}).waitFor();
 await page.getByRole('link',{name:'Şubeyi ve ekibi tanıyın'}).click();await page.waitForURL('**/subeler/mersin/');
 await page.getByRole('link',{name:'Görüşme öncesi: teklifleri karşılaştırmak'}).click();await page.waitForURL('**/blog/en-uygun-tasit-kredisi/');
 await page.getByRole('link',{name:'← Tüm yazılara dön'}).click();await page.waitForURL('**/blog/');
 await page.getByRole('textbox',{name:'Yazılarda ara'}).fill('zzzz');await page.getByText('Bu aramada bir yazı bulamadık.').waitFor();
 await page.getByRole('link',{name:'KrediCars ana sayfa',exact:true}).first().click();await page.waitForURL(base+'/');
 for(const opener of ['Yardım panelini aç','Menüyü aç']){
  await page.getByRole('button',{name:opener}).click();
  await page.getByRole('dialog').getByRole('button',{name:'Biz sizi arayalım',exact:true}).click();
  await page.getByRole('heading',{name:'Sizi arayalım.'}).waitFor();await page.keyboard.press('Escape');await page.getByRole('dialog').waitFor({state:'detached'});
  assert.equal(await page.evaluate(()=>document.activeElement.getAttribute('aria-label')),opener);
 }
 assert.equal(await page.getByRole('slider').getAttribute('aria-label'),'Peşinat oranı');
 const routes=['/','/ekibimiz/','/subeler/','/subeler/adana/','/subeler/mersin/','/subeler/osmaniye/','/subeler/mardin/','/blog/','/oduller/','/iletisim/','/gizlilik/',...articles.map(a=>'/blog/'+a.slug+'/')];
 for(const route of routes){
  const response=await page.goto(base+route,{waitUntil:'networkidle'});assert.equal(response.status(),200,route);assert.equal(await page.locator('h1').count(),1,route);
  assert.ok((await page.locator('meta[name="robots"]').getAttribute('content')).includes('noindex'),route);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route);
  await page.locator('img[loading="lazy"]').evaluateAll(images=>images.forEach(i=>i.loading='eager'));
  await page.waitForFunction(()=>[...document.images].every(i=>i.complete));
  assert.deepEqual(await page.locator('img').evaluateAll(images=>images.filter(i=>!i.naturalWidth).map(i=>i.src)),[],route);
 }
 await page.goto(base,{waitUntil:'networkidle'});await page.locator('img').evaluateAll(images=>images.forEach(i=>i.loading='eager'));await page.waitForFunction(()=>[...document.images].every(i=>i.complete));
 await page.screenshot({path:path.join(artifacts,'mobile-390.png'),fullPage:true});await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:path.join(artifacts,'desktop-1440.png'),fullPage:true});
 assert.deepEqual(errors,[]);assert.deepEqual(consoleErrors,[]);
 const report={routes:routes.length,widths:[390,360,768,1024,1440],posts,errors,consoleErrors,artifacts};
 await writeFile(path.join(artifacts,'results.json'),JSON.stringify(report,null,2));console.log(report);
}finally{await browser.close();}
