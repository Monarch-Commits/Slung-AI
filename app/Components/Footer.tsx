import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 md:px-10 lg:px-[69px]">
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 gap-10 md:grid-cols-10 md:gap-5">
        <div className="flex items-start md:col-span-2">
          <Link href="/">
            <Image
              src="/LogoForFooter.png"
              alt="SlungAI Logo"
              width={109}
              height={43}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-5 font-[Syne] text-lg">Quick Menu</h3>
          <ul className="space-y-3 text-sm text-slate-100/90">
            {['Platform', 'How It Works', 'Pricing', 'Blog', 'Contact Us'].map((item) => (
              <li key={item}>
                <a href="#" className="font-[Syne] transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-5 font-[Syne] text-lg">About</h3>
          <ul className="space-y-3 text-sm text-slate-100/90">
            {['Teams', 'Office', 'Vision'].map((item) => (
              <li key={item}>
                <a href="#" className="font-[Syne] transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="mb-4 font-[Syne] text-lg">Subscribe</h3>

          <p className="mb-5 font-[Syne] text-sm leading-relaxed text-slate-100/80 md:text-base">
            Subscribe to our newsletter for exclusive updates, insider tips, and offers delivered
            straight to your inbox.
          </p>

          <div className="flex flex-col gap-3 lg:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-md border border-white/20 bg-[#5A79C0] px-4 py-3 font-[Syne] text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/30 focus:outline-none"
            />

            <button className="w-full rounded-md bg-white px-6 py-3 font-[Syne] font-semibold text-[#4466B1] transition-colors hover:bg-slate-100 sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
