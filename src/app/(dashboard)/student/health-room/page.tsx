// src/app/(dashboard)/student/health-room/page.tsx
import { Card, CardContent } from '@/components/ui/card';
//import { Alert, AlertDescription } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

// Dummy health room data for February 2026
const healthRoomData = {
  calendar: [
    {
      day: 'S',
      periods: ['gray', 'gray', 'gray', 'gray'],
    },
    {
      day: 'M',
      periods: ['green', 'red', 'green', 'red'],
    },
    {
      day: 'T',
      periods: ['green', 'green', 'green', 'green'],
    },
    {
      day: 'W',
      periods: ['green', 'green', 'green', 'green'],
    },
    {
      day: 'T',
      periods: ['green', 'green', 'green', 'green'],
    },
    {
      day: 'F',
      periods: ['green', 'green', 'green', 'green'],
    },
    {
      day: 'S',
      periods: ['gray', 'gray', 'gray', 'gray'],
    },
  ],
  alert: "You have visited the health room during Period 3 (Mathematics) on 4 of the last 6 Mondays. This has been flagged to your coordinator.",
};

export default function HealthRoomPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home / <span className="text-gray-900 dark:text-white">Health Room</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Health Room</h1>

      {/* Calendar View */}
      <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <CardContent className="p-8">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6">
            February 2026
          </h3>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-4">
            {healthRoomData.calendar.map((day, index) => (
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
                        status === 'green' && 'bg-green-200 dark:bg-green-900/30',
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

      {/* Alert Message 
      <Alert className="border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-900">
        <AlertDescription className="text-gray-700 dark:text-gray-300">
          {healthRoomData.alert}
        </AlertDescription>
      </Alert>*/}
    </div>
  );
}