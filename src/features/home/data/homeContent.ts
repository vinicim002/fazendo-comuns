import { newsItemsForHome } from '@/features/noticias/data/noticiasContent'
import type { NavItem } from '@/types'

export { footerContent } from '@/features/home/data/footerContent'

import banner01Img from '@/assets/imgs/bannerr01.jpg'
import banner02Img from '@/assets/imgs/banner02.jpg'
import videoRecreioImg from '@/assets/imgs/vídeoVamosFalar.jpeg'
import historiasRecreioImg from '@/assets/imgs/históriasDoRecreio.png'
import debateImg from '@/assets/imgs/debate.png'
import combinacaoImg from '@/assets/imgs/combinacao.png'
import jornalzinhoImg from '@/assets/imgs/img-jornalziho-db.png'
import asCriancasFalamImg from '@/assets/imgs/asCriancasFalam.jpg'
import asProfessorasFalamImg from '@/assets/imgs/asProfessorasEProfessoresFalam.jpg'
import {
  asCriancasFalamEvent,
  asCriancasFalamHeroImage,
} from '@/features/eventos/data/asCriancasFalamContent'
import {
  recrearMundosOutrosEvent,
  recrearMundosOutrosPoster1,
} from '@/features/eventos/data/recrearMundosOutrosContent'
import { sociedadeFalamHeroImage } from '@/features/sociedade-falam/data/sociedadeFalamContent'

export const mainNavigation: NavItem[] = [
  { label: 'Página inicial', href: '/' },
  {
    label: 'O projeto',
    href: '/projeto',
    children: [
      { label: 'O que é', href: '/projeto/o-que-e' },
      { label: 'Equipe', href: '/projeto/equipe' },
      { label: 'Colaboradores', href: '/projeto/colaboradores' },
      { label: 'Produções', href: '/projeto/producoes' },
      { label: 'Bibliografia', href: '/projeto/bibliografia' },
      { label: 'Consultores', href: '/projeto/consultores' },
      { label: 'Parceiros', href: '/projeto/parceiros' },
    ],
  },
  {
    label: 'Multimídia',
    href: '/multimidia',
    children: [
      { label: 'Podcast', href: '/multimidia/podcast' },
      { label: 'Vídeos', href: '/multimidia/videos' },
      { label: 'Fotos', href: '/multimidia/fotos' },
    ],
  },
  {
    label: 'Eventos',
    href: '/eventos',
    children: [
      { label: 'As Crianças Falam', href: '/eventos/as-criancas-falam' },
      {
        label: 'Em Comuns…Recrear em mundos outros',
        href: '/eventos/recrear-mundos-outros',
      },
    ],
  },
  { label: 'Editoriais', href: '/editoriais' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Livros', href: '/livros' },
  {
    label: 'Mais',
    href: '/mais',
    children: [
      { label: 'Links Parceiros', href: '/mais/links-parceiros' },
      { label: 'Contato', href: '/contato' },
    ],
  },
]

export const carouselSlides = [
  {
    id: '1',
    src: banner01Img,
    alt: 'Estudantes montando quebra-cabeça em sala de aula',
    caption: 'Construção coletiva de conhecimento nas escolas públicas',
  },
  {
    id: '2',
    src: banner02Img,
    alt: 'Atividade do projeto Fazendo Comuns em escola parceira',
    caption: 'Pesquisa sobre recreio e convivência escolar',
  },
]

export const mainTitle = {
  line1: 'Fazendo Comuns na escola:',
  line2: 'Vamos falar sobre o recreio!',
}

export interface BubbleItem {
  id: string
  title: string
  href: string
  image: string
  imageAlt: string
  variant?: 'photo' | 'graphic'
}

export const bubbleItems: BubbleItem[] = [
  {
    id: 'video-recreio',
    title: 'Vídeo: Vamos falar do recreio?',
    href: '/video-vamos-falar-do-recreio',
    image: videoRecreioImg,
    imageAlt: 'Estudantes no pátio escolar durante o recreio',
    variant: 'photo' as const,
  },
  {
    id: 'historias',
    title: 'Histórias do recreio',
    href: '/historias-do-recreio',
    image: historiasRecreioImg,
    imageAlt: 'Crianças correndo pelo corredor da escola',
    variant: 'photo',
  },
  {
    id: 'debate',
    title: 'Debate: Recreio em Cena',
    href: '/video-debate-o-recreio-em-cena-final',
    image: debateImg,
    imageAlt: 'Arte do debate Recreio em Cena',
    variant: 'graphic',
  },
  {
    id: 'combinacao',
    title: 'O Projeto Combinação',
    href: '/o-projeto-falatorio',
    image: combinacaoImg,
    imageAlt: 'Logo do Projeto Combinação',
    variant: 'graphic',
  },
  {
    id: 'jornalzino',
    title: 'Jornalzino da escola DB',
    href: '/jornalzinho-da-escola-db',
    image: jornalzinhoImg,
    imageAlt: 'Capa do Jornalzino da escola DB',
    variant: 'graphic',
  },
]

export const featuredEditorial = {
  title: 'As professoras discutem o recreio',
  excerpt:
    '“Você entende que é direito da criança ter professor, antes mesmo do recreio?” Deparamo-nos com esta pergunta em uma roda de conversa com professoras do ensino público municipal carioca. Entendemos que a participação delas no cotidiano escolar está intrinsecamente ligada às possibilidades de se efetivar o recreio das crianças nas instituições públicas de ensino.',
  slug: 'editorial-03-2025',
}

export const newsItems = newsItemsForHome

export const eventItems = [
  {
    id: 'criancas-falam',
    title: 'As Crianças Falam?',
    date: asCriancasFalamEvent.date,
    location: asCriancasFalamEvent.location,
    href: '/eventos/as-criancas-falam',
    image: asCriancasFalamHeroImage,
    imageAlt: asCriancasFalamEvent.imageAlt,
  },
  {
    id: 'recrear-mundos',
    title: 'Em Comuns…Recrear em mundos outros',
    date: recrearMundosOutrosEvent.date,
    location: recrearMundosOutrosEvent.location,
    href: '/eventos/recrear-mundos-outros',
    image: recrearMundosOutrosPoster1,
    imageAlt: recrearMundosOutrosEvent.posters[0].alt,
  },
]

export const featureCards = [
  {
    id: 'criancas',
    title: 'As crianças falam',
    href: '/criancas-falam',
    color: 'red' as const,
    image: asCriancasFalamImg,
    imageAlt: 'As crianças falam sobre o recreio',
  },
  {
    id: 'professoras',
    title: 'As professoras e os professores falam',
    href: '/professores-falam',
    color: 'yellow' as const,
    image: asProfessorasFalamImg,
    imageAlt: 'As professoras e os professores falam',
    secondaryLink: {
      label: 'Manifesto das professoras',
      href: '/manifesto-das-professoras',
    },
  },
  {
    id: 'sociedade',
    title: 'A sociedade fala',
    href: '/a-sociedade-fala',
    color: 'orange' as const,
    image: sociedadeFalamHeroImage,
    imageAlt: 'A sociedade fala sobre o recreio e a brincadeira',
  },
]
