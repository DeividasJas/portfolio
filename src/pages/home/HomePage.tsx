import NavBullets from '../../components/NavBullets';
import './../../styles/homePage.css';

export default function HomePage() {
  return (
    <>
      <div className='container'>
        <section id='target-1' className='section'>
          <h1>Target-1</h1>
        </section>
        <section id='target-2' className='section'>
          <h1>Target-2</h1>
        </section>
        <section id='target-3' className='section'>
          <h1>Target-3</h1>
        </section>
      </div>
      <div className='fixed hidden md:block top-1/2 right-4'>
        <NavBullets />
      </div>
    </>
  );
}
