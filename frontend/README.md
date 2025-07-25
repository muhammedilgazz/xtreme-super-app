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
```

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