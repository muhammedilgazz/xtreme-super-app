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
```

-----

## Ortak Problemler ve Çözümleri