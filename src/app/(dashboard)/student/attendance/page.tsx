// src/app/(dashboard)/student/attendance/page.tsx
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Dummy attendance data for February 2026
const attendanceData = {
  overallPercentage: 96,
  dayStreak: 12,
  lateArrivals: 2,
  calendar: [
    // Week 1 (Sundays are gray - weekend)
    {
      day: 'S',
      date: 1,
      periods: ['gray', 'gray', 'gray', 'gray'],
    },
    {
      day: 'M',
      date: 2,
      periods: ['green', 'green', 'green', 'green'],
    },
    {
      day: 'T',
      date: 3,
      periods: ['green', 'green', 'red', 'green'],
    },
    {
      day: 'W',
      date: 4,
      periods: ['green', 'orange', 'green', 'green'],
    },
    {
      day: 'T',
      date: 5,
      periods: ['green', 'green', 'green', 'green'],
    },
    {
      day: 'F',
      date: 6,
      periods: ['green', 'green', 'green', 'green'],
    },
    {
      day: 'S',
      date: 7,
      periods: ['gray', 'gray', 'gray', 'gray'],
    },
  ],
};

export default function AttendancePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home / <span className="text-gray-900 dark:text-white">Attendance</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Attendance</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Overall Attendance */}
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <CardContent className="p-8 text-center">
            <div className="text-6xl font-bold text-green-500 mb-2">
              {attendanceData.overallPercentage}%
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Overall Attendance
            </div>
          </CardContent>
        </Card>

        {/* Day Streak */}
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <CardContent className="p-8 text-center">
            <div className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
              {attendanceData.dayStreak}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Day Streak
            </div>
          </CardContent>
        </Card>

        {/* Late Arrivals */}
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <CardContent className="p-8 text-center">
            <div className="text-6xl font-bold text-orange-500 mb-2">
              {attendanceData.lateArrivals}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Late Arrivals
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar View */}
      <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <CardContent className="p-8">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6">
            February 2026
          </h3>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-4">
            {attendanceData.calendar.map((day, index) => (
              <div key={index} className="space-y-2">
                {/* Day Label */}
                <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                  {day.day}
                </div>

                {/* Period Blocks */}
                <div className="space-y-2">
                  {day.periods.map((status, periodIndex) => (
                    <div
                      key={periodIndex}
                      className={cn(
                        'h-12 rounded-lg',
                        status === 'green' && 'bg-green-500',
                        status === 'orange' && 'bg-orange-500',
                        status === 'red' && 'bg-red-500',
                        status === 'gray' && 'bg-gray-300 dark:bg-gray-700'
                      )}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}