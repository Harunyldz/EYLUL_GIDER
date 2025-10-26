const SummaryCard = ({ title, value, icon, bgColor = "bg-gray-200", textColor = "text-black" }) => {
  return (
    <div className={`${bgColor} ${textColor} shadow p-4 rounded-lg flex items-center justify-between`}>
      <div>
        <p className="text-m opacity-90">{title}</p>
        <p className="text-3xl font-semibold">{value} ₺</p>
      </div>

      {icon && <div className="text-4xl opacity-70">{icon}</div>}
    </div>
  );
};

export default SummaryCard;
