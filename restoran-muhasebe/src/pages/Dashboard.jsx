import { FaBolt, FaCalendarAlt, FaUsers, FaUtensils } from "react-icons/fa";
import SummaryCard from "../components/Cards/SummaryCard";
import TrendChart from "../components/Charts/TrendChart";
import PieChart from "../components/Charts/DailyPieChart";
import SonGiderler from "../components/SonGiderler";
// import ExpensesTable from "../components/Tables/ExpensesTable";

const Dashboard = ({setPage}) => {
  return (
    <div className="md:space-y-16 space-y-8 ">
      {/* 1. Özet Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 ">
        <SummaryCard
          title="Bugünün Gideri"
          value={1234}
          bgColor="bg-blue-500"
          textColor="text-white"
          icon={<FaBolt />}
        />
        <SummaryCard
          title="Bu Ay Toplam"
          value={45678}
          bgColor="bg-green-500"
          textColor="text-white"
          icon={<FaCalendarAlt />}
        />
        <SummaryCard
          title="Personel Gideri"
          value={30000}
          bgColor="bg-red-500"
          textColor="text-white"
          icon={<FaUsers />}
        />
        <SummaryCard
          title="Restoran Gideri"
          value={15678}
          bgColor="bg-yellow-500"
          textColor="text-white"
          icon={<FaUtensils />}
        />
      </div>

      {/* 2. Grafik Alanı */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
        <PieChart />
        <TrendChart />
      </div>

      {/* 3. Son Eklenen 5 Gider Tablosu */}
      <div className="mt-20">
        <SonGiderler setPage={setPage} />
      </div>
    </div>
  );
};

export default Dashboard;
