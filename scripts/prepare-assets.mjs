import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const sharp=require(require.resolve('sharp',{paths:[require.resolve('next/package.json')]}));
const parent=path.resolve('..');
async function optimize(source,target,width){await fs.mkdir(path.dirname(target),{recursive:true});await sharp(source).rotate().resize({width,withoutEnlargement:true}).webp({quality:84}).toFile(target);}
for(const name of ['car','forum','key','pin'])await optimize(path.join(parent,'design',`illustration-${name}.png`),`public/design/illustration-${name}.webp`,name==='car'?700:360);
await optimize(path.join(parent,'design/illustration-car-body.png'),'public/design/illustration-car-body.webp',900);
await fs.mkdir('public/design',{recursive:true});
await sharp(path.join(parent,'design/illustration-car-wheel.png')).trim().resize(210,210).webp({quality:88}).toFile('public/design/illustration-car-wheel.webp');
const awards=JSON.parse(await fs.readFile(path.join(parent,'awards/awards.json'),'utf8'));
for(const a of awards.filter(a=>a.image&&!a.placeholder_on_site))await optimize(path.join(parent,a.image),'public/'+a.image.replace(/\.jpeg$/,'.webp'),1000);
for(const [src,target] of [['kocfinans-logo.png','kocfinans'],['quick-finans.png','quick-finans'],['turkiye-finans.png','turkiye-finans'],['burgan-bank.png','burgan-bank'],['sekerbank.png','sekerbank']])await optimize(path.join(parent,'brands',src),`public/partners/${target}.webp`,300);
for(const name of ['n-kolay','teb-cetelem','vakif-katilim'])await fs.copyFile(path.join(parent,'brands',name+'.svg'),'public/partners/'+name+'.svg');
console.log('Illustrations, six documented awards and selected institution assets prepared. Originals unchanged.');
