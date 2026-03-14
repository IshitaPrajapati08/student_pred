import React from 'react';
import { mockAdminData } from '../data/mockAdminData';
import AdminKPICard from '../components/admin/AdminKPICards';
import PlacementReadinessChart from '../components/admin/PlacementReadinessChart';
import RiskDistributionChart from '../components/admin/RiskDistributionChart';
import SkillGapAnalysis from '../components/admin/SkillGapAnalysis';
import DepartmentPerformanceTable from '../components/admin/DepartmentPerformanceTable';
import PlacementTrendChart from '../components/admin/PlacementTrendChart';
import InternshipReadinessCard from '../components/admin/InternshipReadinessCard';
import AIInsightsPanel from '../components/admin/AIInsightsPanel';
import AlertsPanel from '../components/admin/AlertsPanel';

const AdminDashboard = () => {
  const { kpis, placementReadiness, academicRisk, skillGap, departmentPerformance, placementTrend, internshipReadiness, aiInsights, alerts } = mockAdminData;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
        <AdminKPICard title="Total Students" value={kpis.totalStudents} />
        <AdminKPICard title="Placement Ready" value={kpis.placementReady} />
        <AdminKPICard title="Partially Ready" value={kpis.partiallyReady} />
        <AdminKPICard title="Not Ready" value={kpis.notReady} />
        <AdminKPICard title="Average CGPA" value={kpis.averageCgpa} />
        <AdminKPICard title="High-Risk Students" value={kpis.highRiskStudents} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DepartmentPerformanceTable data={departmentPerformance} />
          <PlacementTrendChart data={placementTrend} />
        </div>
        <div className="space-y-6">
          <PlacementReadinessChart data={placementReadiness} />
          <RiskDistributionChart data={academicRisk} />
          <InternshipReadinessCard data={internshipReadiness} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-1 space-y-6">
            <AlertsPanel alerts={alerts} />
        </div>
        <div className="lg:col-span-1 space-y-6">
            <AIInsightsPanel insights={aiInsights} />
        </div>
        <div className="lg:col-span-1 space-y-6">
            <SkillGapAnalysis data={skillGap} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;