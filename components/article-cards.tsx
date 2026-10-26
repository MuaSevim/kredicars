import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Article } from '@/lib/articles';
import { ArticleByline } from './article-byline';
export function ArticleCards({items}:{items:Article[]}) {return <div className="article-grid">{items.map(a=><article key={a.id} className="article-card"><Link href={'/blog/'+a.slug+'/'}><div className="article-cover"><img src={a.image} alt={a.title} width="700" height="440" loading="lazy"/></div><div className="article-meta"><span>{a.category}</span><span>Arşiv</span></div><h3>{a.title}</h3><p>{a.description.replace(/^Arşiv: /,'')}</p><ArticleByline article={a} compact/><span className="text-cta">Yazıyı okuyun <ArrowUpRight size={17}/></span></Link></article>)}</div>;}
