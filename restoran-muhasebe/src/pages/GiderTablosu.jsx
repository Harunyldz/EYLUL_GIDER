import { useState } from "react";

const Expenses = () => {
  const [selectedMonth, setSelectedMonth] = useState("11"); // Kasım
  const [selectedYear, setSelectedYear] = useState("2025");

  // Örnek veri
  const expenses = [
    { id: 1, tarih: "2025-11-01", tur: "Malzeme", tutar: 1200, aciklama: "Sebze alışverişi" },
    { id: 2, tarih: "2025-11-02", tur: "Elektrik", tutar: 850, aciklama: "Fatura ödemesi" },
    { id: 3, tarih: "2025-11-03", tur: "Personel", tutar: 6000, aciklama: "Kasiyer maaşı" },
  ];

  const toplam = expenses.reduce((sum, e) => sum + e.tutar, 0);

  return (
    <div className="p-4 space-y-6">
      {/* Başlık + Ay/Yıl Seçiciler */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-semibold text-[#2563eb]">Gider Tablosu</h1>

        <div className="flex gap-3">
          {/* Ay */}
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:ring focus:ring-blue-200"
          >
            <option value="1">Ocak</option>
            <option value="2">Şubat</option>
            <option value="3">Mart</option>
            <option value="4">Nisan</option>
            <option value="5">Mayıs</option>
            <option value="6">Haziran</option>
            <option value="7">Temmuz</option>
            <option value="8">Ağustos</option>
            <option value="9">Eylül</option>
            <option value="10">Ekim</option>
            <option value="11">Kasım</option>
            <option value="12">Aralık</option>
          </select>

          {/* Yıl */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:ring focus:ring-blue-200"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>

      {/* --- Tablo --- */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-2 text-left">Tarih</th>
              <th className="px-4 py-2 text-left">Gider Türü</th>
              <th className="px-4 py-2 text-left">Açıklama</th>
              <th className="px-4 py-2 text-right">Tutar (₺)</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={e.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{e.tarih}</td>
                <td className="px-4 py-2">{e.tur}</td>
                <td className="px-4 py-2">{e.aciklama}</td>
                <td className="px-4 py-2 text-right">{e.tutar.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Toplam */}
      <div className="flex justify-end">
        <div className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow">
          Toplam: ₺{toplam.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
