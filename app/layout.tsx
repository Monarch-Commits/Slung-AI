import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Inter } from 'next/font/google';
import './globals.css';

import Footer from './Components/Footer';
import { Syne } from 'next/font/google';
import NavbarWrapper from './Components/Navbar/NavbarWrapper';

const syne = Syne({
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Slung AI',
  description: 'AI underwriting platform for real estate investors and brokers.',
  icons: {
    icon: '/slung.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.className} ${inter.className}  h-full  antialiased`}
    >
      <body className="min-h-full w-full flex flex-col relative">
        <NavbarWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
