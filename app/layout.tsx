import type { Metadata } from 'next';
import './globals.css';
import './demo.css';
import './presentation.css';
import localFont from 'next/font/local';
import { indexable } from '@/lib/seo';
const manrope=localFont({src:'../public/fonts/manrope.ttf',variable:'--font-manrope',weight:'200 800',display:'swap'});
export const metadata: Metadata = {title:{default:'KrediCars — Taşıt finansmanında netlik',template:'%s | KrediCars'},description:'Taşıt kredisi seçeneklerini tek bir ekiple değerlendirin.',robots:{index:indexable,follow:indexable},icons:{icon:'/brand/icon.png'}};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="tr" className={manrope.variable}><body>{children}<noscript><style>{'[style*="opacity:0"]{opacity:1!important;transform:none!important}'}</style><div className="no-script-notice">Başvuru adımları için JavaScript gereklidir. Ekibimize <a href="tel:+905424014004">0542 401 4004</a> numarasından ulaşabilirsiniz.</div></noscript></body></html>; }
