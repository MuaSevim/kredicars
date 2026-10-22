'use client';
import { useRef,useState } from 'react';
import Link from 'next/link';
import { ArrowRight,ZoomIn } from 'lucide-react';
import { awards } from '@/lib/content';
import { Dialog,DialogContent,DialogTitle,DialogDescription } from './ui/dialog';
export function Awards({preview=false}:{preview?:boolean}) {
 const [selected,setSelected]=useState<typeof awards[number]|null>(null);const trigger=useRef<HTMLElement|null>(null);
 return <><div className="award-grid">{(preview?awards.slice(0,2):awards).map(a=><article key={a.id} className="award-card"><button onClick={e=>{trigger.current=e.currentTarget;setSelected(a);}} aria-label={a.year+' '+a.issuer+' '+a.title+' belgesini büyüt'}><img src={a.image} alt={a.year+' '+a.issuer+' ödül belgesi'} width="450" height="600" loading="lazy"/><span><ZoomIn size={18}/>Belgeyi incele</span></button><div><span className="award-year">{a.year} · {a.issuer}</span><h3>{a.title}</h3><p>{a.category}</p><small>{a.scope}</small></div></article>)}</div>{preview&&<Link href="/oduller/" className="text-cta">Tüm belgeleri görün <ArrowRight size={17}/></Link>}<Dialog open={!!selected} onOpenChange={open=>{if(!open)setSelected(null);}}><DialogContent className="award-modal" onCloseAutoFocus={e=>{e.preventDefault();trigger.current?.focus();}}><DialogTitle>{selected?.year} {selected?.issuer} · {selected?.title}</DialogTitle><DialogDescription>Şirketin sağladığı ödül arşivindeki orijinal belge. Belgedeki alıcı unvanı esas alınmalıdır.</DialogDescription>{selected&&<><img src={selected.image} alt={selected.title+' belgesi'}/><a href={selected.source} target="_blank" rel="noreferrer" className="text-cta">Kaynak belgeyi aç</a></>}</DialogContent></Dialog></>;
}
