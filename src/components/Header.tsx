import '../styles/header.css';
import Sidebar from './Sidebar';
export default function Header() {

  return (
    <header className='flex items-center justify-around h-20'>
      <img src='' alt='logo' className='fixed left-0 z-10 text-white' />
      <Sidebar/>
    </header>
  );
}
