// src/app/(auth)/forgot-password/page.tsx
'use client';

import Link from 'next/link';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#184263]  to-[#310C0B] p-4">
      <div className="w-full max-w-md">
        <div 
          className="w-full rounded-3xl"
          style={{
            background: 'rgba(0, 0, 0, 0.00)',
            boxShadow: '3px 6px 14px 1px rgba(255, 255, 255, 0.45) inset',
            padding: '44px',
          }}
        >
          {/* Back to Login */}
          <Link 
            href="/login" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Link>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Forgot Password?</h2>
            <p className="text-slate-400">
              Enter your email and we'll send you a reset link.
            </p>
          </div>

          {/* Forgot Password Form */}
          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
             
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Send Reset Link
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}