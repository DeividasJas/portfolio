import { Link } from 'react-router-dom';
import { navbarLinks } from '../types/navbarLinkTypes';
import { useState } from 'react';
export default function Sidebar() {
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };
  
  const sidebarDOM = document.getElementsByClassName('sidebar') as HTMLCollectionOf<HTMLElement>;
  let resizing = false;
  
  // Function to disable transition
  const disableTransition = () => {
    if (sidebarDOM[0]) {
      sidebarDOM[0].style.transition = 'none';
    }
  };
  
  // Function to enable transition
  const enableTransition = () => {
    if (sidebarDOM[0]) {
      sidebarDOM[0].style.transition = ''; // Resets to original transition in CSS
    }
  };
  
  // Resize handler
  const handleResize = () => {
    if (!resizing) {
      disableTransition();
      resizing = true;
    }
  
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      enableTransition();
      resizing = false;
    }, 200); // Delay after resizing stops
  };
  
  // Add the resize event listener
  let timeoutId: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', handleResize);
  

  return (
    <>
      <button
        className={`nav-button  ${clicked && 'nav-btn-active'}`}
        onClick={handleClick}
      />

      <nav className={`sidebar text-zinc-800 ${clicked && 'sidebar-active'}`}>
        <>
          <div
            className={`sidebar-content ${clicked && 'sidebar-content-active'}`}
          >
            <ul className=''>
              {navbarLinks.map((link) => (
                <li>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <div>
              <p>SAY HELLO</p>
            </div>
            <div>
              <p>facebook</p>
              <p>linkedin</p>
              <p>github</p>
            </div>
          </div>
        </>
      </nav>
    </>
  );
}
