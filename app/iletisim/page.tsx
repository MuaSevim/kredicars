import Link from 'next/link';
import { PageShell } from '@/components/page-shell';
import { Breadcrumb } from '@/components/breadcrumb';
import { branches,phone,phoneHref } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('İletişim','KrediCars ekibine telefon veya e-posta ile ulaşın. Adana, Mersin, Osmaniye ve Kızıltepe şubelerini keşfedin.','/iletisim/');
export default function Page(){return <PageShell><div className="shell inner-page"><Breadcrumb items={[{label:'İletişim'}]}/><header className="page-heading"><span className="section-kicker">Ekranın diğer tarafında gerçek insanlar</span><h1>Birlikte<br/><span>konuşalım.</span></h1><p>Aracı seçmiş olmanız veya tüm yanıtları biliyor olmanız gerekmiyor.<br/>Bütçenizden ve aklınızdaki sorudan başlayalım.</p></header><div className="contact-grid"><a href={phoneHref}><span>Telefon</span><strong>{phone}</strong><p>Doğrudan ekibimize ulaşın.</p></a><a href="mailto:info@kredicars.com"><span>E-posta</span><strong>info@kredicars.com</strong><p>Sorunuzu bizimle paylaşın.</p></a></div><div className="branch-list">{branches.map(b=><article key={b.id}><h2>{b.name}</h2><address>{b.address}</address><Link className="text-cta" href={'/subeler/'+b.slug+'/'}>Ekibi ve yol tarifini görün →</Link></article>)}</div></div></PageShell>;}
