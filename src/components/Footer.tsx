import { navbarLinks } from "@/types/navbarLinkTypes";
import { Github, Linkedin, MailOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export default function Footer() {
  const location = useLocation();
  return (
    <footer className={`flex flex-col items-center justify-center px-8 pb-4 md:w-full md:px-12 text-zinc-400 ${location.pathname === "/" && "bg-[#0c0c0f]"}`}>
      <section
        id="target-3"
        className={`${location.pathname === "/" && "section"} flex flex-col gap-4 md:gap-8 w-full`}
      >
        <div className="flex items-center justify-around w-full pt-6 mt-6 border-t">
          <div>
            <p className="flex items-center gap-2">
              SAY HELLO <MailOpen size={20} />
            </p>
            <a
              href="mailto:jasas.code@gmail.com"
              className="transition hover:scale-105 hover:text-blue-500"
            >
              jasas.code@gmail.com
            </a>
          </div>
          <ul>
            {navbarLinks.map((link) => {
              return (
                <Link key={link.path} to={link.path}>
                  <li className="transition hover:scale-105 hover:text-blue-500">{link.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center justify-around min-w-full gap-4">
          <p>Designed and developed by Deividas Jasas. © 2024</p>
          <div className="flex gap-10">
            <a
              href="https://www.linkedin.com/in/deividasjasas/"
              target="_blank"
            >
              <Linkedin
                size={30}
                strokeWidth={1}
                className="transition hover:scale-110 hover:text-blue-500"
                aria-label="Linkedin"
              />
            </a>
            <a href="https://github.com/DeividasJas" target="_blank">
              <Github
                size={30}
                strokeWidth={1}
                className="transition hover:scale-110 hover:text-blue-500"
                aria-label="Github"

              />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
