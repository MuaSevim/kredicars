'use client';
import { useState } from 'react';
import { Header,Footer } from './site-shell';
import { LeadDialog,type LeadRequest } from './lead-dialog';
import { HelpPanel } from './help-panel';
export function PageShell({children}:{children:React.ReactNode}) {
 const [request,setRequest]=useState<LeadRequest|null>(null);
 const callback=(topic?:string,returnFocus?:HTMLElement)=>setRequest({mode:'callback',topic,returnFocus});
 return <div className="studio"><Header inner onApply={()=>setRequest({mode:'apply'})} onCallback={focus=>callback(undefined,focus)}/><main id="main">{children}<section className="inner-callout shell"><h2>Bir soruyla başlayın.</h2><p>Seçeneklerinizi birlikte netleştirelim.</p><button className="kc-button kc-button-blue" onClick={()=>callback()}>Biz sizi arayalım</button></section></main><Footer onApply={()=>setRequest({mode:'apply'})} onCallback={()=>callback()}/><HelpPanel onCallback={callback}/><LeadDialog request={request} onClose={()=>setRequest(null)}/></div>;
}
