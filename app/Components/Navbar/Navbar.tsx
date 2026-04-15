import { NAV_LINKS } from '@/app/Constant';
import Image from 'next/image';
import Link from 'next/link';
import MobileNavbar from './MobileNav';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-2 sm:px-10 bg-white border border-gray-100">
      {/* Logo Section */}

      <Link href="/">
        <Image
          src="/LogoNav.png"
          alt="SlungAI Logo"
          width={130}
          height={52}
          className="object-contain"
        />
      </Link>

      <div className="flex items-center gap-7">
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-gray-900 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="px-6 py-2 border-2 border-[#4361ee] text-[#4361ee] rounded-md font-semibold hover:bg-blue-50 transition-all">
          See Our Plans
        </button>

        {/* Mobile Menu */}
        <MobileNavbar />
      </div>
    </nav>
  );
}
