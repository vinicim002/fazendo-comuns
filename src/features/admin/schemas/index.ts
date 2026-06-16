import { z } from 'zod'

export const entityStatusSchema = z.enum(['active', 'inactive'])

export const pesquisadorSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  photo: z.string().min(1, 'Selecione uma foto'),
  role: z.string().min(2, 'Informe o cargo'),
  miniBio: z.string().min(10, 'Mini biografia muito curta'),
  fullBio: z.string().min(20, 'Biografia completa muito curta'),
  email: z.string().email('E-mail inválido'),
  linkedin: z.string().url('URL inválida').or(z.literal('')),
  lattes: z.string().url('URL inválida').or(z.literal('')),
  displayOrder: z.number().int().min(1),
  status: entityStatusSchema,
})

export const assistenteSchema = pesquisadorSchema.omit({ lattes: true })

export const consultorSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  photo: z.string().min(1, 'Selecione uma foto'),
  role: z.string().min(2, 'Informe o cargo'),
  institution: z.string().min(2, 'Informe a instituição'),
  bio: z.string().min(20, 'Biografia muito curta'),
  email: z.string().email('E-mail inválido'),
  linkedin: z.string().url('URL inválida').or(z.literal('')),
  displayOrder: z.number().int().min(1),
  status: entityStatusSchema,
})

export const colaboradorSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  photo: z.string().min(1, 'Selecione uma foto'),
  institution: z.string().min(2, 'Informe a instituição'),
  role: z.string().min(2, 'Informe o cargo'),
  description: z.string().min(10, 'Descrição muito curta'),
  website: z.string().url('URL inválida').or(z.literal('')),
  displayOrder: z.number().int().min(1),
  status: entityStatusSchema,
})

export const noticiaSchema = z.object({
  title: z.string().min(5, 'Título muito curto'),
  summary: z.string().min(10, 'Resumo muito curto'),
  content: z.string().min(20, 'Conteúdo muito curto'),
  coverImage: z.string().min(1, 'Selecione uma imagem de capa'),
  author: z.string().min(2, 'Informe o autor'),
  date: z.string().min(1, 'Informe a data'),
  category: z.string().min(1, 'Selecione uma categoria'),
  tags: z.array(z.string()),
  featured: z.boolean(),
  displayOrder: z.number().int().min(1),
  status: entityStatusSchema,
})

export const editorialSchema = z.object({
  title: z.string().min(5, 'Título muito curto'),
  summary: z.string().min(10, 'Resumo muito curto'),
  content: z.string().min(20, 'Conteúdo muito curto'),
  image: z.string().min(1, 'Selecione uma imagem'),
  author: z.string().min(2, 'Informe o autor'),
  date: z.string().min(1, 'Informe a data'),
  tags: z.array(z.string()),
  displayOrder: z.number().int().min(1),
  status: entityStatusSchema,
})

export const eventoSchema = z.object({
  name: z.string().min(3, 'Nome muito curto'),
  shortDescription: z.string().min(10, 'Descrição curta muito curta'),
  fullDescription: z.string().min(20, 'Descrição completa muito curta'),
  image: z.string().min(1, 'Selecione uma imagem'),
  date: z.string().min(1, 'Informe a data'),
  time: z.string().min(1, 'Informe a hora'),
  location: z.string().min(2, 'Informe o local'),
  link: z.string().min(1, 'Informe o link'),
  featured: z.boolean(),
  displayOrder: z.number().int().min(1),
  status: entityStatusSchema,
})

export type PesquisadorFormValues = z.infer<typeof pesquisadorSchema>
export type AssistenteFormValues = z.infer<typeof assistenteSchema>
export type ConsultorFormValues = z.infer<typeof consultorSchema>
export type ColaboradorFormValues = z.infer<typeof colaboradorSchema>
export type NoticiaFormValues = z.infer<typeof noticiaSchema>
export type EditorialFormValues = z.infer<typeof editorialSchema>
export type EventoFormValues = z.infer<typeof eventoSchema>
