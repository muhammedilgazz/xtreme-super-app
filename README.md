# Xtreme Super App

Bu depo, Xtreme Super App'in tüm bileşenlerini içeren monorepo yapısıdır. Xtreme Super App, finans yönetiminden kişisel gelişime, eğlenceden günlük ajanda takibine kadar hayatınızın her alanını tek bir çatı altında birleştiren, yapay zeka destekli, kapsamlı bir kişisel asistan uygulamasıdır.

---

## Proje Bileşenleri

Bu depo üç ana bölümden oluşmaktadır:

1.  **`backend/`**: PHP (OOP MVC) tabanlı RESTful API ve tüm iş mantığını barındırır.
2.  **`frontend/`**: React, TypeScript ve Tailwind CSS kullanılarak geliştirilmiş web tabanlı kullanıcı arayüzü.
3.  **`mobile/`**: Flutter kullanılarak geliştirilmiş iOS ve Android mobil uygulamalar.

Her bir bileşenin kendi özel README dosyası bulunmaktadır. Detaylı bilgi ve kurulum talimatları için lütfen ilgili klasördeki `README.md` dosyalarını inceleyin.

---

## Başlarken

Projenin tamamını yerel ortamınızda çalıştırmak için aşağıdaki genel adımları takip etmeniz gerekmektedir. Her bir bileşenin detaylı kurulumu için ilgili alt klasörlerin README'lerine bakınız.

### 1. Sistem Gereksinimleri

* **PHP 8.x** veya üzeri
* **MySQL 8.x** veya üzeri (veya MariaDB)
* **Node.js 16.x** veya üzeri (npm veya Yarn ile birlikte)
* **Flutter SDK 3.x** veya üzeri
* **Android Studio** (Android geliştirme için)
* **Xcode** (iOS geliştirme için - macOS gerektirir)
* **Git**

### 2. Genel Kurulum Adımları

---

## Proje Yapısı: Neden Bir Monorepo?

Xtreme Super App, tüm bileşenlerini (backend, frontend, mobil) tek bir Git deposu (`XtremeSuperApp` ana dizini) altında barındıran bir **monorepo** yapısı kullanır. Bu yaklaşım, projenin geliştirme sürecinde bize önemli avantajlar sağlar:

### 1. Tek Bir Kaynak Kontrol Noktası

Tüm kod tabanı, tek bir versiyon kontrol sistemi (Git) altında bulunur. Bu, farklı bileşenler arasında yapılan bağımlılık güncellemelerini ve entegrasyonu kolaylaştırır. Bir özelliğin backend, frontend ve mobil katmanlarında yaptığı değişiklikleri tek bir Pull Request (PR) içinde gözden geçirebiliriz.

### 2. Tutarlı Geliştirme Ortamı

Tüm geliştiriciler tek bir depoyu klonlayarak projenin tüm parçalarına aynı anda erişir. Bu, geliştirme ortamlarının senkronizasyonunu basitleştirir ve "benim makinemde çalışıyor" gibi sorunları azaltır.

### 3. Kolaylaştırılmış Kod Paylaşımı

Gelecekte, backend, frontend ve mobil uygulamalar arasında ortak kullanılabilecek veri modelleri (örneğin, kullanıcı veya işlem tipleri), yardımcı fonksiyonlar veya API sözleşmeleri gibi kod parçaları ortaya çıkabilir. Monorepo, bu tür ortak kodları kolayca yönetebileceğimiz ve paylaşabileceğimiz bir `shared/` dizini oluşturmamıza olanak tanır. Bu, kod tekrarını önler ve tutarlılığı artırır.

### 4. Basitleştirilmiş Bağımlılık Yönetimi

Farklı bileşenler arasında versiyon uyumsuzlukları daha az yaşanır çünkü tüm bağımlılıklar tek bir ana depo içinde yönetilebilir. Bu, özellikle sürekli entegrasyon (CI) ve sürekli dağıtım (CD) süreçlerinde büyük kolaylık sağlar.

### 5. Atomik Değişiklikler ve Kolay Gözden Geçirme

Yeni bir özellik geliştirdiğimizde veya bir hata düzelttiğimizde, bu değişiklikler genellikle projenin birden fazla bileşenini etkiler. Monorepo yapısı sayesinde, bu tür kapsamlı değişiklikleri tek bir **atomik commit** olarak yapabilir ve tek bir **Pull Request** ile gözden geçirebiliriz. Bu, kod inceleme sürecini daha verimli hale getirir ve olası entegrasyon hatalarını erken aşamada tespit etmemizi sağlar.

---

## Web Sunucusu Yapılandırması Hakkında Önemli Not

Projenin tüm dosyaları `XtremeSuperApp` dizini altında bulunsa da, web sunucunuz (Apache, Nginx vb.) yalnızca **backend'inizin genel kullanıma açık olan kısmını (`backend/public/`) hedefleyecek şekilde yapılandırılmalıdır.** Bu, uygulamanızın hassas backend kodlarının ve çevre değişkenlerinin web üzerinden doğrudan erişilememesini sağlayarak güvenliği artırır. Detaylı kurulum talimatları için lütfen `backend/README.md` dosyasına bakın.

1.  Bu depoyu klonlayın:
    ```bash
    git clone [https://github.com/your-username/xtreme-super-app.git](https://github.com/your-username/xtreme-super-app.git)
    cd xtreme-super-app
    ```
2.  **Backend Kurulumu:**
    * `cd backend` dizinine gidin ve `backend/README.md` dosyasındaki talimatları takip edin.
    * Apache/Nginx ve MySQL'i başlatın, veritabanını yapılandırın.
3.  **Frontend Kurulumu:**
    * `cd frontend` dizinine gidin ve `frontend/README.md` dosyasındaki talimatları takip edin.
    * `npm install` (veya `yarn install`) komutunu çalıştırın.
4.  **Mobil Uygulama Kurulumu:**
    * `cd mobile` dizinine gidin ve `mobile/README.md` dosyasındaki talimatları takip edin.
    * `flutter pub get` komutunu çalıştırın.

### 3. Uygulamaları Çalıştırma

Tüm bileşenler ayrı ayrı çalıştırılmalıdır:

* **Backend:** Apache/Nginx ve MySQL çalışıyor olmalı. API endpoint'leriniz `http://localhost/backend/public/api` adresinden erişilebilir olmalı.
* **Gelir Takibi ve Kasa Yönetimi:**
    * **Gelir Kaydı:** Maaş, serbest çalışma gelirleri vb. kayıtları.
    * **Kasa Takibi:** Nakit akışının anlık takibi.
    * **Bankacılık Entegrasyonu (Düşünülmeli):** Güvenli API'ler aracılığıyla banka ve kredi kartı bakiyelerini anlık çekme, hesaplar arası aktarım ve eşleme. (Bu kısım güvenlik ve regülasyonlar nedeniyle dikkatle incelenmelidir.)
    * **Kasa Denkleştirme:** Dönem sonunda kasa bakiyesini otomatik denkleştirme.
* **Abonelik Yönetimi:** Tüm abonelik hizmetlerinin (Netflix, Spotify, spor salonu üyeliği vb.) tek bir yerden takibi, yenileme tarihleri ve otomatik ödeme hatırlatıcıları.
* **Finansal Senaryolar & Planlar:**
    * **Bütçeleme Araçları:** Aylık/yıllık bütçe oluşturma, harcama limitleri belirleme.
    * **Tasarruf Hedefleri:** Belirli hedefler için (ev peşinatı, tatil) tasarruf planları oluşturma ve ilerlemeyi takip etme.
    * **Ödeme Planları/Taksitlendirme:** Borçların veya büyük alımların taksitlendirme planlarını oluşturma ve takip etme.
    * **"Ölmeden Önce Yapılacaklar" Finansal Senaryoları:** Finansal hedeflerle entegre (örneğin, dünya turu için ne kadar biriktirmem gerekiyor?).
* **Favori Ürünler & Satın Alma:**
    * **Ürün Tanıtım Sayfaları:** Favorilere eklenen ürünler için detaylı bilgi, fiyat karşılaştırma, satın alma linkleri (e-ticaret sitelerine yönlendirme).
    * **Fiyat Takibi:** Favori ürünlerin fiyat değişikliklerini izleme ve bildirim gönderme.

---

## Xtreme Super App: Kişisel "Her Şey" Uygulamanız

Xtreme Super App, finans yönetiminden kişisel gelişime, eğlenceden günlük ajanda takibine kadar hayatınızın her alanını tek bir çatı altında birleştiren entegre bir kişisel asistan uygulaması olacak. Amacımız, dağınık bilgileri ve görevleri tek bir merkezde toplayarak verimliliğinizi artırmak ve sezgisel bir deneyim sunmak.

---

### 1. Temel Konsept ve Mimari

Xtreme Super App, modüler bir yapıya sahip olacak. Bu sayede her bir ana bölüm (Finans, Yaşam, Eğitim, Creator, Ajanda, Medya) bağımsız olarak geliştirilip birbirine entegre edilebilecek. Mevcut PHP MVC tabanlı finans yönetiminiz bu yapının **Finans** modülünün çekirdeğini oluşturacak.

**Genel Mimari Yaklaşım:**

* **Mobil Uygulama (Native/Cross-Platform):** Kullanıcı deneyimini ön planda tutan, hızlı ve akıcı bir mobil uygulama. Flutter veya React Native gibi cross-platform teknolojiler düşünülebilir. Bu sayede tek kod tabanıyla hem iOS hem Android için geliştirme yapılabilir.
* **Web Uygulaması (PHP MVC + Yeni Teknolojiler):** Mevcut finans altyapınızı koruyarak diğer modüller için modern web teknolojileri (React, Vue.js, Angular) entegre edilebilir. Bu, özellikle Creator veya Eğitim gibi daha interaktif bölümlerde esneklik sağlayacaktır.
* **API Katmanı:** Mobil ve web uygulamalarının birbiriyle ve arka uç ile sorunsuz iletişim kurmasını sağlayacak güçlü ve güvenli bir API katmanı (RESTful veya GraphQL).
* **Veritabanı:** İlişkisel bir veritabanı (PostgreSQL, MySQL) ana veri depolama için kullanılırken, bazı özel veriler için NoSQL (MongoDB, Redis) çözümleri de düşünülebilir (örneğin, hızlı önbellekleme için).
* **Bildirim Sunucusu:** Gerçek zamanlı bildirimler için WebSocket tabanlı bir sunucu (Node.js, Go) veya bulut tabanlı push bildirim servisleri (Firebase Cloud Messaging).

