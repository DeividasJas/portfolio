import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout relative flex min-h-screen flex-col text-pretty bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-zinc-300">
      <Header />
      <div className="flex h-full grow flex-col">
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
