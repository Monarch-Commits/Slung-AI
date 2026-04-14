import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-10 bg-white border border-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="SlungAI Logo"
            width={114.59}
            height={46}
            className="object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li>
            <Link href="#platform" className="hover:text-gray-900 transition-colors">
              Platform
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="hover:text-gray-900 transition-colors">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:text-gray-900 transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#blog" className="hover:text-gray-900 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Sign In
            </Link>
          </li>
        </ul>

        <button className="px-6 py-2 border-2 border-[#4361ee] text-[#4361ee] rounded-md font-semibold hover:bg-blue-50 transition-all">
          Custom
        </button>
      </div>
    </nav>
  );
}
