'use client';
import { useState } from 'react';
import { Pause,Play } from 'lucide-react';
import { partners } from '@/lib/content';
export function Partners(){
 const [paused,setPaused]=useState(false);
 return <section className="partner-showcase shell" aria-labelledby="partners-title"><div className="partner-title"><h2 id="partners-title">Partnerlerimiz</h2><button onClick={()=>setPaused(p=>!p)} aria-label={paused?'Partner akışını başlat':'Partner akışını duraklat'}>{paused?<Play size={16}/>:<Pause size={16}/>}</button></div><div className={'partner-marquee '+(paused?'is-paused':'')}><div className="partner-track">{[0,1].map(copy=><div className="partner-set" key={copy} aria-hidden={copy===1?true:undefined}>{partners.map(p=><div className="partner-logo" key={p.id}><img src={p.image} alt={copy===0?p.name:''} width="180" height="64"/></div>)}</div>)}</div></div></section>;
}
