import { Search, SlidersHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { EntityStatus } from '@/features/admin/types'

interface ListToolbarProps {
  search: string
  onSearchChange: (value: string) => void
  status: EntityStatus | 'all'
  onStatusChange: (status: EntityStatus | 'all') => void
  searchPlaceholder?: string
  extraFilters?: React.ReactNode
}

export function ListToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  searchPlaceholder = 'Buscar...',
  extraFilters,
}: ListToolbarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-4 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="pl-10"
          aria-label="Buscar"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <SlidersHorizontal className="hidden size-4 text-muted-foreground sm:block" />
        <Select value={status} onValueChange={(v) => onStatusChange(v as EntityStatus | 'all')}>
          <SelectTrigger className="w-full sm:w-[160px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os status</SelectItem>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="inactive">Inativos</SelectItem>
          </SelectContent>
        </Select>
        {extraFilters}
      </div>
    </div>
  )
}
