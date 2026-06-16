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
import { newsCategories } from '@/features/admin/data/mockSeed'
import {
  noticiaSchema,
  type NoticiaFormValues,
} from '@/features/admin/schemas'
import { useAdminStore } from '@/features/admin/store/adminStore'

export function NoticiaFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)

  const noticias = useAdminStore((s) => s.noticias)
  const create = useAdminStore((s) => s.createNoticia)
  const update = useAdminStore((s) => s.updateNoticia)

  const existing = isEditing ? noticias.find((n) => n.id === id) : undefined

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<NoticiaFormValues>({
    resolver: zodResolver(noticiaSchema),
    defaultValues: existing ?? {
      title: '',
      summary: '',
      content: '',
      coverImage: '',
      author: '',
      date: new Date().toISOString().slice(0, 10),
      category: newsCategories[0],
      tags: [],
      featured: false,
      displayOrder: noticias.length + 1,
      status: 'active',
    },
  })

  async function onSubmit(data: NoticiaFormValues) {
    await new Promise((r) => setTimeout(r, 500))
    if (isEditing && id) {
      update(id, data)
    } else {
      create(data)
    }
    navigate('/admin/noticias')
  }

  if (isEditing && !existing) {
    return (
      <AdminPageHeader
        title="Notícia não encontrada"
        backHref="/admin/noticias"
      />
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <AdminPageHeader
        title={isEditing ? 'Editar notícia' : 'Nova notícia'}
        description="Preencha os dados da notícia para publicação no site."
        backHref="/admin/noticias"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormSection title="Conteúdo">
          <FormField label="Título" error={errors.title?.message}>
            <Input {...register('title')} aria-invalid={Boolean(errors.title)} />
          </FormField>

          <FormField label="Resumo" error={errors.summary?.message}>
            <Textarea rows={3} {...register('summary')} />
          </FormField>

          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <RichTextEditor
                value={field.value}
                onChange={field.onChange}
                label="Conteúdo"
                error={errors.content?.message}
              />
            )}
          />

          <Controller
            name="coverImage"
            control={control}
            render={({ field }) => (
              <ImagePicker
                value={field.value}
                onChange={field.onChange}
                label="Imagem de capa"
                error={errors.coverImage?.message}
              />
            )}
          />
        </FormSection>

        <FormSection title="Metadados">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Autor(a)" error={errors.author?.message}>
              <Input {...register('author')} />
            </FormField>
            <FormField label="Data" error={errors.date?.message}>
              <Input type="date" {...register('date')} />
            </FormField>
          </div>

          <FormField label="Categoria" error={errors.category?.message}>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {newsCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FormField>

          <FormField label="Tags" error={errors.tags?.message}>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="recreio, podcast, evento"
                  value={field.value.join(', ')}
                  onChange={(e) => {
                    const tags = e.target.value
                      .split(',')
                      .map((t) => t.trim())
                      .filter(Boolean)
                    field.onChange(tags)
                  }}
                />
              )}
            />
          </FormField>

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
          <Button type="button" variant="outline" onClick={() => navigate('/admin/noticias')}>
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
                {isEditing ? 'Salvar alterações' : 'Criar notícia'}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
