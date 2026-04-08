// src/app/(dashboard)/student/assessments/page.tsx
'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Dummy data for upcoming assessments
const upcomingAssessments = [
  {
    id: 1,
    subject: 'Physics',
    type: 'Unit Test',
    date: '2026-03-14',
    weightage: '20%',
    isExternal: false,
  },
  {
    id: 2,
    subject: 'Economics',
    type: 'Quiz',
    date: '2026-03-10',
    weightage: '10%',
    isExternal: false,
  },
  {
    id: 3,
    subject: 'English Literature',
    type: 'Essay Assignment',
    date: '2026-03-12',
    weightage: '15%',
    isExternal: false,
  },
  {
    id: 4,
    subject: 'Mathematics',
    type: 'SAT Practice',
    date: '2026-04-15',
    weightage: 'External',
    isExternal: true,
  },
];

// Dummy data for results
const assessmentResults = [
  {
    id: 1,
    subject: 'Mathematics',
    type: 'Midterm',
    score: '34/40',
    grade: 'A',
    classAvg: '72%',
    percentage: 85,
  },
  {
    id: 2,
    subject: 'Chemistry',
    type: 'Unit Test',
    score: '28/40',
    grade: 'B',
    classAvg: '65%',
    percentage: 70,
  },
  {
    id: 3,
    subject: 'Physics',
    type: '6 uiz',
    score: '8/10',
    grade: 'A-',
    classAvg: '74%',
    percentage: 80,
  },
  {
    id: 4,
    subject: 'Accountancy',
    type: 'Test',
    score: '22/40',
    grade: 'C+',
    classAvg: '60%',
    percentage: 55,
  },
  {
    id: 5,
    subject: 'English Literature',
    type: 'Essay',
    score: '18/25',
    grade: 'B',
    classAvg: '68%',
    percentage: 72,
  },
];

type TabType = 'Upcoming' | 'Results';

export default function AssessmentsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('Upcoming');

  // Get color class based on percentage
  const getPercentageColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 70) return 'text-orange-500';
    if (percentage >= 60) return 'text-yellow-500';
    return 'text-orange-600';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Home / Academics / <span className="text-gray-900 dark:text-white">Assessments</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Assessments</h1>

      {/* Tabs */}
      <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => setActiveTab('Upcoming')}
          className={cn(
            'pb-4 text-sm font-medium transition-colors relative',
            activeTab === 'Upcoming'
              ? 'text-white'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          )}
        >
          Upcoming
          {activeTab === 'Upcoming' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('Results')}
          className={cn(
            'pb-4 text-sm font-medium transition-colors relative',
            activeTab === 'Results'
              ? 'text-white'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          )}
        >
          Results
          {activeTab === 'Results' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {activeTab === 'Upcoming' ? (
          // Upcoming Assessments
          <>
            {upcomingAssessments.map((assessment) => (
              <Card
                key={assessment.id}
                className="bg-gray-100 dark:bg-gray-900 border-gray-800 dark:border-gray-800 hover:border-gray-700 transition-colors"
              >
                <CardContent className="px-6 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-black dark:text-white  mb-2">
                        {assessment.subject}
                      </h3>
                      <p className="text-sm text-gray-400 dark:text-white">
                        {assessment.type} • {assessment.date}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={cn(
                        'text-sm font-medium',
                        assessment.isExternal
                          ? 'bg-gray-800 text-gray-400 border-gray-700'
                          : 'bg-cyan-900/30 text-cyan-400 border-cyan-800'
                      )}
                    >
                      {assessment.weightage}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </>
        ) : (
          // Assessment Results
          <>
            {assessmentResults.map((result) => (
              <Card
                key={result.id}
                className="bg-gray-900 dark:bg-gray-900 border-gray-800 dark:border-gray-800 hover:border-gray-700 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {result.subject} — {result.type}
                      </h3>
                      <p className="text-sm text-gray-400">
                        Score: {result.score} • Grade: {result.grade} • Class Avg: {result.classAvg}
                      </p>
                    </div>
                    <div className={cn('text-5xl font-bold', getPercentageColor(result.percentage))}>
                      {result.percentage}%
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  );
}