import "./styles/App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./layout/Layout";

function App() {
  const location = useLocation();
  return (
    <>
      <Layout>
        <Header />
        <div
          className={location.pathname === "/" ? "snap-scroll-container" : "flex flex-col h-full grow"}
        >
          <main className={location.pathname === '/' ? "" : 'grow px-4 pb-4'}>
            <Outlet />
          </main>
          <Footer />
        </div>
      </Layout>
    </>
  );
}

export default App;