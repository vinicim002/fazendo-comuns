import { Outlet, ScrollRestoration } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AdminHeader } from '@/features/admin/components/layout/AdminHeader'
import { AdminSidebar } from '@/features/admin/components/layout/AdminSidebar'
import { useAdminUiStore } from '@/features/admin/store/adminUiStore'
import { cn } from '@/lib/utils'

export function AdminLayout() {
  const sidebarCollapsed = useAdminUiStore((s) => s.sidebarCollapsed)

  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <ScrollRestoration />
      <AdminSidebar />
      <div
        className={cn(
          'flex min-h-screen flex-1 flex-col transition-all duration-300',
          sidebarCollapsed ? 'lg:pl-0' : 'lg:pl-0',
        )}
      >
        <AdminHeader />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex-1 overflow-x-hidden p-4 md:p-6 lg:p-8 xl:max-w-[1600px] xl:mx-auto xl:w-full"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  )
}
