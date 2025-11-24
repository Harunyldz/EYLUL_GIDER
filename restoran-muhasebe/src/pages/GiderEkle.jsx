import { useState } from "react";

const AddExpense = () => {
  const [tab, setTab] = useState("normal");

  // Örnek personeller (bunu Supabase'den çekeceğiz)
  const personeller = ["Ahmet Kaya", "Mehmet Yılmaz", "Ayşe Korkmaz"];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Sekmeler */}
      <div className="flex gap-3 border-b mb-4">
        <button
          className={`pb-2 ${
            tab === "normal"
              ? "border-b-2 border-blue-600 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setTab("normal")}
        >
          Normal Gider
        </button>

        <button
          className={`pb-2 ${
            tab === "personel"
              ? "border-b-2 border-blue-600 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setTab("personel")}
        >
          Personel Gideri
        </button>
      </div>

      {/* ---- NORMAL GİDER FORMU ---- */}
      {tab === "normal" && (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Başlık */}
          <div>
            <label className="text-sm font-medium">Gider Başlığı</label>
            <input
              type="text"
              className="border p-2 rounded w-full mt-1"
              placeholder="Ör: Et alışverişi"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="text-sm font-medium">Kategori</label>
            <select className="border p-2 rounded w-full mt-1">
              <option>Seç</option>
              <option value="gıda">Gıda</option>
              <option value="fatura">Fatura</option>
              <option value="temizlik">Temizlik</option>
              <option value="bakım">Bakım</option>
              <option value="diğer">Diğer</option>
            </select>
          </div>

          {/* Tutar */}
          <div>
            <label className="text-sm font-medium">Tutar (₺)</label>
            <input type="number" className="border p-2 rounded w-full mt-1" />
          </div>

          {/* Tarih */}
          <div>
            <label className="text-sm font-medium">Tarih</label>
            <input type="date" className="border p-2 rounded w-full mt-1" />
          </div>

          {/* Açıklama */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Açıklama</label>
            <textarea
              className="border p-2 rounded w-full mt-1 h-24 resize-none"
              placeholder="İsteğe bağlı açıklama..."
            ></textarea>
          </div>

          {/* Kaydet */}
          <div className="md:col-span-2">
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Gideri Kaydet
            </button>
          </div>
        </form>
      )}

      {/* ---- PERSONEL GİDER FORMU ---- */}
      {tab === "personel" && (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Personel Seçimi */}
          <div>
            <label className="text-sm font-medium">Personel</label>
            <select className="border p-2 rounded w-full mt-1">
              <option>Personel Seç</option>
              {personeller.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Tutar */}
          <div>
            <label className="text-sm font-medium">Tutar (₺)</label>
            <input type="number" className="border p-2 rounded w-full mt-1" />
          </div>

          {/* Tarih */}
          <div>
            <label className="text-sm font-medium">Tarih</label>
            <input type="date" className="border p-2 rounded w-full mt-1" />
          </div>

          {/* Açıklama */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Açıklama</label>
            <textarea
              className="border p-2 rounded w-full mt-1 h-24 resize-none"
              placeholder="İsteğe bağlı açıklama..."
            ></textarea>
          </div>

          {/* Kaydet */}
          <div className="md:col-span-2">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Personel Giderini Kaydet
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddExpense;
