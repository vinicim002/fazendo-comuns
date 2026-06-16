import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Calendar,
  GraduationCap,
  Newspaper,
  PenLine,
  UserCheck,
  Users,
  UsersRound,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { staggerContainer, staggerItem } from '@/animations/motionVariants'
import { AdminPageHeader } from '@/features/admin/components/AdminPageHeader'
import { MetricCard } from '@/features/admin/components/MetricCard'
import { formatRelativeDate } from '@/features/admin/lib/formatters'
import { useAdminStore } from '@/features/admin/store/adminStore'

export function DashboardPage() {
  const store = useAdminStore()

  const metrics = [
    {
      title: 'Pesquisadores(as)',
      value: store.pesquisadores.length,
      icon: GraduationCap,
      accent: 'red' as const,
      href: '/admin/pesquisadores',
    },
    {
      title: 'Assistentes',
      value: store.assistentes.length,
      icon: Users,
      accent: 'amber' as const,
      href: '/admin/assistentes',
    },
    {
      title: 'Consultores',
      value: store.consultores.length,
      icon: UserCheck,
      accent: 'orange' as const,
      href: '/admin/consultores',
    },
    {
      title: 'Colaboradores',
      value: store.colaboradores.length,
      icon: UsersRound,
      accent: 'yellow' as const,
      href: '/admin/colaboradores',
    },
    {
      title: 'Notícias',
      value: store.noticias.length,
      icon: Newspaper,
      accent: 'red' as const,
      href: '/admin/noticias',
    },
    {
      title: 'Editoriais',
      value: store.editoriais.length,
      icon: PenLine,
      accent: 'amber' as const,
      href: '/admin/editoriais',
    },
    {
      title: 'Eventos',
      value: store.eventos.length,
      icon: Calendar,
      accent: 'orange' as const,
      href: '/admin/eventos',
    },
  ]

  const recentContent = [
    ...store.noticias.map((n) => ({
      id: n.id,
      title: n.title,
      type: 'Notícia',
      date: n.updatedAt,
      href: `/admin/noticias/${n.id}/editar`,
    })),
    ...store.editoriais.map((e) => ({
      id: e.id,
      title: e.title,
      type: 'Editorial',
      date: e.updatedAt,
      href: `/admin/editoriais/${e.id}/editar`,
    })),
    ...store.eventos.map((e) => ({
      id: e.id,
      title: e.name,
      type: 'Evento',
      date: e.updatedAt,
      href: `/admin/eventos/${e.id}/editar`,
    })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)

  return (
    <div className="space-y-8">
      <AdminPageHeader
        title="Dashboard"
        description="Visão geral do CMS Fazendo Comuns. Todos os dados são mockados nesta etapa."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7"
      >
        {metrics.map((metric) => (
          <motion.div key={metric.title} variants={staggerItem}>
            <Link to={metric.href} className="block">
              <MetricCard
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                accent={metric.accent}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="font-ui text-base font-semibold">
              Últimos conteúdos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentContent.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nenhum conteúdo cadastrado.</p>
            ) : (
              recentContent.map((item) => (
                <Link
                  key={`${item.type}-${item.id}`}
                  to={item.href}
                  className="flex items-start justify-between gap-4 rounded-xl border border-border/40 p-3 transition-colors hover:bg-muted/50"
                >
                  <div className="min-w-0">
                    <p className="truncate font-ui text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="font-ui text-xs text-muted-foreground">{item.type}</p>
                  </div>
                  <span className="shrink-0 font-ui text-xs text-muted-foreground">
                    {formatRelativeDate(item.date)}
                  </span>
                </Link>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="font-ui text-base font-semibold">
              Atividades recentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {store.activities.slice(0, 8).map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 rounded-xl border border-border/40 p-3"
              >
                <div className="mt-0.5 size-2 shrink-0 rounded-full bg-primary" />
                <div className="min-w-0 flex-1">
                  <p className="font-ui text-sm text-foreground">
                    <span className="font-medium">{activity.action}</span>{' '}
                    <span className="text-muted-foreground">{activity.entity}</span>
                  </p>
                  <p className="truncate text-sm text-muted-foreground">
                    {activity.entityName}
                  </p>
                </div>
                <span className="shrink-0 font-ui text-xs text-muted-foreground">
                  {formatRelativeDate(activity.timestamp)}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
