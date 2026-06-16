import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { cn } from '@/lib/utils'

export function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />
      <ScrollToTop />
      {!isHome && <Header />}
      <main
        id="main-content"
        className={cn('flex-1', !isHome && 'pt-16 md:pt-20')}
      >
        <Outlet />
      </main>
      {!isHome && <Footer />}
    </div>
  )
}
