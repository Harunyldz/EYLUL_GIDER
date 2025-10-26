import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { monthlyExpenses } from "../../utils";

const TrendChart = () => {
  return (
    <div className="bg-white shadow p-4 pl-0 pt-2 rounded-lg w-full h-90">
      <h2 className="font-semibold mb-4 text-blue-500 underline ">Aylık Toplam Gider</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={monthlyExpenses}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" className="text-xs" />
          <YAxis className="text-sm"/>
          <Tooltip />
          <Bar dataKey="Gider" fill="#2563eb" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
