// src/app/(dashboard)/student/profile/page.tsx
'use client';

import { Trophy, CheckCircle, Star, FileText, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function StudentProfilePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Home / <span className="text-gray-900 dark:text-white">Profile</span>
      </div>

      {/* Profile Header */}
      <Card className="border-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Avatar */}
              <Avatar className="h-20 w-20 border-4 border-white dark:border-gray-800">
                <AvatarFallback className="bg-indigo-600 text-white text-2xl font-bold">
                  IV
                </AvatarFallback>
              </Avatar>

              {/* Student Info */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Ishaan Verma
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Year 11-A · Falcon House · Ardee School, New Delhi
                </p>
              </div>
            </div>

            {/* Streak Badge */}
            <div className="flex items-center space-x-2 text-[#FFB020] dark:text-orange-400">
              <Trophy className="h-5 w-5" />
              <span className="font-bold text-lg">7</span>
              <span className="text-sm">day streak</span>
            </div>
          </div>


           <div className='mt-10'>
        <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
          Badges Earned
        </h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" className="px-4 py-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <Trophy className="h-6 w-6 mr-2 text-[#6C63FF]" />
            <span className="text-gray-700  dark:text-gray-300">7-Day Streak</span>
          </Badge>
          <Badge variant="outline" className="px-4 py-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <CheckCircle className="h-4 w-4 mr-2 text-[#6C63FF]" />
            <span className="text-gray-700 dark:text-gray-300">100% Attendance</span>
          </Badge>
          <Badge variant="outline" className="px-4 py-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <Star className="h-4 w-4 mr-2 text-[#6C63FF]" />
            <span className="text-gray-700 dark:text-gray-300">Top 20 Leaderboard</span>
          </Badge>
          <Badge variant="outline" className="px-4 py-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <FileText className="h-4 w-4 mr-2 text-[#6C63FF]" />
            <span className="text-gray-700 dark:text-gray-300">First LOR Requested</span>
          </Badge>
        </div>
      </div>


        </CardContent>
      </Card>

   
     
      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Student Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Student Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <InfoRow label="Student ID" value="ARD-2026-1147" />
              <InfoRow label="Email" value="ishaan.verma@ardee.edu.in" />
              <InfoRow label="Year / Section" value="11-A" />
              <InfoRow label="House" value="Falcon" />
              <InfoRow label="Class Teacher" value="Ms. Priya Sharma" />
            </CardContent>
          </Card>

          {/* KeyEd Score Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">KeyEd Score</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-8">
              <div className="relative w-32 h-32">
                {/* SVG Circle Progress */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    className="text-gray-200 dark:text-gray-700 stroke-current"
                    strokeWidth="8"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  />
                  {/* Progress Circle */}
                  <circle
                    className="text-indigo-600 dark:text-indigo-400 stroke-current"
                    strokeWidth="8"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset="75.36"
                  />
                </svg>
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">71</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Form Hub */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Form Hub</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <FormHubItem title="Personal Details" status="complete" />
            <FormHubItem title="Medical and Health Declaration" status="incomplete" />
            <FormHubItem title="University Preferences" status="complete" />
            <FormHubItem title="Transport Registration" status="complete" />
            <FormHubItem title="Forum and Activity Interests" status="review" />
            <FormHubItem title="Learning Preferences" status="incomplete" />
            <FormHubItem title="External Exam Registration" status="complete" />
          </CardContent>
        </Card>
      </div>

      {/* Approaches to Learning */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Approaches to Learning</CardTitle>
          <Badge variant="outline" className="text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400">
            IB Framework
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4 flex">

        <div className='w-1/2 pr-4'>

        </div>

 <div className='w-1/2 space-y-4'>
          <ProgressBar label="Thinking" value={72} color="bg-cyan-500" />
          <ProgressBar label="Research" value={65} color="bg-green-500" />
          <ProgressBar label="Communication" value={58} color="bg-orange-500" />
          <ProgressBar label="Social" value={70} color="bg-purple-500" />
          <ProgressBar label="Self-Management" value={60} color="bg-yellow-500" />
          
          <Button variant="link" className="text-indigo-600 dark:text-indigo-400 p-0 h-auto">
            Update Self-Rating
          </Button>
          </div>
        </CardContent>
      </Card>

      {/* Portfolio */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</h2>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Add Evidence
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PortfolioCard
            subject="ENGLISH LITERATURE"
            badge="Essay"
            title="The Great Gatsby — Comparative Essay on Power and Ambition"
            category="American Literature · Fitzgerald"
            date="2024-02-14"
            status="Teacher Visible"
            file="gatsby_essay_final.pdf"
            headerColor="bg-[#A855F7]"
            badgeColor="bg-purple-700"
          />
          <PortfolioCard
            subject="CHEMISTRY"
            badge="Lab Report"
            title="Titration Lab Report — Acid-Base Reactions"
            category="Quantitative Chemistry"
            date="2024-02-01"
            status="Teacher Visible"
            file="titration_lab.pdf"
            headerColor="bg-[#EC4899]"
            badgeColor="bg-pink-700"
          />
          <PortfolioCard
            subject="MATHEMATICS"
            badge="Project"
            title="Coordinate Geometry Project"
            category="Analytical Geometry"
            date="2024-01-22"
            status="Draft"
            file="geometry_project.pdf"
            headerColor="bg-[#3B82F6]"
            badgeColor="bg-blue-700"
          />
          <PortfolioCard
            subject="PHYSICS"
            badge="Lab Report"
            title="Electromagnetic Induction — Lab Investigation"
            category="Electromagnetism"
            date="2024-01-10"
            status="Teacher Visible"
            file="emf_induction_report.pdf"
            headerColor="bg-[#8B5CF6]"
            badgeColor="bg-indigo-700"
          />
          <PortfolioCard
            subject="CO-CURRICULAR"
            badge="Certificate"
            title="Duke of Edinburgh Bronze Certificate"
            category="Extra-Curricular"
            date="2023-12-05"
            status="Teacher Visible"
            file="duke_bronze.jpg"
            headerColor="bg-[#F59E0B]"
            badgeColor="bg-orange-700"
          />
          <PortfolioCard
            subject="ECONOMICS"
            badge="Presentation"
            title="National Income Case Study Presentation"
            category="Macroeconomics"
            date="2023-11-28"
            status="Teacher Visible"
            file="national_income_slides.pdf"
            headerColor="bg-[#14B8A6]"
            badgeColor="bg-teal-700"
          />
        </div>
      </div>
    </div>
  );
}

// Helper Components
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
      <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
      <span className="text-sm font-semibold text-gray-900 dark:text-white text-right">{value}</span>
    </div>
  );
}

function FormHubItem({ 
  title, 
  status 
}: { 
  title: string; 
  status: 'complete' | 'incomplete' | 'review' 
}) {
  const statusConfig = {
    complete: { 
      text: 'Complete', 
      className: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
    },
    incomplete: { 
      text: 'Incomplete', 
      className: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' 
    },
    review: { 
      text: 'Under Review', 
      className: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' 
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer group transition-colors">
      <span className="text-sm text-gray-700 dark:text-gray-300">{title}</span>
      <div className="flex items-center space-x-2">
        <Badge variant="secondary" className={`${config.className} text-xs px-2 py-1`}>
          {config.text}
        </Badge>
        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}

function ProgressBar({ 
  label, 
  value, 
  color 
}: { 
  label: string; 
  value: number; 
  color: string 
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 ${color} rounded-full`}></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        </div>
        <span className="text-sm font-bold text-gray-900 dark:text-white">{value}</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function PortfolioCard({
  subject,
  badge,
  title,
  category,
  date,
  status,
  file,
  headerColor,
  badgeColor,
}: {
  subject: string;
  badge: string;
  title: string;
  category: string;
  date: string;
  status: string;
  file: string;
  headerColor: string;
  badgeColor: string;
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow py-0 p rounded-md">
      {/* Colored Header */}
      <div className={`${headerColor} text-white p-4 flex items-center justify-between`}>
        <span className="text-xs font-bold uppercase tracking-wide">{subject}</span>
        <Badge className={`${badgeColor} text-white border-0 text-xs`}>
          {badge}
        </Badge>
      </div>

      {/* Card Content */}
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-gray-900 dark:text-white leading-tight">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
          <span className="text-xs text-gray-500 dark:text-gray-400">{date}</span>
          <Badge 
            variant="secondary" 
            className={`text-xs ${
              status === 'Draft' 
                ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' 
                : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
            }`}
          >
            {status}
          </Badge>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 truncate flex-1">
            <FileText className="h-3 w-3 flex-shrink-0" />
            <span className="truncate">{file}</span>
          </div>
          <Button 
            variant="link" 
            size="sm" 
            className="text-indigo-600 dark:text-indigo-400 h-auto p-0 ml-2"
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}