"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/context/UserContext";
import Loading from "@/app/component/Loading";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

// This component protects routes that require authentication
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    // If not loading and not authenticated, redirect to login
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading strokeColor="green" />
      </div>
    );
  }

  // If authenticated, render children
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // This will briefly show before redirect happens
  return (
    <div className="flex items-center justify-center h-screen">
      <Loading strokeColor="green" />
    </div>
  );
}