---

### 2. Modüller ve Özellik Detaylandırması

**Ana Modüller:**

* **Finans:** Mevcut PHP MVC finans modülünüzün temelini oluşturacağı, en detaylı bölüm.
* **Yaşam:** Kişisel hedefler, sağlık, alışkanlık takibi.
* **Eğitim:** Öğrenim materyalleri, kurslar, kişisel gelişim.
* **Creator:** Belge oluşturma, içerik yönetimi, AI destekli yazım.
* **Ajanda:** Görevler, rehberler, hatırlatıcılar.
* **Medya:** Dijital varlık yönetimi, eğlence.

---

#### 2.1. Finans Modülü

**Mevcut Durum:** PHP MVC tabanlı finans yönetimi.

**Geliştirme Hedefleri:**

* **Entegrasyon:** Mevcut yapının Xtreme Super App genel konseptine kusursuz entegrasyonu. Finans modülü, ana menüde ayrı bir başlık altında yer alacak.
* **API Geliştirme:** Mobil uygulama için gerekli API endpoint'lerinin oluşturulması.
* **Kullanıcı Arayüzü (UI) İyileştirmeleri:** Modern ve kullanıcı dostu bir arayüz ile mobil ve web arasında tutarlı bir deneyim sunulması.

**Detaylı Özellikler:**

* **Market İhtiyaçları & Stok Takibi:**
    * **Akıllı Alışveriş Listeleri:** Sık alınan ürünleri hatırlayan, bütçe önerileri sunan listeler.
    * **Ev Stoğu Yönetimi:** Buzdolabı/kilerdeki ürünlerin son kullanma tarihlerini takip etme, azalan ürünler için otomatik hatırlatıcılar.
    * **Barkod Okuyucu Entegrasyonu:** Ürünleri barkod okuyucu ile ekleyebilme.
* **Borçlar ve Giderler:**
    * **Gider Takibi:** Kategori bazında gider takibi, faturaların fotoğrafını çekerek otomatik veri girişi (OCR entegrasyonu).
    * **Borç Yönetimi:** Kime ne kadar borcunuz olduğunu, ödeme tarihlerini takip etme, hatırlatıcılar.
    * **Vergi & SGK Takibi:** Otomatik hesaplamalar ve hatırlatıcılar.
* **Gelir Takibi ve Kasa Yönetimi:**
    * **Gelir Kaydı:** Maaş, serbest çalışma gelirleri vb. kayıtları.
    * **Kasa Takibi:** Nakit akışının anlık takibi.
    * **Bankacılık Entegrasyonu (Düşünülmeli):** Güvenli API'ler aracılığıyla banka ve kredi kartı bakiyelerini anlık çekme, hesaplar arası aktarım ve eşleme. (Bu kısım güvenlik ve regülasyonlar nedeniyle dikkatle incelenmelidir.)
    * **Kasa Denkleştirme:** Dönem sonunda kasa bakiyesini otomatik denkleştirme.
* **Abonelik Yönetimi:** Tüm abonelik hizmetlerinin (Netflix, Spotify, spor salonu üyeliği vb.) tek bir yerden takibi, yenileme tarihleri ve otomatik ödeme hatırlatıcıları.
* **Finansal Senaryolar & Planlar:**
    * **Bütçeleme Araçları:** Aylık/yıllık bütçe oluşturma, harcama limitleri belirleme.
    * **Tasarruf Hedefleri:** Belirli hedefler için (ev peşinatı, tatil) tasarruf planları oluşturma ve ilerlemeyi takip etme.
    * **Ödeme Planları/Taksitlendirme:** Borçların veya büyük alımların taksitlendirme planlarını oluşturma ve takip etme.
    * **"Ölmeden Önce Yapılacaklar" Finansal Senaryoları:** Finansal hedeflerle entegre (örneğin, dünya turu için ne kadar biriktirmem gerekiyor?).
* **Favori Ürünler & Satın Alma:**
    * **Ürün Tanıtım Sayfaları:** Favorilere eklenen ürünler için detaylı bilgi, fiyat karşılaştırma, satın alma linkleri (e-ticaret sitelerine yönlendirme).
    * **Fiyat Takibi:** Favori ürünlerin fiyat değişikliklerini izleme ve bildirim gönderme.

---

#### 2.2. Yaşam Modülü

**Odak Alanı:** Kişisel hedefler, alışkanlıklar, sağlık ve genel refah.

**Özellik Fikirleri:**

* **Hedef Belirleme ve Takibi:** SMART hedefler (Specific, Measurable, Achievable, Relevant, Time-bound) oluşturma ve ilerlemeyi görsel olarak takip etme.
* **Alışkanlık Takibi:** Yeni alışkanlıklar edinme veya kötü alışkanlıklardan kurtulma sürecini izleme (su içme, egzersiz yapma, kitap okuma vb.).
* **"Ölmeden Önce Top 100" Listesi Entegrasyonu:**
    * Kişisel "yapılacaklar" listesi oluşturma.
    * Her madde için hedefler, notlar ve finansal bağlamlar ekleyebilme (örneğin, "Everest'e tırmanmak" için gereken bütçe ve hazırlık adımları).
* **Günlük Duygu Takibi:** Ruh hali takibi, görsel istatistikler.
* **Sağlık ve Fitness Entegrasyonu:** (Opsiyonel ve gelişmiş) Akıllı saatler/bileklikler ile entegrasyon, aktivite takibi.

---

#### 2.3. Eğitim Modülü

**Odak Alanı:** Sürekli öğrenme ve bilgi birikimi.

**Özellik Fikirleri:**

* **Kişisel Gelişim Yolu:** Kişisel gelişim kitapları, makaleler ve kurslar için öneriler, okuma/izleme listeleri.
* **Yazılım Eğitimleri:** Programlama dilleri, framework'ler, araçlar hakkında kaynaklar, öğrenme yolları.
* **Psikoloji, Hukuk, AI, Akademik, Üniversite:** Farklı alanlardaki öğrenim materyallerini kategorize etme.
* **Ders/Video Not Alma:** Her video veya eğitim dersi özelinde zaman damgalı notlar alabilme.
* **"Tekrar İzle/Oku", "İzledim/Okudum", "Tavsiye Et" Özellikleri:** Öğrenim materyallerini takip etme ve değerlendirme.
* **İlerleme Takibi:** Kursların veya öğrenim yollarının ne kadarının tamamlandığını gösteren ilerleme çubukları.

---

#### 2.4. Creator Modülü

**Odak Alanı:** İçerik oluşturma, belge yönetimi, AI destekli yardım.

**Özellik Fikirleri:**

* **Belge/Rapor/Dilekçe Oluşturucu:**
    * Şablonlar:** Sık kullanılan belge türleri için önceden tanımlanmış şablonlar (örneğin, CV, niyet mektubu, resmi dilekçe).
    * **AI Destekli Yazım:** Belge taslaklarını AI ile oluşturma, metinleri iyileştirme, dilbilgisi ve imla kontrolü.
    * **Otomatik Doldurma:** Kişisel bilgilerle belgeleri otomatik doldurma.
* **Soru-Cevap & İstek Yanıtlama:**
    * **AI Sohbet Asistanı:** Herhangi bir konuda soruları yanıtlayabilen, bilgi sağlayan bir AI sohbet botu.
    * **Görev Atama:** "Bana haftalık raporu hazırla" gibi istekleri anlayıp ilgili görevleri otomatik oluşturma.
* **Metin Özetleme ve Analiz:** Uzun metinleri özetleme, anahtar kelimeleri çıkarma.
* **Görsel Rapor Çıktısı:** Verilerden otomatik olarak grafikler ve infografikler oluşturarak görsel raporlar sunma.

---

#### 2.5. Ajanda Modülü

**Odak Alanı:** Günlük düzenleme, iletişim bilgileri ve görev yönetimi.

**Özellik Fikirleri:**

* **Görev Yönetimi (To-Do List):**
    * Önceliklendirme, son tarihler, alt görevler.
    * Tekrarlayan görevler.
    * Mobil uygulamadan hızlı not ve görev ekleme.
* **Rehberler:**
    * **IBAN Rehberi:** Güvenli bir şekilde banka hesap bilgilerini saklama ve paylaşma.
    * **Hesap Bilgileri:** Çeşitli online hesapların kullanıcı adı/şifrelerini (güvenli şifreleme ile) veya erişim bilgilerini tutma.
    * **Telefon Rehberi:** Temel kişi bilgilerini yönetme.
* **Takvim Entegrasyonu:** Google Calendar, Outlook Calendar gibi harici takvimlerle senkronizasyon.
* **Akıllı Hatırlatıcılar:** Konum bazlı hatırlatıcılar ("Eve vardığımda şunu yap"), zaman bazlı hatırlatıcılar.

---

#### 2.6. Medya Modülü

**Odak Alanı:** Dijital varlıkların yönetimi ve eğlence.

**Özellik Fikirleri:**

* **Medya Sunucusu Erişimi:** Kişisel medya sunucunuza (NAS, Plex vb.) uygulama içinden erişim ve içerikleri oynatma.
* **Müzik/Video Oynatıcı:** Uygulama içinde müzik ve video oynatma yeteneği.
* **Fotoğraf/Video Yönetimi:**
    * **Otomatik Medya Yedekleme:** Mobil cihazdaki fotoğraf ve videoların otomatik olarak buluta veya kişisel sunucuya yedeklenmesi.
    * Kategori ve Etiketleme: Fotoğrafları etiketleme ve kategorize etme.
* **Uygulama Yedekleme:** Mobil uygulamaların ayarlarını ve verilerini yedekleme (Android için mümkün olabilir, iOS için kısıtlı).
* **Galeri:** Yedeklenen medyaları görüntüleme, arama ve paylaşma.

---

### 3. Evrensel Özellikler ve Entegrasyonlar

Bu özellikler tüm modüllerle entegre çalışacak ve Xtreme Super App'in akıllı kişisel asistan yönünü güçlendirecek.

* **Bildirim Sistemi:**
    * **Anlık Bildirimler:** Görev hatırlatıcıları, finansal hareketler, stok uyarıları, haberler.
    * **Özelleştirilebilir Bildirimler:** Kullanıcının hangi tür bildirimleri almak istediğini seçebilmesi.
* **Rapor ve Çıktı Özellikleri:**
    * **Görsel Rapor Çıktısı:** Finansal özetler, alışkanlık takibi grafikleri, eğitim ilerleme raporları gibi modül bazında ve genel görsel raporlar.
    * **Print Özelliği:** Herhangi bir raporu veya belgeyi doğrudan yazdırma.
    * **Excel/CSV Export:** Verileri dışa aktarma yeteneği.
