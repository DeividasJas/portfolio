'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { navbarLinks, navbarSocials } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';
import { handleResizeTransition } from '../utils/ResizeTransitionHandler';
import { MailOpen } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut';

export default function Sidebar() {
  const [clicked, setClicked] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  const isLargeLandscape = useMediaQuery({
    query: '(min-width: 768px) and (orientation: landscape)',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleButtonClick = () => {
    setClicked((prev) => !prev);
  };

  // Custom hooks for sidebar functionality
  useLockBodyScroll(clicked);
  useOnClickOutside([sidebarRef, buttonRef], () => setClicked(false), clicked);
  useKeyboardShortcut('Escape', () => setClicked(false), clicked);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cleanup = handleResizeTransition('.sidebar');
      return cleanup;
    }
  }, []);
  return (
    <>
      <div
        className={`nav-button-wrapper ${clicked && 'nav-button-wrapper-active'}`}
      >
        <button
          className={`nav-button ${clicked && 'nav-btn-active'}`}
          aria-label='Open Sidebar'
          onClick={handleButtonClick}
          ref={buttonRef}
        />
      </div>
      <nav
        className={`sidebar text-zinc-800 ${clicked && 'sidebar-active'} ${mounted && isLargeLandscape && 'sidebar-landscape-large'}`}
        ref={sidebarRef}
      >
        <div
          className={`sidebar-content ${clicked && 'sidebar-content-active'} ${mounted && isLargeLandscape && 'sidebar-content-landscape-large'}`}
        >
          <ul
            className={`flex items-start justify-start w-full gap-2 ${mounted && isLandscape ? 'flex-row gap-4' : 'flex-col'}`}
          >
            {navbarLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} onClick={handleButtonClick}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className='relative flex flex-col items-start justify-start w-full gap-2'>
            <p className='flex items-center gap-2'>
              SAY HELLO <MailOpen size={20} strokeWidth={2} />
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className='mail-hover'
              onClick={handleButtonClick}
            >
              {siteConfig.email}
            </a>
          </div>
          <ul
            className={`flex items-start justify-start w-full gap-2 ${mounted && isLandscape ? 'flex-row gap-4' : 'flex-col'}`}
          >
            {navbarSocials.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  onClick={handleButtonClick}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={link.title}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
