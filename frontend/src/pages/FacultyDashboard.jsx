import React, { useState } from 'react';
import { mockFacultyData } from '../data/mockFacultyData';
import FacultyKPICard from '../components/faculty/FacultyKPICards';
import HighRiskStudentsTable from '../components/faculty/HighRiskStudentsTable';
import StudentDetailPanel from '../components/faculty/StudentDetailPanel';
import SubjectPerformanceChart from '../components/faculty/SubjectPerformanceChart';
import AttendanceImpactChart from '../components/faculty/AttendanceImpactChart';
import WeakSubjectAnalysis from '../components/faculty/WeakSubjectAnalysis';
import InterventionSuggestions from '../components/faculty/InterventionSuggestions';
import AIInsightsPanel from '../components/faculty/AIInsightsPanel';
import AlertsPanel from '../components/faculty/AlertsPanel';

const FacultyDashboard = () => {
  const { kpis, highRiskStudents, subjectPerformance, attendanceImpact, weakSubjectAnalysis, interventionSuggestions, aiInsights, alerts, studentDetail } = mockFacultyData;
  
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentSelect = (student) => {
    // In a real app, you'd fetch this data, but here we'll use the mock detail for the first student
    if(student.id === 1) {
        setSelectedStudent(studentDetail);
    } else {
        // A generic message or different student data could be loaded here
        setSelectedStudent({
            ...student,
            cgpaTrend: [],
            attendanceTrend: [],
            weakSubjects: [student.weakSubject],
            assignmentCompletion: 60,
            riskExplanation: 'Detailed data not available for this student in mock data.'
        });
    }
  };

  const handleClosePanel = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
        <h1 className="text-2xl font-semibold text-gray-800">Faculty Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <FacultyKPICard title="Total Students" value={kpis.totalStudents} />
        <FacultyKPICard title="Average CGPA" value={kpis.averageCgpa} />
        <FacultyKPICard title="Avg. Attendance" value={`${kpis.averageAttendance}%`} />
        <FacultyKPICard title="High-Risk" value={kpis.highRiskStudents} />
        <FacultyKPICard title="With Backlogs" value={kpis.studentsWithBacklogs} />
        <FacultyKPICard title="Pass/Fail Ratio" value={kpis.passFailRatio} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <HighRiskStudentsTable students={highRiskStudents} onStudentSelect={handleStudentSelect} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SubjectPerformanceChart data={subjectPerformance} />
        <AttendanceImpactChart data={attendanceImpact} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
            <AlertsPanel alerts={alerts} />
        </div>
        <div className="lg:col-span-1">
            <AIInsightsPanel insights={aiInsights} />
        </div>
        <div className="lg:col-span-1">
            <WeakSubjectAnalysis analysis={weakSubjectAnalysis} />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <InterventionSuggestions suggestions={interventionSuggestions} />
      </div>

      {selectedStudent && <StudentDetailPanel student={selectedStudent} onClose={handleClosePanel} />}
    </div>
  );
};

export default FacultyDashboard;