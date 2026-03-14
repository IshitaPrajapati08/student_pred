import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

import KPICard from "../components/dashboard/KPICard";
import CGPATrendChart from "../components/dashboard/CGPATrendChart";
import SubjectPerformanceChart from "../components/dashboard/SubjectPerformanceChart";
import WeakSubjects from "../components/dashboard/WeakSubjects";
import RiskIndicator from "../components/dashboard/RiskIndicator";
import StudyRecommendations from "../components/dashboard/StudyRecommendations";
import CareerReadinessCard from "../components/dashboard/CareerReadinessCard";
import InsightsPanel from "../components/dashboard/InsightsPanel";
import ChatAssistant from "../components/dashboard/ChatAssistant";
import NotificationPanel from "../components/dashboard/NotificationPanel";
import GoalTracker from "../components/dashboard/GoalTracker";

const StudentDashboard = () => {
  const { currentUser } = useAuth();

  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser || !currentUser.user_id) {
        setError("User not found. Please login again.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const response = await axios.get(
          `http://127.0.0.1:5001/api/student/${currentUser.user_id}`
        );

        setStudentData(response.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load student data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  if (!studentData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>No student data available.</div>
      </div>
    );
  }

  const { analytics, predictions } = studentData;

  const {
    kpis,
    cgpaTrend,
    subjectPerformance,
    weakSubjects,
    studyRecommendations,
    insights,
    notifications,
    goals,
  } = analytics;

  const { academic_risk, placement_readiness } = predictions;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-6 sm:p-8 space-y-8">

        <h1 className="text-2xl font-semibold text-gray-800">
          My Dashboard
        </h1>

        {/* KPI CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <KPICard title="CGPA" value={kpis.cgpa} />

          <KPICard
            title="Attendance"
            value={`${kpis.attendance}%`}
          />

          <KPICard
            title="Academic Risk"
            value={`${(academic_risk.probability_at_risk * 100).toFixed(1)}%`}
            isRisk={true}
            riskLevel={academic_risk.prediction === 1 ? "High" : "Low"}
          />

          <KPICard title="Backlogs" value={kpis.backlogs} />

        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE */}

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

          {/* RIGHT SIDE */}

          <div className="space-y-6">

            <RiskIndicator
              risk={{
                level: academic_risk.prediction === 1 ? "High" : "Low",
                probability: academic_risk.probability_at_risk,
              }}
            />

            <CareerReadinessCard
              readiness={{
                level: placement_readiness.readiness_level,
              }}
            />

            <NotificationPanel notifications={notifications} />

            <ChatAssistant />

          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;
