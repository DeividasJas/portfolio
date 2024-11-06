import './styles/App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './layout/Layout';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Layout>
        <Header />
        {/* <div className='test'></div> */}
        <main>
          <Outlet />
        </main>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
