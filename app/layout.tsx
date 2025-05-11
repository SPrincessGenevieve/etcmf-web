"use client";
import "./globals.css";
import { UserProvider } from "./context/UserContext";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Providers>
          <UserProvider> {children}</UserProvider>
        </Providers>
      </body>
    </html>
  );
}
