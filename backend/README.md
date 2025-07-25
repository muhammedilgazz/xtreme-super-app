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
```

---

## Ortak Problemler ve Çözümleri

* **`public` dizinine erişilemiyor:** Web sunucunuzun belge kök dizini doğru ayarlanmamış veya `.htaccess` kuralları çalışmıyor olabilir.
* **Veritabanı bağlantı hatası:** `.env` dosyasındaki veritabanı bilgilerinizi kontrol edin.
* **Composer hataları:** `composer diagnose` komutunu çalıştırın veya Composer önbelleğini temizleyin (`composer clear-cache`).