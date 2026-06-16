import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  title: string
  value: number
  icon: LucideIcon
  trend?: string
  className?: string
  accent?: 'amber' | 'red' | 'orange' | 'yellow' | 'neutral'
}

const accentStyles = {
  amber: 'bg-brand-amber/15 text-brand-amber-dark',
  red: 'bg-brand-red/10 text-brand-red',
  orange: 'bg-brand-orange/15 text-brand-orange-dark',
  yellow: 'bg-brand-yellow/20 text-neutral-700',
  neutral: 'bg-muted text-muted-foreground',
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  trend,
  className,
  accent = 'neutral',
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={cn('overflow-hidden shadow-none transition-shadow hover:shadow-soft', className)}>
        <CardContent className="flex items-start justify-between p-5">
          <div className="space-y-2">
            <p className="font-ui text-sm text-muted-foreground">{title}</p>
            <p className="font-ui text-3xl font-semibold tracking-tight text-foreground">
              {value}
            </p>
            {trend && (
              <p className="font-ui text-xs text-muted-foreground">{trend}</p>
            )}
          </div>
          <div
            className={cn(
              'flex size-11 items-center justify-center rounded-xl',
              accentStyles[accent],
            )}
          >
            <Icon className="size-5" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
