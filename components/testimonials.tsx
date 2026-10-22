'use client';
import { useEffect,useRef,useState } from 'react';
import { ArrowLeft,ArrowRight,ArrowUpRight,Play,X } from 'lucide-react';
import { testimonials } from '@/lib/content';

export function Testimonials(){
 const rail=useRef<HTMLDivElement>(null);
 const [position,setPosition]=useState({start:1,end:1,atStart:true,atEnd:false});const [playing,setPlaying]=useState<string|null>(null);
 const updatePosition=()=>{
  const el=rail.current;if(!el)return;const stride=(el.children[0] as HTMLElement).offsetWidth+20;
  setPosition({start:Math.floor((el.scrollLeft+1)/stride)+1,end:Math.min(testimonials.length,Math.max(1,Math.floor((el.scrollLeft+el.clientWidth+20)/stride))),atStart:el.scrollLeft<2,atEnd:el.scrollLeft+el.clientWidth>=el.scrollWidth-2});
 };
 useEffect(()=>{updatePosition();const observer=new ResizeObserver(updatePosition);if(rail.current)observer.observe(rail.current);return()=>observer.disconnect();},[]);
 const stop=()=>{setPlaying(null);requestAnimationFrame(()=>rail.current?.querySelector<HTMLButtonElement>('.inline-play')?.focus({preventScroll:true}));};
 const move=(direction:number)=>{
  const el=rail.current;if(!el)return;
  el.scrollBy({left:direction*((el.children[0] as HTMLElement).offsetWidth+20),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 };
 return <section className="section stories-section" id="musteriler"><div className="shell">
  <div className="section-heading"><div><span className="section-kicker">Yolun en insani tarafı</span><h2>Hikâyeyi bir de<br/><span>onlardan dinleyin.</span></h2></div><div><p>Müşterilerimizin kendi anlatımı ve<br/>KrediCars arşivinden gerçek anlar.</p><div className="rail-controls"><button aria-label="Önceki müşteri kartı" onClick={()=>move(-1)} disabled={position.atStart}><ArrowLeft size={18}/></button><span aria-live="polite">{position.start}{position.end>position.start?'–'+position.end:''} / {testimonials.length}</span><button aria-label="Sonraki müşteri kartı" onClick={()=>move(1)} disabled={position.atEnd}><ArrowRight size={18}/></button></div></div></div>
  <div className="stories-rail" ref={rail} onScroll={updatePosition}>
   {testimonials.map(t=><article key={t.id} className={'customer-card '+(t.videoId?'has-video':'')}>
    <div className="customer-media">
     {playing===t.id?<>
      <iframe src={`https://www.youtube-nocookie.com/embed/${t.videoId}?autoplay=1&rel=0`} title="Samet Bey’in KrediCars deneyimi" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen/>
      <button className="stop-video" onClick={stop} aria-label="Videoyu kapat"><X size={18}/></button>
     </>:<>
      <img src={t.image} alt={t.videoId?'Samet Bey’in yayımlanmış müşteri videosundan':'KrediCars’ın yayımladığı müşteri arşivinden fotoğraf'} loading="lazy" width="480" height="600"/>
      {t.videoId&&<button className="inline-play" onClick={()=>setPlaying(t.id)} aria-label="Samet Bey’in deneyimi, videoyu izle"><Play size={24} fill="currentColor"/></button>}
     </>}
    </div>
    <div className="customer-caption"><h3>{t.title}</h3><a href={t.source} target="_blank" rel="noreferrer">{t.videoId?'YouTube’da da izleyebilirsiniz':'Kaynak fotoğrafı görüntüle'} <ArrowUpRight size={16}/></a>{t.videoId&&<p className="source-note">Video internet bağlantısı gerektirir. Açılmazsa YouTube bağlantısını kullanabilirsiniz.</p>}</div>
   </article>)}
  </div>
  <p className="source-note">Fotoğraflardan şehir, kredi tutarı veya sonuç çıkarımı yapılmamıştır. Müşteri alıntısı eklenmemiştir.</p>
 </div></section>;
}
