# KrediCars — Studio Demo

Konuşulan marka ve kullanıcı deneyimi yönünün bağımsız Next.js demosu. Orijinal KrediCars logosu, mavi/turuncu marka renkleri, açık zemin ve özel SVG illüstrasyonu kullanır. Önceki proje değiştirilmedi. Yayınlanmadı.

## Çalıştırma

Node.js 24 önerilir. ZIP'i çıkarıp bu klasörde terminal açın:

```sh
npm ci
npm run dev
```

Tarayıcıda http://localhost:3000 adresini açın.

```sh
npm test
npm run typecheck
npm run build
```

`out/` klasörü statik yayın çıktısıdır. HTML dosyasını çift tıklamak yerine bir HTTP sunucusu kullanın. Kaynak proje Git'e aktarılabilir. `npm start` statik export için kullanılmaz.

## Deneyebilecekleriniz

- Açık zeminli ortalanmış hero ve özel çizilmiş yol/araç/belge illüstrasyonu.
- Bireysel/ticari seçim, hazır araç tutarları, serbest fiyat ve peşinat girişi, peşinat kaydırıcısı.
- Finansman ihtiyacının canlı hesaplanması ve geçersiz tutarların engellenmesi.
- Bütçenin üç adımlı görüşme formuna aktarılması; hata, geri dönüş ve kontrol ekranları.
- Ayrı geri arama formu; aranma tercihi.
- Klavye ile gezilebilen süreç kartları.
- Mevcut KrediCars arşivinden müşteri videosu; yalnızca tıklayınca yüklenir.
- Ekip sayfasında 17 kişi, şube filtresi ve Türkçe arama.
- Şube seçimiyle adres, ekip ve harita işaretinin birlikte değişmesi.
- İsteğe bağlı Google Haritalar görünümü, yol tarifi, SSS.
- Mobil stiller, azaltılmış hareket tercihi, modal kapanışında odağın geri dönüşü.

## Demo sınırları

**Bu demo kişisel veri göndermez ve gerçek başvuru oluşturmaz.** Formlarda örnek bilgiler kullanın. Çevre değişkenleri verilse bile gönderim bu sürümde kapalıdır.

Hesaplama yalnızca araç fiyatı eksi peşinattır; faiz, taksit, kredi uygunluğu veya onay hesaplamaz. Banka, SMS, CRM entegrasyonu bulunmaz. Canlı harita ve video, kullanıcı açtığında üçüncü taraflara bağlanır.

Logo, personel, şube ve müşteri görselleri önceki sağlanan KrediCars kaynaklarından gelir; güncel görevler, adresler, kullanım izinleri ve kurum ilişkileri ticari yayın öncesinde şirketçe teyit edilmelidir. Müşteri adına yorum veya puan uydurulmadı. Yeşil karttaki metin, müşteri alıntısı olmadığı belirtilen editoryal marka metnidir. SVG haritadaki işaretler şehir merkezlerini gösterir; yol tarifi bağlantısı şube adresini kullanır.

## Dosyalar

- `components/landing.tsx`: demo ana sayfası.
- `app/demo.css`: demo görsel dili ve responsive kurallar.
- `app/globals.css`: mevcut ortak bileşen/forma ait temel stiller.
- `components/lead-dialog.tsx`: kontrollü görüşme ve geri arama akışları.
- `components/ui/`: shadcn/Radix bileşenleri.
- `lib/content.ts`: kaynak arşivden ekip ve şubeler.
- `tests/`: hesaplama ve DOM etkileşim testleri.

Bu bir tasarım denemesidir; kapsamlı üretim mimarisi veya tamamlanmış tasarım sistemi olarak sunulmaz.

## Doğrulama

Üretim derlemesi, TypeScript ve otomatik etkileşim testleri çalıştırıldı. Testler jsdom ortamında gerçek React bileşenlerini kapsar. Bulut tarayıcı zaman aşımı nedeniyle gerçek tarayıcıda masaüstü/mobil görsel inceleme tamamlanamadı. CSS geçişlerinin görünümü, video yayını ve harita sağlayıcısı uçtan uca doğrulanmadı.
