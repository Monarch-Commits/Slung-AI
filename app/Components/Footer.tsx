'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FOOTER_LINKS_ABOUT, FOOTER_LINKS_QUICKMENU } from '../Constant';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email');
      return;
    }

    alert('Subscribed successfully!');

    setEmail('');
  };

  return (
    <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 md:px-10">
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 gap-10 md:grid-cols-10 md:gap-5">
        <div className="flex items-start md:col-span-2">
          <Link href="/">
            <Image
              src="/footer.svg"
              alt="SlungAI Logo"
              width={109}
              height={43}
              className="h-auto w-[109px] object-contain"
            />
          </Link>
        </div>

        <div className="md:col-span-2">
          <p className="mb-5 font-[Syne] text-[14px] font-medium">Quick Menu</p>
          <ul className="space-y-3 text-sm text-slate-100/90">
            {FOOTER_LINKS_QUICKMENU.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="font-[Syne] text-[14px] leading-[20px] font-normal tracking-[-0.07px] transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-5 font-[Syne] text-[14px] font-medium">About</p>
          <ul className="space-y-3 text-sm text-slate-100/90">
            {FOOTER_LINKS_ABOUT.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="font-[Syne] text-[14px] leading-[20px] font-normal tracking-[-0.07px] transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 md:col-span-4">
          <p className="font-[Syne] text-[14px] font-medium">Subscribe</p>

          <p className="font-[Syne] text-[14px] leading-[20px] font-normal tracking-[-0.07px] text-[#B5BDC9]">
            Subscribe to our newsletter for exclusive updates, insider tips, and offers delivered
            straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 rounded-md border border-white/20 bg-[#5A79C0] px-4 py-3 text-center font-[Syne] text-[14px] leading-[25.6px] font-medium text-white placeholder:text-white focus:ring-2 focus:ring-white/30 focus:outline-none"
            />

            <button
              type="submit"
              className="text-brand-primary w-full rounded-md bg-white px-6 py-3 font-[Syne] font-semibold transition-colors hover:bg-slate-100 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
