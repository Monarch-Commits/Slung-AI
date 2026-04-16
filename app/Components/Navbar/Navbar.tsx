import { NAV_LINKS } from '@/app/Constant';
import Image from 'next/image';
import Link from 'next/link';
import MobileNavbar from './MobileNav';

export default function Navbar() {
  return (
    <nav className="w-full border bg-white">
      <div className="max-w-[1300px] mx-auto px-2 sm:px-4 md:px-10 lg:px-0 flex  items-center justify-between py-4 border-gray-100">
        <Link href="/">
          <Image
            src="/LogoNav.png"
            alt="SlungAI Logo"
            width={130}
            height={52}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-7">
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-blue-900 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="sm:px-[12px] py-2 px-3 sm:py-[4px] md:px-[18px] md:py-[6px] lg:px-[24px] lg:py-[10px] border-2 border-[#4361ee] text-[#4361ee] rounded-md font-semibold hover:bg-blue-50 transition-all">
            See Our Plans
          </button>

          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
