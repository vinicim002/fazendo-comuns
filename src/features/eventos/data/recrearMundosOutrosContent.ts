import asProfessorasFalamImg from '@/assets/imgs/asProfessorasEProfessoresFalam.jpg'
import capaLivroImg from '@/assets/imgs/capaLivro.png'

export const recrearMundosOutrosEvent = {
  title: 'Em Comuns…Recrear em mundos outros',
  subtitle:
    'Evento que articula recriação, educação co-geracional e a construção de mundos outros na escola pública.',
  image: asProfessorasFalamImg,
  imageAlt: 'Evento Em Comuns…Recrear em mundos outros',
  date: '2023 — 2024',
  location: 'Espaços culturais e escolares parceiros',
  videoSection: {
    title: 'Em Comum — recrear em mundos outros',
    description:
      'Veja o vídeo sobre o projeto de pesquisa "Fazendo Comuns: a educação como projeto intra e co-geracional".',
    videoTitle: 'Vídeo — Fazendo Comuns: educação intra e co-geracional',
    videoUrl: undefined as string | undefined,
  },
  relatedBook: {
    slug: 'recrear-mundos-outros',
    title: 'Recrear Mundos Outros',
    subtitle: 'Fazendo Comuns na escola… construir um mundo outro',
    cover: capaLivroImg,
    coverAlt: 'Capa do livro Recrear Mundos Outros',
    href: '/livros/recrear-mundos-outros',
    teaser:
      'Publicação organizada a partir deste evento, disponível para leitura online e download gratuito.',
  },
}
