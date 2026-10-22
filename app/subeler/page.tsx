import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { Breadcrumb } from '@/components/breadcrumb';
import { BranchExplorer } from '@/components/branch-explorer';
import { branches } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Şubelerimiz','Adana, Mersin, Osmaniye ve Mardin Kızıltepe KrediCars şubelerinin adreslerini ve ekiplerini keşfedin.','/subeler/');
export default function Page(){return <PageShell><div className="shell inner-page"><Breadcrumb items={[{label:'Şubelerimiz'}]}/><header className="page-heading"><span className="section-kicker">Dört şehirde, aynı yaklaşım</span><h1>Size yakın<br/><span>bir ekip var.</span></h1><p>İlk görüşmeyi bulunduğunuz yerden başlatın.<br/>Yüz yüze konuşmak isterseniz şubenizi seçin.</p></header><BranchExplorer/><div className="branch-list">{branches.map(b=><article key={b.id}><span className="section-kicker">{b.city}</span><h2>{b.name}</h2><p>{b.intro}</p><address>{b.address}</address><Link className="text-cta" href={'/subeler/'+b.slug+'/'}>Şubeyi tanıyın <ArrowRight size={17}/></Link></article>)}</div></div></PageShell>;}
