import { PageShell } from '@/components/page-shell';
import { Breadcrumb } from '@/components/breadcrumb';
import { Awards } from '@/components/awards';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Ödül Arşivi','KrediCars tarafından yayımlanan Koçfinans ve Quick Finans şirket ödül belgeleri; yıl, kategori ve kapsam bilgileri.','/oduller/');
export default function Page(){return <PageShell><div className="shell inner-page"><Breadcrumb items={[{label:'Ödül arşivi'}]}/><header className="page-heading"><span className="section-kicker">Belgelere dayanan bir birikim</span><h1>İş birliklerinin<br/><span>yıllara yayılan izi.</span></h1><p>KrediCars’ın yayımladığı şirket ödül arşivinden altı belge.<br/>Bölgesel ve Türkiye derecelerini kendi kapsamlarıyla keşfedin.</p></header><p className="archive-note award-disclosure">Belgelerdeki alıcı unvanı Cansevim Otomotiv’dir. Bu sayfa KrediCars’ın yayımladığı şirket arşivini gösterir; ödüller KrediCars markasının kuruluş tarihi olarak yorumlanmamalıdır. Kaynaktaki görselsiz ödül ve sertifika kayıtları dahil edilmemiştir.</p><Awards/></div></PageShell>;}
