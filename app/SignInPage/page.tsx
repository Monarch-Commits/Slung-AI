import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative mx-auto max-w-[1170px] px-4 sm:px-6 md:px-10">
        {/* Main Container */}
        <section className="flex w-full justify-center bg-white">
          <div className="flex min-h-[420px] w-full flex-col gap-6 border border-slate-200 px-6 py-16 sm:px-10 md:min-h-[490px] md:px-[42px] md:py-[100px]">
            {/* Header Section */}
            <div className="mx-auto flex max-w-lg flex-col gap-6">
              <div className="text-center">
                <h1 className="text-center font-[Inter] text-[32px] leading-[1.5] font-semibold tracking-[-2.05px] text-[#1e293b] md:text-[48px]">
                  Welcome back
                </h1>
                <p className="font-[Syne] text-sm text-gray-500">
                  Enter your credentials to access your multifamily dashboard.
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="mb-1.5 block font-[Inter] text-sm font-medium" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-[#3b63b8] focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  />
                </div>

                <div>
                  <div className="mb-1.5 flex justify-between">
                    <label className="font-[Inter] text-sm font-medium" htmlFor="password">
                      Password
                    </label>
                    <a href="#" className="font-[Syne] text-sm text-[#3b63b8] hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-[#3b63b8] focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-[#3b63b8] py-3 font-[Inter] font-semibold text-white shadow-sm transition-colors hover:bg-[#2d4d8f]"
                >
                  Sign In
                </button>
              </form>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="mx-4 flex-shrink font-[Syne] text-xs font-medium tracking-widest text-gray-400 uppercase">
                  Or continue with
                </span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 py-3 font-[Inter] font-medium transition-colors hover:bg-gray-50">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>

              <p className="text-center font-[Syne] text-sm text-gray-500">
                Dont have an account?{' '}
                <Link href="/signup" className="font-semibold text-[#3b63b8] hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
            <footer className="py-8 text-center font-[Syne] text-xs text-gray-400">
              © 2024 SlungAI. All rights reserved.
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
