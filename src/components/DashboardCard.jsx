import React from "react";

function DashboardCard({ title, value, icon, badgeColor = "bg-cyan-50" }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-between hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className={`p-3 rounded-lg ${badgeColor} text-cyan-600 flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-500 tracking-wide">
            {title}
          </h4>
          <p className="text-2xl font-bold text-gray-700">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
