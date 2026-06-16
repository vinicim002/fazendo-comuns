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
  colaboradorSchema,
  type ColaboradorFormValues,
} from '@/features/admin/schemas'
import { useAdminStore } from '@/features/admin/store/adminStore'

export function ColaboradorFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)

  const colaboradores = useAdminStore((s) => s.colaboradores)
  const create = useAdminStore((s) => s.createColaborador)
  const update = useAdminStore((s) => s.updateColaborador)

  const existing = isEditing ? colaboradores.find((c) => c.id === id) : undefined

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ColaboradorFormValues>({
    resolver: zodResolver(colaboradorSchema),
    defaultValues: existing ?? {
      name: '',
      photo: '',
      institution: '',
      role: '',
      description: '',
      website: '',
      displayOrder: colaboradores.length + 1,
      status: 'active',
    },
  })

  async function onSubmit(data: ColaboradorFormValues) {
    await new Promise((r) => setTimeout(r, 500))
    if (isEditing && id) {
      update(id, data)
    } else {
      create(data)
    }
    navigate('/admin/colaboradores')
  }

  if (isEditing && !existing) {
    return (
      <AdminPageHeader
        title="Colaborador(a) não encontrado"
        backHref="/admin/colaboradores"
      />
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <AdminPageHeader
        title={isEditing ? 'Editar colaborador(a)' : 'Novo colaborador(a)'}
        description="Preencha os dados para exibição na página de colaboradores."
        backHref="/admin/colaboradores"
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

          <FormField label="Instituição" error={errors.institution?.message}>
            <Input {...register('institution')} />
          </FormField>

          <FormField label="Cargo" error={errors.role?.message}>
            <Input {...register('role')} />
          </FormField>

          <FormField label="Descrição" error={errors.description?.message}>
            <Textarea rows={5} {...register('description')} />
          </FormField>

          <FormField label="Website" error={errors.website?.message}>
            <Input placeholder="https://..." {...register('website')} />
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
          <Button type="button" variant="outline" onClick={() => navigate('/admin/colaboradores')}>
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
                {isEditing ? 'Salvar alterações' : 'Criar colaborador(a)'}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
