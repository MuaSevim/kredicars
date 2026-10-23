'use client';
import { useEffect,useRef,useState } from 'react';
export function HeroArt(){
 const ref=useRef<HTMLDivElement>(null);const [active,setActive]=useState(false);
 useEffect(()=>{const observer=new IntersectionObserver(([entry])=>setActive(entry.isIntersecting));if(ref.current)observer.observe(ref.current);return()=>observer.disconnect();},[]);
 return <div ref={ref} className={'hero-illustrations '+(active?'art-active':'')} aria-hidden="true"><span className="hero-road"/><div className="hero-car assembled-car"><img className="car-body" src="/design/illustration-car-body.webp" width="1456" height="1092" alt="" fetchPriority="high"/>{['rear','front'].map(w=><span className={'car-wheel '+w} key={w}><img src="/design/illustration-car-wheel.webp" width="210" height="210" alt=""/><svg viewBox="0 0 100 100"><path d="M50 34V66M36 42L64 58M36 58L64 42" stroke="#253b8e" strokeWidth="2" opacity=".3"/><circle cx="50" cy="50" r="4" fill="#253b8e" opacity=".4"/></svg></span>)}</div><img className="hero-key" src="/design/illustration-key.webp" width="150" height="180" alt=""/><img className="hero-form" src="/design/illustration-forum.webp" width="170" height="213" alt=""/><img className="hero-pin" src="/design/illustration-pin.webp" width="85" height="110" alt=""/></div>;
}
