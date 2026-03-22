'use client'

import { navbarLinks, navbarSocials } from '@/data/navigation'
import { siteConfig } from '@/data/site-config'
import { Github, Linkedin, MailOpen } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  return (
    <footer
      className={`flex flex-col items-center justify-center px-8 pb-4 text-zinc-400 md:w-full md:px-12 ${pathname === '/' ? 'bg-slate-950' : 'bg-inherit'}`}
    >
      <section id="target-3" className={`${pathname === '/' ? 'section' : ''} flex w-full flex-col gap-4 md:gap-8`}>
        <div className="mt-6 flex w-full items-center justify-around border-t pt-6">
          <div>
            <p className="flex items-center gap-2">
              SAY HELLO <MailOpen size={20} />
            </p>
            <a href={`mailto:${siteConfig.email}`} className="link-hover">
              {siteConfig.email}
            </a>
          </div>
          <ul>
            {navbarLinks.map((link) => {
              return (
                <Link key={link.path} href={link.path}>
                  <li className="link-hover">{link.title}</li>
                </Link>
              )
            })}
          </ul>
        </div>
        <div className="flex min-w-full items-center justify-around gap-4">
          <p>
            Designed and developed by {siteConfig.author}. © {siteConfig.year}
          </p>
          <div className="flex gap-10">
            {navbarSocials.map((social) => {
              const Icon = social.title === 'LinkedIn' ? Linkedin : Github
              return (
                <a key={social.path} href={social.path} target="_blank" rel="noreferrer" aria-label={social.title}>
                  <Icon size={30} strokeWidth={1} className="transition hover:scale-110 hover:text-blue-500" />
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </footer>
  )
}
