import { useLocation, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  // console.log(navigate);
  

  
  return (
    <footer className={`mt-auto ${location.pathname === '/' && 'section'}`}>
      <p>© 2022 Deividas Jasas</p>
    </footer>
  );
}
