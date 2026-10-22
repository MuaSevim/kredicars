import { PageShell } from '@/components/page-shell';
import { Breadcrumb } from '@/components/breadcrumb';
import { BlogList } from '@/components/blog-list';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Rehber & Blog','Taşıt finansmanı, başvuru süreci ve sigorta hakkında KrediCars kaynak arşivinden rehber yazılar.','/blog/');
export default function Page(){return <PageShell><div className="shell inner-page"><Breadcrumb items={[{label:'Rehber & blog'}]}/><header className="page-heading"><span className="section-kicker">Karar verirken yanınızda</span><h1>Biraz bilgi,<br/><span>daha fazla netlik.</span></h1><p>Taşıt finansmanı ve otomobil dünyasına dair kaynak arşivimiz.<br/>Arşiv yazılarındaki koşullar güncel teklif değildir.</p></header><BlogList/></div></PageShell>;}
