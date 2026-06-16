export type EntityStatus = 'active' | 'inactive'

export interface BaseEntity {
  id: string
  displayOrder: number
  status: EntityStatus
  createdAt: string
  updatedAt: string
}

export interface Pesquisador extends BaseEntity {
  name: string
  photo: string
  role: string
  miniBio: string
  fullBio: string
  email: string
  linkedin: string
  lattes: string
}

export interface Assistente extends BaseEntity {
  name: string
  photo: string
  role: string
  miniBio: string
  fullBio: string
  email: string
  linkedin: string
}

export interface Consultor extends BaseEntity {
  name: string
  photo: string
  role: string
  institution: string
  bio: string
  email: string
  linkedin: string
}

export interface Colaborador extends BaseEntity {
  name: string
  photo: string
  institution: string
  role: string
  description: string
  website: string
}

export interface Noticia extends BaseEntity {
  title: string
  summary: string
  content: string
  coverImage: string
  author: string
  date: string
  category: string
  tags: string[]
  featured: boolean
}

export interface Editorial extends BaseEntity {
  title: string
  summary: string
  content: string
  image: string
  author: string
  date: string
  tags: string[]
}

export interface Evento extends BaseEntity {
  name: string
  shortDescription: string
  fullDescription: string
  image: string
  date: string
  time: string
  location: string
  link: string
  featured: boolean
}

export interface MediaItem {
  id: string
  name: string
  url: string
  type: 'image' | 'video' | 'document'
  size: string
  uploadedAt: string
  alt: string
}

export interface ActivityItem {
  id: string
  action: string
  entity: string
  entityName: string
  timestamp: string
}

export type AdminEntityKey =
  | 'pesquisadores'
  | 'assistentes'
  | 'consultores'
  | 'colaboradores'
  | 'noticias'
  | 'editoriais'
  | 'eventos'

export interface ListFilters {
  search: string
  status: EntityStatus | 'all'
  page: number
  pageSize: number
}

export const DEFAULT_LIST_FILTERS: ListFilters = {
  search: '',
  status: 'all',
  page: 1,
  pageSize: 10,
}
