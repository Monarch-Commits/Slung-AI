import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './Components/Footer';
import { Syne } from 'next/font/google';
import NavbarWrapper from './Components/Navbar/NavbarWrapper';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const syne = Syne({
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SlungAI',
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
      className={` ${syne.className} ${inter.className} ${dmSans.className} h-full antialiased`}
    >
      <body className="flex min-h-full w-full flex-col">
        <NavbarWrapper />
        {children}

        <div className="bg-brand-primary py-14 font-sans text-white md:py-16">
          <Footer />
        </div>
      </body>
    </html>
  );
}
