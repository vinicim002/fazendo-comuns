import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { MobileNavList } from '@/components/shared/MobileNavList'
import { useLockBodyScroll } from '@/hooks/useMobileMenu'
import { mainNavigation } from '@/features/home/data/homeContent'
import { cn } from '@/lib/utils'

export function HomeNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useLockBodyScroll(mobileOpen)

  return (
    <nav aria-label="Navegação principal" className="relative w-full">
      {/* Desktop */}
      <ul className="hidden flex-wrap items-center justify-center gap-1 lg:flex">
        {mainNavigation.map((item) => (
          <li
            key={item.href}
            className="relative"
            onMouseEnter={() => item.children && setOpenDropdown(item.href)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              to={item.href}
              className="rounded-full px-4 py-2 font-ui text-sm font-medium tracking-wide text-foreground/75 transition-colors hover:bg-brand-amber/20 hover:text-foreground"
            >
              {item.label}
              {item.children && (
                <ChevronDown
                  className={cn(
                    'ml-1 inline size-3.5 transition-transform',
                    openDropdown === item.href && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              )}
            </Link>

            <AnimatePresence>
              {item.children && openDropdown === item.href && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 z-50 mt-1 min-w-[220px] -translate-x-1/2 rounded-2xl border border-border/60 bg-card p-2 shadow-medium"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block rounded-xl px-3 py-2.5 font-ui text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <div className="flex justify-center lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-ui text-sm font-medium shadow-soft transition-colors hover:bg-muted"
          aria-expanded={mobileOpen}
          aria-controls="home-mobile-nav"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          Menu
        </button>
      </div>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-40 bg-neutral-900/20 lg:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      {mobileOpen ? (
        <div
          id="home-mobile-nav"
          className="relative z-50 mt-4 lg:hidden"
        >
          <div className="max-h-[min(70dvh,32rem)] overflow-y-auto overscroll-contain rounded-2xl border border-border/60 bg-card p-3 shadow-soft">
            <MobileNavList
              onNavigate={() => setMobileOpen(false)}
              linkClassName="text-sm"
              childLinkClassName="text-xs"
            />
          </div>
        </div>
      ) : null}
    </nav>
  )
}
