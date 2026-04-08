// src/hooks/useUser.ts
'use client';

import { useEffect, useState } from 'react';
import { authService } from '@/lib/api/services/auth.service';

// Match your API response structure
interface User {
  id: number;
  email: string;
  role: number;
  role_display: string;
  campus: number;
  student_id: string;
  staff_id: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log('Fetching user data...');
        const userData = await authService.getCurrentUser();
        console.log('User data received:', userData);
        setUser(userData as User);
      } catch (err) {
        console.error('Error fetching user:', err);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, isLoading, error };
}