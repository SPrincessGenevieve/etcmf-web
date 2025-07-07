"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { tokenManager } from "@/lib/utils/api";

type User = {
  id: string;
  firstname: string;
  lastname: string;
  middlename?: string;
  email: string;
  picture?: string;
  createdAt: string;
  updatedAt: string;
};

type UserContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  setUserDetails: (details: Partial<UserContextType>) => void;
};

const defaultUserContext: UserContextType = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  login: () => {},
  logout: () => {},
  setUserDetails: () => {},
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
    // Check for existing token on app load
    const token = tokenManager.getToken();
    if (token && tokenManager.isValidToken(token)) {
      const savedUserData = localStorage.getItem("userData");
      if (savedUserData) {
        try {
          const user = JSON.parse(savedUserData);
          setUserDetailsState({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          console.error("Failed to parse user data:", error);
          tokenManager.removeToken();
          localStorage.removeItem("userData");
          setUserDetailsState({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      }
    } else {
      setUserDetailsState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = (token: string, user: User) => {
    tokenManager.setToken(token);
    localStorage.setItem("userData", JSON.stringify(user));
    setUserDetailsState({
      user,
      token,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const logout = () => {
    tokenManager.removeToken();
    localStorage.removeItem("userData");
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
        login, 
        logout, 
        setUserDetails 
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
