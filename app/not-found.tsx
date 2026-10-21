import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export default function NotFound(){return <main className="not-found-page"><Link href="/" aria-label="KrediCars ana sayfa"><Image src="/brand/logo.png" alt="KrediCars" width={175} height={42}/></Link><span>404</span><h1>Bu sayfaya ulaşamadık.</h1><p>Bağlantı değişmiş olabilir. Ana sayfadan devam edebilirsiniz.</p><Link className="kc-button kc-button-blue" href="/">Ana sayfaya dön<ArrowRight size={17}/></Link></main>;}
