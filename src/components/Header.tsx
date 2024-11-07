import { Link } from 'react-router-dom';
import '../styles/header.css';
import Sidebar from './Sidebar';


export default function Header() {  
  return (
    <header className='flex items-center justify-start h-20'
    id='header'>
      {/* <img src='' alt='logo' className='fixed left-0 z-10 text-white' /> */}
      <Link to='/'>Deividas Jasas</Link>
      <Sidebar />
    </header>
  );
}
