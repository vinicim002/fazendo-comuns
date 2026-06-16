import { useNavigate, useParams } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
import {
  assistenteSchema,
  type AssistenteFormValues,
} from '@/features/admin/schemas'
import { useAdminStore } from '@/features/admin/store/adminStore'

export function AssistenteFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)

  const assistentes = useAdminStore((s) => s.assistentes)
  const create = useAdminStore((s) => s.createAssistente)
  const update = useAdminStore((s) => s.updateAssistente)

  const existing = isEditing ? assistentes.find((a) => a.id === id) : undefined

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<AssistenteFormValues>({
    resolver: zodResolver(assistenteSchema),
    defaultValues: existing ?? {
      name: '',
      photo: '',
      role: '',
      miniBio: '',
      fullBio: '',
      email: '',
      linkedin: '',
      displayOrder: assistentes.length + 1,
      status: 'active',
    },
  })

  async function onSubmit(data: AssistenteFormValues) {
    await new Promise((r) => setTimeout(r, 500))
    if (isEditing && id) {
      update(id, data)
    } else {
      create(data)
    }
    navigate('/admin/assistentes')
  }

  if (isEditing && !existing) {
    return (
      <AdminPageHeader
        title="Assistente não encontrado"
        backHref="/admin/assistentes"
      />
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <AdminPageHeader
        title={isEditing ? 'Editar assistente' : 'Novo assistente'}
        description="Preencha os dados para exibição na página de equipe."
        backHref="/admin/assistentes"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormSection title="Informações básicas">
          <FormField label="Nome" error={errors.name?.message}>
            <Input {...register('name')} aria-invalid={Boolean(errors.name)} />
          </FormField>

          <Controller
            name="photo"
            control={control}
            render={({ field }) => (
              <ImagePicker
                value={field.value}
                onChange={field.onChange}
                label="Foto"
                error={errors.photo?.message}
              />
            )}
          />

          <FormField label="Cargo" error={errors.role?.message}>
            <Input {...register('role')} />
          </FormField>

          <FormField label="Mini biografia" error={errors.miniBio?.message}>
            <Textarea rows={3} {...register('miniBio')} />
          </FormField>

          <FormField label="Biografia completa" error={errors.fullBio?.message}>
            <Textarea rows={6} {...register('fullBio')} />
          </FormField>
        </FormSection>

        <FormSection title="Contato e links">
          <FormField label="E-mail" error={errors.email?.message}>
            <Input type="email" {...register('email')} />
          </FormField>
          <FormField label="LinkedIn" error={errors.linkedin?.message}>
            <Input placeholder="https://linkedin.com/in/..." {...register('linkedin')} />
          </FormField>
        </FormSection>

        <FormSection title="Exibição">
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
          <Button type="button" variant="outline" onClick={() => navigate('/admin/assistentes')}>
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
                {isEditing ? 'Salvar alterações' : 'Criar assistente'}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