* **Sesli Asistan:**
    * **Doğal Dil İşleme (NLP):** Kullanıcının sesli komutlarını anlama ve işleme.
    * **Sezgisel Veri İşleme (Kilit Özellik):**
        * Örnek: "VEO 3'ü dene" komutunda:
            * **ToDo Oluşturma:** Otomatik olarak "VEO 3'ü İncele" görevi ekleme.
            * **Harcama Girişi:** Eğer VEO 3 ücretliyse, "Potansiyel Harcama: VEO 3" şeklinde finans modülüne ekleme veya hatırlatma.
            * **İncelenecek Uygulamalar Listesi:** Özel bir "İncelenecek Uygulamalar" listesine ekleme.
            * **Gerekirse Task Atama:** Belirli bir kişi veya diğer entegrasyonlara görev atama.
    * **Akıllı Ev Otomasyonu Entegrasyonu (Gelişmiş Seviye):**
        * "Akıllı ev otomasyonunu çalıştır" veya "Çamaşır makinesi bittiğinde kurutmayı başlat" gibi komutları anlama ve ilgili akıllı ev sistemleri (Home Assistant, Google Home, Alexa) ile entegrasyon (API desteği gerektirir).
        * **Kendi Kendine Görev Oluşturma:** Çamaşır makinesi bittiğinde otomatik "Kurutmayı Başlat" görevi oluşturma ve bildirim gönderme.
* **Import Özellikleri:**
    * **Excel/CSV Import:** Finans verileri, iletişim bilgileri vb. toplu veri yükleme.
    * **URL Import:** Web sayfalarını veya belirli verileri URL'den çekme ve kaydetme (örneğin, ürün linkleri, makale linkleri).
* **Yol Haritası Üretme:** Belirli bir hedef için (örneğin, bir dil öğrenmek, bir projeyi tamamlamak) adım adım bir yol haritası oluşturma önerileri sunma.

---

### 4. Pazarlama ve Tanıtım

* **YouTube Kanalı:** Uygulamanın özelliklerini tanıtan, kullanım kılavuzları sunan videolar.
* **Instagram Sayfası:** Görsel olarak çekici tanıtımlar, ipuçları, kullanıcı hikayeleri.
* **Web Sitesi:** Uygulamanın tüm özelliklerini detaylı tanıtan, sıkça sorulan soruları içeren, indirme bağlantıları sunan profesyonel bir web sitesi.

---

### 5. Geliştirme Yol Haritası (Aşamalı Yaklaşım)

Bu kadar geniş kapsamlı bir uygulama için aşamalı bir geliştirme süreci izlemek en mantıklısıdır.

#### Aşama 1: Temel Entegrasyon ve Finans Modülü Güçlendirme (3-6 Ay)

1.  **Mimari Tasarımı:** Mobil (Flutter/React Native), Web (PHP MVC + yeni frontend entegrasyonu) ve API katmanının detaylı mimari tasarımı.
2.  **Mevcut Finans Modülünün API'leştirilmesi:** PHP MVC yapısındaki finans modülünün mobil ve yeni web arayüzleri için RESTful API'ler ile dışa açılması.
3.  **Mobil Uygulama Temel Çatısı:** Finans modülünün temel özelliklerini (gelir/gider takibi, kasa, borçlar) gösteren MVP (Minimum Viable Product) mobil uygulama.
4.  **Web Paneli İyileştirmeleri:** Finans modülünün web arayüzünün güncellenmesi ve mobil ile tutarlılık sağlanması.
5.  **Bildirim Sistemi Temelleri:** Anlık bildirim altyapısının kurulması.
6.  **Rapor Çıktısı MVP:** Finans raporlarının görsel ve print edilebilir versiyonlarının oluşturulması.
7.  **Sınırlı Veri Import/Export:** Excel/CSV ile finans verisi import/export özelliği.

#### Aşama 2: Temel Modüller ve Sezgisel Entegrasyon (6-12 Ay)

1.  **Yaşam ve Ajanda Modüllerinin Geliştirilmesi:**
    * Hedef ve alışkanlık takibi.
    * Görev yönetimi (To-Do List).
    * IBAN/Hesap/Telefon rehberleri.
2.  **Basit Medya ve Eğitim Modülü:**
    * Basit not tutma ve takip özellikleri.
    * Medya sunucusu erişimi (sadece görüntüleme).
3.  **Gelişmiş Bildirimler:** Kişiselleştirilebilir bildirim seçenekleri.
4.  **Sesli Asistan MVP:** Temel sesli komutları anlama ve basit görevler (not oluşturma, görev ekleme) atama yeteneği. **Sezgisel data işleme MVP'si (örnek: "VEO 3'ü dene" senaryosu)** bu aşamada denenmeli.
5.  **Favoriler ve Ürün Tanıtımı:** Ürünlerin favorilere eklenmesi, temel tanıtım sayfaları.
6.  **Sosyal Medya Entegrasyonu:** Instagram sayfası entegrasyonu (Paylaşım, görüntüleme).

#### Aşama 3: İleri Seviye Özellikler ve Akıllı Entegrasyonlar (12-18 Ay ve Sonrası)

1.  **Creator Modülü Geliştirmesi:**
    * AI destekli belge oluşturma (ChatGPT/Bard API entegrasyonu).
    * Metin özetleme, soru-cevap asistanı.
2.  **Gelişmiş Finans Özellikleri:**
    * Bankacılık entegrasyonları (regülasyonlar dikkate alınarak).
    * Akıllı alışveriş listeleri, ev stoğu yönetimi.
    * OCR ile fatura okuma.
3.  **Tam Kapsamlı Medya Modülü:**
    * Otomatik medya yedekleme, gelişmiş medya oynatıcı.
4.  **Akıllı Ev Otomasyonu Entegrasyonu:** Seçilen akıllı ev platformları ile API entegrasyonları.
5.  **Yol Haritası Üretme Özelliği:** AI destekli kişisel yol haritası önerileri.
6.  **Sürekli İyileştirme:** Kullanıcı geri bildirimleri doğrultusunda yeni özellikler ekleme ve mevcutları optimize etme.

---

### 6. Teknik Gereksinimler ve Araçlar (Örnek)

