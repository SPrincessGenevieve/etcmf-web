"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/context/UserContext";
import Loading from "@/app/component/Loading";

interface AuthRouteProps {
  children: React.ReactNode;
}


export default function AuthRoute({ children }: AuthRouteProps) {
  const { isAuthenticated, isLoading } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    // If authenticated, redirect to dashboard
    if (!isLoading && isAuthenticated) {
      router.push("/etcmf/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading while checking
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading strokeColor="green" />
      </div>
    );
  }

  // If not authenticated
  if (!isAuthenticated) {
    return <>{children}</>;
  }

  // This will briefly show before redirect happens
  return (
    <div className="flex items-center justify-center h-screen">
      <Loading strokeColor="green" />
    </div>
  );
}
