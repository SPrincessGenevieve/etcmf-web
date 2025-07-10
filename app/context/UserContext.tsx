"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import api from "@/lib/api/api";
import { useRouter } from "next/navigation";
import { AdminData, UserContextType } from "@/lib/type/type";

const defaultUserContext: UserContextType = {
  isAuthenticated: false,
  isLoading: true,
  adminData: null,
  isOpen: true,
  setUserDetails: () => {},
  login: async () => false,
  logout: () => {},
  fetchAdminData: async () => {},
};

const UserContext = createContext<UserContextType>(defaultUserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetailsState] = 
    useState<UserContextType>(defaultUserContext);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserDetailsState(prev => ({
        ...prev,
        isAuthenticated: true,
      }));
      fetchAdminData();
    } else {
      setUserDetailsState(prev => ({
        ...prev,
        isLoading: false,
      }));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await api.post("/auth/admin/login", { email, password });
      const { token } = response.data;
      localStorage.setItem("token", token);
      setUserDetailsState(prev => ({
        ...prev,
        isAuthenticated: true,
      }));
      await fetchAdminData();
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserDetailsState({
      ...defaultUserContext,
      isLoading: false,
    });
    router.push("/");
  };

  const fetchAdminData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      // Set authorization header with token
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      const response = await api.get("/admin/me");
      setUserDetailsState(prev => ({
        ...prev,
        adminData: response.data.admin,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching admin data:", error);
      if ((error as any)?.response?.status === 401) {
        // Token expired or invalid
        logout();
      }
      setUserDetailsState(prev => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  const setUserDetails = (details: Partial<UserContextType>) => {
    const updatedUserDetails = { ...userDetails, ...details };

    // Check if the details have actually changed before updating
    if (JSON.stringify(updatedUserDetails) !== JSON.stringify(userDetails)) {
      setUserDetailsState(updatedUserDetails as UserContextType);
    }
  };

  return (
    <UserContext.Provider value={{ 
      ...userDetails, 
      setUserDetails,
      login,
      logout,
      fetchAdminData
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
