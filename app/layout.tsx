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
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
        alt: 'Tenhou Web Portal',
        type: 'image/png',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tenhou Web Portal",
    description: "Tenhouが開発したWebサイト一覧 - ポータルサイト",
    images: ['/og-image.png'],
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
