import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const InternshipReadinessCard = ({ data }) => {
  const chartData = [
    { name: 'Ready', value: data.ready, fill: '#4CAF50' },
    { name: 'Needs Training', value: data.needsTraining, fill: '#FFC107' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Internship Readiness</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-4">
        <p>Ready: {data.ready}</p>
        <p>Needs Training: {data.needsTraining}</p>
      </div>
    </div>
  );
};

export default InternshipReadinessCard;