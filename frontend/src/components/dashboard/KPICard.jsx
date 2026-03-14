import React from 'react';

const KPICard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-2">
      {icon && (
        <div className="bg-blue-100 text-blue-500 rounded-full p-3 self-start">
          {icon}
        </div>
      )}
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default KPICard;