'use client';
import { useState } from 'react';
import { ArrowRight, Building2, Info, UserRound } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { financeConfig as config } from '@/lib/demo-fixtures';
import { formatMoney, getNeed, monthlyPayment, principalFromPayment } from '@/lib/finance';
import type { LeadRequest } from './lead-dialog';

export function FinanceCalculator({onApply}:{onApply:(request:LeadRequest)=>void}) {
  const [mode,setMode]=useState<'amount'|'monthly'>('amount');
  const [kind,setKind]=useState<'individual'|'business'>('individual');
  const [price,setPrice]=useState('1000000');const [deposit,setDeposit]=useState('400000');
  const [budget,setBudget]=useState('25000');const [term,setTerm]=useState<number>(config.defaultTerm);
  const need=price!==''&&deposit!==''?getNeed(Number(price),Number(deposit)):null;
  const principal=mode==='amount'?need:principalFromPayment(Number(budget),config.monthlyRate,term);
  const valid=principal!==null&&principal>0&&principal<=config.maxPrincipal;
  const payment=valid?monthlyPayment(principal,config.monthlyRate,term):null;
  return <section id="hesaplama" className="calculator shell" aria-labelledby="calculator-title">
    <div className="calculator-heading"><div><span className="section-kicker">Bütçenize bir yol çizelim</span><h2 id="calculator-title">Önce hesaplayın.<br/><span>Sonra birlikte değerlendirelim.</span></h2></div><div className="segment" role="group" aria-label="Başvuru tipi"><button aria-pressed={kind==='individual'} onClick={()=>setKind('individual')}><UserRound size={17}/>Bireysel</button><button aria-pressed={kind==='business'} onClick={()=>setKind('business')}><Building2 size={17}/>Ticari</button></div></div>
    <div className="calculator-body"><div className="calculator-controls"><div className="calc-modes" role="group" aria-label="Hesaplama yöntemi"><button aria-pressed={mode==='amount'} onClick={()=>setMode('amount')}>Kredi tutarıyla</button><button aria-pressed={mode==='monthly'} onClick={()=>setMode('monthly')}>Aylık taksitle</button></div>
      <div className="calculator-fields">{mode==='amount'?<><div className="money-field"><label htmlFor="budget-price">Araç fiyatı</label><div className="currency-field"><Input id="budget-price" type="number" inputMode="numeric" min="1" max={config.maxPrincipal} value={price} onChange={e=>setPrice(e.target.value)}/><span>TL</span></div><div className="amount-chips" aria-label="Örnek araç tutarları">{[750000,1000000,1500000].map(v=><button key={v} aria-pressed={Number(price)===v} onClick={()=>setPrice(String(v))}>{formatMoney(v)}</button>)}</div></div><div className="money-field"><label htmlFor="budget-deposit">Ayırdığınız peşinat</label><div className="currency-field"><Input id="budget-deposit" type="number" inputMode="numeric" min="0" max={price} value={deposit} onChange={e=>setDeposit(e.target.value)}/><span>TL</span></div><Slider className="budget-slider" aria-label="Peşinat oranı" min={0} max={100} step={5} value={[Number(price)>0?Math.min(100,Math.max(0,Number(deposit)/Number(price)*100)):0]} onValueChange={v=>setDeposit(String(Math.round(Number(price)*v[0]/100)))}/><div className="range-labels"><span>Peşinatsız</span><span>Tamamı peşin</span></div></div></>:<div className="money-field"><label htmlFor="monthly-budget">Aylık bütçeniz</label><div className="currency-field"><Input id="monthly-budget" type="number" inputMode="numeric" min="1" value={budget} onChange={e=>setBudget(e.target.value)}/><span>TL</span></div><div className="amount-chips">{[15000,25000,40000].map(v=><button key={v} onClick={()=>setBudget(String(v))} aria-pressed={Number(budget)===v}>{formatMoney(v)}</button>)}</div><p className="field-hint">Aylık bütçenizden yaklaşık kredi tutarına ulaşın.</p></div>}</div>
      <fieldset className="term-picker"><legend>Örnek vade</legend><div>{config.terms.map(v=><button key={v} aria-pressed={term===v} onClick={()=>setTerm(v)}>{v} ay</button>)}</div><p className="field-hint">Bu seçenekler kredi uygunluğu veya yasal vade sınırı değildir.</p></fieldset>
      {!valid&&<p className="input-error" role="alert">{mode==='amount'?'Pozitif bir araç fiyatı ve fiyatı aşmayan bir peşinat girin. Kredi ihtiyacı sıfırdan büyük olmalıdır.':'Pozitif bir aylık bütçe girin. Hesaplanan kredi tutarı 100 milyon TL’yi aşamaz.'}</p>}
    </div><div className="calculator-result" aria-live="polite"><span>{mode==='amount'?'Örnek aylık taksit':'Yaklaşık kredi tutarı'}</span><strong>{valid?formatMoney(mode==='amount'?payment!:principal!):'—'} <small>TL</small></strong><span className="result-badge">{term} ay · aylık %2,58 varsayımı</span><dl><div><dt>{mode==='amount'?'Finansman ihtiyacı':'Aylık taksit'}</dt><dd>{valid?formatMoney(mode==='amount'?principal!:payment!):'—'} TL</dd></div><div><dt>Toplam geri ödeme</dt><dd>{payment?formatMoney(payment*term):'—'} TL</dd></div></dl><Button className="kc-button kc-button-blue" disabled={!valid} onClick={()=>onApply({mode:'apply',type:kind,...(mode==='amount'?{price:Number(price),deposit:Number(deposit)}:{}),principal:principal!,monthly:payment!,term,calculationMode:mode})}>Başvuruya devam et <ArrowRight/></Button><p>Ödeme simülasyonu; banka teklifi veya kredi onayı değildir.</p></div></div>
    <div className="calculator-foot"><Info size={18}/><p>{config.included} Bireysel ve ticari hesaplar aynı örnek modele dayanır. Gerçek koşulları danışmanınızla değerlendirin.</p></div>
  </section>;
}
