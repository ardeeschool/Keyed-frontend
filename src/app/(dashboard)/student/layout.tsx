// src/app/(dashboard)/student/layout.tsx
'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import { cn } from '@/lib/utils';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = (menuName: string) => {
    setExpandedMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((item) => item !== menuName)
        : [...prev, menuName]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Full Width Sticky Header */}
      <Header />

      {/* Content Below Header */}
      <div className="pt-16">
        {/* Sidebar Section */}
        <aside
          className={cn(
            'fixed left-0 top-16 bottom-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col z-40',
            collapsed ? 'w-16' : 'w-64'
          )}
        >
          {/* Collapse Toggle Button */}
          <div className="h-12 flex items-center justify-center border-b border-gray-200 dark:border-gray-800 flex-shrink-0">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
              aria-label="Toggle Sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Menu */}
          <Sidebar
            collapsed={collapsed}
            expandedMenus={expandedMenus}
            onToggleMenu={toggleMenu}
          />
        </aside>

        {/* Main Content Area - No extra spacing */}
        <main
          className={cn(
            'transition-all duration-300',
            collapsed ? 'ml-16' : 'ml-64'
          )}
        >
          <div className="py-8 px-16">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}