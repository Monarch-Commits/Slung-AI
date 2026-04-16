'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const [show, setShow] = useState(true);

  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const HERO_HEIGHT = 700;
  const SCROLL_THRESHOLD = 5;

  useEffect(() => {
    const clearIdle = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY.current);

      if (delta < SCROLL_THRESHOLD) return;

      const scrollingUp = currentY < lastScrollY.current;

      if (currentY < HERO_HEIGHT) {
        setShow(true);
        clearIdle();
        lastScrollY.current = currentY;
        return;
      }

      if (scrollingUp) {
        setShow(true);
        clearIdle();
      }

      if (!scrollingUp) {
        clearIdle();

        timeoutRef.current = setTimeout(() => {
          setShow(false);
        }, 2000);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearIdle();
    };
  }, []);

  return (
    <div
      className={`sticky top-0 left-0 w-full mx-auto z-50 transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <Navbar />
    </div>
  );
}
