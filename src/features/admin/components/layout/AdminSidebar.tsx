import { Link, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Logo } from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { adminNavItems } from '@/features/admin/config/navigation'
import { useAdminUiStore } from '@/features/admin/store/adminUiStore'
import { cn } from '@/lib/utils'

interface AdminSidebarProps {
  mobile?: boolean
  onNavigate?: () => void
}

export function AdminSidebar({ mobile, onNavigate }: AdminSidebarProps) {
  const { pathname } = useLocation()
  const collapsed = useAdminUiStore((s) => s.sidebarCollapsed)
  const toggleCollapsed = useAdminUiStore((s) => s.toggleSidebarCollapsed)
  const isCollapsed = collapsed && !mobile

  return (
    <aside
      className={cn(
        'flex h-full flex-col border-r border-border/60 bg-card',
        mobile ? 'w-full' : 'hidden lg:flex',
        !mobile && (isCollapsed ? 'w-[72px]' : 'w-64'),
      )}
    >
      <div
        className={cn(
          'flex h-16 items-center border-b border-border/60 px-4',
          isCollapsed ? 'justify-center' : 'justify-between',
        )}
      >
        {!isCollapsed && (
          <Link to="/admin" className="flex items-center gap-2" onClick={onNavigate}>
            <Logo className="h-8" linkToHome={false} />
            <span className="font-ui text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Admin
            </span>
          </Link>
        )}
        {!mobile && (
          <Button
            variant="ghost"
            size="icon"
            className="size-8 shrink-0"
            onClick={toggleCollapsed}
            aria-label={isCollapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="size-4" />
            ) : (
              <ChevronLeft className="size-4" />
            )}
          </Button>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {adminNavItems.map((item) => {
          const isActive = item.end
            ? pathname === item.href
            : pathname.startsWith(item.href) && item.href !== '/admin'

          const Icon = item.icon

          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={onNavigate}
              title={isCollapsed ? item.label : undefined}
              className={cn(
                'group flex items-center gap-3 rounded-xl px-3 py-2.5 font-ui text-sm font-medium transition-all',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                isCollapsed && 'justify-center px-2',
              )}
            >
              <Icon
                className={cn(
                  'size-[18px] shrink-0',
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground',
                )}
              />
              {!isCollapsed && <span className="truncate">{item.label}</span>}
              {isActive && !isCollapsed && (
                <motion.div
                  layoutId="admin-nav-indicator"
                  className="ml-auto size-1.5 rounded-full bg-primary"
                />
              )}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border/60 p-3">
        <Link
          to="/"
          onClick={onNavigate}
          className={cn(
            'flex items-center gap-2 rounded-xl px-3 py-2.5 font-ui text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
            isCollapsed && 'justify-center',
          )}
        >
          <ExternalLink className="size-4 shrink-0" />
          {!isCollapsed && <span>Ver site</span>}
        </Link>
      </div>
    </aside>
  )
}
