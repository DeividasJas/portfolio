import { Link } from 'react-router-dom';
import '../styles/header.css';
import Sidebar from './Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
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
        <img
          src='src/assets/logo.svg'
          alt='DJ Logo'
          className='cursor-pointer'
        />
        <p>Deividas Jasas</p>
      </Link>
      <Sidebar location={location} navigate={navigate} />
    </header>
  );
}
