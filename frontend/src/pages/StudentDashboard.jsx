import React from 'react';
import { mockStudentData } from '../data/mockStudentData';
import KPICard from '../components/dashboard/KPICard';
import CGPATrendChart from '../components/dashboard/CGPATrendChart';
import SubjectPerformanceChart from '../components/dashboard/SubjectPerformanceChart';
import WeakSubjects from '../components/dashboard/WeakSubjects';
import RiskIndicator from '../components/dashboard/RiskIndicator';
import StudyRecommendations from '../components/dashboard/StudyRecommendations';
import CareerReadinessCard from '../components/dashboard/CareerReadinessCard';
import InsightsPanel from '../components/dashboard/InsightsPanel';
import ChatAssistant from '../components/dashboard/ChatAssistant';
import NotificationPanel from '../components/dashboard/NotificationPanel';
import GoalTracker from '../components/dashboard/GoalTracker';

const StudentDashboard = () => {
  const { kpis, cgpaTrend, subjectPerformance, weakSubjects, academicRisk, studyRecommendations, careerReadiness, insights, notifications, goals } = mockStudentData;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-6 sm:p-8 space-y-8">
        <h1 className="text-2xl font-semibold text-gray-800">My Dashboard</h1>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard title="CGPA" value={kpis.cgpa} />
          <KPICard title="Attendance" value={`${kpis.attendance}%`} />
          <KPICard title="Academic Risk" value={`${kpis.academicRiskScore}%`} />
          <KPICard title="Backlogs" value={kpis.backlogs} />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <CGPATrendChart data={cgpaTrend} />
            <SubjectPerformanceChart data={subjectPerformance} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WeakSubjects subjects={weakSubjects} />
                <InsightsPanel insights={insights} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StudyRecommendations recommendations={studyRecommendations} />
                <GoalTracker goals={goals} />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <RiskIndicator risk={academicRisk} />
            <CareerReadinessCard readiness={careerReadiness} />
            <NotificationPanel notifications={notifications} />
            <ChatAssistant />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;