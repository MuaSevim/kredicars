# KrediCars — Yerel sunum sürümü

Next.js 16.4.2 App Router, React, TypeScript, Tailwind, shadcn/Radix, Motion ve Manrope altyapısı korunmuştur. Üretime yayınlanmamıştır.

## Çalıştırma

Mevcut kurulum pnpm kullanır; paket veya major sürüm değiştirilmedi.

```sh
pnpm dev
```

Geliştirme: http://localhost:3000

Production çıktısından sunum (önerilen):

```sh
pnpm build
pnpm start --port 3001
```

Sunum: http://127.0.0.1:3001 — `start` yalnızca `out/` çıktısını yerelde sunar; API içermez. `next start`, statik export için uygun değildir. `scripts/finalize-export.mjs`, Next 16.4’ün Windows’ta iç içe bıraktığı segment payload’larının tarayıcının istediği noktalı isimlerle kopyalarını üretir; framework dosyalarına dokunmaz.

```sh
pnpm test
pnpm typecheck
```

Mevcut Playwright kurulumuyla production tarayıcı testi: `pnpm test:browser` (önizleme 3001’de açık olmalı). Farklı kurulum için `PLAYWRIGHT_MODULE` ve `PREVIEW_URL` kullanılabilir. Test uygulamaya bağımlılık eklemez; ekran görüntülerini sistemin `Temp/opencode/kredicars-check/` klasörüne yazar.

## Sunum akışı

Ana sayfa → Kredini hesapla → tutar veya aylık taksit → Başvuruya devam et → bütçe/iletişim/kontrol → demo tamamlanması → müşteri videosu → Mersin şubesi → ilgili rehber → blog → ana sayfa. Yardım düğmesinden aynı geri arama formuna geçilebilir.

## İçerik ve sınırlar

- `lib/content.ts`: kaynaklı ekip, dört şube, seçilmiş kurum logoları, altı belgeli ödül, müşteri arşivi ve SSS.
- `lib/articles.ts`: sekiz gerçek kaynaktan sadeleştirilmiş arşiv yazısı. Kaynakta olmayan yayın tarihleri eklenmedi.
- `lib/demo-fixtures.ts`: ayrı tutulan örnek kampanya ve hesaplama varsayımları.
- `lib/finance.ts`: anüite, ters hesaplama, bütçe ve telefon doğrulaması.
- `app/globals.css`: merkezi token ve bileşen durumları; `app/demo.css`: sayfa kompozisyonları.
- `scripts/prepare-assets.mjs`: sağlanan kaynaklardan optimize WebP kopyaları. Orijinaller korunur.

**Formlar hiçbir koşulda bilgi göndermez veya kalıcı kayıt oluşturmaz.** Örnek bilgiler kullanın. %2,58 aylık oran bir sunum varsayımıdır; vergiler, tahsis ücreti, sigorta ve diğer masraflar dahil değildir. Banka uygunluğu veya onay hesaplanmaz.

Harita şematiktir; işaretler şehir merkezlerini temsil eder. Canlı pan/zoom ve kesin şube koordinatı sunulmaz. Google ve Apple bağlantıları gerçek adresi kullanır. YouTube yalnızca tıklanınca yüklenir; internet gerektirir.

Gizlilik/aydınlatma alanı şirketin metinleri için taslaktır. Varsayılan noindex ve robots engeli korunur. Üretim için doğrulanmış HTTPS domaini `NEXT_PUBLIC_SITE_URL`, indeksleme tercihi `SITE_INDEXABLE` ile build sırasında belirlenir. Localhost canonical üretilmez.

Kaynak kararları ve gerçek kontrol kapsamı: `docs/SUNUM.md`.
