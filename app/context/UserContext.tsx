"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { tokenManager, authAPI } from "@/lib/utils/api";
import type { AdminUser } from "@/lib/api/types";

type User = AdminUser;

type UserContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithToken: (token: string) => Promise<void>;
  logout: () => void;
  setUserDetails: (details: Partial<UserContextType>) => void;
  fetchUserData: () => Promise<void>;
};

const defaultUserContext: UserContextType = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  loginWithToken: async () => {},
  logout: () => {},
  setUserDetails: () => {},
  fetchUserData: async () => {},
};

const UserContext = createContext<UserContextType>(defaultUserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetailsState] = useState<{
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
  }>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check for existing token on app load and fetch user data
    const initializeAuth = async () => {
      const token = tokenManager.getToken();
      if (token && tokenManager.isValidToken(token)) {
        try {
          // Fetch user data using the token
          const userResponse = await authAPI.getAdminData();
          setUserDetailsState({
            user: userResponse.admin,
            token,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          console.error("Failed to fetch user data:", error);
          tokenManager.removeToken();
          setUserDetailsState({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      } else {
        setUserDetailsState(prev => ({ ...prev, isLoading: false }));
      }
    };

    initializeAuth();
  }, []);

  const loginWithToken = async (token: string) => {
    // Store token and fetch user data
    tokenManager.setToken(token);
    try {
      const userResponse = await authAPI.getAdminData();
      setUserDetailsState({
        user: userResponse.admin,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      tokenManager.removeToken();
      setUserDetailsState({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
      throw error;
    }
  };

  const fetchUserData = async () => {
    const token = tokenManager.getToken();
    if (!token) {
      throw new Error("No token available");
    }

    try {
      const userResponse = await authAPI.getAdminData();
      setUserDetailsState(prev => ({
        ...prev,
        user: userResponse.admin,
      }));
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      throw error;
    }
  };

  const logout = () => {
    tokenManager.removeToken();
    setUserDetailsState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const setUserDetails = (details: Partial<UserContextType>) => {
    setUserDetailsState(prev => ({ ...prev, ...details }));
  };

  return (
    <UserContext.Provider 
      value={{ 
        ...userDetails, 
        loginWithToken, 
        logout, 
        setUserDetails,
        fetchUserData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
