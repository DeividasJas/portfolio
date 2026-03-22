'use client'

import ScrollSpy from 'react-scrollspy-navigation'

export default function NavBullets() {
  return (
    <ScrollSpy activeClass="nav-active" behavior="smooth">
      <nav>
        <ul className="flex min-h-min flex-col items-center justify-center gap-4">
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
  )
}
