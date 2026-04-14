import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#4466B1] text-white py-16 px-8 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Logo Section */}
        <div className="md:col-span-3 flex items-start gap-3">
          <div className="relative w-28 h-10">
            <Image
              src="/SlungLogoFooter.png"
              alt="SlungAI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Quick Menu */}
        <div className="md:col-span-2">
          <h3 className="font-semibold text-lg mb-6">Quick Menu</h3>
          <ul className="space-y-4 text-slate-100/90">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Platform
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                How It Works
              </a>
            </li>
            <li className="flex items-center gap-1">
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li className="flex items-center gap-1">
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li className="flex items-center gap-1">
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className="md:col-span-2">
          <h3 className="font-semibold text-lg mb-6">About</h3>
          <ul className="space-y-4 text-slate-100/90">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Office
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Vision
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="md:col-span-5">
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <p className="text-slate-100/80 mb-6 leading-relaxed">
            Subscribe to our newsletter for exclusive updates, insider tips, and offers delivered
            straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-[#5A79C0] border border-white/20 rounded-md px-4 py-3 grow text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
            <button className="bg-white text-[#4466B1] font-semibold px-8 py-3 rounded-md hover:bg-slate-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
