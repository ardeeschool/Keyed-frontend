// src/app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = 'https://api.staging.keyedsolution.com/api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${API_BASE_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    // Forward cookies from Django to client
    const cookies = response.headers.get('set-cookie');
    
    const nextResponse = NextResponse.json(data, {
      status: response.status,
    });

    if (cookies) {
      nextResponse.headers.set('set-cookie', cookies);
    }

    return nextResponse;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}