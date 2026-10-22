'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, CheckCheck, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { formatMoney, getNeed, normalizePhone } from '@/lib/finance';
import { phone, phoneHref } from '@/lib/content';
import { Logo } from './site-shell';

export type LeadRequest={mode:'apply'|'callback';type?:'individual'|'business';price?:number;deposit?:number;principal?:number;monthly?:number;term?:number;calculationMode?:'amount'|'monthly';topic?:string;returnFocus?:HTMLElement};
type Draft={type:'individual'|'business';selected:string;price:string;deposit:string;name:string;phone:string;company:string};
const fresh=(r:LeadRequest):Draft=>({type:r.type??'individual',selected:r.calculationMode==='monthly'?'no':'yes',price:String(r.price??1000000),deposit:String(r.deposit??400000),name:'',phone:'',company:''});
export function ChoiceSelect({id,value,onChange,options,placeholder}:{id:string;value:string;onChange:(v:string)=>void;options:{value:string;label:string}[];placeholder?:string}) {return <Select value={value} onValueChange={onChange}><SelectTrigger id={id} className="kc-select"><SelectValue placeholder={placeholder}/></SelectTrigger><SelectContent className="kc-select-content" position="popper" sideOffset={7}>{options.map(o=><SelectItem key={o.value} className="kc-select-item" value={o.value}>{o.label}</SelectItem>)}</SelectContent></Select>;}
export function LeadDialog({request,onClose}:{request:LeadRequest|null;onClose:()=>void}) {
  const [draft,setDraft]=useState<Draft>(fresh({mode:'apply'}));
  const [step,setStep]=useState(0);const [finish,setFinish]=useState(false);const [errors,setErrors]=useState<Record<string,string>>({});
  const [referral,setReferral]=useState('');const [skip,setSkip]=useState(false);
  const titleRef=useRef<HTMLHeadingElement>(null);const returnFocus=useRef<HTMLElement|null>(null);
  const callback=request?.mode==='callback';
  useEffect(()=>{if(request){setDraft(fresh(request));setStep(0);setFinish(false);setErrors({});setReferral('');setSkip(false);}},[request]);
  useEffect(()=>{if(request)titleRef.current?.focus({preventScroll:true});},[step,finish,request]);
  const need=getNeed(Number(draft.price),Number(draft.deposit));
  const update=(key:keyof Draft,value:string)=>{setDraft(d=>({...d,[key]:value}));setErrors(e=>({...e,[key]:''}));};
  function submit(e:React.FormEvent){
    e.preventDefault();if(finish){onClose();return;}
    const next:Record<string,string>={};
    if(!callback&&step===0&&draft.selected==='yes'){
      if(!draft.price||Number(draft.price)<=0||Number(draft.price)>100000000)next.price='Geçerli bir araç fiyatı girin.';
      if(draft.deposit===''||need===null||need===0)next.deposit='Peşinat 0 veya daha büyük, araç fiyatından düşük olmalıdır.';
    }
    if(callback||step===1){
      if(draft.name.trim().length<3)next.name='Adınızı ve soyadınızı yazın.';
      if(!normalizePhone(draft.phone))next.phone='Geçerli bir cep telefonu girin: 05xx xxx xx xx.';
      if(!callback&&draft.type==='business'&&draft.company.trim().length<2)next.company='İşletmenizin adını yazın.';
    }
    setErrors(next);if(Object.keys(next).length){requestAnimationFrame(()=>document.getElementById('lead-'+Object.keys(next)[0])?.focus());return;}
    if(callback||step===2)setFinish(true);else setStep(s=>s+1);
  }
  const field=(key:keyof Draft,label:string,props:React.ComponentProps<typeof Input>={})=><div className="form-field"><Label htmlFor={'lead-'+key}>{label}</Label><Input id={'lead-'+key} className="kc-input" value={draft[key]} onChange={e=>update(key,e.target.value)} aria-invalid={!!errors[key]} aria-describedby={errors[key]?'error-'+key:undefined} maxLength={100} {...props}/>{errors[key]&&<p id={'error-'+key} className="input-error" role="alert">{errors[key]}</p>}</div>;
  const title=finish?'Akışı tamamladınız.':callback?'Sizi arayalım.':['Bütçenizi birlikte netleştirelim.','Size ulaşabileceğimiz bir numara.','Her şey doğru mu?'][step];
  return <Dialog open={!!request} onOpenChange={open=>{if(!open)onClose();}}><DialogContent className="lead-modal" onOpenAutoFocus={e=>{returnFocus.current=request?.returnFocus??document.activeElement as HTMLElement;e.preventDefault();titleRef.current?.focus();}} onCloseAutoFocus={e=>{e.preventDefault();returnFocus.current?.focus({preventScroll:true});}}><div className="modal-brand"><Logo/><span>SUNUM SÜRÜMÜ</span></div>{!callback&&!finish&&<div className="step-progress">{['Bütçe','İletişim','Kontrol'].map((s,i)=><div key={s} className={i===step?'current':i<step?'complete':''} aria-current={i===step?'step':undefined}><span>{i<step?<Check size={12}/>:i+1}</span>{s}</div>)}</div>}<div className="modal-heading"><DialogTitle tabIndex={-1} ref={titleRef}>{title}</DialogTitle><DialogDescription>{finish?'Bu demo akışında bilgileriniz gönderilmedi. Gerçek başvuru veya arama talebi oluşturulmadı.':callback?'İlk görüşme için adınız ve telefonunuz yeterli. Bu sunumda örnek bilgiler kullanabilirsiniz.':'İlk görüşmeden önce ihtiyacınıza birlikte bakalım. Kimlik veya belge yüklemeniz gerekmez.'}</DialogDescription></div>
  <form onSubmit={submit} noValidate>{finish?<div className="finish-panel"><div className="finish-icon"><CheckCheck/></div><p>Gerçek bir görüşme için ekibimize ulaşabilirsiniz.</p><a href={phoneHref}><Phone size={18}/>{phone}</a>{!skip&&<fieldset className="referral"><legend>Bizi nereden duydunuz? <small>İsteğe bağlı · yalnızca bu ekranda tutulur</small></legend><div className="amount-chips">{['Google','Instagram','Tavsiye','Şube','Diğer'].map(v=><button type="button" aria-pressed={referral===v} key={v} onClick={()=>setReferral(v)}>{v}</button>)}</div>{referral?<p role="status">Teşekkür ederiz. Seçiminiz bu demoda gönderilmez.</p>:<button type="button" className="text-cta" onClick={()=>setSkip(true)}>Atla</button>}</fieldset>}</div>:!callback&&step===0?<><div className="type-switch" role="group" aria-label="Başvuru türünüz">{[['individual','Bireysel'],['business','Ticari']].map(([k,v])=><button type="button" key={k} aria-pressed={draft.type===k} className={draft.type===k?'selected':''} onClick={()=>update('type',k)}>{v}</button>)}</div>{request?.principal&&<div className="selection-summary"><strong>{formatMoney(request.principal)} TL</strong><span>{request.term} ay · örnek taksit {formatMoney(request.monthly??0)} TL</span><small>Hesaplayıcı seçiminiz · varsayımsal ödeme planı</small></div>}<div className="form-field"><Label htmlFor="vehicle-selection">Aracınızı seçtiniz mi?</Label><ChoiceSelect id="vehicle-selection" value={draft.selected} onChange={v=>update('selected',v)} options={[{value:'yes',label:'Evet, bir araç seçtim'},{value:'no',label:'Henüz araç seçmedim'}]}/></div>{draft.selected==='yes'&&<><div className="form-columns">{field('price','Araç fiyatı (TL)',{type:'number',inputMode:'numeric',min:1,max:100000000})}{field('deposit','Peşinatınız (TL)',{type:'number',inputMode:'numeric',min:0})}</div><div className="need-summary"><span>Finansman ihtiyacınız</span><strong>{need===null?'—':formatMoney(need)} TL</strong></div></>}</>:callback||step===1?<>{request?.topic&&<p className="selection-summary">Görüşme konusu: {request.topic}</p>}{!callback&&draft.type==='business'&&field('company','Şirket / işletme adı',{autoComplete:'organization'})}{field('name','Adınız soyadınız',{autoComplete:'name',placeholder:'Ad Soyad'})}{field('phone','Cep telefonu',{type:'tel',inputMode:'tel',autoComplete:'tel',placeholder:'05xx xxx xx xx',maxLength:20})}</>:<div className="review-panel">{[['Başvuru türü',draft.type==='individual'?'Bireysel':'Ticari'],...(draft.type==='business'?[['İşletme',draft.company]]:[]),['Finansman ihtiyacı',draft.selected==='yes'?formatMoney(need??0)+' TL':request?.principal?formatMoney(request.principal)+' TL':'Görüşmede netleştirilecek'],...(request?.term?[['Örnek vade',request.term+' ay'],['Hesaplayıcıdaki örnek taksit',formatMoney(request.monthly??0)+' TL']]:[]),['Ad soyad',draft.name],['Telefon',draft.phone]].map(([k,v])=><div key={k}><span>{k}</span><strong>{v}</strong></div>)}{request?.principal&&draft.selected==='yes'&&need!==request.principal&&<p className="form-note">Bütçeyi değiştirdiniz. Hesaplayıcıdaki ödeme planı önceki seçime aittir; güncel teklif değildir.</p>}</div>}
  {!finish&&<p className="privacy-note">Demo: bilgileriniz gönderilmez veya kaydedilmez. Kredi onayı verilmez.</p>}<div className="modal-actions">{!callback&&step>0&&!finish&&<Button type="button" variant="ghost" className="back-button" onClick={()=>{setStep(s=>s-1);setErrors({});}}><ArrowLeft size={17}/>Geri</Button>}<Button type="submit" className="kc-button kc-button-blue modal-submit">{finish?'Kapat':callback||step===2?'Önizlemeyi tamamla':'Devam et'}{finish?<Check size={17}/>:<ArrowRight size={17}/>}</Button></div></form><div className="modal-support"><span>Birlikte konuşalım mı?</span><a href={phoneHref}>{phone}</a></div></DialogContent></Dialog>;
}
