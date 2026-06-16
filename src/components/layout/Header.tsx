import { Link } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'
import { InstagramIcon } from '@/components/shared/InstagramIcon'
import { Logo } from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { useUIStore } from '@/store/uiStore'
import { mainNavigation } from '@/features/home/data/homeContent'
import { cn } from '@/lib/utils'

export function Header() {
  const isOpen = useUIStore((s) => s.isMobileMenuOpen)
  const setOpen = useUIStore((s) => s.setMobileMenuOpen)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <div className="container-app flex h-16 items-center justify-between md:h-20">
        <Logo size="sm" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {mainNavigation.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                to={item.href}
                className="rounded-full px-3 py-2 font-ui text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute top-full left-0 z-50 min-w-[220px] translate-y-2 rounded-2xl border border-border bg-card p-2 opacity-0 shadow-medium transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block rounded-xl px-3 py-2 font-ui text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="default" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/contato">
              <Mail className="size-4" aria-hidden="true" />
              Contato
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-border/40 bg-background transition-all duration-300 lg:hidden',
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        )}
        aria-hidden={!isOpen}
      >
        <nav className="container-app space-y-1 py-4" aria-label="Navegação mobile">
          {mainNavigation.map((item) => (
            <div key={item.href}>
              <Link
                to={item.href}
                className="block rounded-xl px-3 py-2.5 font-ui text-base font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 space-y-1 border-l border-border pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block rounded-lg px-3 py-2 font-ui text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-2 pt-3">
            <Button variant="default" className="flex-1" asChild>
              <Link to="/contato" onClick={() => setOpen(false)}>
                <Mail className="size-4" aria-hidden="true" />
                Contato
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.instagram.com/fazendocomuns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Fazendo Comuns"
              >
                <InstagramIcon />
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
