// src/lib/api/services/auth.service.ts

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token?: string;
  refresh_token?: string;
  user?: {
    id: number;
    email: string;
    role: number;
    role_display: string;
    campus: number;
    student_id: string;
    staff_id: string;
  };
  message?: string;
}

// Use Next.js API routes (proxy) - NOT direct Django URLs
const API_BASE_URL = '/api/auth';

export const authService = {
  /**
   * Login user with email and password
   */
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important for cookies
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return data;
  },

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }
  },

  /**
   * Get current user
   */
  async getCurrentUser(): Promise<LoginResponse['user']> {
    const response = await fetch(`${API_BASE_URL}/me`, {
      method: 'GET',
      credentials: 'include', // Important for cookies
    });

    if (!response.ok) {
      throw new Error('Failed to get user');
    }

    return response.json();
  },

  /**
   * Refresh token
   */
  async refreshToken(): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/refresh`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Token refresh failed');
    }
  },
};