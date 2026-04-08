// src/app/(dashboard)/student/test-auth/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TestAuthPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [cookies, setCookies] = useState('');
  const [mounted, setMounted] = useState(false);

  // Only access document on client side
  useEffect(() => {
    setMounted(true);
    setCookies(document.cookie || 'No cookies set');
  }, []);

  const testLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: 'test@example.com', // Replace with your test credentials
          password: 'password123',
        }),
      });
      const data = await response.json();
      setCookies(document.cookie);
      setResult({ login: data, status: response.status });
    } catch (error) {
      setResult({ error: String(error) });
    } finally {
      setLoading(false);
    }
  };

  const testMe = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/me', {
        credentials: 'include',
      });
      const data = await response.json();
      setCookies(document.cookie);
      setResult({ me: data, status: response.status });
    } catch (error) {
      setResult({ error: String(error) });
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Auth Debug Page</h1>

      <div className="flex gap-4">
        <Button onClick={testLogin} disabled={loading}>
          Test Login
        </Button>
        <Button onClick={testMe} disabled={loading} variant="outline">
          Test /api/auth/me
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Cookies</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto dark:bg-gray-800">
            {cookies}
          </pre>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Response</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto dark:bg-gray-800">
              {JSON.stringify(result, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}