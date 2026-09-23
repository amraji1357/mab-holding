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
  title: {
    default: "شرکت بی‌رامی | M.A.B Holding",
    template: "%s | M.A.B Holding",
  },
  description:
    "وب‌سایت رسمی شرکت بی‌رامی، هلدینگ M.A.B با مجموعه‌ای از شرکت‌ها و کسب‌وکارها در حوزه‌های مختلف.",
  keywords: [
    "شرکت بی‌رامی",
    "M.A.B",
    "M.A.B Holding",
    "Birami Holding",
    "هلدینگ بی‌رامی",
    "رایان زمرد",
    "پتروشیمی",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
