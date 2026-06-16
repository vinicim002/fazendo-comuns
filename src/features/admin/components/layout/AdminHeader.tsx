import { Link } from 'react-router-dom'
import { Bell, Menu, Moon, Sun } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from '@/contexts/ThemeContext'
import { AdminSidebar } from '@/features/admin/components/layout/AdminSidebar'
import { useAdminUiStore } from '@/features/admin/store/adminUiStore'

export function AdminHeader() {
  const { theme, toggleTheme } = useTheme()
  const setMobileSidebarOpen = useAdminUiStore((s) => s.setMobileSidebarOpen)
  const mobileSidebarOpen = useAdminUiStore((s) => s.mobileSidebarOpen)

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-4 border-b border-border/60 bg-card/80 px-4 backdrop-blur-md lg:px-6">
      <div className="flex items-center gap-3 lg:hidden">
        <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Abrir menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0">
            <SheetTitle className="sr-only">Menu administrativo</SheetTitle>
            <AdminSidebar
              mobile
              onNavigate={() => setMobileSidebarOpen(false)}
            />
          </SheetContent>
        </Sheet>
        <Link to="/admin" className="font-ui text-sm font-semibold text-foreground">
          Fazendo Comuns
        </Link>
      </div>

      <div className="hidden flex-1 lg:block" />

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
        >
          {theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
        </Button>

        <Button variant="ghost" size="icon" aria-label="Notificações">
          <Bell className="size-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 px-2">
              <Avatar className="size-8">
                <AvatarFallback className="bg-brand-amber/30 text-xs font-semibold text-brand-red-dark">
                  FC
                </AvatarFallback>
              </Avatar>
              <span className="hidden font-ui text-sm md:inline">Admin</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="font-ui">Conta (mock)</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/">Voltar ao site</Link>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>Sair (em breve)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
