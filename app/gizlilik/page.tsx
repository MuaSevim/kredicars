import { PageShell } from '@/components/page-shell';
import { Breadcrumb } from '@/components/breadcrumb';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Gizlilik ve Aydınlatma Taslağı','Sunum sürümü için gizlilik ve aydınlatma metni taslak alanı.','/gizlilik/');
export default function Page(){return <PageShell><div className="shell inner-page"><Breadcrumb items={[{label:'Gizlilik ve aydınlatma'}]}/><header className="page-heading"><span className="section-kicker">İçerik taslağı</span><h1>Gizlilik ve<br/><span>aydınlatma.</span></h1><p>Şirketin onaylı hukuki metinleri bu alana eklenecektir.</p></header><div className="archive-note"><h2>Sunum sürümü</h2><p>Bu sürümdeki formlar bilgilerinizi bir sunucuya göndermez veya kalıcı olarak kaydetmez. Gerçek başvuru ve kredi onayı alınmaz. Örnek bilgilerle deneyebilirsiniz.</p></div></div></PageShell>;}
