import { CalendarDays,Clock3,BookOpen } from 'lucide-react';
import type { Article } from '@/lib/articles';
export function ArticleByline({article,compact=false}:{article:Article;compact?:boolean}){
 const words=article.sections.flatMap(s=>[s.heading,...s.paragraphs]).join(' ').trim().split(/\s+/).length;
 const minutes=Math.max(1,Math.ceil(words/200));
 return <div className={'article-byline '+(compact?'compact':'')}><span><BookOpen size={15}/>KrediCars kaynak arşivi</span><span><CalendarDays size={15}/>{article.date?<time dateTime={article.date}>{new Intl.DateTimeFormat('tr-TR',{dateStyle:'long'}).format(new Date(article.date))}</time>:'Yayın tarihi belirtilmemiş'}</span><span><Clock3 size={15}/>{minutes} dk okuma</span>{!compact&&<small>Bireysel yazar kaynakta belirtilmemiştir.</small>}</div>;
}
