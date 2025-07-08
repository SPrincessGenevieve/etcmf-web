// Admin authentication types only
export interface LoginResponse {
  token: string;
}

export interface GetAdminResponse {
  admin: AdminUser;
}

export interface AdminUser {
  id: string;
  firstname: string;
  lastname: string;
  middlename?: string;
  email: string;
  picture?: string;
  createdAt: string;
  updatedAt: string;
}


export interface LoginRequest {
  email: string;
  password: string;
}
