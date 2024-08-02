import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";


const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "AI Interview Coach",
  description: "AI-powered interview",
  icon: "/public/icon.png",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <Toaster />
     
      {children}
     
      
      </body>
    </html>
    </ClerkProvider>
  );
}
