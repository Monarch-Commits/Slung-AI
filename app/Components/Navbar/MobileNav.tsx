'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { NAV_LINKS } from '@/app/Constant';
import { IoMenuSharp } from 'react-icons/io5';

export default function MobileNavbar() {
  return (
    <div className="flex items-center justify-center lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="border-[#E4E4E4]" aria-label="Open menu">
            <IoMenuSharp className="h-5 w-5 text-black" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-52 rounded-md border border-gray-200 bg-white p-1 shadow-lg">
          {NAV_LINKS.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link href={item.href} className="w-full text-sm font-medium text-gray-700">
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