* **Backend:** PHP (Mevcut), Laravel/Symfony (Yeni API'ler için), Node.js (WebSockets/AI entegrasyonları için).
* **Frontend (Web):** HTML, CSS, JavaScript (Mevcut PHP MVC için), React/Vue.js (Yeni modüller için).
* **Mobil:** Flutter / React Native (Cross-platform) veya Swift (iOS), Kotlin (Android) (Native).
* **Veritabanı:** PostgreSQL / MySQL, Redis (önbellekleme için).
* **Bulut Servisleri:** AWS / Google Cloud / Azure (Sunucu, veritabanı, AI servisleri, bildirimler).
* **AI/NLP Entegrasyonu:** OpenAI API (ChatGPT), Google Cloud AI Platform veya Hugging Face modelleri.
* **Sürüm Kontrolü:** Git (GitHub/GitLab).
* **Proje Yönetimi:** Jira, Trello, Asana.

---

### 7. Güvenlik ve Gizlilik

Kişisel verilerin hassasiyeti göz önüne alındığında, güvenlik en üst öncelik olmalıdır:

* **Veri Şifreleme:** Hassas verilerin (IBAN, şifreler, finansal bilgiler) hem transit halindeyken (SSL/TLS) hem de depolanırken şifrelenmesi.
* **Kimlik Doğrulama:** Güçlü kimlik doğrulama mekanizmaları (örn. 2FA - İki Faktörlü Kimlik Doğrulama).
* **Yetkilendirme:** Kullanıcıların sadece yetkili oldukları verilere erişebilmesi.
* **Düzenli Güvenlik Denetimleri:** Zafiyet tespiti için düzenli güvenlik testleri.
* **Gizlilik Politikası:** Verilerin nasıl toplandığı, kullanıldığı ve korunduğu hakkında şeffaf bir gizlilik politikası.

---
Klasör Yapısı
-----

### Proje Ana Dizini Yapısı

Ana projenizi `XtremeSuperApp` olarak adlandıralım. Bu dizin altında, her bir ana bileşenin kendi klasörü olacak:

```
XtremeSuperApp/
├── backend/            # PHP Backend (OOP MVC)
├── frontend/           # React, TypeScript, Tailwind CSS Frontend
└── mobile/             # Flutter Mobil Uygulama
```

-----

### 1\. Backend Klasör Yapısı (PHP - OOP MVC)

PHP backend'iniz için sağlam, ölçeklenebilir ve temiz bir OOP MVC yapısı kuracağız. Laravel veya Symfony gibi bir framework kullanıyorsanız yapı biraz farklılaşabilir, ancak bu öneri sıfırdan veya hafif bir MVC yapısı üzerine kurulu projeler için genel bir kılavuzdur.

```
backend/
├── app/
│   ├── Config/         # Uygulama yapılandırma dosyaları (veritabanı, ayarlar vb.)
│   │   └── App.php
│   │   └── Database.php
│   ├── Controllers/    # Uygulama mantığını işleyen kontrolcüler
│   │   ├── Api/        # API kontrolcüleri (mobil ve frontend için)
│   │   │   ├── AuthController.php
│   │   │   └── FinancialController.php
│   │   ├── Web/        # Web arayüzü kontrolcüleri (finans yönetiminin eski kısmı veya admin paneli)
│   │   │   └── DashboardController.php
│   │   └── BaseController.php # Ortak metotlar veya middleware için
│   ├── Models/         # Veritabanı etkileşimleri ve iş mantığı
│   │   ├── Entities/   # Veritabanı tablolarını temsil eden sınıflar (ör: User.php, Transaction.php)
│   │   ├── Repositories/ # Veritabanı işlemleri için repository pattern (opsiyonel ama iyi bir pratik)
│   │   │   ├── UserRepository.php
│   │   │   └── TransactionRepository.php
│   │   └── BaseModel.php # Tüm modellerin türediği temel model
│   ├── Views/          # (Opsiyonel) Eğer hala PHP ile render edilen web sayfaları varsa
│   │   ├── Layouts/
│   │   └── financial/
│   │       └── index.php
│   ├── Services/       # Karmaşık iş mantığı veya harici servis entegrasyonları
│   │   ├── AuthService.php
│   │   └── NotificationService.php
│   ├── Libraries/      # Üçüncü parti kütüphaneler veya yardımcı sınıflar (Helper, Utility)
│   │   └── Helper.php
│   ├── Core/           # Çekirdek MVC bileşenleri (Router, App, Request, Response)
│   │   ├── Router.php
│   │   ├── Application.php
│   │   ├── Request.php
│   │   └── Response.php
│   └── Middlewares/    # İstekleri işleme almadan önce veya sonra çalışan katmanlar (AuthMiddleware)
│       └── AuthMiddleware.php
├── public/             # Web sunucusu kök dizini (index.php, .htaccess)
│   ├── index.php       # Tüm isteklerin geçtiği ana giriş noktası
│   ├── .htaccess       # URL yönlendirmeleri için (Apache)
│   └── assets/         # Eğer varsa statik varlıklar (CSS, JS, resimler)
├── vendor/             # Composer bağımlılıkları (eğer kullanılıyorsa)
├── tests/              # Birim ve entegrasyon testleri
│   ├── Unit/
│   └── Feature/
├── storage/            # Log dosyaları, yüklenen dosyalar, cache
│   ├── logs/
│   ├── cache/
│   └── uploads/
├── .env                # Çevre değişkenleri (veritabanı bilgileri, API anahtarları)
├── composer.json       # Composer bağımlılıkları (eğer kullanılıyorsa)
├── composer.lock
└── README.md
```

**Açıklamalar:**

  * **`app/Config`**: Uygulamanızın tüm ayarları burada toplanır.
  * **`app/Controllers`**: API ve Web kontrolcülerini ayırmak, özellikle mobil ve web frontend'leri farklılaştığında çok önemlidir.
  * **`app/Models`**: **`Entities`** doğrudan veritabanı tablolarını yansıtırken, **`Repositories`** veritabanı işlemlerini soyutlar ve temiz bir katman sağlar.
  * **`app/Services`**: İş mantığını kontrolcülerden ayırmak için kullanılır. Bir kontrolcü, genellikle sadece bir servisi çağırır ve servisin sonucuyla ilgilenir.
  * **`public/index.php`**: Tüm istekler buraya yönlendirilir ve `Application` sınıfı tarafından işlenir.
  * **`.env`**: Hassas bilgileri ve ortama özel ayarları güvenli bir şekilde saklamak için kullanılır.

-----

### 2\. Frontend Klasör Yapısı (React, TypeScript, Tailwind CSS)

React uygulamanız için yaygın kullanılan, modüler ve düzenli bir yapı. TypeScript ve Tailwind CSS entegrasyonu da bu yapıya dahil edilmiştir.

```
frontend/
├── public/             # Statik dosyalar (index.html, favicon)
│   └── index.html
├── src/
│   ├── assets/         # Statik varlıklar (resimler, SVG'ler, fontlar)
│   │   ├── images/
│   │   └── icons/
│   ├── components/     # Tekrar kullanılabilir UI bileşenleri (Button, Input, Card)
│   │   ├── common/     # Genel, her yerde kullanılabilir bileşenler
│   │   │   └── Button/
│   │   │       ├── Button.tsx
│   │   │       └── Button.module.css # Tailwind ile doğrudan entegre edildiği için bu genelde olmaz
│   │   ├── financial/  # Finans modülüne özel bileşenler
│   │   │   └── TransactionTable.tsx
│   │   └── layout/     # Uygulamanın genel yerleşimi (Header, Sidebar, Footer)
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   ├── hooks/          # Özel React Hook'ları (useAuth, useFetch)
│   │   └── useAuth.ts
│   ├── pages/          # Uygulamanın farklı sayfaları/rotaları
│   │   ├── Auth/
│   │   │   └── LoginPage.tsx
│   │   ├── Dashboard/
│   │   │   └── DashboardPage.tsx
│   │   ├── Financial/
│   │   │   └── FinancialOverviewPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── services/       # API çağrıları ve harici servislerle etkileşim
│   │   ├── api.ts      # Axios/Fetch client kurulumu
│   │   └── authService.ts
│   ├── store/          # Durum yönetimi (Redux, Zustand, Recoil veya React Context)
│   │   ├── authSlice.ts # Redux Toolkit örneği
│   │   └── financialStore.ts
│   ├── types/          # TypeScript tipleri ve arayüzler
│   │   ├── auth.d.ts
│   │   ├── common.d.ts
│   │   └── financial.d.ts
│   ├── utils/          # Yardımcı fonksiyonlar (formatlama, tarih işlemleri)
│   │   └── helpers.ts
│   ├── App.tsx         # Ana uygulama bileşeni
│   ├── index.tsx       # Uygulama giriş noktası
│   └── reportWebVitals.ts
├── tailwind.config.js  # Tailwind CSS yapılandırma dosyası
├── postcss.config.js   # PostCSS yapılandırma (Tailwind için gerekli)
├── tsconfig.json       # TypeScript yapılandırma dosyası
├── package.json        # Bağımlılıklar ve script'ler
├── package-lock.json
└── README.md
```

**Açıklamalar:**

  * **`src/components`**: Hem genel (`common`) hem de modüle özel bileşenleri ayırmak, projenin büyümesiyle düzeni korumanıza yardımcı olur.
  * **`src/pages`**: Her bir ana rotayı veya ekranı temsil eden bileşenleri içerir.
  * **`src/services`**: Tüm API etkileşimleri ve diğer dış servis çağrıları burada merkezi bir şekilde yönetilir.
  * **`src/store`**: Uygulamanızın durum yönetimini organize eder. Hangi kütüphaneyi seçerseniz seçin (Redux, Zustand vb.), state'leri modüller halinde ayırmak iyi bir pratiktir.
  * **`src/types`**: TypeScript'in gücünü kullanarak API'lerden gelen veriler ve bileşen props'ları için tipleri tanımlarsınız.
  * **`tailwind.config.js`**: Projenize özel Tailwind CSS ayarlarını (renkler, fontlar, custom utility sınıfları) yapılandırırsınız.

-----

### 3\. Mobile Klasör Yapısı (Flutter)

Flutter projeniz için modüler, temiz ve ölçeklenebilir bir yapı.

```
mobile/
├── lib/
│   ├── api/            # Backend API ile iletişim sağlayan sınıflar
│   │   ├── api_client.dart
│   │   ├── auth_api.dart
│   │   └── financial_api.dart
│   ├── assets/         # Uygulama içindeki resimler, fontlar, ikonlar
│   │   ├── images/
│   │   └── fonts/
│   ├── components/     # Tekrar kullanılabilir widget'lar (Button, TextField, Card)
│   │   ├── common/     # Genel bileşenler
│   │   │   └── app_button.dart
│   │   ├── financial/  # Finans modülüne özel widget'lar
│   │   │   └── transaction_list_item.dart
│   │   └── layouts/    # Genel ekran düzenleri (Scaffold with AppBar)
│   │       └── main_layout.dart
│   ├── config/         # Uygulama ayarları, sabitler
│   │   └── app_constants.dart
│   ├── models/         # Veri modelleri (API'den gelen JSON'ı Dart objelerine çevirme)
│   │   ├── user.dart
│   │   └── transaction.dart
│   ├── routes/         # Uygulama rotaları ve navigasyon yönetimi
│   │   └── app_router.dart
│   ├── services/       # İş mantığı, depolama, bildirim gibi servisler
│   │   ├── auth_service.dart
│   │   └── notification_service.dart
│   ├── utils/          # Yardımcı fonksiyonlar (formatlama, doğrulama)
│   │   └── validators.dart
│   ├── views/          # Uygulamanın farklı ekranları/sayfaları
│   │   ├── auth/
│   │   │   └── login_screen.dart
│   │   ├── dashboard/
│   │   │   └── dashboard_screen.dart
│   │   ├── financial/
│   │   │   └── financial_overview_screen.dart
│   │   └── common/
│   │       └── splash_screen.dart
│   ├── main.dart       # Uygulamanın başlangıç noktası
│   └── providers/      # Durum yönetimi (Provider, BLoC, Riverpod, GetX)
│       ├── auth_provider.dart
│       └── financial_provider.dart
├── test/               # Birim ve widget testleri
│   └── widget_test.dart
├── pubspec.yaml        # Bağımlılıklar ve proje meta verileri
├── pubspec.lock
├── README.md
```

**Açıklamalar:**

  * **`lib/api`**: Tüm backend API çağrıları için merkezi bir yer. `api_client` sınıfı, HTTP isteklerini yönetirken, diğer sınıflar belirli API modüllerine odaklanır.
  * **`lib/components`**: Flutter'da widget'lar çok önemlidir. Genel ve modüle özel widget'ları ayırmak kod tekrarını azaltır.
  * **`lib/models`**: API'den gelen JSON verilerini Dart nesnelerine dönüştürmek için kullanılır (`json_serializable` gibi paketlerle otomatik oluşturulabilir).
  * **`lib/services`**: İş mantığı, cihaz depolaması, bildirimler gibi platforma özgü işlemleri veya daha karmaşık iş akışlarını yönetir.
  * **`lib/views`**: Kullanıcının gördüğü her bir ekran burada bulunur. Modül bazlı ayırmak, büyük projelerde yönetimi kolaylaştırır.
  * **`lib/providers`**: Seçtiğiniz durum yönetim kütüphanesine göre (Provider, BLoC, Riverpod, GetX) state'leri yöneten sınıflar veya mixin'ler bulunur.

-----

### Ortak Proje Geliştirme İpuçları

1.  **API Belgelendirme:** Backend API'leriniz için **Swagger/OpenAPI** kullanarak detaylı bir belgeleme oluşturun. Bu, frontend ve mobil ekiplerinin API'leri doğru ve verimli bir şekilde kullanmasını sağlar.
2.  **Versiyon Kontrolü:** Tüm projeleriniz için **Git** kullanın. Her modül için ayrı repolar yerine, ana `XtremeSuperApp` altında monorepo yapısı (bu önerideki gibi) kullanmak daha entegre bir geliştirme deneyimi sağlayabilir.
3.  **Çevre Değişkenleri:** Her projenin kendi `.env` dosyasını kullanarak **API URL'leri, anahtarlar** gibi hassas bilgileri ve ortama özel ayarları yönetin. Bu, geliştirme, test ve canlı ortamlar arasında kolayca geçiş yapmanızı sağlar.
4.  **Ortak Tipler/İnterface'ler:** Eğer mümkünse, backend ve frontend/mobil arasında paylaşılabilecek ortak veri yapıları (örneğin, kullanıcı modeli, işlem modeli) tanımlayın. TypeScript ve Dart'ın güçlü tip sistemleri bu konuda size yardımcı olacaktır. Belgeleme ile birlikte bu, tutarlılığı artırır.
5.  **Otomatik Testler:** Her bir katman (backend, frontend, mobil) için **birim, entegrasyon ve kabul testleri** yazmayı ihmal etmeyin. Bu, uygulamanızın kalitesini ve sürdürülebilirliğini artırır.
6.  **Kod Standartları ve Linting:** Takım içinde tutarlı kod yazımı için Prettier, ESLint (React için), PHP\_CodeSniffer (PHP için) ve Dart Analyzer (Flutter için) gibi araçları kullanın.

Bu detaylı yapı, projenizin başlangıcında sağlam bir temel atmanıza yardımcı olacaktır. Her bir klasörün amacı ve içindeki dosyaların mantığı anlaşıldığında, projenin büyümesiyle birlikte yönetimi çok daha kolay olacaktır.

------

Dosyaları Oluşturma

------
Harika\! **Xtreme Super App** projenizin tüm katmanlarını kapsayan, teknik detaylardan kullanım alanlarına, kurulum adımlarından proje yönetim kılavuzlarına kadar eksiksiz bir yol haritası hazırlayalım. Bu kılavuz, hem sizin hem de gelecekteki ekip üyelerinizin projeyi anlamasına ve geliştirmesine yardımcı olacak.

-----

## Xtreme Super App: Her Şey Tek Bir Yerde

**Xtreme Super App**, finans yönetiminden kişisel gelişime, eğlenceden günlük ajanda takibine kadar hayatınızın her alanını tek bir çatı altında birleştiren, yapay zeka destekli, kapsamlı bir kişisel asistan uygulamasıdır. Dağınık bilgileri ve görevleri tek bir merkezde toplayarak verimliliğinizi artırmayı ve sezgisel bir kullanıcı deneyimi sunmayı hedefler.

-----

### 1\. Proje Genel Yapısı ve Teknoloji Yığını

Xtreme Super App, üç ana bileşenden oluşan modern bir monorepo yapısına sahiptir:

```
XtremeSuperApp/
├── backend/            # PHP (OOP MVC) tabanlı API ve iş mantığı
├── frontend/           # React, TypeScript, Tailwind CSS ile web arayüzü
└── mobile/             # Flutter ile iOS ve Android mobil uygulamalar
```

#### Kullanılan Teknolojiler

  * **Backend:**
      * **PHP (OOP MVC):** Güçlü, modüler ve sürdürülebilir bir API katmanı oluşturmak için nesne yönelimli programlama prensipleriyle tasarlanmış MVC mimarisi.
      * **Veritabanı (MySQL/MariaDB):** Güvenilir ve hızlı veri depolama için ilişkisel veritabanı.
  * **Frontend (Web):**
      * **React:** Dinamik ve etkileşimli kullanıcı arayüzleri oluşturmak için önde gelen JavaScript kütüphanesi.
      * **TypeScript:** Kod kalitesini artıran, hata yakalamayı kolaylaştıran ve büyük projelerde geliştirme sürecini hızlandıran tip güvenliği.
      * **Tailwind CSS:** Hızlı ve esnek UI geliştirme sağlayan utility-first CSS framework'ü.
  * **Mobil Uygulama:**
      * **Flutter:** Tek bir kod tabanından hem iOS hem de Android için yüksek performanslı, görsel olarak çekici native uygulamalar geliştirmek için Google'ın UI toolkit'i.
  * **API İletişimi:**
      * **RESTful API'ler:** Backend, frontend ve mobil uygulamalar arasındaki iletişimi sağlayan standart tabanlı arayüzler.
  * **AI Entegrasyonu:**
      * **Generative AI API'leri (örneğin OpenAI, Google Gemini API):** Metin oluşturma, özetleme, soru yanıtlama ve sezgisel görev atama gibi akıllı özellikler için.

-----

### 2\. Projenin Temel Özellikleri ve Faydaları

Xtreme Super App, hayatınızın farklı yönlerini kolaylaştırmak için tasarlanmış modüler bir yapıya sahiptir:

#### A. Modüller ve Özellikler

1.  **Finans Modülü:**
      * **Kapsamlı Gider ve Gelir Takibi:** Kategori bazlı harcamalar, gelir kaynakları, fatura OCR ile otomatik giriş.
      * **Borç ve Alacak Yönetimi:** Kimden, ne kadar, ne zaman alacağınızı/borcunuzu takip etme.
      * **Kasa ve Banka Hesap Yönetimi:** Anlık nakit ve banka bakiyeleri, hesaplar arası aktarım, kasa denkleştirme.
      * **Abonelik Takibi:** Tüm düzenli ödemeleri tek bir yerden yönetme, yenileme hatırlatıcıları.
      * **Market & Stok Yönetimi:** Akıllı alışveriş listeleri, evdeki ürünlerin stok takibi, son kullanma tarihi uyarıları.
      * **Finansal Senaryolar:** Bütçeleme, tasarruf hedefleri, ödeme ve taksitlendirme planları oluşturma.
      * **Favori Ürünler & Fiyat Takibi:** Ürün tanıtım sayfaları, fiyat düşüş bildirimleri.
2.  **Yaşam Modülü:**
      * **Kişisel Hedef Belirleme ve Takibi:** SMART hedeflerle ilerlemeyi izleme.
      * **Alışkanlık Takibi:** Yeni alışkanlıklar edinme veya kötü alışkanlıklardan kurtulma.
      * **"Ölmeden Önce Yapılacaklar" Listesi:** Hayat hedeflerini finansal planlarla entegre etme.
      * **Günlük Duygu Takibi:** Ruh hali analizi ve görsel istatistikler.
3.  **Eğitim Modülü:**
      * **Kişisel Gelişim Yolu:** Kitap, makale, kurs önerileri ve takip listeleri.
      * **Çeşitli Alanlarda Eğitim Materyalleri:** Yazılım, psikoloji, hukuk, yapay zeka ve akademik kaynaklar.
      * **Video/Ders Not Alma:** Zaman damgalı notlar, tekrar izle/izledim/tavsiye et özellikleri.
      * **İlerleme Takibi:** Eğitimlerin tamamlanma durumunu görsel olarak izleme.
4.  **Creator Modülü:**
      * **AI Destekli Belge Oluşturucu:** Dilekçe, rapor, CV gibi belgeleri şablonlar ve yapay zeka yardımıyla hızlıca hazırlama.
      * **AI Sohbet Asistanı:** Soruları yanıtlama, bilgi sağlama ve metinleri geliştirme.
      * **Metin Özetleme ve Analiz:** Uzun metinleri özetleme, anahtar kelimeleri çıkarma.
      * **Görsel Rapor Çıktısı:** Verilerden otomatik grafikler ve infografikler oluşturma.
5.  **Ajanda Modülü:**
      * **Görev Yönetimi (To-Do List):** Önceliklendirme, son tarihler, alt görevler ve tekrarlayan görevler.
      * **Rehberler:** Güvenli IBAN, hesap bilgileri ve telefon rehberi.
      * **Akıllı Hatırlatıcılar:** Konum veya zamana dayalı hatırlatıcılar.
      * **Takvim Entegrasyonu:** Dış takvimlerle senkronizasyon.
6.  **Medya Modülü:**
      * **Medya Sunucusu Erişimi:** Kişisel medya sunucunuzdaki (NAS, Plex) içeriklere erişim.
      * **Müzik/Video Oynatıcı:** Uygulama içinde medya oynatma.
      * **Otomatik Medya Yedekleme:** Mobil cihazdan fotoğraf ve videoların otomatik yedeklenmesi.
      * **Uygulama Yedekleme:** Mobil uygulama ayarlarının ve verilerinin yedeklenmesi.

#### B. Evrensel Özellikler ve Akıllı Entegrasyonlar

  * **Akıllı Bildirim Sistemi:** Özelleştirilebilir, anlık bildirimler (finansal uyarılar, görev hatırlatıcıları, stok uyarıları).
  * **Görsel Raporlama ve Çıktı:** Finansal özetler, ilerleme grafikleri ve basılabilir raporlar.
  * **Gelişmiş Veri Import/Export:** Excel, CSV ve URL'den veri alabilme, Excel/CSV'ye veri aktarabilme.
  * **Sezgisel Sesli Asistan (Kilit Özellik):** Doğal dil işlemeyi kullanarak sesli komutları anlama ve akıllı kararlar verme.
      * **Örnek:** "VEO 3'ü dene" komutuyla otomatik olarak To-Do listesine görev ekleme, potansiyel harcama girişi yapma veya incelenecek uygulamalar listesine ekleme.
      * **Akıllı Ev Otomasyonu Entegrasyonu:** Sesli komutlarla akıllı ev sistemlerini kontrol etme ("Çamaşır makinesi bittiğinde kurutmayı başlat" komutunda kendi görevini oluşturma).
  * **Yol Haritası Üretme:** Belirli hedefler için adım adım kişiselleştirilmiş yol haritaları oluşturma.

#### C. Projenin Faydaları

  * **Merkezi Yönetim:** Dağınık verileri ve görevleri tek bir platformda toplar.
  * **Verimlilik Artışı:** Otomasyon ve yapay zeka destekli özelliklerle zaman kazandırır.
  * **Akıllı Kararlar:** Finansal ve kişisel verilerin analizini yaparak daha bilinçli kararlar almanıza yardımcı olur.
  * **Kişiselleştirme:** Kullanıcının ihtiyaçlarına göre özelleştirilebilir bir deneyim sunar.
  * **Erişilebilirlik:** Hem web hem de mobil platformlardan kesintisiz erişim sağlar.

-----

### 3\. Klasör ve Proje Yapısı

Proje, her biri kendi içinde bağımsız ancak birbiriyle entegre çalışan üç ana klasöre ayrılmıştır:

#### `XtremeSuperApp/backend/` (PHP - OOP MVC)

```
backend/
├── app/                  # Uygulama kaynak kodları
│   ├── Config/           # Uygulama genel yapılandırmaları
│   ├── Controllers/      # Gelen istekleri yöneten kontrolcüler (API ve Web için ayrı)
│   ├── Models/           # Veritabanı etkileşimleri ve iş mantığı (Entities, Repositories)
│   ├── Views/            # (Opsiyonel) Eğer PHP ile render edilen sayfalar varsa
│   ├── Services/         # Karmaşık iş akışlarını içeren servisler
│   ├── Libraries/        # Yardımcı sınıflar ve fonksiyonlar
│   ├── Core/             # Çekirdek MVC bileşenleri (Router, Application, Request, Response)
│   └── Middlewares/      # İstekleri ön işleyen katmanlar (örn: Kimlik doğrulama)
├── public/               # Web sunucusu kök dizini (index.php, .htaccess)
├── vendor/               # Composer bağımlılıkları
├── tests/                # Birim ve entegrasyon testleri
├── storage/              # Loglar, cache, yüklenen dosyalar
├── .env                  # Çevre değişkenleri (DB bilgileri, API anahtarları)
├── composer.json         # Proje bağımlılıkları
└── README.md             # Backend'e özel detaylı README
```

#### `XtremeSuperApp/frontend/` (React, TypeScript, Tailwind CSS)

```
frontend/
├── public/               # Statik dosyalar (index.html)
├── src/                  # React uygulama kaynak kodu
│   ├── assets/           # Resimler, ikonlar, fontlar
│   ├── components/       # Tekrar kullanılabilir UI bileşenleri (common/, financial/, layout/)
│   ├── hooks/            # Özel React Hook'ları
│   ├── pages/            # Uygulamanın farklı rotalarını temsil eden bileşenler
│   ├── services/         # API çağrıları ve harici servislerle iletişim
│   ├── store/            # Durum yönetimi (Redux/Zustand/Context vb.)
│   ├── types/            # TypeScript tipleri ve arayüzler
│   ├── utils/            # Yardımcı fonksiyonlar
│   ├── App.tsx           # Ana uygulama bileşeni
│   └── index.tsx         # Uygulama giriş noktası
├── tailwind.config.js    # Tailwind CSS yapılandırması
├── postcss.config.js     # PostCSS yapılandırması
├── tsconfig.json         # TypeScript yapılandırması
├── package.json          # Node.js bağımlılıkları ve script'ler
└── README.md             # Frontend'e özel detaylı README
```

#### `XtremeSuperApp/mobile/` (Flutter)

```
mobile/
├── lib/                  # Dart uygulama kaynak kodu
│   ├── api/              # Backend API ile iletişim sağlayan sınıflar
│   ├── assets/           # Uygulama içi resimler, fontlar
│   ├── components/       # Tekrar kullanılabilir widget'lar (common/, financial/, layouts/)
│   ├── config/           # Uygulama ayarları, sabitler
│   ├── models/           # Veri modelleri (JSON -> Dart objeleri)
│   ├── routes/           # Uygulama içi navigasyon yönetimi
│   ├── services/         # İş mantığı, depolama, bildirim servisleri
│   ├── utils/            # Yardımcı fonksiyonlar
│   ├── views/            # Uygulamanın farklı ekranları/sayfaları
│   ├── main.dart         # Uygulamanın başlangıç noktası
│   └── providers/        # Durum yönetimi (Provider/BLoC/Riverpod vb.)
├── test/                 # Birim ve widget testleri
├── pubspec.yaml          # Flutter bağımlılıkları ve proje meta verileri
└── README.md             # Mobile uygulamaya özel detaylı README
```

-----

### 4\. Geliştirme ve Dağıtım Yol Haritası (Roadmap)

Proje, aşamalı bir yaklaşımla geliştirilecek ve ölçeklenebilirlik göz önünde bulundurulacaktır.

#### Aşama 1: Temel Entegrasyon ve Finans Odaklı MVP (Minimum Viable Product)

  * **Backend:** Mevcut PHP finans altyapısını API'leştirmek, temel kimlik doğrulama (Auth) API'lerini kurmak, veritabanı bağlantılarını sağlamlaştırmak.
  * **Frontend (Web):** Temel finansal göstergeleri, gelir/gider takibini ve bütçe özetlerini gösteren bir dashboard sayfası oluşturmak. Mobil için API entegrasyonunu kolaylaştıracak web arayüzü tasarlamak.
  * **Mobil:** Kullanıcı girişi ve temel finansal verileri (bakiyeler, son işlemler) görüntüleyen basit bir mobil uygulama geliştirmek.
  * **Ortak:** Bildirim sistemi altyapısını kurmak. Temel veri import/export (Excel/CSV) yeteneklerini eklemek.

#### Aşama 2: Temel Modüllerin Genişletilmesi ve Akıllı Özelliklerin Başlangıcı

  * **Backend:** Yaşam, Ajanda ve Medya modüllerinin temel API'lerini geliştirmek. Sezgisel veri işleme için AI servis entegrasyonlarına başlamak.
  * **Frontend (Web):** Yaşam (hedef/alışkanlık takibi) ve Ajanda (To-Do list) modüllerinin web arayüzlerini geliştirmek. Creator modülü için AI entegrasyonlu metin oluşturma taslaklarını sunmak.
  * **Mobil:** Yaşam (hedef/alışkanlık takibi), Ajanda (To-Do list) ve Medya (basit medya görüntüleme) modüllerini mobil uygulamaya entegre etmek. Mobil uygulamadan not/to-do güncelleme ve istem gönderme yeteneği.
  * **Ortak:** Sesli asistanın MVP'sini (basit komut algılama ve görev atama) devreye almak. Favori ürünler ve fiyat takibi özelliğini eklemek. YouTube ve Instagram sayfaları için tanıtım materyalleri hazırlamak.

#### Aşama 3: İleri Seviye Entegrasyonlar ve Akıllı Otomasyon

  * **Backend:** Gelişmiş finansal senaryolar, akıllı ev otomasyonu entegrasyonları, OCR ile fatura okuma gibi daha karmaşık AI destekli servisler.
  * **Frontend (Web):** Creator modülünü tam kapsamlı hale getirmek (rapor, dilekçe oluşturma, AI sohbet). Finans modülündeki akıllı alışveriş listeleri, stok takibi gibi detaylı özellikleri sunmak.
  * **Mobil:** Sesli asistanın sezgisel veri işleme ve akıllı ev otomasyonu entegrasyonlarını tamamlamak. Otomatik medya yedekleme ve gelişmiş medya yönetimi.
  * **Ortak:** Kapsamlı görsel raporlama ve çıktı özelliklerini devreye almak. Yol haritası üretme aracını geliştirmek.

#### Aşama 4: Optimizasyon, Güvenlik ve Sürekli Gelişim

  * **Performans Optimizasyonu:** Uygulamanın hızını ve tepki süresini iyileştirmek.
  * **Güvenlik Denetimleri:** Veri güvenliğini sağlamak için düzenli güvenlik testleri ve zafiyet giderme.
  * **Kullanıcı Geri Bildirimleri:** Kullanıcı deneyimini geliştirmek için geri bildirimleri toplamak ve değerlendirmek.
  * **Yeni Özellikler:** Piyasa ihtiyaçları ve teknolojik gelişmelere göre yeni özellikler eklemek.

-----

### 5\. Projeyi Görüntülemek İçin Gerekli Altyapılar (Localhost Ortamı)

Projenin tüm bileşenlerini kendi bilgisayarınızda (localhost) çalıştırmak ve görüntülemek için belirli yazılımlara ve ayarlara ihtiyacınız vardır.

#### A. Backend (PHP) İçin Gerekli Yapılar

  * **Web Sunucusu:**
      * **XAMPP / WAMP / MAMP:** PHP, Apache/Nginx ve MySQL/MariaDB'yi bir arada sunan hepsi bir arada paketler.
      * **Alternatif:** Manuel Apache veya Nginx kurulumu ve PHP-FPM entegrasyonu.
  * **Veritabanı Sunucusu:**
      * **MySQL / MariaDB:** Verilerinizi depolamak için. XAMPP gibi paketlerle gelir.
  * **PHP:**
      * PHP yorumlayıcısı ve gerekli eklentiler (PDO, cURL vb.).
  * **Composer (Opsiyonel ama Önerilir):** PHP bağımlılıklarını yönetmek için.
  * **Nasıl Görüntülenir:**
    1.  Backend klasörünü web sunucunuzun `htdocs` veya belirlenmiş kök dizinine kopyalayın.
    2.  Veritabanınızı oluşturup şemanızı içe aktarın ve bağlantı bilgilerini `backend/.env` veya `backend/app/Config/Database.php` dosyasında yapılandırın.
    3.  Web sunucusunu (Apache/Nginx) ve veritabanı sunucusunu (MySQL/MariaDB) başlatın.
    4.  Tarayıcınızdan `http://localhost/backend/public/` veya yapılandırdığınız sanal ana bilgisayar adresi (örn. `http://superapp.test/`) üzerinden erişebilirsiniz. API'ler için Postman/Insomnia gibi araçlar kullanabilirsiniz.

#### B. Frontend (React) İçin Gerekli Yapılar

  * **Node.js:** JavaScript çalışma zamanı ortamı.
  * **npm (Node Package Manager) veya Yarn:** JavaScript bağımlılıklarını yönetmek için.
  * **Tarayıcı:** Google Chrome, Mozilla Firefox gibi modern bir web tarayıcısı.
  * **Nasıl Görüntülenir:**
    1.  Terminalde `XtremeSuperApp/frontend/` dizinine gidin.
    2.  `npm install` (veya `yarn install`) ile bağımlılıkları yükleyin.
    3.  `npm start` (veya `yarn start`) komutunu çalıştırın.
    4.  Uygulama otomatik olarak genellikle `http://localhost:3000` adresinde açılacaktır. Frontend API çağrıları için backend URL'nizin (örn. `http://localhost/backend/public/api`) doğru yapılandırıldığından emin olun.

#### C. Mobil Uygulama (Flutter) İçin Gerekli Yapılar

  * **Flutter SDK:** Flutter geliştirme ortamı.
  * **Android SDK ve Android Studio:** Android emülatörleri veya fiziksel cihazda çalıştırmak için.
  * **Xcode (macOS için):** iOS simülatörleri veya fiziksel cihazda çalıştırmak için.
  * **Fiziksel Cihaz veya Emülatör/Simülatör:** Uygulamayı üzerinde çalıştıracağınız bir cihaz.
  * **Nasıl Görüntülenir:**
    1.  Terminalde `XtremeSuperApp/mobile/` dizinine gidin.
    2.  `flutter pub get` ile bağımlılıkları yükleyin.
    3.  Bir cihaz veya emülatör/simülatör seçin (`flutter devices`).
    4.  `flutter run` komutunu çalıştırın.
    5.  Uygulama seçili cihazda derlenip yüklenecek ve otomatik olarak başlayacaktır. Mobil uygulama API çağrıları için backend URL'nizin (örn. Android emülatör için `http://10.0.2.2/backend/public/api`, iOS simülatör için `http://localhost/backend/public/api`) doğru yapılandırıldığından emin olun.

-----

### 6\. Context Engineering İçin Markdown Kılavuzları

Proje genelinde tutarlılığı ve anlaşılırlığı sağlamak için her bir ana klasörde (backend, frontend, mobile) ve ana projenin kök dizininde `README.md` dosyaları oluşturmak kritik öneme sahiptir. Bu `README` dosyaları "Context Engineering" prensiplerine uygun olarak, ilgili bölümün ne olduğunu, nasıl çalıştığını ve nasıl geliştirileceğini net bir şekilde anlatmalıdır.

Aşağıda örnek bir `README.md` yapısı ve içermesi gerekenler verilmiştir:

#### `XtremeSuperApp/README.md` (Ana Proje README)



Tamamdır\! `XtremeSuperApp` ana proje klasörünüzün yerel bilgisayarınızda nerede olması gerektiği ve web sunucusu (Apache/Nginx/XAMPP/Laragon) ayarlarıyla nasıl etkileşime girmesi gerektiği hakkında net bir açıklama hazırlayalım. Bunu ana `README.md` dosyanıza ekleyebileceğiniz bir formatta sunacağım.

-----

### Proje Klasörünün Fiziksel Konumu ve Web Sunucusu Yapılandırması

`XtremeSuperApp` monorepo'nuzun yerel geliştirme ortamınızda nerede bulunması gerektiği, kullandığınız işletim sistemine ve yerel web sunucusu yazılımına (XAMPP, Laragon, WAMP, MAMP veya manuel Apache/Nginx kurulumu) göre değişiklik gösterebilir.

**Önemli Prensip:** Projenizin tüm kök dizini (`XtremeSuperApp/`) herhangi bir yerde olabilir (örneğin, belgelerim klasörünüzde, `C:\Projects\` altında veya `/home/kullanici/dev/` içinde). **Ancak, PHP backend'inizin sadece `public/` klasörünün web sunucunuz tarafından erişilebilir olması gerekir.** Bu, güvenlik açısından kritik bir önlemdir.

-----

### Önerilen Yerleşim ve Yapılandırma Senaryoları

#### 1\. XAMPP (Windows, macOS, Linux) veya WAMP (Windows) Kullanıcıları İçin

  * **Proje Yerleşimi:** `XtremeSuperApp` ana klasörünüzü **`htdocs` klasörünün DIŞINDA** bir yere yerleştirin. Örneğin:

      * **Windows:** `C:\Users\KullaniciAdiniz\Documents\XtremeSuperApp` veya `C:\Projects\XtremeSuperApp`
      * **macOS/Linux:** `/Users/KullaniciAdiniz/Documents/XtremeSuperApp` veya `/home/KullaniciAdiniz/dev/XtremeSuperApp`

  * **Web Sunucusu Yapılandırması (Apache):** Apache sunucunuzu, `XtremeSuperApp/backend/public` dizinini işaret eden bir **Sanal Ana Bilgisayar (Virtual Host)** olarak yapılandırmalısınız. Bu, backend'inizin güvenli ve güzel bir URL (`http://api.xtremesuperapp.test` gibi) üzerinden erişilmesini sağlar.

    **Örnek Apache Virtual Host (httpd-vhosts.conf dosyasına eklenecek):**

    ```apache
    <VirtualHost *:80>
        # Projenizin backend public klasörünün tam yolu
        # Örnek: C:/Projects/XtremeSuperApp/backend/public (Windows)
        # Örnek: /home/kullanici/dev/XtremeSuperApp/backend/public (Linux/macOS)
        DocumentRoot "/path/to/your/XtremeSuperApp/backend/public"
        ServerName api.xtremesuperapp.test # Kendi belirlediğiniz alan adı
        <Directory "/path/to/your/XtremeSuperApp/backend/public">
            AllowOverride All
            Require all granted
        </Directory>
        ErrorLog "${APACHE_LOG_DIR}/api_xtremesuperapp_error.log"
        CustomLog "${APACHE_LOG_DIR}/api_xtremesuperapp_access.log" common
    </VirtualHost>
    ```

      * **Hosts Dosyası Güncellemesi:** İşletim sisteminizin `hosts` dosyasına (`C:\Windows\System32\drivers\etc\hosts` - Windows / `/etc/hosts` - Linux/macOS) aşağıdaki satırı eklemeyi unutmayın:
        ```
        127.0.0.1       api.xtremesuperapp.test
        ```

  * **Neden `htdocs` Dışında?** Eğer tüm `XtremeSuperApp` projesini doğrudan `htdocs` altına koyarsanız (`C:\xampp\htdocs\XtremeSuperApp`), web sunucusu `backend/public` dışındaki diğer tüm klasörlere (örneğin `.env` dosyanız, `app/` klasörünüzdeki kodlar) doğrudan erişime izin verebilir. Bu, ciddi bir güvenlik zafiyetidir. Sanal ana bilgisayar ile sadece `public` klasörünü hedeflemek en güvenli yaklaşımdır.

````markdown
# Xtreme Super App

Bu depo, Xtreme Super App'in tüm bileşenlerini içeren monorepo yapısıdır. Xtreme Super App, finans yönetiminden kişisel gelişime, eğlenceden günlük ajanda takibine kadar hayatınızın her alanını tek bir çatı altında birleştiren, yapay zeka destekli, kapsamlı bir kişisel asistan uygulamasıdır.

---

## Proje Bileşenleri

Bu depo üç ana bölümden oluşmaktadır:

1.  **`backend/`**: PHP (OOP MVC) tabanlı RESTful API ve tüm iş mantığını barındırır.
2.  **`frontend/`**: React, TypeScript ve Tailwind CSS kullanılarak geliştirilmiş web tabanlı kullanıcı arayüzü.
3.  **`mobile/`**: Flutter kullanılarak geliştirilmiş iOS ve Android mobil uygulamalar.

Her bir bileşenin kendi özel README dosyası bulunmaktadır. Detaylı bilgi ve kurulum talimatları için lütfen ilgili klasördeki `README.md` dosyalarını inceleyin.

---

## Başlarken

Projenin tamamını yerel ortamınızda çalıştırmak için aşağıdaki genel adımları takip etmeniz gerekmektedir. Her bir bileşenin detaylı kurulumu için ilgili alt klasörlerin README'lerine bakınız.

### 1. Sistem Gereksinimleri

* **PHP 8.x** veya üzeri
* **MySQL 8.x** veya üzeri (veya MariaDB)
* **Node.js 16.x** veya üzeri (npm veya Yarn ile birlikte)
* **Flutter SDK 3.x** veya üzeri
* **Android Studio** (Android geliştirme için)
* **Xcode** (iOS geliştirme için - macOS gerektirir)
* **Git**

### 2. Genel Kurulum Adımları

1.  Bu depoyu klonlayın:
    ```bash
    git clone [https://github.com/your-username/xtreme-super-app.git](https://github.com/your-username/xtreme-super-app.git)
    cd xtreme-super-app
    ```
2.  **Backend Kurulumu:**
    * `cd backend` dizinine gidin ve `backend/README.md` dosyasındaki talimatları takip edin.
    * Apache/Nginx ve MySQL'i başlatın, veritabanını yapılandırın.
3.  **Frontend Kurulumu:**
    * `cd frontend` dizinine gidin ve `frontend/README.md` dosyasındaki talimatları takip edin.
    * `npm install` (veya `yarn install`) komutunu çalıştırın.
4.  **Mobil Uygulama Kurulumu:**
    * `cd mobile` dizinine gidin ve `mobile/README.md` dosyasındaki talimatları takip edin.
    * `flutter pub get` komutunu çalıştırın.

### 3. Uygulamaları Çalıştırma

Tüm bileşenler ayrı ayrı çalıştırılmalıdır:

* **Backend:** Apache/Nginx ve MySQL çalışıyor olmalı. API endpoint'leriniz `http://localhost/backend/public/api` adresinden erişilebilir olmalı.
* **Frontend:** `cd frontend` dizininde `npm start` (veya `yarn start`) komutunu çalıştırın. Web uygulaması genellikle `http://localhost:3000` adresinde açılacaktır.
* **Mobil Uygulama:** `cd mobile` dizininde bir emülatör/simülatör seçip `flutter run` komutunu çalıştırın. Uygulama seçili cihazda başlayacaktır.

---

## Proje Geliştirme Rehberi

* **Kod Standartları:** Her bileşenin kendi kod standartları ve linting kuralları vardır (bkz: ilgili README'ler). Lütfen bu standartlara uyun.
* **Testler:** Her özellik için birim ve entegrasyon testleri yazmak zorunludur.
* **API Belgelendirmesi:** Backend API'leri Swagger/OpenAPI ile belgelenmelidir.
* **Git Akışı:** Özellik dalları (feature branches) kullanın ve `main` branch'ine doğrudan push yapmayın. Pull Request (PR) göndermeden önce kod incelemesi isteyin.

---

## Katkıda Bulunma

Katkı sağlamak isterseniz, lütfen [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını inceleyin.

---

## Lisans

[LİSANS DOSYASI BURAYA GELECEK]

---

## İletişim

Sorularınız veya geri bildirimleriniz için [email adresiniz] adresinden iletişime geçebilirsiniz.

````

-----

#### `XtremeSuperApp/backend/README.md` (Backend README)

````markdown
# Xtreme Super App - Backend

Bu klasör, Xtreme Super App'in PHP (OOP MVC) tabanlı RESTful API'sini ve tüm sunucu tarafı iş mantığını içerir. Frontend (React) ve mobil (Flutter) uygulamaları bu API üzerinden veri alışverişi yapar.

---

## Mimari

Proje, temiz mimari prensiplerine uygun olarak, sorumlulukları ayrılmış bir OOP MVC yapısında geliştirilmiştir.

* **`app/Controllers`**: Gelen HTTP isteklerini işler ve iş mantığını servislere devreder.
* **`app/Models`**: Veritabanı etkileşimlerini ve veri yapılarını yönetir (`Entities` ve `Repositories`).
* **`app/Services`**: İş mantığını ve karmaşık algoritmaları barındırır, kontrolcülerden soyutlar.
* **`public/index.php`**: Tüm isteklerin geçtiği ana giriş noktasıdır ve yönlendirme (`app/Core/Router.php`) burada başlar.

---

## Gereklilikler

* PHP 8.x veya üzeri
* MySQL 8.x veya üzeri (veya MariaDB)
* Composer (Bağımlılık yönetimi için)
* Apache veya Nginx (Web sunucusu)

---

## Kurulum Talimatları

1.  **Dizin Yapılandırması:** `backend` klasörünü web sunucunuzun (Apache/Nginx) belge kök dizinine (örneğin `/var/www/html/` veya `C:\xampp\htdocs\`) kopyalayın. Alternatif olarak, `public` dizinini web kök dizini olarak ayarlayan bir sanal ana bilgisayar yapılandırması yapın.
    ```apache
    # Apache Virtual Host Örneği (httpd-vhosts.conf dosyasına ekleyin)
    <VirtualHost *:80>
        DocumentRoot "/path/to/XtremeSuperApp/backend/public"
        ServerName superapp.test
        <Directory "/path/to/XtremeSuperApp/backend/public">
            AllowOverride All
            Require all granted
        </Directory>
        ErrorLog "${APACHE_LOG_DIR}/superapp_error.log"
        CustomLog "${APACHE_LOG_DIR}/superapp_access.log" common
    </VirtualHost>
    ```
    (Windows'ta `C:\Windows\System32\drivers\etc\hosts` dosyasına `127.0.0.1 superapp.test` eklemeyi unutmayın.)

2.  **Bağımlılıkları Yükleme:** `backend` dizininde Composer bağımlılıklarını yükleyin:
    ```bash
    cd XtremeSuperApp/backend
    composer install
    ```
3.  **Çevre Değişkenleri (`.env`):** `.env.example` dosyasını `backend/.env` olarak kopyalayın ve aşağıdaki değişkenleri kendi ayarlarınıza göre düzenleyin:
    ```dotenv
    DB_HOST=localhost
    DB_NAME=xtreme_super_app_db
    DB_USER=root
    DB_PASS=
    # ... diğer API anahtarları veya ayarlar
    ```
4.  **Veritabanı Oluşturma:** MySQL/MariaDB sunucunuzu başlatın ve `xtreme_super_app_db` adında bir veritabanı oluşturun.
    ```sql
    CREATE DATABASE xtreme_super_app_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    ```
5.  **Veritabanı Migrasyonları (Varsa):** Eğer proje migrasyon kullanıyorsa, bunları çalıştırın (örnek bir komut):
    ```bash
    php artisan migrate # (Eğer Laravel gibi bir framework kullanılıyorsa)
    # Veya kendi migrasyon script'inizi çalıştırın
    ```

---

## API Dokümantasyonu

API endpoint'lerinin detaylı dokümantasyonu için `[ProjeRoot]/docs/api_swagger.yaml` (veya benzeri bir yol) dosyasına bakınız. Ayrıca Postman veya Insomnia gibi araçlarla API'leri test edebilirsiniz.

**Bazı Örnek API Uç Noktaları:**

* `POST /api/auth/login`
* `GET /api/financial/transactions`
* `POST /api/todo/create`

---

## Testler

Birim ve entegrasyon testlerini çalıştırmak için:
```bash
./vendor/bin/phpunit # (Eğer PHPUnit kullanılıyorsa)
````

-----

## Ortak Problemler ve Çözümleri

  * **`public` dizinine erişilemiyor:** Web sunucunuzun belge kök dizini doğru ayarlanmamış veya `.htaccess` kuralları çalışmıyor olabilir.
  * **Veritabanı bağlantı hatası:** `.env` dosyasındaki veritabanı bilgilerinizi kontrol edin.
  * **Composer hataları:** `composer diagnose` komutunu çalıştırın veya Composer önbelleğini temizleyin (`composer clear-cache`).

<!-- end list -->

````

---

#### `XtremeSuperApp/frontend/README.md` (Frontend README)

```markdown
# Xtreme Super App - Frontend (Web)

Bu klasör, Xtreme Super App'in React, TypeScript ve Tailwind CSS ile geliştirilmiş web tabanlı kullanıcı arayüzünü içerir. Backend API'leri ile iletişim kurarak kullanıcıya zengin ve etkileşimli bir deneyim sunar.

---

## Geliştirme Ortamı

* **React 18+**
* **TypeScript**
* **Tailwind CSS 3+**
* **Node.js 16+**
* **npm 8+** veya **Yarn 1.x**

---

## Kurulum Talimatları

1.  **Dizin Değiştirme:** `frontend` dizinine gidin:
    ```bash
    cd XtremeSuperApp/frontend
    ```
2.  **Bağımlılıkları Yükleme:**
    ```bash
    npm install
    # veya
    yarn install
    ```
3.  **Çevre Değişkenleri (`.env`):** `.env.example` dosyasını `frontend/.env` olarak kopyalayın ve API URL'nizi güncelleyin:
    ```dotenv
    # Backend API'nizin adresi
    REACT_APP_API_URL=http://localhost/backend/public/api
    # Eğer sanal ana bilgisayar kullanıyorsanız:
    # REACT_APP_API_URL=[http://superapp.test/api](http://superapp.test/api)
    ```

---

## Uygulamayı Çalıştırma

Geliştirme sunucusunu başlatmak için:

```bash
npm start
# veya
yarn start
````

Bu komut, uygulamayı derleyecek ve genellikle `http://localhost:3000` adresinde tarayıcınızda otomatik olarak açacaktır. Kodda yaptığınız değişiklikler otomatik olarak yeniden yüklenecektir (Hot Reload).

-----

## Klasör Yapısı Açıklaması

  * **`src/components`**: Tekrar kullanılabilir UI bileşenleri.
  * **`src/pages`**: Her bir ana rota/ekranın bileşenleri.
  * **`src/services`**: API çağrıları ve harici servislerle etkileşim (`api.ts` dosyası API client'ınızı yapılandırır).
  * **`src/store`**: Uygulama durumu yönetimi (Redux, Zustand, React Context vb. tercih ettiğiniz duruma göre).
  * **`src/types`**: TypeScript'in tip tanımlamaları.
  * **`tailwind.config.js`**: Tailwind CSS'in projenize özel yapılandırmaları.

-----

## Kod Standartları ve Linting

Proje, ESLint ve Prettier kullanılarak kod kalitesi ve tutarlılığı sağlanmaktadır.

  * Hata bulma ve otomatik düzeltme için:
    ```bash
    npm run lint:fix
    ```

-----

## Ortak Problemler ve Çözümleri

  * **CORS Hatası:** Frontend'den backend'e istek atarken `CORS` hatası alıyorsanız, backend'inizde CORS ayarlarının doğru yapıldığından emin olun (origin olarak `http://localhost:3000`'e izin vermeniz gerekebilir).
  * **API URL Hatası:** `.env` dosyasındaki `REACT_APP_API_URL` değişkeninin doğru backend adresine işaret ettiğinden emin olun.

<!-- end list -->

````

---

#### `XtremeSuperApp/mobile/README.md` (Mobile README)

```markdown
# Xtreme Super App - Mobil Uygulama

Bu klasör, Xtreme Super App'in Flutter ile geliştirilmiş iOS ve Android mobil uygulamalarını içerir. Kullanıcıların hareket halindeyken uygulamanın tüm özelliklerine erişmesini sağlar ve platforma özgü entegrasyonları barındırır.

---

## Geliştirme Ortamı

* **Flutter SDK 3.x** veya üzeri
* **Dart SDK 2.x** veya üzeri
* **Android Studio** (Android emülatörü/SDK için)
* **Xcode** (iOS simülatörü/SDK için - macOS gerektirir)
* **VS Code** veya **Android Studio/IntelliJ IDEA** (Geliştirme IDE'si olarak önerilir, Flutter eklentileri yüklü olmalı)

---

## Kurulum Talimatları

1.  **Dizin Değiştirme:** `mobile` dizinine gidin:
    ```bash
    cd XtremeSuperApp/mobile
    ```
2.  **Bağımlılıkları Yükleme:**
    ```bash
    flutter pub get
    ```
3.  **Çevre Değişkenleri (`.env` veya `lib/config/app_constants.dart`):** API URL'nizi yapılandırın. Android emülatörler için özel bir IP gerekebilir.
    ```dart
    // lib/config/app_constants.dart örneği
    class AppConstants {
      // Android emülatörü için bilgisayarınızın localhost'una erişim IP'si
      static const String API_BASE_URL_ANDROID_EMULATOR = '[http://10.0.2.2/backend/public/api](http://10.0.2.2/backend/public/api)';
      // iOS simülatörü veya fiziksel cihaz için (bilgisayarınızın localhost'u)
      static const String API_BASE_URL_IOS_SIMULATOR_OR_PHYSICAL = 'http://localhost/backend/public/api';
      // Eğer sanal ana bilgisayar kullanıyorsanız:
      // static const String API_BASE_URL_VIRTUAL_HOST = '[http://superapp.test/api](http://superapp.test/api)';

      // Aktif kullanılan URL
      static const String API_BASE_URL = API_BASE_URL_ANDROID_EMULATOR; // Veya diğerini seçin/dinamik hale getirin
    }
    ```

---

## Uygulamayı Çalıştırma

1.  **Cihazı Seçme:** Bağlı bir fiziksel cihazınızın veya açık bir emülatör/simülatörünüzün olduğundan emin olun.
    ```bash
    flutter devices
    ```
    Eğer cihazınız görünmüyorsa, emülatörü başlatın veya fiziksel cihazınızda USB hata ayıklamayı etkinleştirin.
2.  **Uygulamayı Başlatma:**
    ```bash
    flutter run
    ```
    Bu komut, uygulamayı derleyecek ve seçili cihaza yükleyecektir.

---

## Klasör Yapısı Açıklaması

* **`lib/api`**: Backend API'leri ile iletişim kuran sınıflar.
* **`lib/components`**: Tekrar kullanılabilir özel widget'lar.
* **`lib/models`**: API yanıtlarından gelen JSON verilerini Dart nesnelerine dönüştüren veri modelleri.
* **`lib/views`**: Uygulamanın farklı ekranları (UI ve ekran mantığı).
* **`lib/providers`**: Durum yönetimi için (Provider, BLoC, Riverpod, GetX gibi tercih ettiğiniz duruma göre).

---

## Testler

Uygulamanın birim ve widget testlerini çalıştırmak için:
```bash
flutter test
````

-----

## Ortak Problemler ve Çözümleri



<!-- end list -->

```

Bu detaylı yol haritası ve Context Engineering'e uygun README kılavuzları, Xtreme Super App projenizin her katmanını anlamanıza, geliştirmenize ve yönetmenize büyük ölçüde yardımcı olacaktır.
```
