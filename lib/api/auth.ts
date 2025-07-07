import { apiRequest } from './base';
import { API_ENDPOINTS } from './endpoints';
import type { LoginResponse } from './types';

// Authentication API functions
export const authAPI = {
  // Admin authentication
  loginAdmin: async (email: string, password: string): Promise<LoginResponse> => {
    return apiRequest<LoginResponse>(API_ENDPOINTS.ADMIN_LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
};
