import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Newspaper } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AdminPageHeader } from '@/features/admin/components/AdminPageHeader'
import { AdminPagination } from '@/features/admin/components/AdminPagination'
import { DeleteConfirmDialog } from '@/features/admin/components/DeleteConfirmDialog'
import { EmptyState } from '@/features/admin/components/EmptyState'
import { ListToolbar } from '@/features/admin/components/ListToolbar'
import { LoadingTable } from '@/features/admin/components/LoadingTable'
import { RowActions } from '@/features/admin/components/RowActions'
import { formatDate } from '@/features/admin/lib/formatters'
import { StatusBadge } from '@/features/admin/components/StatusBadge'
import { usePaginatedList } from '@/features/admin/hooks/usePaginatedList'
import { useSimulatedLoading } from '@/features/admin/hooks/useSimulatedLoading'
import { useAdminStore } from '@/features/admin/store/adminStore'

export function NoticiasListPage() {
  const noticias = useAdminStore((s) => s.noticias)
  const deleteNoticia = useAdminStore((s) => s.deleteNoticia)
  const toggleStatus = useAdminStore((s) => s.toggleNoticiaStatus)

  const isLoading = useSimulatedLoading()
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [deleteName, setDeleteName] = useState('')

  const {
    paginated,
    totalItems,
    totalPages,
    currentPage,
    filters,
    setSearch,
    setStatus,
    setPage,
    setPageSize,
  } = usePaginatedList({
    items: noticias,
    searchFields: ['title', 'category', 'author', 'tags'],
  })

  function confirmDelete() {
    if (deleteId) {
      deleteNoticia(deleteId)
      setDeleteId(null)
    }
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Notícias"
        description="Gerencie as notícias publicadas no site."
        createHref="/admin/noticias/novo"
        createLabel="Nova notícia"
      />

      <ListToolbar
        search={filters.search}
        onSearchChange={setSearch}
        status={filters.status}
        onStatusChange={setStatus}
        searchPlaceholder="Buscar por título, categoria ou autor..."
      />

      {isLoading ? (
        <LoadingTable columns={6} />
      ) : paginated.length === 0 ? (
        <EmptyState
          title="Nenhuma notícia encontrada"
          icon={<Newspaper className="size-7 text-muted-foreground" />}
          actionLabel="Adicionar notícia"
          onAction={() => (window.location.href = '/admin/noticias/novo')}
        />
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead className="hidden md:table-cell">Categoria</TableHead>
                <TableHead className="hidden sm:table-cell">Data</TableHead>
                <TableHead>Destaque</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Link
                      to={`/admin/noticias/${item.id}/editar`}
                      className="font-ui text-sm font-medium hover:text-primary"
                    >
                      {item.title}
                    </Link>
                    <p className="font-ui text-xs text-muted-foreground md:hidden">
                      {item.category}
                    </p>
                  </TableCell>
                  <TableCell className="hidden md:table-cell font-ui text-sm text-muted-foreground">
                    {item.category}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell font-ui text-sm text-muted-foreground">
                    {formatDate(item.date)}
                  </TableCell>
                  <TableCell>
                    {item.featured ? (
                      <Badge
                        variant="outline"
                        className="border-amber-200 bg-amber-50 font-ui text-xs text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300"
                      >
                        Destaque
                      </Badge>
                    ) : (
                      <span className="font-ui text-xs text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={item.status} />
                  </TableCell>
                  <TableCell>
                    <RowActions
                      editHref={`/admin/noticias/${item.id}/editar`}
                      onDelete={() => {
                        setDeleteId(item.id)
                        setDeleteName(item.title)
                      }}
                      onToggleStatus={() => toggleStatus(item.id)}
                      isActive={item.status === 'active'}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <AdminPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            pageSize={filters.pageSize}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
          />
        </div>
      )}

      <DeleteConfirmDialog
        open={Boolean(deleteId)}
        onOpenChange={(open) => !open && setDeleteId(null)}
        itemName={deleteName}
        onConfirm={confirmDelete}
      />
    </div>
  )
}
