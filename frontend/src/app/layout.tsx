import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BaseGrid - Decentralized Compute Network",
  description: "Connect AI/ML workloads with distributed GPU nodes securely on the Base network.",
  keywords: ["Web3", "Base", "Compute", "AI", "ML", "Decentralized"],
  authors: [{ name: "BaseGrid Team" }],
  openGraph: {
    title: "BaseGrid",
    description: "Decentralized AI/ML Compute on Base",
  }
};

import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white" suppressHydrationWarning>
        <Providers>
          {children}
          <Footer />
        </Providers>
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#18181b', color: '#fff', border: '1px solid #27272a' } }} />
      </body>
    </html>
  );
}
