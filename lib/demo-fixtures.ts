// Sunum verileri: banka teklifi veya doğrulanmış kampanya değildir.
export const financeConfig = {
  monthlyRate: 0.0258, terms: [12, 24, 36, 48], defaultTerm: 36, maxPrincipal: 100_000_000,
  included: 'Yalnızca anapara ve varsayımsal faiz. Vergiler, tahsis ücreti, sigorta ve diğer giderler dahil değildir.',
} as const;
export const campaigns = [{
  id: 'presentation-rate', title: '%2,58’den başlayan faiz, 48 aya varan vade.',
  status: 'demo' as const, startsAt: null, endsAt: null,
  description: 'Örnek kampanya • Geçerlilik tarihleri ve kurum koşulları henüz doğrulanmadı. Canlı teklif değildir. Hesaplayıcıda aylık %2,58 varsayımı kullanılır; gerçek oran ve vade araç, tutar ve değerlendirmeye göre değişir.',
}];
// Visual fixtures only: no real customer, photo, result or review attribution.
export const demoReviews=[
 {id:'demo-review-1',name:'Örnek ziyaretçi A.',text:'Aylık bütçemden başlayıp seçenekleri yan yana görmek, hangi soruları soracağımı netleştirdi.',rating:5},
 {id:'demo-review-2',name:'Örnek ziyaretçi B.',text:'İlk görüşmede sürecin adım adım anlatılması benim için önemli. Sorularımı tek bir ekiple konuşmak isterim.',rating:5},
 {id:'demo-review-3',name:'Örnek ziyaretçi C.',text:'Peşinatı ve toplam ödemeyi birlikte görebilmek, araç bütçemi düşünmemi kolaylaştırdı.',rating:5},
 {id:'demo-review-4',name:'Örnek ziyaretçi D.',text:'Aracı henüz seçmeden de bütçemden başlayabilmek güzel. Sade ve anlaşılır bir deneyim.',rating:5},
] as const;
