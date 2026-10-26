import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { articles,awards,branches,featuredTeam,partners,testimonials,team } from '../lib/content';
test('all published local images exist and dynamic slugs are unique',()=>{
 for(const item of [...articles,...awards,...partners,...testimonials])assert.ok(existsSync('public'+item.image),item.image);
 for(const person of team)assert.ok(existsSync('public/team/'+person.image),person.image);
 for(const list of [articles,branches])assert.equal(new Set(list.map(x=>x.slug)).size,list.length);
 assert.ok(!articles.some(a=>a.slug==='tumunu-gor'));
});
test('presentation team order, documented awards and unknown city relationships remain honest',()=>{
 assert.deepEqual(featuredTeam.map(p=>p.name),['Ferhat Tek','Şenel Çağımnı','Selçuk Esin','Simge Uçar']);
 assert.equal(awards.length,6);assert.equal(awards.find(a=>a.id==='koc-2022-tr')?.title,'Türkiye 3.sü');
 assert.ok(testimonials.every(t=>t.city===null&&t.quote===null));
 assert.ok(branches.every(b=>b.coordinateAccuracy==='city'));
 assert.ok(articles.every(a=>a.date===null&&a.status==='archived'));
});
