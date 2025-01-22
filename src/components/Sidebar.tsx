import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { navbarLinks, navbarSocials } from "../types/navbarLinkTypes";
import { handleResizeTransition } from "../utils/ResizeTransitionHandler";
import { handleClickOutside } from "../utils/closeSidebar";
import { MailOpen } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function Sidebar() {
  const [clicked, setClicked] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const body = document.body;
  const isLandscape = useMediaQuery({ query: "(orientation: landscape)" });
  const isLargeLandscape = useMediaQuery({
    query: "(min-width: 768px) and (orientation: landscape)",
  });


  const handleButtonClick = () => {
    setClicked((prev) => !prev);
  };

  handleResizeTransition(".sidebar");
  useEffect(() => {
    if (clicked) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
    const closeSideBar = (event: MouseEvent) => {
      handleClickOutside(event, sidebarRef, buttonRef, clicked, setClicked);
    };

    document.addEventListener("click", closeSideBar);

    return () => {
      document.removeEventListener("click", closeSideBar);
    };
  });
  return (
    <>
      <div
        className={`nav-button-wrapper ${clicked && "nav-button-wrapper-active"}`}
      >
        <button
          className={`nav-button ${clicked && "nav-btn-active"}`}
          aria-label="Open Sidebar"
          onClick={handleButtonClick}
          ref={buttonRef}
        />
      </div>
      <nav
        className={`sidebar text-zinc-800 ${clicked && "sidebar-active"} ${isLargeLandscape && "sidebar-landscape-large"}`}
        ref={sidebarRef}
      >
        <div
          className={`sidebar-content ${clicked && "sidebar-content-active"} ${isLargeLandscape && "sidebar-content-landscape-large"}`}
        >
          <ul
            className={`flex items-start justify-start w-full gap-2 ${isLandscape ? "flex-row gap-4" : "flex-col"}`}
          >
            {navbarLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} onClick={handleButtonClick}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col items-start justify-start w-full gap-2">
            <p className="flex items-center gap-2">
              SAY HELLO <MailOpen size={20} strokeWidth={2} />
            </p>
            <a
              href="mailto:jasas.code@gmail.com"
              className="mail-hover"
              onClick={handleButtonClick}
            >
              jasas.code@gmail.com
            </a>
          </div>
          <ul
            className={`flex items-start justify-start w-full gap-2 ${isLandscape ? "flex-row gap-4" : "flex-col"}`}
          >
            {navbarSocials.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleButtonClick}
                  target="_blank"
                  aria-label={link.title}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
