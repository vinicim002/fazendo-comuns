import { jornalzinhoDaEscolaDbBook } from '@/features/livros/data/jornalzinhoDaEscolaDbBook'
import { recrearMundosOutrosBook } from '@/features/livros/data/recrearMundosOutrosBook'
import type { Livro } from '@/features/livros/types'

export const livros: Livro[] = [recrearMundosOutrosBook, jornalzinhoDaEscolaDbBook]

export function getLivroBySlug(slug: string): Livro | undefined {
  return livros.find((livro) => livro.slug === slug)
}
