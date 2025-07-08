import { apiRequest } from './base';
import { API_ENDPOINTS } from './endpoints';
import type { LoginResponse, GetAdminResponse, LoginRequest } from './types';

export const authAPI = {
  // Admin login
  loginAdmin: async (email: string, password: string): Promise<LoginResponse> => {
    const loginData: LoginRequest = { email, password };
    return apiRequest<LoginResponse>(API_ENDPOINTS.ADMIN_LOGIN, {
      method: 'POST',
      body: JSON.stringify(loginData),
    });
  },

  // Get current admin data using token
  getAdminData: async (): Promise<GetAdminResponse> => {
    return apiRequest<GetAdminResponse>(API_ENDPOINTS.ADMIN_ME, {
      method: 'GET',
    });
  },
};