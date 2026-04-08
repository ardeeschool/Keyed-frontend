// src/components/dashboard/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Sparkles,
  BookOpen,
  GraduationCap,
  Building2,
  HomeIcon,
  Users,
  Heart,
  Settings,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItem {
  name: string;
  href: string;
  icon: any;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: 'Home',
    href: '/student',
    icon: Home,
  },
  {
    name: 'Intelligence',
    href: '/student/intelligence',
    icon: Sparkles,
    submenu: [
      { name: 'Goal', href: '/student/intelligence/goal', icon: Home },
      { name: 'Study Plan', href: '/student/intelligence/study-plan', icon: Home },
      { name: 'Practice', href: '/student/intelligence/practice', icon: Home },
    ],
  },
  {
    name: 'My Progress',
    href: '/student/progress',
    icon: BookOpen,
    submenu: [
      { name: 'Classroom', href: '/student/classroom', icon: Home },
      { name: 'Homework', href: '/student/homework', icon: Home },
      { name: 'Assessments', href: '/student/assessments', icon: Home },
      { name: 'Report Cards', href: '/student/report-cards', icon: Home },
      { name: 'Transcript', href: '/student/transcript', icon: Home },
    ],
  },
  {
    name: 'University',
    href: '/student/university',
    icon: GraduationCap,
  },
  {
    name: 'Campus',
    href: '/student/campus',
    icon: Building2,
    submenu: [
      { name: 'Timetable', href: '/student/timetable', icon: Home },
      { name: 'Attendance', href: '/student/attendance', icon: Home },
      { name: 'Health Room', href: '/student/health-room', icon: Home },
      { name: 'Transport', href: '/student/transport', icon: Home },
      { name: 'Events', href: '/student/events', icon: Home },
      { name: 'Forums', href: '/student/forums', icon: Home },
    ],
  },
  {
    name: 'Houses',
    href: '/student/houses',
    icon: HomeIcon,
  },
  {
    name: 'Community',
    href: '/student/community',
    icon: Users,
  },
  {
    name: 'Wellbeing',
    href: '/student/wellbeing',
    icon: Heart,
  },
  {
    name: 'Preferences',
    href: '/student/preferences',
    icon: Settings,
  },
];

interface SidebarProps {
  collapsed: boolean;
  expandedMenus: string[];
  onToggleMenu: (menuName: string) => void;
}

export default function Sidebar({ collapsed, expandedMenus, onToggleMenu }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: MenuItem) => {
    if (item.submenu) {
      return item.submenu.some((sub) => pathname === sub.href);
    }
    return false;
  };

  return (
    <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
      {menuItems.map((item) => (
        <div key={item.name}>
          {/* Main Menu Item */}
          {item.submenu ? (
            <button
              onClick={() => !collapsed && onToggleMenu(item.name)}
              className={cn(
                'w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isParentActive(item) || expandedMenus.includes(item.name)
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
            >
              <div className="flex items-center space-x-3 min-w-0">
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span className="truncate">{item.name}</span>}
              </div>
              {!collapsed && item.submenu && (
                <span className="flex-shrink-0">
                  {expandedMenus.includes(item.name) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </span>
              )}
            </button>
          ) : (
            <Link
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isActive(item.href)
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span className="truncate">{item.name}</span>}
            </Link>
          )}

          {/* Submenu Items */}
          {item.submenu && expandedMenus.includes(item.name) && !collapsed && (
            <div className="mt-1 ml-8 space-y-1">
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className={cn(
                    'block px-3 py-2 rounded-lg text-sm transition-colors',
                    isActive(subItem.href)
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  <span className="truncate">{subItem.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}