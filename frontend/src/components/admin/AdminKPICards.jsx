import React from 'react';

const AdminKPICard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <div className="bg-blue-100 text-blue-500 rounded-full p-3 mr-4">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default AdminKPICard;