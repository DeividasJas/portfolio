import { Link } from 'react-router-dom';
import { navbarLinks } from '../types/navbarLinkTypes';
import { useState } from 'react';
export default function Sidebar() {
  const [clicked, setClicked] = useState(true);
  return (
    <>
      <button
        className={`nav-button  ${clicked && 'nav-btn-active'}`}
        onClick={() => setClicked((p) => !p)}></button>


        
      <nav className={`sidebar ${clicked && 'sidebar-active'}`}>
        <ul className=''>
          {navbarLinks.map((link) => (
            <li>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div>
            <p>SAY HELLO</p>
            <p>jasas.code@gmail.com</p>
            <p>gamerdeiver</p>
        </div>
        <div>
            <p>facebook</p>
            <p>linkedin</p>
            <p>github</p>
        </div>
      </nav>
    </>
  );
}
