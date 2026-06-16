import { useState } from 'react'
import { ImageIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useAdminStore } from '@/features/admin/store/adminStore'
import { cn } from '@/lib/utils'

interface ImagePickerProps {
  value: string
  onChange: (url: string) => void
  label?: string
  error?: string
  className?: string
}

export function ImagePicker({
  value,
  onChange,
  label = 'Imagem',
  error,
  className,
}: ImagePickerProps) {
  const [open, setOpen] = useState(false)
  const mediaLibrary = useAdminStore((s) => s.mediaLibrary)

  return (
    <div className={cn('space-y-2', className)}>
      <Label>{label}</Label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="relative size-32 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-muted">
          {value ? (
            <>
              <img src={value} alt="" className="size-full object-cover" />
              <button
                type="button"
                onClick={() => onChange('')}
                className="absolute right-1 top-1 flex size-6 items-center justify-center rounded-full bg-neutral-900/70 text-white transition-colors hover:bg-neutral-900"
                aria-label="Remover imagem"
              >
                <X className="size-3.5" />
              </button>
            </>
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-1 text-muted-foreground">
              <ImageIcon className="size-8 opacity-50" />
              <span className="font-ui text-xs">Sem imagem</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button type="button" variant="outline" size="sm">
                Selecionar da biblioteca
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Selecionar imagem</DialogTitle>
              </DialogHeader>
              <div className="grid max-h-[400px] grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3">
                {mediaLibrary
                  .filter((m) => m.type === 'image')
                  .map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        onChange(item.url)
                        setOpen(false)
                      }}
                      className={cn(
                        'group overflow-hidden rounded-xl border-2 transition-all hover:border-primary',
                        value === item.url ? 'border-primary ring-2 ring-primary/20' : 'border-transparent',
                      )}
                    >
                      <img
                        src={item.url}
                        alt={item.alt}
                        className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                      />
                      <p className="truncate px-2 py-1.5 text-left font-ui text-xs text-muted-foreground">
                        {item.name}
                      </p>
                    </button>
                  ))}
              </div>
            </DialogContent>
          </Dialog>
          <p className="font-ui text-xs text-muted-foreground">
            Upload simulado — selecione da biblioteca de mídia mockada.
          </p>
        </div>
      </div>
      {error && (
        <p className="text-sm text-brand-red" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
