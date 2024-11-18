import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navbarLinks, navbarSocials } from '../types/navbarLinkTypes';
import { handleResizeTransition } from '../utils/ResizeTransitionHandler';
import { handleClickOutside } from '../utils/closeSidebar';
import { MailOpen } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

export default function Sidebar() {
  const [clicked, setClicked] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const body = document.body;
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  const isLargeLandscape = useMediaQuery({ minWidth: 768 });
  console.log(isLandscape);
  

  const handleButtonClick = () => {
    setClicked((prev) => !prev);
  };

  handleResizeTransition('.sidebar');
  useEffect(() => {
    if (clicked) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
    const closeSideBar = (event: MouseEvent) => {
      handleClickOutside(event, sidebarRef, buttonRef, clicked, setClicked);
    };

    // Attach event listener
    document.addEventListener('click', closeSideBar);

    // Cleanup event listener
    return () => {
      document.removeEventListener('click', closeSideBar);
    };
  });
  return (
    <>
      <button
        className={`nav-button ${clicked && 'nav-btn-active'}`}
        aria-label='Open Sidebar'
        onClick={handleButtonClick}
        ref={buttonRef}
      />
      <nav
        className={`sidebar text-zinc-800 ${clicked && 'sidebar-active'} ${isLargeLandscape && isLandscape && 'sidebar-landscape-large'}`}
        ref={sidebarRef}
      >
        <div
          className={`sidebar-content ${clicked && 'sidebar-content-active'} ${isLargeLandscape && isLandscape && 'sidebar-content-landscape-large'}`}
        >
          <ul className={`flex items-start justify-start w-full gap-2 ${isLandscape ? 'flex-row gap-4' : 'flex-col'}`}>
            {navbarLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} onClick={handleButtonClick}>
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
              href='mailto:jasas.code@gmail.com'
              className='mail-hover'
              onClick={handleButtonClick}
            >
              jasas.code@gmail.com
            </a>
          </div>
          <ul className={`flex items-start justify-start w-full gap-2 ${isLandscape ? 'flex-row gap-4' : 'flex-col'}`}>
            {navbarSocials.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleButtonClick}
                  target='_blank'
                  aria-label={link.title}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
