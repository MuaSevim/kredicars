import type { MetadataRoute } from 'next';
import { indexable,siteUrl } from '@/lib/seo';
import { branches } from '@/lib/content';
import { articles } from '@/lib/articles';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap {if(!indexable||!siteUrl)return [];return ['/','/ekibimiz/','/subeler/','/blog/','/oduller/','/iletisim/',...branches.map(b=>'/subeler/'+b.slug+'/'),...articles.map(a=>'/blog/'+a.slug+'/')].map(path=>({url:siteUrl+path}));}
