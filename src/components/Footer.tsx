import { useLocation } from 'react-router-dom';
export default function Footer() {
  const location = useLocation();
  return (
    <footer>
      <section
        id='target-4'
        className={` ${location.pathname === '/' ? 'section' : ''} bg-lime-900`}
      >
        <h1>footer like</h1>
        <p>© 2022 Deividas Jasas</p>
      </section>
    </footer>
  );
}
