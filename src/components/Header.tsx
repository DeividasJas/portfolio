import { Link } from 'react-router-dom';
import '../styles/header.css';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import { Computer } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const location = useLocation();
  const size_s_Mobile = useMediaQuery({ minWidth: 320 });
  console.log(size_s_Mobile);

  return (
    <header
      className={`flex items-center justify-start h-0 
        ${location.pathname !== '/' && 'h-20'}
        `}
      id='header'
    >
      <Link
        to='/'
        className={`${
          location.pathname === '/' ? 'absolute md:fixed' : 'absolute'
        } bg-zinc-700 top-10 translate-y-[-50%] px-4 py-2 flex gap-2 items-center justify-center rounded-e-md cursor-pointer`}
      >
        <Computer />
        {size_s_Mobile && 
        <p>Deividas Jasas</p>
        }
      </Link>
      <Sidebar />
    </header>
  );
}
