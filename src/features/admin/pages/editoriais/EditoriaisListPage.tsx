import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
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

export function EditoriaisListPage() {
  const editoriais = useAdminStore((s) => s.editoriais)
  const deleteEditorial = useAdminStore((s) => s.deleteEditorial)
  const toggleStatus = useAdminStore((s) => s.toggleEditorialStatus)

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
    items: editoriais,
    searchFields: ['title', 'author', 'tags'],
  })

  function confirmDelete() {
    if (deleteId) {
      deleteEditorial(deleteId)
      setDeleteId(null)
    }
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Editoriais"
        description="Gerencie os editoriais publicados no site."
        createHref="/admin/editoriais/novo"
        createLabel="Novo editorial"
      />

      <ListToolbar
        search={filters.search}
        onSearchChange={setSearch}
        status={filters.status}
        onStatusChange={setStatus}
        searchPlaceholder="Buscar por título ou autor..."
      />

      {isLoading ? (
        <LoadingTable columns={5} />
      ) : paginated.length === 0 ? (
        <EmptyState
          title="Nenhum editorial encontrado"
          icon={<BookOpen className="size-7 text-muted-foreground" />}
          actionLabel="Adicionar editorial"
          onAction={() => (window.location.href = '/admin/editoriais/novo')}
        />
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead className="hidden md:table-cell">Autor(a)</TableHead>
                <TableHead className="hidden sm:table-cell">Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Link
                      to={`/admin/editoriais/${item.id}/editar`}
                      className="font-ui text-sm font-medium hover:text-primary"
                    >
                      {item.title}
                    </Link>
                    <p className="font-ui text-xs text-muted-foreground md:hidden">
                      {item.author}
                    </p>
                  </TableCell>
                  <TableCell className="hidden md:table-cell font-ui text-sm text-muted-foreground">
                    {item.author}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell font-ui text-sm text-muted-foreground">
                    {formatDate(item.date)}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={item.status} />
                  </TableCell>
                  <TableCell>
                    <RowActions
                      editHref={`/admin/editoriais/${item.id}/editar`}
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
