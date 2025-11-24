import { useState, useEffect } from "react";
import {supabase} from "../lib/supabaseClient"

const GiderEkle = () => {
  const [tab, setTab] = useState("normal");

  // Form state
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const [person, setPerson] = useState("");
  const [personAmount, setPersonAmount] = useState("");
  const [personDate, setPersonDate] = useState("");
  const [personNote, setPersonNote] = useState("");

  // Personel listesi Supabase’den çekilecek
  const [personeller, setPersoneller] = useState([]);

  useEffect(() => {
    const fetchPersoneller = async () => {
      const { data, error } = await supabase.from("personeller").select("*");
      if (!error && data) setPersoneller(data.map(p => p.name));
    };
    fetchPersoneller();
  }, []);

  // ---- Normal Gider Kaydet ----
  const handleNormalSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("expenses").insert([
      {
        title,
        category,
        amount: Number(amount),
        date,
        note,
      },
    ]);

    if (error) return alert("Hata: " + error.message);

    alert("Normal gider kaydedildi!");

    setTitle(""); setCategory(""); setAmount(""); setDate(""); setNote("");
  };

  // ---- Personel Gider Kaydet ----
  const handlePersonelSubmit = async (e) => {
    e.preventDefault();

    if (!person) return alert("Personel seçiniz!");

    const { error } = await supabase.from("expenses").insert([
      {
        title: person,
        category: "personel",
        amount: Number(personAmount),
        date: personDate,
        note: personNote,
      },
    ]);

    if (error) return alert("Hata: " + error.message);

    alert("Personel gideri kaydedildi!");

    setPerson(""); setPersonAmount(""); setPersonDate(""); setPersonNote("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Sekmeler */}
      <div className="flex gap-3 border-b mb-4">
        <button
          className={`pb-2 ${tab === "normal" ? "border-b-2 border-blue-600 font-semibold" : "text-gray-500"}`}
          onClick={() => setTab("normal")}
        >
          Normal Gider
        </button>
        <button
          className={`pb-2 ${tab === "personel" ? "border-b-2 border-blue-600 font-semibold" : "text-gray-500"}`}
          onClick={() => setTab("personel")}
        >
          Personel Gideri
        </button>
      </div>

      {/* ---- NORMAL GİDER FORMU ---- */}
      {tab === "normal" && (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleNormalSubmit}>
          <div>
            <label className="text-sm font-medium">Gider Başlığı</label>
            <input
              type="text"
              className="border p-2 rounded w-full mt-1"
              placeholder="Ör: Et alışverişi"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Kategori</label>
            <select
              className="border p-2 rounded w-full mt-1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Seç</option>
              <option value="gıda">Gıda</option>
              <option value="fatura">Fatura</option>
              <option value="temizlik">Temizlik</option>
              <option value="bakım">Bakım</option>
              <option value="diğer">Diğer</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Tutar (₺)</label>
            <input
              type="number"
              className="border p-2 rounded w-full mt-1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Tarih</label>
            <input
              type="date"
              className="border p-2 rounded w-full mt-1"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Açıklama</label>
            <textarea
              className="border p-2 rounded w-full mt-1 h-24 resize-none"
              placeholder="İsteğe bağlı açıklama..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Gideri Kaydet
            </button>
          </div>
        </form>
      )}

      {/* ---- PERSONEL GİDER FORMU ---- */}
      {tab === "personel" && (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handlePersonelSubmit}>
          <div>
            <label className="text-sm font-medium">Personel</label>
            <select
              className="border p-2 rounded w-full mt-1"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              required
            >
              <option value="">Personel Seç</option>
              {personeller.map((p, i) => (
                <option key={i} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Tutar (₺)</label>
            <input
              type="number"
              className="border p-2 rounded w-full mt-1"
              value={personAmount}
              onChange={(e) => setPersonAmount(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Tarih</label>
            <input
              type="date"
              className="border p-2 rounded w-full mt-1"
              value={personDate}
              onChange={(e) => setPersonDate(e.target.value)}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Açıklama</label>
            <textarea
              className="border p-2 rounded w-full mt-1 h-24 resize-none"
              placeholder="İsteğe bağlı açıklama..."
              value={personNote}
              onChange={(e) => setPersonNote(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Personel Giderini Kaydet
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GiderEkle;
