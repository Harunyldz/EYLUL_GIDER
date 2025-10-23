restoran-muhasebe/
│
├─ public/
│   └─ (favicon, index.html, vs)
│
├─ src/
│   ├─ components/
│   │   ├─ Navbar.jsx
│   │   ├─ Sidebar.jsx
│   │   ├─ Cards/
│   │   │   ├─ SummaryCard.jsx       # dashboard kartları
│   │   ├─ Charts/
│   │   │   ├─ TrendChart.jsx
│   │   │   ├─ PieChart.jsx
│   │   ├─ Tables/
│   │   │   ├─ ExpensesTable.jsx
│   │   │   ├─ PersonelExpensesTable.jsx
│   │   ├─ Modals/
│   │   │   ├─ AddExpenseModal.jsx
│   │   │   ├─ AddCategoryModal.jsx
│   │   │   ├─ AddPersonelModal.jsx
│   │   └─ UI/ (isteğe bağlı küçük buton/input vb)
│
│   ├─ pages/
│   │   ├─ Dashboard.jsx           # açılış sayfası — özet + grafik + son 5 gider
│   │   ├─ Expenses.jsx            # restoran gider tablosu + filtre + kategori
│   │   ├─ PersonelExpenses.jsx    # personel gider tablosu
│   │   ├─ Analysis.jsx            # ay karşılaştırma grafik ekranı
│   │   ├─ AddExpense.jsx          # (eğer modal yerine sayfa olarak yaparsak)
│   │   ├─ Settings.jsx
│
│   ├─ layout/
│   │   └─ MainLayout.jsx          # Navbar + Sidebar + Content frame
│
│   ├─ services/
│   │   ├─ supabaseClient.js
│   │   ├─ expensesService.js      # insert/get/update/delete
│   │   ├─ personelService.js
│   │   ├─ categoryService.js
│
│   ├─ hooks/
│   │   ├─ useFetchExpenses.js     # örnek custom hook
│   │   └─ useFilters.js
│
│   ├─ context/  (eğer state management gerekirse)
│   │   └─ AppContext.jsx
│
│   ├─ utils/
│   │   ├─ formatCurrency.js
│   │   ├─ dateHelpers.js
│
│   ├─ styles/
│   │   └─ index.css               # tailwind importlu global css
│
│   ├─ App.jsx
│   └─ main.jsx
│
├─ .env
├─ tailwind.config.js / (veya vite.config içine)
├─ package.json
└─ README.md
