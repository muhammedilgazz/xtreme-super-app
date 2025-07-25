# Context Engineering Guidelines for Xtreme Super App

Bu belge, Xtreme Super App projesinde "Context Engineering" prensiplerinin nasıl uygulanacağını açıklar. Projenin monorepo yapısı göz önüne alındığında, her bir bileşenin kendi bağlamının net bir şekilde tanımlanması ve sürdürülmesi kritik öneme sahiptir.

## Context Engineering Nedir?

Context Engineering, yazılım projelerinde bilgi akışını optimize etmek ve geliştiricilerin, sistemin veya bir bileşenin amacını, işlevselliğini, bağımlılıklarını ve nasıl etkileşim kurduğunu hızlıca anlamalarını sağlamak amacıyla bağlamsal bilgileri (context) açık, erişilebilir ve güncel tutma pratiğidir. Bu, özellikle büyük ve karmaşık monorepo projelerinde geliştirme verimliliğini artırır, hataları azaltır ve yeni ekip üyelerinin projeye adaptasyonunu hızlandırır.

## Neden Xtreme Super App İçin Önemli?

Xtreme Super App, backend, frontend ve mobil gibi farklı teknolojilerle geliştirilmiş birden fazla bileşenden oluşan bir monorepodur. Bu durum, her bir bileşenin kendi içinde ve diğer bileşenlerle olan etkileşimlerinin doğru bir şekilde belgelenmesini zorunlu kılar. Context engineering sayesinde:

*   **Tek Bir Kaynak Kontrol Noktası:** Tüm kod tabanı tek bir depoda olduğu için, her bileşenin kendi bağlamını net bir şekilde tanımlamak, genel proje yapısını anlamayı kolaylaştırır.
*   **Tutarlı Geliştirme Ortamı:** Geliştiricilerin farklı bileşenler üzerinde çalışırken ihtiyaç duyduğu tüm bilgiyi tek bir yerde bulmasını sağlar.
*   **Kolaylaştırılmış Kod Paylaşımı:** Ortak kullanılan modüllerin veya API'lerin nasıl entegre edileceği netleşir.
*   **Atomik Değişiklikler ve Kolay Gözden Geçirme:** Bir özelliğin birden fazla katmanı etkilediği durumlarda, tüm bağlamın tek bir yerden erişilebilir olması, kod incelemelerini daha verimli hale getirir.

## Xtreme Super App'te Context Engineering Uygulamaları

1.  **Kapsamlı `README.md` Dosyaları:**
    *   **Ana `README.md`:** Projenin genel amacını, mimarisini, ana bileşenlerini ve genel kurulum adımlarını özetler.
    *   **Bileşen Bazlı `README.md`'ler (`backend/README.md`, `frontend/README.md`, `mobile/README.md`):** Her bir bileşenin kendi teknolojisini, klasör yapısını, geliştirme ortamını, kurulum talimatlarını, API dokümantasyonunu (eğer varsa) ve test çalıştırma yöntemlerini detaylandırır.
2.  **Modüler Klasör Yapısı:** Her bileşenin kendi içinde mantıksal olarak ayrılmış klasörleri olması, kodun amacını ve yerini hızla anlamayı sağlar. Örneğin, `app/Controllers`, `src/pages`, `lib/views` gibi dizinler, ilgili kodun işlevini açıkça belirtir.
3.  **İç Dokümantasyon ve Yorumlar:** Kod içinde, karmaşık algoritmalar, kritik iş mantığı veya beklenmedik davranışlar hakkında açıklayıcı yorumlar ve JSDoc/PHPDoc gibi formatlar kullanılarak iç dokümantasyon sağlanır.
4.  **API Belgelendirme:** Backend API'leri için Swagger/OpenAPI gibi standart araçlar kullanılarak detaylı ve güncel API dokümantasyonu sağlanır. Bu, frontend ve mobil ekipleri için hayati bir bağlam sağlar.
5.  **Ortak Tipler/İnterface'ler:** Backend, frontend ve mobil arasında paylaşılan veri modelleri ve arayüzler, tip güvenliği ve tutarlılık sağlayarak entegrasyon hatalarını azaltır.
6.  **.env Dosyalarının Açıklaması:** Ortama özel değişkenlerin (`DB_HOST`, `API_URL` vb.) ne işe yaradığı ve nasıl yapılandırılacağı açıkça belirtilir.
7.  **Sürüm Kontrolü ve Commit Mesajları:** Anlamlı commit mesajları ve Pull Request açıklamaları, değişikliklerin neden yapıldığını ve hangi bağlamda olduğunu gösterir.

Bu kılavuz, projenin tüm yaşam döngüsü boyunca güncel tutulması gereken yaşayan bir belgedir. Herhangi bir yeni özellik veya değişiklik eklenirken, ilgili bağlamın bu prensiplere göre belgelendiğinden emin olunmalıdır.