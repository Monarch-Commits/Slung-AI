'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const isInvestor = pathname === '/platform/investors';
  const isBroker = pathname === '/platform/brokers';

  return (
    <section className="w-full flex justify-center border-b border-x bg-white">
      <div className="max-w-[1175px] w-full mx-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-20">
        {/* NAV */}
        <div className="flex border border-gray-200 rounded overflow-hidden mb-8 md:mb-10">
          <button
            onClick={() => router.push('/platform/investors')}
            className={`flex-1 py-3 text-center font-semibold ${
              isInvestor ? 'bg-slate-50 text-blue-600' : 'text-gray-400'
            }`}
          >
            For Investors
          </button>

          <div className="w-px bg-gray-200" />

          <button
            onClick={() => router.push('/platform/brokers')}
            className={`flex-1 py-3 text-center font-semibold ${
              isBroker ? 'bg-slate-50 text-blue-600' : 'text-gray-400'
            }`}
          >
            For Brokers
          </button>
        </div>

        {/* PAGE CONTENT */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">{children}</div>
      </div>
    </section>
  );
}
