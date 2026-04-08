// src/app/(auth)/login/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      return;
    }

    await login(email, password);
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side - Branding */}
      <div className="bg-black text-white flex flex-col p-12 relative">
        {/* Logo */}
        <div className="mb-auto">
          <div className="flex items-center space-x-3 mb-2">
           
            <div>
              <img src="/image/keyedlogo.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Main Text */}
        <div className="mb-auto">
          <h2 className="text-6xl font-light leading-tight mb-8">
            The most intelligent<br />
            ecosystem for<br />
            institutions.
          </h2>
          
          {/* Colored Dots */}
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 rounded-full bg-indigo-500" />
            <div className="w-6 h-0.5 bg-gray-700" />
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <div className="w-6 h-0.5 bg-gray-700" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="w-6 h-0.5 bg-gray-700" />
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-6 h-0.5 bg-gray-700" />
            <div className="w-3 h-3 rounded-full bg-gray-500" />
           <div className="w-6 h-0.5 bg-gray-700" />
            <div className="w-3 h-3 rounded-full bg-orange-500" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex items-center space-x-8 text-sm text-gray-400">
          <button className="hover:text-white transition-colors">English</button>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/plans" className="hover:text-white transition-colors">Plans</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="bg-gray-50 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Form Header */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Login to KeyEd</h2>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="pl-10 h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="Enter a secure password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    className="pl-10 h-12 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}