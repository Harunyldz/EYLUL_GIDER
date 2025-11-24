restoran-muhasebe/
│
├─ public/
│ └─ (favicon, index.html, vs)
│
├─ src/
│ ├─ components/
│ │ ├─ Navbar.jsx
│ │ ├─ Sidebar.jsx
│ │ ├─ Cards/
│ │ │ ├─ SummaryCard.jsx # dashboard kartları
│ │ ├─ Charts/
│ │ │ ├─ TrendChart.jsx
│ │ │ ├─ PieChart.jsx
│ │ ├─ Tables/
│ │ │ ├─ ExpensesTable.jsx
│ │ │ ├─ PersonelExpensesTable.jsx
│ │ ├─ Modals/
│ │ │ ├─ AddExpenseModal.jsx
│ │ │ ├─ AddCategoryModal.jsx
│ │ │ ├─ AddPersonelModal.jsx
│ │ └─ UI/ (isteğe bağlı küçük buton/input vb)
│
│ ├─ pages/
│ │ ├─ Dashboard.jsx # açılış sayfası — özet + grafik + son 5 gider
│ │ ├─ Expenses.jsx # restoran gider tablosu + filtre + kategori
│ │ ├─ PersonelExpenses.jsx # personel gider tablosu
│ │ ├─ Analysis.jsx # ay karşılaştırma grafik ekranı
│ │ ├─ AddExpense.jsx # (eğer modal yerine sayfa olarak yaparsak)
│ │ ├─ Settings.jsx
│
│ ├─ layout/
│ │ └─ MainLayout.jsx # Navbar + Sidebar + Content frame
│
│ ├─ services/
│ │ ├─ supabaseClient.js
│ │ ├─ expensesService.js # insert/get/update/delete
│ │ ├─ personelService.js
│ │ ├─ categoryService.js
│
│ ├─ hooks/
│ │ ├─ useFetchExpenses.js # örnek custom hook
│ │ └─ useFilters.js
│
│ ├─ context/ (eğer state management gerekirse)
│ │ └─ AppContext.jsx
│
│ ├─ utils/
│ │ ├─ formatCurrency.js
│ │ ├─ dateHelpers.js
│
│ ├─ styles/
│ │ └─ index.css # tailwind importlu global css
│
│ ├─ App.jsx
│ └─ main.jsx
│
├─ .env
├─ tailwind.config.js / (veya vite.config içine)
├─ package.json
└─ README.md

🧾 Restoran Muhasebe Web Uygulaması –
İçerik Planı

🔹 1. Ana Sayfa (Dashboard Görünümü) Sayfa açıldığında kullanıcı (restoran sahibi) aşağıdaki verileri görür:
        Günlük Gider Toplamı Bugüne ait tüm giderlerin toplamı, bir kutucuk içinde. Aylık Gider Toplamı Seçilen aya ait toplam gider, ikinci kutucukta. Aylık Gider Trendi (Çizgi Grafik) O ayın giderlerinin gün gün değişimini gösteren line chart. Kullanıcı gider yoğunluğunu kolayca görür. Gider Türleri Dağılımı (Pasta veya Bar Grafik) Malzeme, Elektrik, Personel, Su, vs. giderlerin toplam içindeki payını gösterir. Görsel olarak hangi tür giderin baskın olduğunu anlamayı sağlar. Son 5 Gider Listesi En son eklenen 5 gider alt kısımda listelenir. Her satırda: tarih – gider türü – tutar bilgisi. Yanında “Tümünü Gör” butonu → Gider Tablosu alanına yönlendirir.
🔹 2. Gider Tablosu Alanı Restoran sahibinin tüm giderleri görüntülediği ve filtrelediği alan:
        Ay Seçici (Dropdown) Belirli bir ayı seçip sadece o aya ait giderleri gösterir. Filtreleme Özelliği Tarihe, gider türüne veya tutara göre filtreleme. Toplam Gider Kutusu Seçilen aya ait toplam gider alt kısımda gösterilir. Grafikler (Filtreye Bağlı Güncellenen) Aylık gider trendi çizgi grafiği Gider türü dağılımı grafiği
🔹 3. Ay Karşılaştırma Modu Gelişmiş analiz bölümü:
        Ay Navigasyonu / Seçici İki ay seçilir (örneğin Ocak – Şubat). Karşılaştırmalı Gider Tablosu Her gider türü için iki ay yan yana gösterilir. Fark sütunu: artış / azalış gösterir. Karşılaştırmalı Grafikler Bar Chart: aynı kategorilerde iki ayın gideri yan yana. Pie Chart: iki ayın gider yüzdeleri. Line Chart: iki ayın toplam gider trendi.
🔹 4. Gider Ekleme Formu Yeni gider giriş alanı (örneğin üst menüde “Yeni Gider Ekle” butonu):
        Alanlar: Tarih Gider Türü (dropdown: Malzeme, Elektrik, vs.) Açıklama (opsiyonel) Tutar Ekle Butonu: Veriyi Supabase veritabanına kaydeder. Kaydedildikten sonra tablo ve toplamlar otomatik yenilenir.
🔹 5. Veri Dışa Aktarma (Excel Çıktısı) Aylık veya seçili gider verilerini .xlsx dosyası olarak indirilebilir. Excele aktarılan veriler: Tarih Gider Türü Açıklama Tutar Toplam satırı
🔹 6. Ekstra Özellikler
        Basit Giriş (Admin Girişi) – sadece restoran sahibi erişebilir.
        Responsi ve Tasarım – mobil/tablet uyumlu.
        Tek Sayfa (SPA) Yapı – sayfa yenilenmeden tüm işlemler yapılır.
        Tailwind CSS ile modern arayüz
        Recharts ile veri görselleştirme
        Supabase ile güvenli veri saklama
