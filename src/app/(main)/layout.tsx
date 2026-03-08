import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout relative flex min-h-screen flex-col text-pretty bg-zinc-900 text-zinc-300">
      <Header />
      <div className="flex h-full grow flex-col">
        <main className="grow px-4 pb-4">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
