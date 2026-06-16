import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
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

export function EventosListPage() {
  const eventos = useAdminStore((s) => s.eventos)
  const deleteEvento = useAdminStore((s) => s.deleteEvento)
  const toggleStatus = useAdminStore((s) => s.toggleEventoStatus)

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
    items: eventos,
    searchFields: ['name', 'location', 'shortDescription'],
  })

  function confirmDelete() {
    if (deleteId) {
      deleteEvento(deleteId)
      setDeleteId(null)
    }
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Eventos"
        description="Gerencie os eventos exibidos no site."
        createHref="/admin/eventos/novo"
        createLabel="Novo evento"
      />

      <ListToolbar
        search={filters.search}
        onSearchChange={setSearch}
        status={filters.status}
        onStatusChange={setStatus}
        searchPlaceholder="Buscar por nome ou local..."
      />

      {isLoading ? (
        <LoadingTable columns={6} />
      ) : paginated.length === 0 ? (
        <EmptyState
          title="Nenhum evento encontrado"
          icon={<Calendar className="size-7 text-muted-foreground" />}
          actionLabel="Adicionar evento"
          onAction={() => (window.location.href = '/admin/eventos/novo')}
        />
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead className="hidden sm:table-cell">Data</TableHead>
                <TableHead className="hidden md:table-cell">Local</TableHead>
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
                      to={`/admin/eventos/${item.id}/editar`}
                      className="font-ui text-sm font-medium hover:text-primary"
                    >
                      {item.name}
                    </Link>
                    <p className="font-ui text-xs text-muted-foreground sm:hidden">
                      {formatDate(item.date)}
                    </p>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell font-ui text-sm text-muted-foreground">
                    {formatDate(item.date)}
                  </TableCell>
                  <TableCell className="hidden md:table-cell font-ui text-sm text-muted-foreground">
                    {item.location}
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
                      editHref={`/admin/eventos/${item.id}/editar`}
                      onDelete={() => {
                        setDeleteId(item.id)
                        setDeleteName(item.name)
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
