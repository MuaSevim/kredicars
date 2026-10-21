'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, Building2, Check, CheckCheck, CircleCheck, Info, LoaderCircle, Phone, UserRound } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formatMoney, getNeed, normalizePhone } from '@/lib/finance';
import { phone, phoneHref } from '@/lib/content';
import { Logo } from './site-shell';

export type LeadRequest={mode:'apply'|'callback';type?:'individual'|'business';price?:number;deposit?:number};
type Draft={type:'individual'|'business';selected:'yes'|'no';price:string;deposit:string;vehicle:string;name:string;phone:string;company:string;city:string;time:string};
const fresh=(r:LeadRequest):Draft=>({type:r.type||'individual',selected:'yes',price:String(r.price??1000000),deposit:String(r.deposit??400000),vehicle:'',name:'',phone:'',company:'',city:'',time:'Uygun olduğunuzda'});
export function ChoiceSelect({id,value,onChange,options,placeholder}:{id:string;value:string;onChange:(v:string)=>void;options:{value:string;label:string}[];placeholder?:string}) {return <Select value={value} onValueChange={onChange}><SelectTrigger id={id} className="kc-select"><SelectValue placeholder={placeholder}/></SelectTrigger><SelectContent className="kc-select-content" position="popper" sideOffset={7}>{options.map(o=><SelectItem key={o.value} className="kc-select-item" value={o.value}>{o.label}</SelectItem>)}</SelectContent></Select>;}

