import AuthStep1 from "@/images/auth_step_1.png";
import AuthStep2 from "@/images/auth_step_2.png";

export const OTPGuide = [
  {
    step: "Step 1: Install Google Authenticator",
    instruction:
      "Android: Go to Google Play Store, search for Google Authenticator, and install. iPhone: Go to App Store, search for Google Authenticator, and install.",
    picture: AuthStep1,
  },
  {
    step: "Step 2: Enable 2FA on Your Account",
    instruction:
      "Log in to your account (e.g., email, bank, etc.). Go to Account Settings > Security > Enable Two-Factor Authentication (2FA). Select Google Authenticator.",
    picture: AuthStep2,
  },
  {
    step: "Step 3: Set Up Google Authenticator",
    instruction:
      "Open the Google Authenticator app and tap +. Scan QR code or Enter the key shown on your account.",
    picture: "",
  },
  {
    step: "Step 4: Verify Your OTP",
    instruction:
      "Enter the 6-digit code from Google Authenticator on your account's 2FA setup page. Done! Your account is now protected with OTP.",
    picture: "",
  },
];
