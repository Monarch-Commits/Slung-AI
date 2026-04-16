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
    <div className="flex items-center lg:hidden justify-center ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open menu">
            <IoMenuSharp className="w-5 h-5 text-black" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-52 bg-white border border-gray-200 shadow-lg rounded-md p-1">
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
