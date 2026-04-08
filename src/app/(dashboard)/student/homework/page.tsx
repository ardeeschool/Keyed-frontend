// src/app/(dashboard)/student/homework/page.tsx
'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dummy homework data
const allHomework = [
  {
    id: 1,
    title: 'Sequences and Series — Problem Set 14',
    subject: 'Mathematics',
    teacher: 'Mr. Ahmed',
    dueDate: '2 Mar 2026',
    status: 'pending',
    borderColor: 'border-l-indigo-600',
    dueDateTimestamp: new Date('2026-03-02'),
  },
  {
    id: 2,
    title: 'Essay Draft: The Great Gatsby Analysis',
    subject: 'English Literature',
    teacher: 'Ms. Kapoor',
    dueDate: '2 Mar 2026',
    status: 'pending',
    borderColor: 'border-l-purple-600',
    dueDateTimestamp: new Date('2026-03-02'),
  },
  {
    id: 3,
    title: 'Electromagnetic Induction Worksheet',
    subject: 'Physics',
    teacher: 'Dr. Reddy',
    dueDate: '4 Mar 2026',
    status: 'pending',
    borderColor: 'border-l-indigo-600',
    dueDateTimestamp: new Date('2026-03-04'),
  },
  {
    id: 4,
    title: 'National Income Accounting Problems',
    subject: 'Economics',
    teacher: 'Mr. Batra',
    dueDate: '5 Mar 2026',
    status: 'pending',
    borderColor: 'border-l-teal-600',
    dueDateTimestamp: new Date('2026-03-05'),
  },
  {
    id: 5,
    title: 'Aldehydes and Ketones — Reaction Mechanisms',
    subject: 'Chemistry',
    teacher: 'Ms. Iyer',
    dueDate: '28 Feb 2026',
    status: 'submitted',
    borderColor: 'border-l-pink-600',
    dueDateTimestamp: new Date('2026-02-28'),
    aiHelpUnlocked: true,
  },
  {
    id: 6,
    title: 'Partnership Accounts Practice',
    subject: 'Accountancy',
    teacher: 'Ms. Gupta',
    dueDate: '25 Feb 2026',
    status: 'late',
    borderColor: 'border-l-orange-600',
    dueDateTimestamp: new Date('2026-02-25'),
  },
  {
    id: 7,
    title: 'Wave Optics Numericals',
    subject: 'Physics',
    teacher: 'Dr. Reddy',
    dueDate: '27 Feb 2026',
    status: 'submitted',
    borderColor: 'border-l-indigo-600',
    dueDateTimestamp: new Date('2026-02-27'),
    aiHelpUnlocked: true,
    hasResult: true,
  },
];

type FilterType = 'All' | 'Due Today' | 'This Week' | 'Submitted' | 'Late';

const filters: FilterType[] = ['All', 'Due Today', 'This Week', 'Submitted', 'Late'];

export default function HomeworkPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter homework based on active tab
  const getFilteredHomework = () => {
    const today = new Date('2026-03-02'); // Using date from screenshots
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay()); // Start of week
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6); // End of week

    switch (activeFilter) {
      case 'Due Today':
        return allHomework.filter(
          (hw) =>
            hw.dueDateTimestamp.toDateString() === today.toDateString() &&
            hw.status === 'pending'
        );
      case 'This Week':
        return allHomework.filter(
          (hw) =>
            hw.dueDateTimestamp >= weekStart &&
            hw.dueDateTimestamp <= weekEnd &&
            hw.status === 'pending'
        );
      case 'Submitted':
        return allHomework.filter((hw) => hw.status === 'submitted');
      case 'Late':
        return allHomework.filter((hw) => hw.status === 'late');
      default:
        return allHomework;
    }
  };

  const filteredHomework = getFilteredHomework();
  const totalPages = Math.ceil(filteredHomework.length / itemsPerPage);
  const paginatedHomework = filteredHomework.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Home / Academics / <span className="text-gray-900 dark:text-white">Homework</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Homework</h1>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setCurrentPage(1); // Reset to first page on filter change
            }}
            className={cn(
              'px-6 py-2 rounded-full text-sm font-medium transition-colors',
              activeFilter === filter
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Homework Cards */}
      <div className="space-y-4">
        {paginatedHomework.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No homework found for this filter.
          </div>
        ) : (
          paginatedHomework.map((hw, index) => (
            <Card
              key={hw.id}
              className={cn(
                'bg-gray-900 dark:bg-gray-900 border-gray-800 dark:border-gray-800 border-l-4',
                hw.borderColor,
                index === 0 && activeFilter === 'This Week' && 'ring-2 ring-cyan-500'
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white">{hw.title}</h3>

                    {/* Subject & Teacher */}
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      <span>{hw.subject}</span>
                      <span>•</span>
                      <span>{hw.teacher}</span>
                    </div>

                    {/* Due Date */}
                    <p
                      className={cn(
                        'text-sm font-medium',
                        hw.status === 'late'
                          ? 'text-red-500'
                          : hw.status === 'submitted'
                          ? 'text-gray-500'
                          : 'text-orange-500'
                      )}
                    >
                      Due: {hw.dueDate}
                    </p>

                    {/* Action Buttons / Links */}
                    <div className="flex items-center gap-4 pt-2">
                      {hw.status === 'pending' && (
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                          Submit
                        </Button>
                      )}
                      {hw.status === 'submitted' && hw.aiHelpUnlocked && (
                        <button className="flex items-center space-x-1 text-green-500 hover:text-green-400 text-sm font-medium">
                          <span>AI Help Unlocked</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      )}
                      {hw.status === 'submitted' && hw.hasResult && (
                        <button className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                          <span>View Result</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <Badge
                    variant="secondary"
                    className={cn(
                      'ml-4',
                      hw.status === 'pending' &&
                        'bg-orange-900/30 text-orange-400 border-orange-800',
                      hw.status === 'submitted' &&
                        'bg-green-900/30 text-green-400 border-green-800',
                      hw.status === 'late' && 'bg-red-900/30 text-red-400 border-red-800'
                    )}
                  >
                    {hw.status === 'pending'
                      ? 'Pending'
                      : hw.status === 'submitted'
                      ? 'Submitted'
                      : 'Late'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 pt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="border-gray-700 text-gray-400 hover:bg-gray-800"
          >
            Previous
          </Button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  'w-8 h-8 rounded-lg text-sm font-medium transition-colors',
                  currentPage === page
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                )}
              >
                {page}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="border-gray-700 text-gray-400 hover:bg-gray-800"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}