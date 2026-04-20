import { NAV_LINKS } from '@/app/Constant';
import Image from 'next/image';
import Link from 'next/link';
import MobileNavbar from './MobileNav';

export default function Navbar() {
  return (
    <nav className="w-full border border-[#E4E4E4] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1170px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-[69px]">
        <Link href="/">
          <Image
            src="/NavLogo.svg"
            alt="SlungAI Logo"
            width={114}
            height={46}
            className="h-auto w-[114px] object-contain"
            quality={75}
            priority
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-7">
          <ul className="hidden items-center gap-8 text-[13px] font-normal text-[#1A1A18] lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-brand-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="border-brand-primary text-brand-primary rounded-sm border-2 px-3 py-2 text-[14px] font-medium transition-all hover:bg-blue-50 sm:px-[12px] sm:py-[4px] md:px-[18px] md:py-[6px] lg:px-6 lg:py-[10px]">
            See Our Plans
          </button>

          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
