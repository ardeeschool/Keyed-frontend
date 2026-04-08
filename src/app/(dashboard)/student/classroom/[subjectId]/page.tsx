// src/app/(dashboard)/student/classroom/[subjectId]/page.tsx
'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Dummy data - replace with API calls
const subjectData: any = {
  'mathematics': {
    name: 'Mathematics',
    teacher: 'Mr. Ahmed',
    resources: [
      { id: 1, title: 'Chapter 9 — Sequences and Series Notes', date: '24 Feb 2026' },
      { id: 2, title: 'Practice Problem Set 14', date: '22 Feb 2026' },
      { id: 3, title: 'Midterm Revision Worksheet', date: '18 Feb 2026' },
      { id: 4, title: 'Trigonometry Formulae Sheet', date: '10 Feb 2026' },
    ],
    homework: [
      {
        id: 1,
        title: 'Sequences and Series — Problem Set 14',
        subject: 'Mathematics',
        teacher: 'Mr. Ahmed',
        dueDate: '2 Mar 2026',
        status: 'pending',
      },
    ],
    assessments: [
      {
        id: 1,
        title: 'Mathematics — Midterm',
        score: '34/40',
        grade: 'A',
        classAvg: '72%',
        percentage: 85,
      },
    ],
    syllabus: [
      { id: 1, topic: 'Sequences and Series', status: 'complete', weak: false },
      { id: 2, topic: 'Trigonometric Identities', status: 'complete', weak: false },
      { id: 3, topic: 'Integration by Parts', status: 'complete', weak: true },
      { id: 4, topic: 'Differential Equations', status: 'incomplete', weak: false },
      { id: 5, topic: 'Probability Distributions', status: 'incomplete', weak: false },
    ],
  },
};

const tabs = ['Resources', 'Homework', 'Assessments', 'Syllabus'];

export default function SubjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const subjectId = params.subjectId as string;
  const [activeTab, setActiveTab] = useState('Resources');

  const subject = subjectData[subjectId] || subjectData['mathematics'];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Home / Academics / <span className="text-gray-900 dark:text-white">Classroom</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Classroom
      </h1>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="font-medium">{subject.name}</span>
      </button>

      {/* Tabs */}
      <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'pb-4 text-sm font-medium transition-colors relative',
              activeTab === tab
                ? 'text-black dark:text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            )}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'Resources' && <ResourcesTab resources={subject.resources} />}
        {activeTab === 'Homework' && <HomeworkTab homework={subject.homework} subject={subject} />}
        {activeTab === 'Assessments' && <AssessmentsTab assessments={subject.assessments} />}
        {activeTab === 'Syllabus' && <SyllabusTab syllabus={subject.syllabus} />}
      </div>
    </div>
  );
}

// Resources Tab Component
function ResourcesTab({ resources }: any) {
  return (
    <div className="space-y-0">
      {resources.map((resource: any, index: number) => (
        <div
          key={resource.id}
          className={cn(
            'flex items-center justify-between  py-6 border-l-4 border-indigo-600 pl-6',
            index !== resources.length - 1 && 'border-b border-indigo-600'
          )}
        >
          <div className="flex items-center space-x-4">
            <FileText className="h-6 w-6 text-gray-400" />
            <div>
              <h3 className="font-normal text-sm text-black dark:text-white">{resource.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{resource.date}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-900/20"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}

// Homework Tab Component
function HomeworkTab({ homework, subject }: any) {
  return (
    <div className="space-y-4">
      {homework.map((hw: any) => (
        <Card
          key={hw.id}
          className="bg-gray-900 dark:bg-gray-900 border-gray-800 dark:border-gray-800 border-l-4 border-l-indigo-600"
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{hw.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                  <span>{hw.subject}</span>
                  <span>•</span>
                  <span>{hw.teacher}</span>
                </div>
                <p className="text-sm text-orange-500 mt-2">Due: {hw.dueDate}</p>
              </div>
              <Badge
                variant="secondary"
                className="bg-orange-900/30 text-orange-400 border-orange-800"
              >
                Pending
              </Badge>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Submit
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Assessments Tab Component
function AssessmentsTab({ assessments }: any) {
  return (
    <div className="space-y-4">
      {assessments.map((assessment: any) => (
        <Card
          key={assessment.id}
          className="bg-gray-900 dark:bg-gray-900 border-gray-800 dark:border-gray-800 border-l-4 border-l-indigo-600"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{assessment.title}</h3>
                <p className="text-sm text-gray-400">
                  Score: {assessment.score} · Grade: {assessment.grade} · Class Avg: {assessment.classAvg}
                </p>
              </div>
              <div className="text-5xl font-bold text-green-500">
                {assessment.percentage}%
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Syllabus Tab Component
function SyllabusTab({ syllabus }: any) {
  return (
    <div className="space-y-0">
      {syllabus.map((topic: any, index: number) => (
        <div
          key={topic.id}
          className={cn(
            'flex items-center justify-between py-6 border-l-4 border-indigo-600 pl-6',
            index !== syllabus.length - 1 && 'border-b border-indigo-600'
          )}
        >
          <div className="flex items-center space-x-4">
            <div
              className={cn(
                'w-3 h-3 rounded-full',
                topic.status === 'complete' ? 'bg-green-500' : 'bg-gray-600'
              )}
            />
            <span className="text-black dark:text-white  text-sm font-normal">{topic.topic}</span>
            {topic.weak && (
              <Badge
                variant="secondary"
                className="bg-red-900/30 text-red-400 border-red-800"
              >
                Weak
              </Badge>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}