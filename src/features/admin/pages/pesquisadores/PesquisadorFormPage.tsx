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
  pesquisadorSchema,
  type PesquisadorFormValues,
} from '@/features/admin/schemas'
import { useAdminStore } from '@/features/admin/store/adminStore'

export function PesquisadorFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)

  const pesquisadores = useAdminStore((s) => s.pesquisadores)
  const create = useAdminStore((s) => s.createPesquisador)
  const update = useAdminStore((s) => s.updatePesquisador)

  const existing = isEditing ? pesquisadores.find((p) => p.id === id) : undefined

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PesquisadorFormValues>({
    resolver: zodResolver(pesquisadorSchema),
    defaultValues: existing ?? {
      name: '',
      photo: '',
      role: '',
      miniBio: '',
      fullBio: '',
      email: '',
      linkedin: '',
      lattes: '',
      displayOrder: pesquisadores.length + 1,
      status: 'active',
    },
  })

  async function onSubmit(data: PesquisadorFormValues) {
    await new Promise((r) => setTimeout(r, 500))
    if (isEditing && id) {
      update(id, data)
    } else {
      create(data)
    }
    navigate('/admin/pesquisadores')
  }

  if (isEditing && !existing) {
    return (
      <AdminPageHeader
        title="Pesquisador(a) não encontrado"
        backHref="/admin/pesquisadores"
      />
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <AdminPageHeader
        title={isEditing ? 'Editar pesquisador(a)' : 'Novo pesquisador(a)'}
        description="Preencha os dados para exibição na página de equipe."
        backHref="/admin/pesquisadores"
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
          <FormField label="Lattes" error={errors.lattes?.message}>
            <Input placeholder="http://lattes.cnpq.br/..." {...register('lattes')} />
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
          <Button type="button" variant="outline" onClick={() => navigate('/admin/pesquisadores')}>
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
                {isEditing ? 'Salvar alterações' : 'Criar pesquisador(a)'}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
