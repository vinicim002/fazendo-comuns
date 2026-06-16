import type { LucideIcon } from 'lucide-react'
import {
  Calendar,
  FolderOpen,
  GraduationCap,
  LayoutDashboard,
  Newspaper,
  PenLine,
  UserCheck,
  Users,
  UsersRound,
} from 'lucide-react'

export interface AdminNavItem {
  label: string
  href: string
  icon: LucideIcon
  end?: boolean
}

export const adminNavItems: AdminNavItem[] = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: 'Pesquisadores(as)',
    href: '/admin/pesquisadores',
    icon: GraduationCap,
  },
  {
    label: 'Assistentes',
    href: '/admin/assistentes',
    icon: Users,
  },
  {
    label: 'Consultores',
    href: '/admin/consultores',
    icon: UserCheck,
  },
  {
    label: 'Colaboradores',
    href: '/admin/colaboradores',
    icon: UsersRound,
  },
  {
    label: 'Notícias',
    href: '/admin/noticias',
    icon: Newspaper,
  },
  {
    label: 'Editoriais',
    href: '/admin/editoriais',
    icon: PenLine,
  },
  {
    label: 'Eventos',
    href: '/admin/eventos',
    icon: Calendar,
  },
  {
    label: 'Biblioteca de Mídia',
    href: '/admin/midia',
    icon: FolderOpen,
  },
]
