import { lastExpenses } from "../utils";

lastExpenses

const SonGiderler = ({setPage}) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg w-full mt-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-[#2563eb] text-lg">
          Son 5 Gider
        </h2>
        <button onClick={()=>setPage("GiderTablosu")} className="text-xs text-gray-500 underline hover:text-gray-800 cursor-pointer">
          Tümünü Gör
        </button>
      </div>

      <ul className="divide-y">
        {lastExpenses.map((item, i) => (
          <li key={i} className="py-2 text-sm flex justify-between">
            <span>{item.date} — {item.type}</span>
            <span className="font-medium">{item.amount} ₺</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SonGiderler;
