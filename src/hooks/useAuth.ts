// src/hooks/useAuth.ts
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/api/services/auth.service';
import { toast } from 'sonner';

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authService.login({ email, password });
      
      // Success
      toast.success('Login successful!');
      
      // Store user data if needed
      // You can use your auth store here
      // useAuthStore.setState({ user: response.user });
      
      // Redirect based on user role
      const role = response.user?.role || 'student';
      router.push(`/${role}`);
      
      return response;
    } catch (error: any) {
      toast.error(error.message || 'Invalid email or password');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      
      toast.success('Logged out successfully');
      router.push('/login');
    } catch (error: any) {
      toast.error(error.message || 'Logout failed');
    }
  };

  return {
    login,
    logout,
    isLoading,
  };
}