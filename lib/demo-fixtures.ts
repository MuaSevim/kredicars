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
