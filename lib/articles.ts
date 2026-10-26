export type Article = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string | null;
  source: string;
  status: 'archived';
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

// Sources: ../blog/blog.json and each article's ../blog/<slug>/index.md.
// All source dates are null; years mentioned in the text are not publication dates.
// Copy is an editorial, plain-text adaptation, not a current financial offer.
// Source cover files remain untouched; image paths point to optimized WebP copies.
export const articles: Article[] = [
  {
    id: 'vergi-levhali-musteriler-pesinat-odemeden-arac-sahibi-olabilirler',
    slug: 'vergi-levhali-musteriler-pesinat-odemeden-arac-sahibi-olabilirler',
    title: 'Vergi Levhalı Müşteriler İçin Araç Finansmanı',
    description: 'Arşiv: Esnaf, şahıs firmaları ve şirketlerin araç finansmanı hakkında eski bir tanıtımın koşullu, sadeleştirilmiş özeti.',
    image: '/articles/vergi-levhali-musteriler-pesinat-odemeden-arac-sahibi-olabilirler.webp',
    category: 'Araç Finansmanı',
    date: null,
    source: 'https://www.kredicars.com/blog/vergi-levhali-musteriler-pesinat-odemeden-arac-sahibi-olabilirler',
    status: 'archived',
    sections: [
      {
        heading: 'Arşiv notu',
        paragraphs: [
          'Arşiv içeriği; koşullar güncel teklif değildir. Kaynakta yayın tarihi bulunmuyor. Metin, geçmişte yayımlanan bir finansman tanıtımından sadeleştirilmiştir.',
        ],
      },
      {
        heading: 'Kaynak yazının konusu',
        paragraphs: [
          'Yazı, vergi levhası bulunan esnaf, şahıs firmaları ve şirket sahiplerinin araç finansmanı arayışını ele alıyordu. İkinci el araç alımı ve peşinat ihtiyacı, tanıtımın temel konularıydı.',
          'Özgün başlıktaki peşinatsız araç edinme ifadesi bir kampanya iddiasıdır; vergi levhasına sahip olmak tek başına finansmana hak kazanıldığı anlamına gelmez. Bu arşiv kaydı, peşinatsız finansman ürününün bugün sunulduğunu doğrulamaz.',
        ],
      },
      {
        heading: 'Geçmiş vaatler nasıl okunmalı?',
        paragraphs: [
          'Kaynak metindeki bir dakikada başvuru, on beş dakikada onay, 17 banka ve araç yaşından bağımsız finansman ifadeleri güncel hizmet koşulları olarak aktarılmamıştır. Belirli bir kurum sayısı, değerlendirme süresi veya olumlu sonuç garanti edilmez.',
          'Bir araç için finansman düşünülürken istenen belgeler, araç uygunluğu, peşinat ve ödeme planı ilgili finans kuruluşundan doğrulanmalıdır. Kullanılabilecek tutar ve onay kararı, başvuruya ve kurumun değerlendirmesine bağlıdır.',
        ],
      },
    ],
  },
  {
    id: 'sadece-kimlikle-arac-sahibi-olma-evraksiz-kefilsiz',
    slug: 'sadece-kimlikle-arac-sahibi-olma-evraksiz-kefilsiz',
    title: 'Kimlikle Başvuru ve Araç Finansmanı Süreci',
    description: 'Arşiv: Kimlikle ilk başvuru ile finans kuruluşunun belge, değerlendirme ve onay süreci arasındaki ayrım.',
    image: '/articles/sadece-kimlikle-arac-sahibi-olma-evraksiz-kefilsiz.webp',
    category: 'Başvuru Rehberi',
    date: null,
    source: 'https://www.kredicars.com/blog/sadece-kimlikle-arac-sahibi-olma-evraksiz-kefilsiz',
    status: 'archived',
    sections: [
      {
        heading: 'Arşiv notu',
        paragraphs: [
          'Arşiv içeriği; koşullar güncel teklif değildir. Yayın tarihi belirtilmeyen kaynak, kimlikle başvuru kolaylığını anlatan eski bir tanıtımdır. Başlık ve açıklama, evraksız ya da kefilsiz kredi garantisi vermemek için sadeleştirilmiştir.',
        ],
      },
      {
        heading: 'İlk başvuru ile kredi kullanımı aynı şey değildir',
        paragraphs: [
          'Kaynak yazı, araç almak isteyenlerin ilk başvuruyu kolay biçimde başlatmasını ve farklı ödeme seçeneklerini karşılaştırmasını konu ediniyordu. Sıfır ve ikinci el araçlar için bütçeye uygun bir ödeme planı seçmek, metnin ana fikriydi.',
          'Kimlik bilgileriyle bir ilk talep oluşturulması, kredinin yalnızca kimlikle kullandırılacağı anlamına gelmez. Finans kuruluşu değerlendirme sırasında gelir, kimlik, araç ve diğer başvuru belgelerini isteyebilir; kefil veya ek teminat gereksinimi de başvurunun koşullarına bağlıdır.',
        ],
      },
      {
        heading: 'Teklifleri karşılaştırırken',
        paragraphs: [
          'Yazıdaki 17 banka, bir dakikada işlem ve on beş dakikada teklif ifadeleri tarihsel tanıtım iddialarıdır. Bu rakamlar ve süreler, bugün geçerli bir banka ağı, hizmet taahhüdü veya onay garantisi olarak kullanılmamalıdır.',
          'Araç yaşının her durumda önemsiz olduğu ve finansmana anında ulaşılacağı iddiaları da çıkarılmıştır. Karar vermeden önce aracın uygunluğunu, vade ve ödeme planını, istenen belgeleri ve toplam geri ödemeyi ilgili kurumun güncel teklifi üzerinden inceleyin.',
        ],
      },
    ],
  },
  {
    id: 'en-uygun-tasit-kredisi',
    slug: 'en-uygun-tasit-kredisi',
    title: 'Taşıt Kredisi Tekliflerini Karşılaştırmak',
    description: 'Arşiv: Taşıt kredisi seçerken faiz, ödeme planı ve bütçe uyumunu birlikte değerlendirmeye ilişkin kaynak özeti.',
    image: '/articles/en-uygun-tasit-kredisi.webp',
    category: 'Araç Finansmanı',
    date: null,
    source: 'https://www.kredicars.com/blog/en-uygun-tasit-kredisi',
    status: 'archived',
    sections: [
      {
        heading: 'Arşiv notu',
        paragraphs: [
          'Arşiv içeriği; koşullar güncel teklif değildir. Kaynak yazının başlığı “En Uygun Taşıt Kredisi” idi; yayın tarihi belirtilmemiştir. Bu içerik en düşük faiz, tasarruf veya piyasanın en iyi teklifi taahhüt etmez.',
        ],
      },
      {
        heading: 'Karşılaştırmanın amacı',
        paragraphs: [
          'Kaynak, farklı bankaların taşıt kredisi koşullarının değişebileceğini ve araç alacak kişinin teklifleri birlikte değerlendirmesini öneriyordu. Sıfır veya ikinci el araç tercihiyle birlikte bütçeye uygun bir ödeme planı belirlemek üzerinde duruluyordu.',
          'Uygunluk yalnızca faiz oranına bakılarak belirlenmez. Aylık taksitin bütçeyle ilişkisi, vade, toplam geri ödeme ve teklife dahil masraflar birlikte incelenmelidir. Farklı tutar veya vadelerle hazırlanmış iki teklif doğrudan aynı koşulları temsil etmeyebilir.',
        ],
      },
      {
        heading: 'Kaynağın sınırları',
        paragraphs: [
          'Özgün metindeki tek başvuruyla 17 bankanın teklifine erişme ve saniyeler içinde analiz yapılması anlatımı geçmiş tanıtıma aittir. Güncel kurum sayısı, tüm bankalara erişim, otomatik analiz veya belirli sürede sonuç sözü verilmez.',
          'Danışmanlık desteği, teklifleri anlamayı ve başvuru sürecini takip etmeyi kolaylaştırabilir; ancak kredi kararını finans kuruluşu verir. Bir karşılaştırma yapmak, başvurunun kabul edileceği ya da herkes için aynı koşulların sunulacağı anlamına gelmez.',
        ],
      },
    ],
  },
  {
    id: 'tasit-kredisi-hizli-basvuru',
    slug: 'tasit-kredisi-hizli-basvuru',
    title: 'Taşıt Kredisi Başvurusu Nasıl Değerlendirilir?',
    description: 'Arşiv: Online ilk başvuru, teklif inceleme ve finans kuruluşunun onay süreci hakkında sadeleştirilmiş bilgi.',
    image: '/articles/tasit-kredisi-hizli-basvuru.webp',
    category: 'Başvuru Rehberi',
    date: null,
    source: 'https://www.kredicars.com/blog/tasit-kredisi-hizli-basvuru',
    status: 'archived',
    sections: [
      {
        heading: 'Arşiv notu',
        paragraphs: [
          'Arşiv içeriği; koşullar güncel teklif değildir. Tarihsiz kaynak, “Taşıt Kredisi Hızlı Başvuru” başlığıyla yayımlanmış bir tanıtımdır. Hız vurgusu, belirli bir sürede krediye erişim taahhüdü olarak okunmamalıdır.',
        ],
      },
      {
        heading: 'Başvurunun başlangıcı',
        paragraphs: [
          'Kaynak, bir online form aracılığıyla ilk talebin iletilmesini, sıfır veya ikinci el araç için ödeme seçeneklerinin incelenmesini ve süreç boyunca danışmanlık desteğini anlatıyordu. İlk iletişim ile kredi kullanımı birbirinden ayrı aşamalardır.',
          'Bir formun gönderilmesi, başvurunun bütün belgeleriyle tamamlandığını ya da onaylandığını göstermez. Araç ve başvuru sahibi hakkında ek bilgi istenebilir; doğrulama, belge ve işlem adımlarını ilgili finans kuruluşu belirler.',
        ],
      },
      {
        heading: 'Değerlendirme ve sonuç',
        paragraphs: [
          'Kaynağın 17 bankadan teklif, evraksız ve şubesiz bütün süreç, anında değerlendirme ve dakikalar içinde ön onay ifadeleri güncel vaat olarak korunmamıştır. Ön değerlendirme de nihai kredi onayıyla aynı değildir.',
          'Sonuç süresi, başvurunun bilgilerine ve kurumun değerlendirmesine bağlıdır. Karar vermeden önce ödeme planını ve teklif koşullarını incelemek; onay, kullandırım ve araç teslimi aşamalarının nasıl ilerleyeceğini ayrıca öğrenmek gerekir.',
        ],
      },
    ],
  },
  {
    id: 'senetle-arac-almanin-avantajlari',
    slug: 'senetle-arac-almanin-avantajlari',
    title: 'Senetle Araç Alırken Dikkat Edilecekler',
    description: 'Arşiv: Senetle araç alımı yazısından ekspertiz, ödeme planı ve sözleşme incelemesine ilişkin temel noktalar.',
    image: '/articles/senetle-arac-almanin-avantajlari.webp',
    category: 'Araç Alım Rehberi',
    date: null,
    source: 'https://www.kredicars.com/blog/senetle-arac-almanin-avantajlari',
    status: 'archived',
    sections: [
      {
        heading: 'Arşiv notu',
        paragraphs: [
          'Arşiv içeriği; koşullar güncel teklif değildir. Kaynak, “Senetle Araç Almanın Avantajları” başlıklı tarihsiz bir tanıtımdır. Burada bulunması, bugün senetle satış veya belirli bir finansman ürünü sunulduğunu göstermez.',
        ],
      },
      {
        heading: 'Araç ve ekspertiz',
        paragraphs: [
          'Kaynak yazı, araç fiyatlarının ve finansmana erişimin satın alma kararını zorlaştırabildiğini belirtiyor; alternatif ödeme yöntemlerini ele alıyordu. Korunan temel önerilerden biri, satın alınacak aracın mekanik ve kaporta durumunu incelemekti.',
          'Ödeme yöntemi ne olursa olsun, aracın durumunu ve ekspertiz bulgularını anlamak önemlidir. Finansman bulunması, aracın teknik olarak sorunsuz olduğu veya satın alma risklerinin ortadan kalktığı anlamına gelmez.',
        ],
      },
      {
        heading: 'Ödeme planı ve sözleşme',
        paragraphs: [
          'Metin, aylık taksitlerin ve toplam geri ödemenin açıkça belirlenmesini öneriyordu. Senet veya sözleşme imzalanmadan önce ödeme tarihleri, toplam borç ve tarafların yükümlülükleri okunmalı; anlaşılmayan maddeler için bağımsız hukuki görüş alınmalıdır.',
          'Senetle alım, banka kredisiyle aynı işlem değildir. Satış ve finansman modelinin kim tarafından sunulduğu, araç devrinin nasıl yapılacağı ve gecikmenin sonuçları yazılı koşullardan anlaşılmalıdır; yalnızca tanıtım metnine dayanarak karar verilmemelidir.',
        ],
      },
      {
        heading: 'Aktarılmayan hizmet vaatleri',
        paragraphs: [
          'Kaynakta yer alan 2006 ve üzeri tüm araçlara destek, sadece kimlikle başvuru, “Kredi Karnesi” hizmeti ve özel sigorta indirimleri güncel hizmet olarak doğrulanmamıştır. Bu ifadeler yerine ekspertiz ve ödeme planının açıklığına ilişkin genel bilgilendirme korunmuştur.',
        ],
      },
    ],
  },
  {
    id: 'trafik-sigortasi-neleri-kapsar',
    slug: 'trafik-sigortasi-neleri-kapsar',
    title: 'Trafik Sigortası Neleri Kapsar?',
    description: 'Arşiv: Trafik sigortası ile kasko arasındaki temel farklar; teminat ve limitler için poliçenin esas olduğu hatırlatması.',
    image: '/articles/trafik-sigortasi-neleri-kapsar.webp',
    category: 'Sigorta',
    date: null,
    source: 'https://www.kredicars.com/blog/trafik-sigortasi-neleri-kapsar',
    status: 'archived',
    sections: [
      {
        heading: 'Arşiv notu',
        paragraphs: [
          'Arşiv içeriği; koşullar güncel teklif değildir. Kaynak yazıda yayın tarihi bulunmuyor. Bu özet genel bilgilendirmedir; güncel teminat, limit, istisna ve hasar değerlendirmesi için mevzuat ve poliçe koşulları esas alınmalıdır.',
        ],
      },
      {
        heading: 'Üçüncü kişilere verilen zararlar',
        paragraphs: [
          'Kaynak, zorunlu mali sorumluluk sigortasının yalnızca bir trafik kontrolü yükümlülüğü olarak görülmemesi gerektiğini anlatıyordu. Trafik sigortasının temel konusu, aracın işletilmesi sırasında üçüncü kişilere verilen ve teminat kapsamında kalan maddi ve bedeni zararlara ilişkin sorumluluktur.',
          'Diğer araçlara veya mallara verilen zararlar ile yaralanma, sürekli sakatlık ve ölüm nedeniyle doğabilecek talepler kaynakta ayrı başlıklarla ele alınmıştı. Bir zararın nasıl karşılanacağı; olayın özelliklerine, kusur ve sorumluluk değerlendirmesine, yasal düzenlemelere ve teminat limitlerine bağlıdır.',
        ],
      },
      {
        heading: 'Trafik sigortası ile kasko aynı değildir',
        paragraphs: [
          'Kaynağın vurguladığı temel ayrım, trafik sigortasının sigortalı aracın kendi hasarını karşılamak için düzenlenmemesidir. Kasko ise sigortalı aracın çarpma, yanma veya çalınma gibi risklerini poliçesinde belirlenen kapsam ve istisnalarla ele alır.',
          'Bu nedenle iki ürünü aynı korumayı sağlıyor gibi karşılaştırmak doğru değildir. Kasko paketleri de birbirinin aynısı olmayabilir; teminatlar, muafiyetler, ek hizmetler ve istisnalar teklif üzerinden ayrı ayrı okunmalıdır.',
        ],
      },
      {
        heading: 'Teklif ve hasar sürecini doğrulamak',
        paragraphs: [
          'Eski yazı, Sevim Sigorta ile birlikte hizmet verilmesini ve hasar sürecinde destek sunulmasını tanıtıyordu. “En uygun fiyat garantisi”, bütün işlemlerin tek noktada tamamlanması ve bütçenin garantiye alınması gibi tanıtım ifadeleri güncel taahhüt olarak aktarılmamıştır.',
          'Teklif incelerken yalnızca fiyata değil, sigortacının sunduğu kapsam ve hizmet koşullarına da bakılmalıdır. Hasar anında hangi belgelerin gerektiği ve başvurunun nasıl yapılacağı poliçeyi düzenleyen kuruluş üzerinden öğrenilmelidir.',
        ],
      },
    ],
  },
  {
    id: 'ehliyetsiz-arac-kullanma-cezasi-2025',
    slug: 'ehliyetsiz-arac-kullanma-cezasi-2025',
    title: 'Ehliyetsiz Araç Kullanma Cezası 2025 — Arşiv',
    description: '2025 arşivi: Eski ceza yazısının tarihsel özeti. Tutarlar ve ödeme koşulları güncel hukuki bilgi olarak kullanılmamalıdır.',
    image: '/articles/ehliyetsiz-arac-kullanma-cezasi-2025.webp',
    category: 'Trafik ve Güvenlik',
    date: null,
    source: 'https://www.kredicars.com/blog/ehliyetsiz-arac-kullanma-cezasi-2025',
    status: 'archived',
    sections: [
      {
        heading: '2025 arşiv notu',
        paragraphs: [
          'Arşiv içeriği; koşullar güncel teklif değildir. Kaynak metin Kasım 2025 dönemine atıfta bulunuyor; ancak yayın tarihi kaydedilmemiştir. Aşağıdaki rakamlar yalnızca eski yazının ne söylediğini gösterir, doğrulanmış güncel ceza tarifesi değildir.',
        ],
      },
      {
        heading: 'Eski yazıda geçen ceza tutarları',
        paragraphs: [
          'Kaynak, sürücü belgesi olmadan araç kullanma için 18.678 TL, aracını ehliyetsiz kişiye veren araç sahibi için ayrıca aynı tutarda yaptırım aktarıyordu. İki yaptırımın birlikte uygulanması halinde 37.356 TL toplamından söz ediyordu. Bu tutarlar bugünkü bir olay için hesaplama amacıyla kullanılmamalıdır.',
          'Yazıda ehliyet sınıfına aykırı kullanım için 9.267 TL, süresi dolmuş belge için yaklaşık 3.755 TL ve belgeyi yanında bulundurmama için 2.167 TL rakamları da yer alıyordu. Farklı ihlallerin koşulları aynı değildir; geçerli belgeye sahip olmamak ile belge ibrazı konusundaki kurallar birbirine karıştırılmamalıdır.',
        ],
      },
      {
        heading: 'Ödeme indirimi hakkında uyarı',
        paragraphs: [
          'Kaynak yazı, 15 gün içinde ödeme ve yüzde 25 indirim ifadelerini kullanıyor; 18.678 TL üzerinden 14.008,50 TL hesabı yapıyordu. Süre ve indirim bilgileri bu arşivde güncel kural olarak onaylanmamaktadır.',
          'Bir cezanın tutarı, itiraz ve ödeme süreleri için ceza tutanağı, tebligat ve yetkili kamu kurumlarının güncel açıklamaları kontrol edilmelidir. Eski bir blog yazısı, resmi bildirim veya hukuki danışmanlık yerine geçmez.',
        ],
      },
      {
        heading: 'Sürüş güvenliği ve sigorta',
        paragraphs: [
          'Kaynağın ehliyetsiz kullanımda hiçbir sigortanın ödeme yapmayacağı şeklindeki genellemesi korunmamıştır. Üçüncü kişilere ödeme, sigortacının rücu hakkı ve kasko kapsamı farklı hukuki konulardır; olay, mevzuat ve poliçe şartları birlikte değerlendirilir.',
          'Yazıdan korunan temel güvenlik mesajı, araç kullanmadan önce geçerli ve uygun sınıfta sürücü belgesine sahip olmaktır. Kaynağın kapanışındaki finansman ve en uygun faiz tanıtımı bu bilgilendirmeye dahil edilmemiştir.',
        ],
      },
    ],
  },
  {
    id: 'menzil-kaygisina-son-veren-teknoloji-harikalari',
    slug: 'menzil-kaygisina-son-veren-teknoloji-harikalari',
    title: 'Elektrikli Araçlar ve Menzil Kaygısı — 2025 Arşivi',
    description: '2025 arşivi: Elektrikli araç örnekleri ve menzili etkileyen kullanım koşulları. Eski model verileri güncel karşılaştırma değildir.',
    image: '/articles/menzil-kaygisina-son-veren-teknoloji-harikalari.webp',
    category: 'Elektrikli Araçlar',
    date: null,
    source: 'https://www.kredicars.com/blog/menzil-kaygisina-son-veren-teknoloji-harikalari',
    status: 'archived',
    sections: [
      {
        heading: '2025 arşiv notu',
        paragraphs: [
          'Arşiv içeriği; koşullar güncel teklif değildir. Kaynak açıklaması Aralık 2025 dönemine atıfta bulunuyor; kesin yayın tarihi bulunmuyor. Bu yazı güncel model sıralaması, üretici teknik verisi veya belirli bir menzil garantisi değildir.',
        ],
      },
      {
        heading: 'Menzil kaygısı neyi anlatır?',
        paragraphs: [
          'Kaynak, elektrikli araç almayı düşünenlerin yolculuk sırasında şarjın bitmesi endişesini “menzil kaygısı” olarak tanımlıyordu. Batarya kapasitesi, motor verimliliği ve aerodinamik tasarımın uzun yol kullanımındaki önemini ele alıyordu.',
          'Test koşullarında ölçülen bir menzil, her yolculukta aynı mesafenin alınacağı anlamına gelmez. Araç seçerken kullanım güzergâhı, şarj erişimi ve aracın ilgili versiyonunun teknik bilgileri birlikte değerlendirilmelidir.',
        ],
      },
      {
        heading: 'Kaynakta yer alan araç örnekleri',
        paragraphs: [
          'Eski liste Lucid Air Grand Touring, Mercedes-Benz EQS, Tesla Model S Long Range, BMW iX ve i7 ile Togg T10X uzun menzil versiyonunu örnek veriyordu. Bunlar kaynağın seçtiği modellerdir; bugünün en uzun menzilli araç listesi olarak sunulmamaktadır.',
          'Kaynakta Lucid için 800 km üzeri, EQS için 700–750 km, Model S için 650–700 km, iX için 600 km üzeri ve Togg T10X için 523 km gibi rakamlar yer alıyordu. Bu değerler bağımsız olarak doğrulanmış güncel veriler değildir; model yılı, versiyon ve test standardı eşleştirilmeden doğrudan kıyaslanmamalıdır.',
        ],
      },
      {
        heading: 'Gerçek kullanımda menzili etkileyenler',
        paragraphs: [
          'Kaynak, yüksek hızın tüketimi artırabildiğini, soğuk havanın batarya performansını etkileyebildiğini ve ısıtma-soğutma sistemlerinin enerji kullandığını hatırlatıyordu. Bu etkenler, aynı araçla farklı günlerde farklı sonuçlar görülmesini açıklamaya yardımcı olur.',
          'Uzun yol planında yalnızca katalog mesafesine güvenmek yerine rota üzerindeki uygun şarj noktalarını ve şarj ihtiyacını kontrol etmek önemlidir. Bir şarj ağının varlığı, her konumda kullanılabilir istasyon veya kesintisiz yolculuk garantisi vermez.',
        ],
      },
      {
        heading: 'Finansman tanıtımı hakkında',
        paragraphs: [
          'Özgün metnin sonunda yer alan en uygun faiz ve en avantajlı taşıt kredisi ifadeleri güncel teklif olarak taşınmamıştır. Elektrikli araç finansmanında da koşullar, araç özellikleri ve ilgili finans kuruluşunun değerlendirmesi üzerinden ayrıca doğrulanmalıdır.',
        ],
      },
    ],
  },
];
