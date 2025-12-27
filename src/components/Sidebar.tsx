'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { navbarLinks, navbarSocials } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';
import { handleResizeTransition } from '../utils/ResizeTransitionHandler';
import { MailOpen } from 'lucide-react';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut';

export default function Sidebar() {
  const [clicked, setClicked] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  const handleButtonClick = () => {
    setClicked((prev) => !prev);
  };
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

      {/* Sidebar Navigation */}
      <nav
        className={`sidebar text-zinc-800 ${clicked && 'sidebar-active'}`}
        ref={sidebarRef}
      >
        <div
          className={`sidebar-content ${clicked && 'sidebar-content-active'}`}
        >
          {/* Navigation Links */}
          <ul className='flex flex-row items-start justify-start w-full gap-4'>
            {navbarLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} onClick={handleButtonClick}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Section */}
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

          {/* Social Links */}
          <ul className='flex flex-row items-start justify-start w-full gap-4'>
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