export function LeadDialog({request,onClose}:{request:LeadRequest|null;onClose:()=>void}){
  const [draft,setDraft]=useState<Draft>(fresh({mode:'apply'})); const [step,setStep]=useState(0); const [direction,setDirection]=useState(1); const [errors,setErrors]=useState<Record<string,string>>({}); const [status,setStatus]=useState<'idle'|'sending'|'success'|'demo'>('idle');
  const reduced=useReducedMotion();const formRef=useRef<HTMLFormElement>(null);const controller=useRef<AbortController|null>(null);const session=useRef(0);const submitLock=useRef(false);const titleRef=useRef<HTMLHeadingElement>(null);const returnFocus=useRef<HTMLElement|null>(null);
  const lastRequest=useRef(request);if(request)lastRequest.current=request;
  const callback=(request??lastRequest.current)?.mode==='callback';
  const endpoint=process.env.NEXT_PUBLIC_LEAD_ENDPOINT;
  const disclosure=process.env.NEXT_PUBLIC_DISCLOSURE_URL;
  const live=false; // This standalone concept never sends personal information.
  useEffect(()=>{session.current++;controller.current?.abort();submitLock.current=false;if(request){setDraft(fresh(request));setStep(0);setStatus('idle');setErrors({});setDirection(1);}else{const timer=setTimeout(()=>setDraft(fresh({mode:'apply'})),240);return()=>clearTimeout(timer);}},[request]);
  useEffect(()=>()=>controller.current?.abort(),[]);
  useEffect(()=>{if(request){const timer=setTimeout(()=>titleRef.current?.focus({preventScroll:true}),230);return()=>clearTimeout(timer);}},[step,status==='success'||status==='demo',!!request]);
  const update=(key:keyof Draft,value:string)=>{setDraft(d=>({...d,[key]:value}));setErrors(e=>{const next={...e};delete next[key];return next;});};
  const need=getNeed(Number(draft.price),Number(draft.deposit));
  function validate(){
    const next:Record<string,string>={};
    if(!callback&&step===0&&draft.selected==='yes'){
      if(!draft.price||Number(draft.price)<=0||Number(draft.price)>100000000)next.price='Geçerli bir araç fiyatı girin.';
      if(!draft.deposit||Number(draft.deposit)<0)next.deposit='Peşinat tutarını girin. Peşinatınız yoksa 0 yazın.';
      else if(need===null)next.deposit='Peşinat araç fiyatından yüksek olamaz.';
      else if(need===0)next.deposit='Araç tutarını peşinatınız karşılıyor. Kredi ihtiyacınız varsa tutarı güncelleyin.';
    }
    if(callback||step===1){
      if(draft.name.trim().length<3)next.name='Adınızı ve soyadınızı yazın.';
      if(!normalizePhone(draft.phone))next.phone='Geçerli bir cep telefonu girin: 05xx xxx xx xx.';
      if(!callback&&draft.type==='business'&&draft.company.trim().length<2)next.company='İşletmenizin adını yazın.';
    }
    setErrors(next);
    if(Object.keys(next).length){requestAnimationFrame(()=>document.getElementById('lead-'+Object.keys(next)[0])?.focus());return false;}return true;
  }
  async function submit(event:React.FormEvent){
    event.preventDefault();if(submitLock.current)return;
    if(status==='success'||status==='demo'){onClose();return;}
    if(!validate())return;
    if(!callback&&step<2){setDirection(1);setStep(v=>v+1);return;}
    if(!live){setStatus('demo');return;}
    submitLock.current=true;setStatus('sending');const current=session.current;const abort=new AbortController();controller.current=abort;const timer=setTimeout(()=>abort.abort(),15000);
    try{
      const payload={kind:callback?'callback':'application',name:draft.name.trim(),phone:normalizePhone(draft.phone),city:draft.city.trim(),preferredTime:draft.time,privacyVersion:process.env.NEXT_PUBLIC_DISCLOSURE_VERSION,...(!callback?{applicantType:draft.type,company:draft.type==='business'?draft.company.trim():null,vehicle:draft.selected==='yes'?{description:draft.vehicle.trim(),price:Number(draft.price),deposit:Number(draft.deposit),requested:need}:null}:{})};
      const r=await fetch(endpoint!,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:abort.signal});
      const data=await r.json();if(!r.ok||data.ok!==true||!data.requestId)throw Error();if(current===session.current)setStatus('success');
    }catch{if(current===session.current){setStatus('idle');setErrors({submit:'Talebin ulaştığını doğrulayamadık. Tekrar deneyin veya bizi arayın.'});}}finally{clearTimeout(timer);if(current===session.current)submitLock.current=false;}
  }
  const field=(key:keyof Draft,label:string,props:React.ComponentProps<typeof Input>={})=><div className="form-field"><Label htmlFor={'lead-'+key}>{label}</Label><Input id={'lead-'+key} className="kc-input" value={draft[key]} onChange={e=>update(key,e.target.value)} aria-invalid={!!errors[key]} aria-describedby={errors[key]?'error-'+key:undefined} maxLength={120} {...props}/>{errors[key]&&<p className="input-error" id={'error-'+key} role="alert">{errors[key]}</p>}</div>;
  const finish=status==='success'||status==='demo';
  const title=finish?(status==='demo'?'Akışı tamamladınız.':'Görüşme talebiniz alındı.') : callback?'Sizi ne zaman arayalım?':['Önce aracınız.','Size ulaşabileceğimiz bir numara.','Her şey doğru mu?'][step];
  const description=finish?(status==='demo'?'Bu önizlemede bilgi gönderilmedi. Gerçek bir görüşme için ekibimizi arayabilirsiniz.':'Ekibimiz ihtiyacınızı ve sonraki adımları görüşmek için sizinle iletişime geçecek.'):callback?'Sorularınızı ekibimizle konuşun. İlk adım için adınız ve telefonunuz yeterli.':['Aracı seçtiyseniz bütçenizi paylaşın. Henüz seçmediyseniz de başlayabiliriz.','Kimlik veya belge yüklemeden ilk görüşme talebinizi oluşturun.','Bilgilerinizi kontrol edin. İsterseniz geri dönüp değiştirebilirsiniz.'][step];
  return <Dialog open={!!request} onOpenChange={open=>{if(!open){session.current++;controller.current?.abort();onClose();}}}><DialogContent className="lead-modal" onOpenAutoFocus={e=>{returnFocus.current=document.activeElement as HTMLElement;e.preventDefault();titleRef.current?.focus();}} onCloseAutoFocus={e=>{e.preventDefault();returnFocus.current?.focus({preventScroll:true});}}><div className="modal-brand"><Logo/>{!callback&&!finish&&<span>ADIM {step+1} / 3</span>}</div>{!callback&&!finish&&<div className="step-progress" aria-label="Başvuru ilerlemesi">{['Araç ve bütçe','İletişim','Kontrol'].map((s,i)=><div key={s} className={i===step?'current':i<step?'complete':''} aria-current={i===step?'step':undefined}><span>{i<step?<Check size={12}/>:i+1}</span>{s}</div>)}</div>}<div className="modal-heading"><DialogTitle ref={titleRef} tabIndex={-1}>{title}</DialogTitle><DialogDescription>{description}</DialogDescription></div><form ref={formRef} onSubmit={submit} noValidate><AnimatePresence mode="wait" initial={false} custom={direction}><motion.div key={finish?'finish':callback?'callback':step} custom={direction} initial={reduced?false:{opacity:0,x:direction*20,filter:'blur(3px)'}} animate={{opacity:1,x:0,filter:'blur(0px)'}} exit={reduced?undefined:{opacity:0,x:direction*-14,filter:'blur(2px)'}} transition={{duration:reduced?0:.2,ease:[.22,1,.36,1]}} onAnimationComplete={()=>{if(document.activeElement===document.body)titleRef.current?.focus();}} className="modal-step">
  {finish?<div className="finish-panel"><div className="finish-icon"><CheckCheck/></div><p>{status==='demo'?'Formunuzu önizlediniz. Gerçek başvuru veya arama talebi oluşturulmadı.':'Bu görüşme talebi kredi onayı anlamına gelmez. Kredi sürecinin sonraki adımlarını ekibimizle değerlendireceksiniz.'}</p><a href={phoneHref}><Phone size={17}/>{phone}</a></div>:!callback&&step===0?<><div className="type-switch" role="group" aria-label="Başvuru türünüz"><button type="button" className={draft.type==='individual'?'selected':''} onClick={()=>update('type','individual')} aria-pressed={draft.type==='individual'}><UserRound size={17}/>Bireysel</button><button type="button" className={draft.type==='business'?'selected':''} onClick={()=>update('type','business')} aria-pressed={draft.type==='business'}><Building2 size={17}/>Ticari</button></div><div className="form-field"><Label htmlFor="vehicle-selection">Aracınızı seçtiniz mi?</Label><ChoiceSelect id="vehicle-selection" value={draft.selected} onChange={v=>update('selected',v)} options={[{value:'yes',label:'Evet, bir araç seçtim'},{value:'no',label:'Henüz araç seçmedim'}]}/></div><AnimatePresence initial={false}>{draft.selected==='yes'&&<motion.div key="car-fields" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} transition={{duration:reduced?0:.22}} className="conditional-fields">{field('vehicle','Marka ve model (isteğe bağlı)',{placeholder:'Örn. Renault Clio',maxLength:100})}<div className="form-columns">{field('price','Araç fiyatı (TL)',{type:'number',inputMode:'numeric',min:1,max:100000000})}{field('deposit','Peşinatınız (TL)',{type:'number',inputMode:'numeric',min:0,max:100000000})}</div><div className="need-summary"><span>Finansman ihtiyacınız</span><strong>{need===null?'—':formatMoney(need)} <small>TL</small></strong></div><p className="form-note">Bu tutar kredi limiti veya teklif değildir. Koşullar finans kuruluşunun değerlendirmesiyle belirlenir.</p></motion.div>}</AnimatePresence></>:callback||step===1?<>{!callback&&draft.type==='business'&&field('company','Şirket / işletme adı',{autoComplete:'organization',placeholder:'İşletmenizin adı'})}{field('name','Adınız soyadınız',{autoComplete:'name',placeholder:'Ad Soyad',maxLength:100})}{field('phone','Cep telefonu',{type:'tel',inputMode:'tel',autoComplete:'tel',placeholder:'05xx xxx xx xx',maxLength:20})}<div className="form-columns">{field('city','Bulunduğunuz il (isteğe bağlı)',{autoComplete:'address-level1',placeholder:'Örn. İstanbul',maxLength:60})}<div className="form-field"><Label htmlFor="preferred-time">Aranma tercihiniz</Label><ChoiceSelect id="preferred-time" value={draft.time} onChange={v=>update('time',v)} options={['Uygun olduğunuzda','Sabah (09.00–12.00)','Öğleden sonra (12.00–17.00)'].map(v=>({value:v,label:v}))}/></div></div><p className="form-note">Saat seçimi tercihinizdir; kesin randevu anlamına gelmez.</p></>:<div className="review-panel">{[['Başvuru türü',draft.type==='individual'?'Bireysel':'Ticari'],...(draft.type==='business'?[['İşletme',draft.company]]:[]),['Araç',draft.selected==='yes'?draft.vehicle||'Model belirtilmedi':'Henüz seçilmedi'],...(draft.selected==='yes'?[['Finansman ihtiyacı',formatMoney(need??0)+' TL']]:[]),['Ad soyad',draft.name],['Telefon',draft.phone],['İl',draft.city||'Belirtilmedi'],['Aranma tercihi',draft.time]].map(([k,v])=><div key={k}><span>{k}</span><strong>{v}</strong></div>)}</div>}
  </motion.div></AnimatePresence>{!finish&&(callback||step>0)&&<p className="privacy-note">{live?<>Bilgilerinizi göndermeden önce <a href={disclosure} target="_blank" rel="noreferrer">aydınlatma metnini</a> inceleyebilirsiniz.</>:<><Info size={13}/> Tasarım önizlemesi. Bilgileriniz gönderilmez; örnek bilgilerle deneyebilirsiniz.</>}</p>}{errors.submit&&<p role="alert" className="input-error">{errors.submit}</p>}<div className="modal-actions">{!callback&&step>0&&!finish&&<Button type="button" variant="ghost" className="back-button" disabled={status==='sending'} onClick={()=>{setDirection(-1);setStep(s=>s-1);setErrors({});}}><ArrowLeft size={17}/>Geri</Button>}<Button type="submit" className="kc-button kc-button-blue modal-submit" disabled={status==='sending'}>{status==='sending'?<><LoaderCircle className="spin"/>Gönderiliyor</>:finish?<>Kapat<Check size={17}/></>:callback||step===2?<>{live?'Görüşme talebini gönder':'Önizlemeyi tamamla'}<ArrowRight/></>:<>Devam et<ArrowRight/></>}</Button></div></form><div className="modal-support"><span>Birlikte dolduralım mı?</span><a href={phoneHref}><Phone size={14}/>{phone}</a></div></DialogContent></Dialog>;
}
