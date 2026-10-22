import type { Metadata } from 'next';
const configured=process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl=(()=>{try{const url=new URL(configured??'');return url.protocol==='https:'&&!['localhost','127.0.0.1'].includes(url.hostname)?url.origin:null;}catch{return null;}})();
export const indexable=process.env.SITE_INDEXABLE==='true'&&!!siteUrl;
export function pageMetadata(title:string,description:string,path:string):Metadata {
 return {title,description,robots:{index:indexable,follow:indexable},...(siteUrl?{alternates:{canonical:siteUrl+path},openGraph:{title,description,url:siteUrl+path,siteName:'KrediCars',locale:'tr_TR',type:'website'}}:{})};
}
export function jsonLd(value:unknown){return JSON.stringify(value).replace(/</g,'\\u003c');}
