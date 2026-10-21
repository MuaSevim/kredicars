# Yeni yön ve içerik kökeni

İnceleme: 20 Ekim 2026. Bu sürüm, kullanıcının geri bildirimiyle orijinal KrediCars logosu ve mavi/turuncu palete döner. Logo dosyasından ölçülen ana renkler: mavi `#253B8E`, turuncu `#EC671A`. İki sütunlu hero kaldırıldı. Fotoğrafın tek sahne oluşturduğu merkezi başlangıç; bütçe eylemi, süreç, müşteri kanıtı, gerçek ekip ve adres sırasıyla ilerler.

## Verilen referanslar

| Kaynak | Bu projedeki karşılığı |
|---|---|
| https://stripe.com/ | Sayfa boyunca farklı yoğunlukta bölümler; ürün anlatımını küçük etkileşimlerle görünür kılma |
| https://www.carvana.com/ | Araç finansmanını başlangıçta görünür yapma; ilk eylemi sade tutma |
| https://www.credible.com/ | Müşterinin önce ihtiyacını belirtmesi ve yönlendirilmiş başvuru yaklaşımı |
| https://robinhood.com/us/en/ | Büyük tipografi ve tek sahneye odaklanan başlangıç yönü |
| https://www.revolut.com/ | Merkezi kompozisyon, boşluk ve güven kanıtını ayrı görünür alanlarda sunma |
| https://www.myautoloan.com/ | Tek girişten birden çok finansman seçeneğini konuşma fikri; teklif/ön değerlendirme ayrımı |
| https://www.garantibbva.com.tr/ | Yerel dilde net işlem adları ve finans hizmetinde ulaşılabilir iletişim |
| https://www.lendingtree.com/ | Açılmaya çalışıldı; ana sayfa tarama aracında erişilemedi. Doğrulanmış canlı tasarım incelemesi yapılmış gibi değerlendirilmedi |

Bu inceleme erişilebilir web içerikleri ve kaynakları üzerinden yapıldı; referansların canlı geçişleri tarayıcıda ölçülmedi. Markalara ait metinler, istatistikler veya ürün vaatleri KrediCars’a taşınmadı. Kredi notunu etkilememe, belirli onay süresi veya kesin kredi gibi vaatler eklenmedi.

## KrediCars kaynakları

- Orijinal logo: gönderilen `Ekibimiz - Kredi Cars_files.zip` içindeki `logo-light.png`. Yerel `public/brand/logo.png` aynı görseldir. Favicon, bu markanın mevcut simgesinden alınmıştır.
- Ekip isimleri/görevleri: gönderilen ekip sayfası HTML’i ve https://www.kredicars.com/kurumsal-ekibimiz.html. 17 kişinin fotoğrafları bu arşivdendir. Renk, yüz veya içerik rötuşu uygulanmadı; yalnızca web boyutu/formatı optimize edildi.
- Müşteri fotoğrafları: https://www.kredicars.com/mutlu-musteriler.html sayfasındaki yayımlanmış arşiv. Metin alıntısı veya yıldız puanı uydurulmadı.
- Video: aynı müşteri sayfasındaki `https://www.youtube.com/embed/jJSbWa59-D4` bağlantısı. Görselde Samet Bey olarak anılır. Video tıklamadan üçüncü taraf oynatıcı yüklenmez. Oynatıcı desteklenmezse gerçek YouTube bağlantısı bulunur.
- Finans kuruluşu logoları: mevcut https://www.kredicars.com/ ana sayfasındaki görseller. Ayrı bir güncel sözleşme/yetki denetimi yapılmadı; işletme yayın öncesi aktif anlaşmaları teyit etmelidir.
- Şubeler: https://www.kredicars.com/kurumsal-subelerimiz.html. Dört açık adres sunuldu; çelişkili toplam şube/şehir sayıları taşınmadı.
- Hero fotoğrafı: SevimCars kaynağında bulunan Unsplash fotoğrafı `photo-1492144534655-ae79c964c9d7`; yüksek çözünürlüklü aynı fotoğraf images.unsplash.com üzerinden alındı. Dekoratif araç fotoğrafıdır; bir KrediCars müşterisi, çalışanı veya stoktaki araç olduğu iddia edilmez.
- Türkiye sınırı: https://github.com/johan/world.geo.json/blob/master/countries/TUR.geo.json (Natural Earth). Önizleme üzerindeki noktalar şehir merkezleridir. Canlı harita/yol tarifi gerçek şube adresiyle oluşturulur.

Mevcut şirket içeriğinin kamuda yayımlanmış olması bağımsız lisans veya müşteri izin denetimi anlamına gelmez. İşletme bu içeriğin yeniden yayını için hakları ve güncel bilgileri teyit etmelidir. Bu bilgi tasarımın içine sahte rozet/yorum eklenerek kapatılmadı.

## Teknik kaynaklar

- https://nextjs.org/docs/app/getting-started/installation
- https://ui.shadcn.com/ — Button, Dialog, Select, Input, Slider, Accordion, Label bileşenlerinin resmi new-york registry dosyaları projeye alındı. Lisans: `SHADCN-LICENSE.md`.
- https://motion.dev/ — React hareket kütüphanesi.
- https://github.com/google/fonts/tree/main/ofl/manrope — yerel değişken Manrope fontu; OFL lisansı font klasöründe.

Kütüphanelerin sürümleri npm üzerinden doğrulandı ve gerçekten kurulan sürümlere sabitlendi. Bir kütüphane ismi yalnızca pazarlama amaçlı yazılmadı; ilgili kaynak/bileşenler projede bulunur.
