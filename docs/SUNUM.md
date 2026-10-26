# Sunum notları — 22 Ekim 2026

## Tasarım ve varsayımlar

- Orijinal logo, Manrope, #253B8E mavi ve #EC671A turuncu korundu. Açık/pastel, ortalanmış hero geliştirildi.
- Başlık için “Aracınız için heyecan, krediniz için netlik”, “Taşıt finansmanında yolunuz belli” ve “Hayalinizdeki araca, net bir başlangıç” değerlendirildi. Sıcak ve doğal üçüncü seçenek, hizmeti açıkça anlatan destek metniyle uygulandı.
- “30+ yıl” Sevim Otomotiv tecrübesidir; KrediCars kuruluş tarihi değildir. 80 bin müşteri / son beş yıl ve 16 kurum şirket beyanı olarak tutulur; memnuniyet oranı türetilmedi.
- Kampanya kaynaklarda doğrulanmadığı için demo fixture’dır. Başlangıç/bitiş tarihleri null; tarih uydurulmaz. Hesaplayıcı aynı %2,58 aylık varsayımı kullanır. Vade seçenekleri yasal uygunluk kuralı değildir.

## Gerçek kaynak kararları

- `../design/illustration-forum.png` belge/form illüstrasyonu olarak görsel incelemeden geçti. Araç, anahtar, pin ve form WebP olarak optimize edildi; isim ve orijinaller korundu. Parçalı araç hizalama riski yerine bütün araç görseli kullanıldı. Sürekli animasyon yok.
- `../awards/awards.json`: yalnızca görselli, placeholder olmayan altı kayıt. 2022 Türkiye derecesi 3.’lüktür; URL’deki 1.’lik yazımına güvenilmedi. 2023 Türkiye ve 2026 Quick belgelerindeki Cansevim Otomotiv unvanı açıkça belirtildi. “En güvenilir” ve ISO placeholder’ları yayınlanmadı. `quick-finans` klasör adı korundu.
- `../testimonials/testimonials.json`: bir gerçek video ve kaynak fotoğrafları. İsim thumbnail ile eşleşen Samet Bey; ID jJSbWa59-D4. Yazılı yorum, puan, şehir, kredi tutarı veya onay sonucu üretilmedi.
- `../brands`: seçilmiş sekiz okunaklı gerçek logo. Yanlış “spaceship” içeriği olan ototaksit.svg ve açık zeminde görünmeyen beyaz logolar kullanılmadı. 16’ya tamamlamak için kurum eklenmedi; logo arşivinin güncel anlaşma kanıtı olmadığı açık.
- `../blog/blog.json`: “tumunu-gor” navigasyonu hariç sekiz kaynak. HTML/script/layout taşınmadı. Tarihler null bırakıldı; 2025 içerikleri arşivdir. Eski onay ve süre vaatleri güncel teklif gibi sunulmadı.
- Ekip ve adresler mevcut `lib/content.ts` verisinden korundu. Şube koordinatları kesin adres konumu olarak doğrulanamadığından yalnızca şehir işaretleridir. Bilinmeyen müşteri–şehir bağlantıları eklenmedi.
- Snazzy Maps 1243 “Interface map” referansı okundu: sakin açık zemin, gri okunaklı etiket ve açık su rengi yaklaşımı uyarlandı. Snazzy Maps sağlayıcı olarak kullanılmadı. Gizli anahtar aranmadı.

## Kontroller

- `pnpm test`: 15 test; hesaplama/ters hesaplama, sıfır faiz, geçersiz değerler, kaynak-görsel bütünlüğü, bütçe/vade aktarımı, form geri dönüşü, demo tamamlanması ve sıfır gönderim, inline video, şube eşleşmesi, Türkçe ekip araması, süreç klavyesi ve yardım-form geçişi.
- `pnpm typecheck` ve `pnpm build`: başarılı. Statik dinamik route parametreleri üretildi.
- `pnpm test:browser`: 19 gerçek sayfa, beş genişlik, modal odak çevrimi ve geri dönüşleri, görseller ve console kontrolleri başarılı; sıfır form POST isteği. Ekran görüntüleri `Temp/opencode/kredicars-check/` altında.
- Chromium/Playwright ile production çıktısında gerçek kullanıcı yolculuğu denendi: ana sayfa → hesaplama → üç adımlı form → tamamlanma → inline video → Mersin → blog yazısı → blog → ana sayfa. Ayrıca mobil menü ve yardım paneli geçişleri denendi.
- 390, 360, 768, 1024, 1440 CSS pikselde yatay taşma testi geçti. Mobil ve masaüstü ekran görüntüleri gerçekten incelendi; ekran dışı lazy görseller yükletilip tekrar çekildi.
- Yardım paneli ve mobil menüden forma geçişte Escape sonrası odak kalıcı açıcıya döner. Slider’ın gerçek Thumb elemanının erişilebilir adı ve yüzde metni kontrol edildi.
- Kontrol edilen ana, ekip, dört şube detayı, blog, ödül, iletişim ve taslak sayfaları 200; tek H1 ve noindex. Uygulama JavaScript/console hatası ve bozuk görsel yok. Next segment prefetch 404’leri Windows çıktı normalizasyonuyla giderildi.
- YouTube embed 200 ve gerçek oynatıcı/71 saniyelik video arayüzü yüklendi; uzun süreli sesli oynatma garantisi verilmez. Kullanıcı kapatırken bekleyen dış isteklerin ERR_ABORTED olması uygulama hatası değildir. Doğrudan YouTube alternatifi bulunur.
- 200% zoom için 1440 fiziksel pikselin 720 CSS piksele karşılık geldiği dar görünüm stres kontrolü yapıldı; fiziksel mobil klavye ve gerçek cihaz testi yapılmadı.
- Lighthouse çalıştırılmadı; gerçek kullanıcı Core Web Vitals başarısı iddia edilmiyor.

## Kalan bilinçli sınırlar

Gerçek banka/CRM/üyelik/AI entegrasyonu yok. Kesin şube koordinatı ve canlı harita pan/zoom yok. Kampanya ve hesaplama sunum varsayımı. Onaylı hukuki metinler taslak alanına eklenecek. Dış video ve harita bağlantıları internet/sağlayıcıya bağlı. Üretime dağıtım veya GitHub push yapılmadı.
