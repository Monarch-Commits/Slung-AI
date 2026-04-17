import Image from 'next/image';

export default function Test() {
  return (
    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-[69px]">
      <div className="max-w-[1140px] w-full mx-auto grid grid-cols-1 md:grid-cols-10 gap-10 md:gap-5">
        <div className="md:col-span-2 flex items-start">
          <div className="relative w-28 h-10">
            <Image
              src="/LogoForFooter.png"
              alt="SlungAI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-[Syne] text-lg mb-5">Quick Menu</h3>
          <ul className="space-y-3 text-slate-100/90 text-sm">
            {['Platform', 'How It Works', 'Pricing', 'Blog', 'Contact Us'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white font-[Syne] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-[Syne] text-lg mb-5">About</h3>
          <ul className="space-y-3 text-slate-100/90 text-sm">
            {['Teams', 'Office', 'Vision'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white font-[Syne] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-[Syne] text-lg mb-4">Subscribe</h3>

          <p className="text-slate-100/80 mb-5 font-[Syne] leading-relaxed text-sm md:text-base">
            Subscribe to our newsletter for exclusive updates, insider tips, and offers delivered
            straight to your inbox.
          </p>

          <div className="flex flex-col lg:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 bg-[#5A79C0] border border-white/20 rounded-md px-4 font-[Syne] py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />

            <button className="bg-white text-[#4466B1] font-[Syne] font-semibold px-6 py-3 rounded-md hover:bg-slate-100 transition-colors w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
