import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AttendanceImpactChart = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Attendance vs. Marks</h3>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="number" dataKey="attendance" name="Attendance" unit="%" />
            <YAxis type="number" dataKey="marks" name="Marks" unit="%" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Students" data={data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceImpactChart;