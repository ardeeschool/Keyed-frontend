// src/app/(dashboard)/student/report-cards/page.tsx
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const reportCards = [
  {
    id: 1,
    term: 'Term 1 — July to October 2025',
    publishDate: 'Published 15 Nov 2025',
    status: 'published',
    statusText: 'Published by Coordinator',
  },
  {
    id: 2,
    term: 'Term 2 — November 2025 to February 2026',
    publishDate: 'Awaiting publication',
    status: 'pending',
    statusText: 'Pending Coordinator Review',
  },
];

export default function ReportCardsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home / <span className="text-gray-900 dark:text-white">Report Cards</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Report Cards</h1>

      {/* Tab */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <button className="pb-4 text-sm font-medium text-gray-900 dark:text-white relative">
          Report Cards
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
        </button>
      </div>

      {/* Report Cards List */}
      <div className="space-y-4">
        {reportCards.map((card) => (
          <Card
            key={card.id}
            className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {card.term}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {card.publishDate}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Badge
                    variant="secondary"
                    className={
                      card.status === 'published'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800'
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800'
                    }
                  >
                    {card.statusText}
                  </Badge>

                  {card.status === 'published' && (
                    <>
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        View
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                      >
                        <Download className="h-5 w-5" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}