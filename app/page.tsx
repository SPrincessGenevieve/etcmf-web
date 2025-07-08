"use client";
import Image from "next/image";
import Lines from "@/images/abstract.png";
import Lines2 from "@/images/abstract_top.png";
import Footer from "@/images/login_footer.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import "@/app/globals.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { authAPI } from "@/lib/utils/api";
import { useUser } from "@/app/context/UserContext";

export default function Home() {
  const router = useRouter();
  const { loginWithToken, isAuthenticated, isLoading } = useUser();
  
  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/etcmf/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0B6540]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }


  if (isAuthenticated) {
    return null;
  }

  const NavigateRecovery = () => {
    router.push("/auth/recovery");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleLogin = async () => {
    setError("");
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Login and get token
      const response = await authAPI.loginAdmin(formData.email, formData.password);
      
      // Use token to fetch user data and store in context
      await loginWithToken(response.token);
      
      // Navigate to OTP scan page 
      router.push("/auth/otp-scan");
      
    } catch (error: any) {
      console.error("Login failed:", error);
      setError(error.message || "Login failed. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="bg-[#0B6540] w-full h-screen flex items-center justify-center login_container">
      <Image
        width={400}
        height={400}
        className="w-[70vh] h-[50vh] absolute top-0 left-0"
        src={Lines2}
        alt=""
      ></Image>
      <Image
        width={400}
        height={400}
        className="w-[70vh] h-[50vh] absolute bottom-0 right-0"
        src={Lines}
        alt=""
      ></Image>

      <div
        style={{ boxShadow: "2px 2px 24px rgba(0, 0, 0, 0.3)" }}
        className="login_container_2 relative max-w-[430px] max-h-[600px] w-full h-full rounded-xl bg-transparent shadow-2xl"
      >
        <Image
          width={1000}
          height={1000}
          className="w-[70vh] h-auto absolute z-10 bottom-0 rounded-b-xl"
          src={Footer}
          alt=""
        ></Image>

        <div className="p-6 z-20 relative h-full">
          <Avatar className="w-[5vh] h-[5vh]">
            <AvatarImage
              src={
                "https://pbs.twimg.com/profile_images/1501366628277125120/xPUnJZbX_400x400.jpg"
              }
            ></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* HEADER TITLE */}
          <div className="flex flex-col gap-2">
            <p className="font-medium text-white text-2xl">Sign-in</p>
            <p className="text-white font-light">Input your e-TC Account</p>
          </div>

          {/* FOOTER */}
          <div className="mt-[10%] flex flex-col gap-3 h-[70%] justify-center">
            {/* Error message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-100 px-3 py-2 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <div className="relative flex flex-col gap-2">
              <Label className="font-light text-white text-[12px]">
                Email or Username
              </Label>
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="bg-[#03301d3d] text-white"
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
            </div>
            <div className="relative flex flex-col gap-2">
              <Label className="font-light text-white text-[12px]">
                Password
              </Label>
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="bg-[#03301d3d] text-white"
                placeholder="Enter your password"
                disabled={isSubmitting}
              />
            </div>
            <Button
              onClick={NavigateRecovery}
              variant={"ghost"}
              className="hover:bg-[transparent] cursor-pointer w-auto p-0 m-0 flex justify-end text-right text-white font-light"
              disabled={isSubmitting}
            >
              Forgot Password?
            </Button>
            <Button
              onClick={handleLogin}
              className="cursor-pointer bg-white text-[#3e7c1f] hover:bg-transparent hover:text-white border border-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
            <div className="w-full h-full border-t border-white flex py-6 mt-[7%]">
              <p className="text-[12px] text-white text-center cursor-pointer">
                Don’t have an account yet? Request the admin to create your
                account. <b>Learn more about account creation</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white flex justify-center items-center absolute bottom-10">
        eTCMF | 2025
      </p>
    </div>
  );
}
