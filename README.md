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
