import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { expenseCategories } from "../../utils";

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#dc2626", "#6b7280"];

const DailyPieChart = () => {
  return (
    <div className="bg-white shadow p-4 rounded-lg w-full h-90 pt-0">
      <h2 className="font-semibold mb-5 mt-2  text-green-500 underline">
        Aylık Gider Dağılımı
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={expenseCategories}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            dataKey="value"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              percent,
              name,
              index,
            }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-xs font-semibold "
                  fill={COLORS[index % COLORS.length]}
                >
                  {`${name} ${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
          >
            {expenseCategories.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconSize={12}
            formatter={(value, entry, index) => (
              <span className="text-xs font-medium">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyPieChart;
