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
  title: "Tenhou Web Portal",
  description: "Tenhouが開発したWebサイト一覧 - ポータルサイト",
  icons: {
    icon: '/icon/tenhouPortfolioIcon.svg',
  },
  openGraph: {
    title: "Tenhou Web Portal",
    description: "Tenhouが開発したWebサイト一覧 - ポータルサイト",
    images: ['/icon/tenhouPortfolioIcon.svg'],
  },
  twitter: {
    card: 'summary',
    title: "Tenhou Web Portal",
    description: "Tenhouが開発したWebサイト一覧 - ポータルサイト",
    images: ['/icon/tenhouPortfolioIcon.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
