// src/app/(dashboard)/student/page.tsx
import { BookOpen, Clock, Calendar, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function StudentDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, Ishaan!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening with your learning today
        </p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Classes Today"
          value="6"
          icon={<BookOpen className="h-6 w-6" />}
          iconBg="bg-blue-500"
        />
        <StatsCard
          title="Pending Assignments"
          value="3"
          icon={<Clock className="h-6 w-6" />}
          iconBg="bg-orange-500"
        />
        <StatsCard
          title="Attendance"
          value="95%"
          icon={<Calendar className="h-6 w-6" />}
          iconBg="bg-green-500"
        />
        <StatsCard
          title="Day Streak"
          value="7"
          icon={<Trophy className="h-6 w-6" />}
          iconBg="bg-purple-500"
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Today's Schedule Card */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold">Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-0">
            <ScheduleItem
              subject="Mathematics"
              room="Room 204"
              time="9:00 AM"
              color="bg-indigo-500"
            />
            <ScheduleItem
              subject="Physics"
              room="Lab A"
              time="10:00 AM"
              color="bg-indigo-500"
            />
            <ScheduleItem
              subject="English Literature"
              room="Room 301"
              time="11:15 AM"
              color="bg-indigo-500"
            />
            <ScheduleItem
              subject="Chemistry"
              room="Lab B"
              time="1:00 PM"
              color="bg-indigo-500"
            />
            <ScheduleItem
              subject="Economics"
              room="Room 105"
              time="2:00 PM"
              color="bg-indigo-500"
            />
            <ScheduleItem
              subject="Physical Education"
              room="Sports Hall"
              time="3:00 PM"
              color="bg-indigo-500"
              isLast
            />
          </CardContent>
        </Card>

        {/* Upcoming Assignments Card */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold">Upcoming Assignments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <AssignmentItem
              subject="Mathematics"
              title="Calculus Problem Set"
              dueDate="Due: Mar 15, 2024"
            />
            <AssignmentItem
              subject="Physics"
              title="Lab Report - Motion"
              dueDate="Due: Mar 18, 2024"
            />
            <AssignmentItem
              subject="English"
              title="Essay on Shakespeare"
              dueDate="Due: Mar 20, 2024"
            />
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Card */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ActivityItem
            title="Grade posted for Chemistry Quiz"
            time="2 hours ago"
          />
          <ActivityItem
            title="New assignment posted in Mathematics"
            time="5 hours ago"
          />
          <ActivityItem
            title="Attendance marked for today"
            time="1 day ago"
          />
        </CardContent>
      </Card>
    </div>
  );
}

// Helper Components
function StatsCard({ title, value, icon, iconBg }: any) {
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{title}</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{value}</h3>
          </div>
          <div className={`${iconBg} text-white p-3 rounded-xl`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ScheduleItem({ subject, room, time, color, isLast }: any) {
  return (
    <div className={cn(
      'flex items-center justify-between py-4',
      !isLast && 'border-b border-gray-100 dark:border-gray-800'
    )}>
      <div className="flex items-center space-x-3">
        <div className={`w-2 h-2 ${color} rounded-full`}></div>
        <div>
          <p className="font-medium text-gray-900 dark:text-white">{subject}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{room}</p>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{time}</span>
    </div>
  );
}

function AssignmentItem({ subject, title, dueDate }: any) {
  return (
    <div className="flex items-start justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-900 transition-colors">
      <div className="flex-1">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{subject}</p>
        <p className="font-semibold text-gray-900 dark:text-white mb-1">{title}</p>
        <p className="text-sm text-orange-600 dark:text-orange-400">{dueDate}</p>
      </div>
      <Button size="sm" variant="ghost" className="text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30">
        View
      </Button>
    </div>
  );
}

function ActivityItem({ title, time }: any) {
  return (
    <div className="flex items-start space-x-3 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}