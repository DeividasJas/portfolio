import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout relative flex min-h-screen flex-col text-pretty bg-zinc-900 text-zinc-300">
      <Header />
      <div className="snap-scroll-container">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
