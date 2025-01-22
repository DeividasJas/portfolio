import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Computer } from "lucide-react";
import Sidebar from "./Sidebar";
import "../styles/header.css";

export default function Header() {
  const location = useLocation();

  const [isScrolling, setIsScrolling] = useState(true);
  const [size_s_Mobile, setSize_s_Mobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 20);
    };
    const handleResize = () => {
      setSize_s_Mobile(window.innerWidth < 440);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <header
      className={`flex items-center justify-start h-0 
        ${location.pathname !== "/" && "h-20"}
        `}
      id="header"
    >
      <Link
        to="/"
        className={`${!isScrolling && "bg-opacity-70"} 
        bg-zinc-700 top-[45px] translate-y-[-50%] px-4 py-2 flex gap-2 items-center justify-center rounded-e-md cursor-pointer z-0 fixed`}
      >
        <Computer />
        {!size_s_Mobile && !isScrolling && <p>Deividas Jasas</p>}
      </Link>
      <Sidebar />
    </header>
  );
}
