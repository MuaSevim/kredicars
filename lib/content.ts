export const phone = '0542 401 4004';
export const phoneHref = 'tel:+905424014004';
const branchRecords = [
  {id:'adana',city:'Adana',name:'Adana Merkez',address:'Yeşiloba Mahallesi 46120 Sk. No:13 18/A, Seyhan / Adana',lat:36.9914,lon:35.3308},
  {id:'mersin',city:'Mersin',name:'Mersin',address:'Aydınlıkevler Mh. GMK Bulvarı No:446/A, Yenişehir / Mersin',lat:36.7872,lon:34.5550},
  {id:'osmaniye',city:'Osmaniye',name:'Osmaniye',address:'Raufbey Mah. 9546 Sk. 5. Noter Sokağı No:48/C, Merkez / Osmaniye',lat:37.0745,lon:36.2464},
  {id:'mardin',city:'Mardin',name:'Mardin / Kızıltepe',address:'İpekyolu No:79/A, Kızıltepe / Mardin',lat:37.1933,lon:40.5850},
] as const;
export type ContentStatus='source'|'company-statement'|'archived'|'demo'|'draft';
const localIntroductions:Record<string,string>={
  adana:'Seyhan’daki merkez ekibimizle taşıt finansmanı sürecinizi konuşun. Koordinasyon, kredi ve sigorta ekipleri aynı şehirde yanınızda.',
  mersin:'Yenişehir, GMK Bulvarı üzerindeki ekibimizle tanışın. Mersin şubesinin kredi ve saha satış kadrosuyla ihtiyacınızı yüz yüze değerlendirebilirsiniz.',
  osmaniye:'Raufbey Mahallesi’ndeki şubemizde, Osmaniye ekibimizle görüşün. Kredi danışmanınız ve saha ekibinizle sonraki adımlarınızı netleştirin.',
  mardin:'Kızıltepe, İpekyolu üzerindeki şubemiz Güneydoğu Anadolu saha ekibine ev sahipliği yapıyor. İlk görüşmeyi uzaktan da başlatabilirsiniz.',
};
export const branches=branchRecords.map((b,order)=>({...b,slug:b.id,order,phone,phoneHref,intro:localIntroductions[b.id],coordinateAccuracy:'city' as const,source:'KrediCars mevcut şube verisi',status:'source' as const}));
export type Branch=typeof branches[number];
const teamRecords = [
  {name:'Ferhat Tek',role:'Genel Koordinatör',branch:'merkez',image:'ferhat-tek-1783438769.webp'},
  {name:'Şükran Sevim Demirtaş',role:'Sigorta Müdürü',branch:'adana',image:'sukran-sevim-demirtas-1783504168.webp'},
  {name:'Hakkıcan Benzer',role:'Adana Şube Yöneticisi',branch:'adana',image:'hakkican-benzer-1783500872.webp'},
  {name:'Merve İşler',role:'Kredi Danışmanı',branch:'adana',image:'merve-isler-1783501274.webp'},
  {name:'Simge Uçar',role:'Kredi Danışmanı',branch:'adana',image:'simge-ucar-1783501392.webp'},
  {name:'Soner Uçar',role:'Saha Satış Yöneticisi',branch:'adana',image:'soner-ucar-1783501531.webp'},
  {name:'Şenel Çağımnı',role:'Sigorta Teknik Personeli',branch:'adana',image:'senel-cagimni-1783501678.webp'},
  {name:'İlayda Şimşek',role:'Sigorta Teknik Personeli',branch:'adana',image:'ilayda-simsek-1783501777.webp'},
  {name:'Melike Dilki',role:'Muhasebe ve İdari İşler',branch:'adana',image:'melike-dilki-1783502041.webp'},
  {name:'Yelda Dönmez',role:'Mersin Şube Yöneticisi',branch:'mersin',image:'yelda-donmez-1783502197.webp'},
  {name:'Büşra Nur Eriş',role:'Kredi Danışmanı',branch:'mersin',image:'busra-nur-eris-1783586569.webp'},
  {name:'Selçuk Esin',role:'Saha Satış Müdürü',branch:'mersin',image:'selcuk-esin-1783502715.webp'},
  {name:'Bilal Ural',role:'Saha Satış Yöneticisi',branch:'mersin',image:'bilal-ural-1783502783.webp'},
  {name:'Mehmet Alaoğlu',role:'Osmaniye Şube Yöneticisi',branch:'osmaniye',image:'mehmet-alaoglu-1783503087.webp'},
  {name:'Burak Çankaya',role:'Saha Satış Yöneticisi',branch:'osmaniye',image:'burak-cankaya-1783503151.webp'},
  {name:'Gamze Sağlamer',role:'Kredi Danışmanı',branch:'osmaniye',image:'gamze-saglamer-1783503429.webp'},
  {name:'Abdullah Urtekin',role:'Güneydoğu Anadolu Saha Satış Yöneticisi',branch:'mardin',image:'abdullah-urtekin-1783503336.webp'},
];
export const team=teamRecords.map((p,order)=>({...p,id:p.image.replace(/-\d+\.webp$/,''),order,source:'KrediCars mevcut ekip arşivi',status:'source' as const}));
export const featuredTeam=['Ferhat Tek','Şenel Çağımnı','Selçuk Esin','Simge Uçar'].map(name=>team.find(p=>p.name===name)!);
export const companyStatements={source:'Şirketin sunum için sağladığı beyan',status:'company-statement' as const,experience:'30+',experienceLabel:'Sevim Otomotiv’in yıllık tecrübesi',customers:'80 bin',customersLabel:'Son beş yılda müşteri',institutions:'16',institutionsLabel:'Banka / finans kuruluşuyla çalışma'};
export const partners=[
  {id:'kocfinans',name:'Koçfinans',image:'/partners/kocfinans.webp'},
  {id:'quick-finans',name:'Quick Finans',image:'/partners/quick-finans.webp'},
  {id:'n-kolay',name:'N Kolay',image:'/partners/n-kolay.svg'},
  {id:'turkiye-finans',name:'Türkiye Finans',image:'/partners/turkiye-finans.webp'},
  {id:'burgan-bank',name:'Burgan Bank',image:'/partners/burgan-bank.webp'},
  {id:'sekerbank',name:'Şekerbank',image:'/partners/sekerbank.webp'},
  {id:'teb-cetelem',name:'TEB Cetelem',image:'/partners/teb-cetelem.svg'},
  {id:'vakif-katilim',name:'Vakıf Katılım',image:'/partners/vakif-katilim.svg'},
].map((p,order)=>({...p,order,source:'Şirketin sağladığı brands/ logo arşivi',status:'source' as const}));
export const testimonials=[
  {id:'samet',title:'Samet Bey’in deneyimi',image:'/stories/samey.webp',videoId:'jJSbWa59-D4',source:'https://www.youtube.com/watch?v=jJSbWa59-D4',city:null,quote:null},
  {id:'archive-2',title:'Müşteri arşivinden',image:'/stories/customer-2.webp',videoId:null,source:'https://www.kredicars.com/mutlu_musteriler/musteri-1783679999.jpeg',city:null,quote:null},
  {id:'archive-3',title:'Birlikte olduğumuz anlar',image:'/stories/customer-3.webp',videoId:null,source:'https://www.kredicars.com/mutlu_musteriler/musteri-1783680017.jpeg',city:null,quote:null},
  {id:'archive-4',title:'KrediCars müşteri arşivi',image:'/stories/customer-4.webp',videoId:null,source:'https://www.kredicars.com/mutlu_musteriler/musteri-1783680042.jpeg',city:null,quote:null},
].map((t,order)=>({...t,order,status:'source' as const}));
export const awards=[
  {id:'koc-2023-tr',title:'Türkiye 1.si',year:2023,issuer:'Koçfinans',category:'İkinci el kredi adedi',scope:'Türkiye',file:'kocfinans/2023-yili-kocfinans-turkiye-ikinci-el-kredi-adedi-1-si',source:'https://www.kredicars.com/odul_sertifika/2023-yili-kocfinans-turkiye-ikinci-el-kredi-adedi-1-si-1783678681.jpeg'},
  {id:'quick-2026',title:'Kredi adedinin yıldızı',year:2026,issuer:'Quick Finans',category:'İkinci el kredi adedi',scope:'Belgede bölge belirtilmiyor',file:'quick-finans/2026-yili-quick-finans-2-el-kredi-adedinin-yildizi',source:'https://www.kredicars.com/odul_sertifika/2026-yili-quick-finans-2-el-kredi-adedinin-yildizi-1783678761.jpeg'},
  {id:'koc-2023-region',title:'Akdeniz Bölgesi 1.si',year:2023,issuer:'Koçfinans',category:'İkinci el kredi adedi',scope:'Akdeniz Bölgesi',file:'kocfinans/2023-yili-kocfinans-akdeniz-bolgesi-ikinci-el-kredi-adedi-1-si',source:'https://www.kredicars.com/odul_sertifika/2023-yili-kocfinans-akdeniz-bolgesi-ikinci-el-kredi-adedi-1-si-1783678630.jpeg'},
  {id:'koc-2022-region',title:'Akdeniz Bölgesi 1.si',year:2022,issuer:'Koçfinans',category:'İkinci el kredi adedi',scope:'Akdeniz Bölgesi',file:'kocfinans/2022-yili-kocfinans-akdeniz-bolgesi-ikinci-el-kredi-adedi-1-si',source:'https://www.kredicars.com/odul_sertifika/2022-yili-kocfinans-akdeniz-bolgesi-ikinci-el-kredi-adedi-1-si-1783678538.jpeg'},
  {id:'koc-2022-tr',title:'Türkiye 3.sü',year:2022,issuer:'Koçfinans',category:'İkinci el kredi adedi',scope:'Türkiye',file:'kocfinans/2022-yili-kocfinans-turkiye-ikinci-el-kredi-adedi-3-su',source:'https://www.kredicars.com/odul_sertifika/2022-yili-kocfinans-turkiye-ikinci-el-kredi-adedi-1-si-1783678563.jpeg'},
  {id:'quick-2023',title:'Quick Finans ödülü',year:2023,issuer:'Quick Finans',category:'Kurum ödülü · kategori kaynakta belirtilmiyor',scope:'Belgede bölge belirtilmiyor',file:'quick-finans/2023-yili-quick-finans-odulu',source:'https://www.kredicars.com/odul_sertifika/2023-yili-quick-finans-odulu-1783678721.jpeg'},
].map((a,order)=>({...a,image:'/awards/oduller/'+a.file+'.webp',order,status:'source' as const}));
export { campaigns } from './demo-fixtures';
export { articles } from './articles';
export const faqs = [
  ['KrediCars doğrudan kredi mi veriyor?','KrediCars, banka ve finans kuruluşlarının taşıt kredisi seçeneklerini değerlendirmenize ve başvuru sürecini takip etmenize yardımcı olur. Kredi onayı ve koşullarını ilgili finans kuruluşu belirler.'],
  ['Aracımı henüz seçmedim. Başlayabilir miyim?','Evet. Önce bütçenizi ve ihtiyacınızı konuşabiliriz. Başvuruda “Henüz araç seçmedim” seçeneğini kullanın; araç bilgilerini sonra netleştirelim.'],
  ['İlk aşamada hangi bilgiler gerekiyor?','İlk görüşme talebi için adınız ve telefonunuz yeterli. Araç seçtiyseniz fiyatını ve peşinatınızı da ekleyebilirsiniz. Kimlik ve diğer belgeler, ilgili kurumun başvuru sürecinde ayrıca istenebilir.'],
   ['Ne kadar kredi kullanabilirim?','Kullanılabilecek tutar ve vade; araç özellikleri, başvuru türü, güncel koşullar ve finans kuruluşunun değerlendirmesine bağlıdır. Hesaplayıcı, görünür varsayımlarla örnek bir ödeme planı gösterir; kredi limiti veya teklif değildir.'],
  ['Başka bir şehirden iletişime geçebilir miyim?','Evet. Türkiye’nin her yerinden ilk görüşmeyi başlatabilirsiniz. Doğrulama, belge ve araç işlemlerinin nasıl ilerleyeceğini ekibimiz sizinle paylaşır.'],
  ['Sonuç ne zaman belli olur?','Değerlendirme süresi kuruma ve başvurunuzun bilgilerine göre değişir. Ekibimiz gelişmeleri takip eder ve sizi bilgilendirir. Belirli bir süre veya onay garantisi verilmez.'],
];
export const helpTopics=[
  {question:'Ne kadar kredi kullanabilirim?',faqIndex:3},
  {question:'Hangi bilgiler gerekiyor?',faqIndex:2},
  {question:'Aracımı henüz seçmedim.',faqIndex:1},
  {question:'Şubeye gelmem gerekir mi?',faqIndex:4},
  {question:'Bir danışmanla görüşmek istiyorum.',faqIndex:null},
];
