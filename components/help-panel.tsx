'use client';
import { useRef,useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { faqs, helpTopics } from '@/lib/content';
export function HelpPanel({onCallback}:{onCallback:(topic?:string,returnFocus?:HTMLElement)=>void}) {
 const [open,setOpen]=useState(false);const [selected,setSelected]=useState<number|null>(null);const trigger=useRef<HTMLButtonElement>(null);
 return <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><button ref={trigger} className="help-trigger" aria-label="Yardım panelini aç"><MessageCircle size={22}/><span>Bir sorunuz mu var?</span></button></DialogTrigger><DialogContent className="help-panel"><span className="section-kicker">KrediCars yardım</span><DialogTitle>Birlikte netleştirelim.</DialogTitle><DialogDescription>Hazır yanıtlarımızdan başlayın. Bu panel bir canlı sohbet veya yapay zekâ değildir.</DialogDescription><div className="help-questions">{helpTopics.map((t,i)=><button key={t.question} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{t.question}<ArrowRight size={16}/></button>)}</div>{selected!==null&&<div className="help-answer" role="status"><strong>{helpTopics[selected].question}</strong><p>{helpTopics[selected].faqIndex!==null?faqs[helpTopics[selected].faqIndex!][1]:'Danışmanlarımızla ihtiyacınızı ve sonraki adımları konuşabilirsiniz. Kısa görüşme formuyla devam edelim.'}</p></div>}<button className="kc-button kc-button-blue" onClick={()=>{setOpen(false);setTimeout(()=>onCallback(selected===null?undefined:helpTopics[selected].question,trigger.current??undefined),180);}}>Biz sizi arayalım <ArrowRight size={17}/></button></DialogContent></Dialog>;
}
