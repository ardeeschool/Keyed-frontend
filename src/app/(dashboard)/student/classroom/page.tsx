// src/app/(dashboard)/student/classroom/page.tsx
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

// Dummy data - replace with API call later
const subjects = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    teacher: 'Mr. Ahmed',
    progress: 72,
    resources: 24,
    pending: 3,
  },
  {
    id: 'english-literature',
    name: 'English Literature',
    teacher: 'Ms. Kapoor',
    progress: 65,
    resources: 18,
    pending: 2,
  },
  {
    id: 'physics',
    name: 'Physics',
    teacher: 'Dr. Reddy',
    progress: 58,
    resources: 20,
    pending: 4,
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    teacher: 'Ms. Iyer',
    progress: 61,
    resources: 16,
    pending: 1,
  },
  {
    id: 'economics',
    name: 'Economics',
    teacher: 'Mr. Batra',
    progress: 70,
    resources: 14,
    pending: 2,
  },
  {
    id: 'accountancy',
    name: 'Accountancy',
    teacher: 'Ms. Gupta',
    progress: 55,
    resources: 12,
    pending: 3,
  },
];

export default function ClassroomPage() {
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

      {/* Subject Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/student/classroom/${subject.id}`}>
            <Card className="bg-gray-900 dark:bg-gray-900 border-gray-800 dark:border-gray-800 hover:border-indigo-500 transition-colors cursor-pointer">
              <CardContent className="p-6 space-y-4">
                {/* Subject Name & Teacher */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-400">{subject.teacher}</p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full transition-all"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-end">
                    <span className="text-sm text-gray-400">{subject.progress}%</span>
                  </div>
                </div>

                {/* Resources & Pending */}
                <div className="flex items-center justify-normal gap-5 text-sm text-gray-400">
                  <span className='bg-black/30 p-2 px-4 rounded-lg'>{subject.resources} resources</span>
                  <span className='bg-black/30 p-2 px-4 rounded-lg'>{subject.pending} pending</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}