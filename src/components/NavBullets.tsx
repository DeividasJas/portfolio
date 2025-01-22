import "./../styles/navBullet.css";
import ScrollSpy from "react-scrollspy-navigation";
export default function NavBullets() {
  return (
    <ScrollSpy activeClass="nav-active" behavior="smooth">
      <nav>
        <ul className="flex flex-col items-center justify-center gap-4 min-h-min ">
          <li>
            <a href="#target-1" className="nav-bullet-inactive"></a>
          </li>
          <li>
            <a href="#target-2" className="nav-bullet-inactive"></a>
          </li>
          <li>
            <a href="#target-3" className="nav-bullet-inactive"></a>
          </li>
        </ul>
      </nav>
    </ScrollSpy>
  );
}
