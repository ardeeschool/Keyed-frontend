import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';


export default function HealthRoomPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home / <span className="text-gray-900 dark:text-white">Time Table</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Time Table</h1>

      
      <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <CardContent className="p-8">
          

        
          <div className="grid grid-cols-7 gap-4">
           
          </div>
        </CardContent>
      </Card>

    </div>
  );
}