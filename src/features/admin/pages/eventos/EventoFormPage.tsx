import { useNavigate, useParams } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AdminPageHeader } from '@/features/admin/components/AdminPageHeader'
import { FormField, FormSection } from '@/features/admin/components/FormSection'
import { ImagePicker } from '@/features/admin/components/ImagePicker'
import { RichTextEditor } from '@/features/admin/components/RichTextEditor'
import {
  eventoSchema,
  type EventoFormValues,
} from '@/features/admin/schemas'
import { useAdminStore } from '@/features/admin/store/adminStore'

export function EventoFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)

  const eventos = useAdminStore((s) => s.eventos)
  const create = useAdminStore((s) => s.createEvento)
  const update = useAdminStore((s) => s.updateEvento)

  const existing = isEditing ? eventos.find((e) => e.id === id) : undefined

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<EventoFormValues>({
    resolver: zodResolver(eventoSchema),
    defaultValues: existing ?? {
      name: '',
      shortDescription: '',
      fullDescription: '',
      image: '',
      date: new Date().toISOString().slice(0, 10),
      time: '10:00',
      location: '',
      link: '',
      featured: false,
      displayOrder: eventos.length + 1,
      status: 'active',
    },
  })

  async function onSubmit(data: EventoFormValues) {
    await new Promise((r) => setTimeout(r, 500))
    if (isEditing && id) {
      update(id, data)
    } else {
      create(data)
    }
    navigate('/admin/eventos')
  }

  if (isEditing && !existing) {
    return (
      <AdminPageHeader
        title="Evento não encontrado"
        backHref="/admin/eventos"
      />
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <AdminPageHeader
        title={isEditing ? 'Editar evento' : 'Novo evento'}
        description="Preencha os dados do evento para exibição no site."
        backHref="/admin/eventos"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormSection title="Informações básicas">
          <FormField label="Nome" error={errors.name?.message}>
            <Input {...register('name')} aria-invalid={Boolean(errors.name)} />
          </FormField>

          <FormField label="Descrição curta" error={errors.shortDescription?.message}>
            <Textarea rows={3} {...register('shortDescription')} />
          </FormField>

          <Controller
            name="fullDescription"
            control={control}
            render={({ field }) => (
              <RichTextEditor
                value={field.value}
                onChange={field.onChange}
                label="Descrição completa"
                error={errors.fullDescription?.message}
              />
            )}
          />

          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <ImagePicker
                value={field.value}
                onChange={field.onChange}
                label="Imagem"
                error={errors.image?.message}
              />
            )}
          />
        </FormSection>

        <FormSection title="Data e local">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Data" error={errors.date?.message}>
              <Input type="date" {...register('date')} />
            </FormField>
            <FormField label="Hora" error={errors.time?.message}>
              <Input type="time" {...register('time')} />
            </FormField>
          </div>

          <FormField label="Local" error={errors.location?.message}>
            <Input {...register('location')} />
          </FormField>

          <FormField label="Link" error={errors.link?.message}>
            <Input placeholder="/eventos/..." {...register('link')} />
          </FormField>
        </FormSection>

        <FormSection title="Exibição">
          <Controller
            name="featured"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-2">
                <Checkbox
                  id="featured"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                />
                <Label htmlFor="featured" className="cursor-pointer font-ui text-sm">
                  Exibir em destaque
                </Label>
              </div>
            )}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Ordem de exibição" error={errors.displayOrder?.message}>
              <Input type="number" min={1} {...register('displayOrder', { valueAsNumber: true })} />
            </FormField>
            <FormField label="Status" error={errors.status?.message}>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Ativo</SelectItem>
                      <SelectItem value="inactive">Inativo</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </FormField>
          </div>
        </FormSection>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={() => navigate('/admin/eventos')}>
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Salvando...
              </>
            ) : (
              <>
                <Save className="size-4" />
                {isEditing ? 'Salvar alterações' : 'Criar evento'}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
