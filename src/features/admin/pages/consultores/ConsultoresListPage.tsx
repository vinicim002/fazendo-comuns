import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserCheck } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
import { StatusBadge } from '@/features/admin/components/StatusBadge'
import { usePaginatedList } from '@/features/admin/hooks/usePaginatedList'
import { useSimulatedLoading } from '@/features/admin/hooks/useSimulatedLoading'
import { useAdminStore } from '@/features/admin/store/adminStore'

export function ConsultoresListPage() {
  const consultores = useAdminStore((s) => s.consultores)
  const deleteConsultor = useAdminStore((s) => s.deleteConsultor)
  const toggleStatus = useAdminStore((s) => s.toggleConsultorStatus)
  const reorder = useAdminStore((s) => s.reorderConsultores)

  const isLoading = useSimulatedLoading()
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [deleteName, setDeleteName] = useState('')

  const {
    paginated,
    filtered,
    totalItems,
    totalPages,
    currentPage,
    filters,
    setSearch,
    setStatus,
    setPage,
    setPageSize,
  } = usePaginatedList({
    items: consultores,
    searchFields: ['name', 'role', 'institution', 'email'],
  })

  function handleMove(id: string, direction: 'up' | 'down') {
    const ids = filtered.map((c) => c.id)
    const index = ids.indexOf(id)
    if (index === -1) return
    const swapIndex = direction === 'up' ? index - 1 : index + 1
    if (swapIndex < 0 || swapIndex >= ids.length) return
    ;[ids[index], ids[swapIndex]] = [ids[swapIndex], ids[index]]
    reorder(ids)
  }

  function confirmDelete() {
    if (deleteId) {
      deleteConsultor(deleteId)
      setDeleteId(null)
    }
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Consultores(as)"
        description="Gerencie os consultores exibidos no site."
        createHref="/admin/consultores/novo"
        createLabel="Novo consultor(a)"
      />

      <ListToolbar
        search={filters.search}
        onSearchChange={setSearch}
        status={filters.status}
        onStatusChange={setStatus}
        searchPlaceholder="Buscar por nome, cargo ou instituição..."
      />

      {isLoading ? (
        <LoadingTable columns={6} />
      ) : paginated.length === 0 ? (
        <EmptyState
          title="Nenhum consultor(a) encontrado"
          icon={<UserCheck className="size-7 text-muted-foreground" />}
          actionLabel="Adicionar consultor(a)"
          onAction={() => (window.location.href = '/admin/consultores/novo')}
        />
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Ordem</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead className="hidden md:table-cell">Instituição</TableHead>
                <TableHead className="hidden lg:table-cell">Cargo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.map((item, idx) => (
                <TableRow key={item.id}>
                  <TableCell className="font-ui text-sm text-muted-foreground">
                    {item.displayOrder}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="size-9">
                        <AvatarImage src={item.photo} alt={item.name} />
                        <AvatarFallback>
                          {item.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <Link
                          to={`/admin/consultores/${item.id}/editar`}
                          className="font-ui text-sm font-medium hover:text-primary"
                        >
                          {item.name}
                        </Link>
                        <p className="font-ui text-xs text-muted-foreground md:hidden">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell font-ui text-sm text-muted-foreground">
                    {item.institution}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell font-ui text-sm text-muted-foreground">
                    {item.role}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={item.status} />
                  </TableCell>
                  <TableCell>
                    <RowActions
                      editHref={`/admin/consultores/${item.id}/editar`}
                      onDelete={() => {
                        setDeleteId(item.id)
                        setDeleteName(item.name)
                      }}
                      onToggleStatus={() => toggleStatus(item.id)}
                      isActive={item.status === 'active'}
                      onMoveUp={() => handleMove(item.id, 'up')}
                      onMoveDown={() => handleMove(item.id, 'down')}
                      canMoveUp={idx > 0}
                      canMoveDown={idx < paginated.length - 1}
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
