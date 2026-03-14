import React from 'react';

const DepartmentPerformanceTable = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Department Performance Comparison</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Department</th>
              <th className="py-2 px-4 border-b">Average CGPA</th>
              <th className="py-2 px-4 border-b">Placement Readiness %</th>
              <th className="py-2 px-4 border-b">High-Risk Students</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dept, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{dept.department}</td>
                <td className="py-2 px-4 border-b">{dept.avgCgpa}</td>
                <td className="py-2 px-4 border-b">{dept.placementReadiness}%</td>
                <td className="py-2 px-4 border-b">{dept.highRisk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentPerformanceTable;