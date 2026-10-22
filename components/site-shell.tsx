'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef,useState } from 'react';
import { ArrowRight, ArrowUpRight, Menu, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { campaigns, phone, phoneHref } from '@/lib/content';

export function Logo({className=''}:{className?:string}) {return <Image className={`brand-logo ${className}`} src="/brand/logo.png" width={350} height={84} alt="KrediCars" priority/>;}
export function Header({onCallback,inner=false}:{onApply:()=>void;onCallback:(returnFocus?:HTMLElement)=>void;inner?:boolean}) {
 const [open,setOpen]=useState(false);const menuTrigger=useRef<HTMLButtonElement>(null);
 const links=[['Nasıl çalışır?', '/#surec'],['Ekibimiz','/ekibimiz/'],['Şubelerimiz','/subeler/'],['Rehber','/blog/']];
 return <>
  <a className="skip-link" href="#main">İçeriğe geç</a>
  <a className="campaign-bar" href={inner?'/#kampanya':'#kampanya'}><span>Örnek kampanya</span><strong>{campaigns[0].title}</strong><ArrowRight size={15}/></a>
  <header className="site-header"><div className="shell header-inner">
   <Link href="/" aria-label="KrediCars ana sayfa"><Logo/></Link>
   <nav aria-label="Ana menü">{links.map(([text,url])=><Link key={url} href={url}>{text}</Link>)}</nav>
   <div className="header-actions">
    <a className="header-phone" href={phoneHref} aria-label={`${phone} numarasını ara`}><Phone size={17}/><span>{phone}</span></a>
    <Link className="kc-button kc-button-blue header-calculate" href={inner?'/#hesaplama':'#hesaplama'}>Kredini hesapla <ArrowRight size={17}/></Link>
    <Dialog open={open} onOpenChange={setOpen}>
     <DialogTrigger asChild><Button ref={menuTrigger} variant="ghost" size="icon" className="mobile-menu-button" aria-label="Menüyü aç"><Menu/></Button></DialogTrigger>
     <DialogContent className="mobile-navigation"><DialogTitle>Birlikte başlayalım.</DialogTitle><DialogDescription>KrediCars’ı keşfedin.</DialogDescription>
      <nav aria-label="Mobil menü">{[...links,['Ödüller','/oduller/'],['İletişim','/iletisim/']].map(([text,url])=><Link key={url} href={url} onClick={()=>setOpen(false)}>{text}<ArrowRight size={18}/></Link>)}</nav>
      <button className="kc-button kc-button-blue" onClick={()=>{setOpen(false);setTimeout(()=>onCallback(menuTrigger.current??undefined),180);}}>Biz sizi arayalım <Phone size={18}/></button>
     </DialogContent>
    </Dialog>
   </div>
  </div></header>
 </>;
}
export function Footer({onCallback}:{onApply:()=>void;onCallback:()=>void}) {
 return <footer className="site-footer"><div className="shell"><div className="footer-top"><div><Link href="/" aria-label="KrediCars ana sayfa"><Logo/></Link><p>Taşıt finansmanında netlik.<br/>Her adımda gerçek bir ekip.</p><span className="demo-label">Sunum sürümü · gerçek başvuru alınmaz</span></div><div><h3>KrediCars</h3><Link href="/ekibimiz/">Ekibimiz</Link><Link href="/subeler/">Şubelerimiz</Link><Link href="/oduller/">Ödüller</Link><Link href="/blog/">Rehber & blog</Link></div><div><h3>Birlikte konuşalım</h3><a href={phoneHref}>{phone}</a><a href="mailto:info@kredicars.com">info@kredicars.com</a><Link href="/iletisim/">İletişim bilgileri <ArrowUpRight size={14}/></Link><button className="text-cta" onClick={onCallback}>Biz sizi arayalım <ArrowRight size={16}/></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} KrediCars</span><p>Kredi onayı ve koşulları ilgili finans kuruluşunca belirlenir.</p><Link href="/gizlilik/">Gizlilik ve aydınlatma</Link></div></div></footer>;
}
