// src/app/api/auth/me/route.ts
import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = 'https://api.staging.keyedsolution.com/api';

export async function GET(request: NextRequest) {
  try {
    // Forward cookies from client to Django
    const cookies = request.headers.get('cookie');

    const response = await fetch(`${API_BASE_URL}/me/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(cookies && { Cookie: cookies }),
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { message: 'Failed to fetch user data' },
      { status: 500 }
    );
  }
}