import banner01Img from '@/assets/imgs/bannerr01.jpg'
import banner02Img from '@/assets/imgs/banner02.jpg'
import videoRecreioImg from '@/assets/imgs/vídeoVamosFalar.jpeg'
import historiasRecreioImg from '@/assets/imgs/históriasDoRecreio.png'
import combinacaoImg from '@/assets/imgs/combinacao.png'

const wixBase = 'https://static.wixstatic.com/media'

function wixHeroImage(fileId: string, ext: 'jpg' | 'jpeg' | 'png', width = 2500) {
  const file = `${fileId}~mv2.${ext}`
  return `${wixBase}/${file}/v1/fit/w_${width},h_${width},al_c,q_90,usm_0.66_1.00_0.01/${file}`
}

export interface NoticiaAudio {
  url: string
  duration: string
  label: string
}

export interface NoticiaLink {
  href: string
  label: string
}

export interface Noticia {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  listImage: string
  listImageAlt: string
  heroImage: string
  paragraphs: string[]
  audio?: NoticiaAudio
  relatedLink?: NoticiaLink
}

export const noticiasHubIntro = {
  title: 'Notícias',
  subtitle:
    'Registros de parcerias, eventos, apresentações públicas e produções do projeto Fazendo Comuns.',
}

export const noticias = [
  {
    id: '1',
    slug: 'podcast-direito-ao-recreio',
    title: 'Ouça o podcast “Direito ao Recreio” — HUMANAMENTE/CNPq',
    excerpt:
      'Divulgação científica em humanidades sobre o direito das crianças ao recreio escolar.',
    date: '2025-06-16',
    listImage: videoRecreioImg,
    listImageAlt: 'Podcast Direito ao Recreio',
    heroImage: wixHeroImage('92a7cc_cee8db8384d946149a3cc7e8f638322a', 'jpg'),
    paragraphs: [
      'Ouça o podcast “Direito ao Recreio” realizado por HUMANAMENTE, Divulgação Científica em Humanidades/CNPq.',
      'A produção aborda o direito das crianças ao recreio escolar e dialoga com as pesquisas e intervenções do projeto Fazendo Comuns nas escolas públicas municipais do Rio de Janeiro.',
      'O episódio integra o esforço de divulgação científica em humanidades e amplia o debate público sobre o recreio como demanda coletiva das crianças na escola.',
    ],
    audio: {
      url: 'https://music.wixstatic.com/mp3/92a7cc_fdffb6f5f48c42cabd1e490f23c719da.mp3',
      duration: '10:41',
      label: 'Podcast “Direito ao Recreio” — HUMANAMENTE/CNPq',
    },
    relatedLink: {
      href: '/multimidia/podcast',
      label: 'Ver página do podcast',
    },
  },
  {
    id: '2',
    slug: 'evento-emerj-recreio',
    title: 'Evento sobre mobilizações públicas acerca do recreio — EMERJ',
    excerpt:
      'Parceria com a Escola de Magistratura do Estado do Rio de Janeiro.',
    date: '2024-10-03',
    listImage: banner02Img,
    listImageAlt: 'Evento sobre mobilizações públicas acerca do recreio',
    heroImage: wixHeroImage('92a7cc_2007c70687ce4d128235ab8e1a5d6297', 'jpg'),
    paragraphs: [
      'O Projeto Fazendo Comuns, em parceria com a Escola de Magistratura do Estado do Rio de Janeiro (EMERJ), realizou evento sobre as mobilizações públicas acerca do recreio escolar.',
      'O encontro ampliou o debate sobre o recreio como pauta de direitos da criança e como questão que envolve escola, família, gestão pública e poder judiciário.',
      'A atividade reforçou a importância de escutar as crianças e de tornar visíveis suas demandas coletivas no cotidiano escolar.',
    ],
  },
  {
    id: '3',
    slug: 'reuniao-thais-ferreira',
    title: 'Reunião com vereadora Thais Ferreira — CMDCA Rio',
    excerpt:
      'Encontro com a presidente da Comissão de Direitos da Criança e do Adolescente.',
    date: '2024-10-01',
    listImage: banner01Img,
    listImageAlt: 'Reunião com vereadora Thais Ferreira',
    heroImage: wixHeroImage('92a7cc_6c801e721f6b47f09ddb991436012b68', 'jpeg'),
    paragraphs: [
      'O projeto Fazendo Comuns participou de reunião com a vereadora Thais Ferreira, presidente da Comissão de Direitos da Criança e do Adolescente da Câmara Municipal do Rio de Janeiro.',
      'O encontro foi uma oportunidade de apresentar as pesquisas do projeto e dialogar sobre políticas públicas voltadas ao recreio e à participação das crianças na escola.',
      'A conversa reforçou a articulação entre pesquisa acadêmica, movimentos sociais e instâncias de defesa dos direitos da infância no município.',
    ],
  },
  {
    id: '4',
    slug: 'apresentacao-cmdca-rio',
    title: 'Apresentação pública no CMDCA Rio',
    excerpt:
      'Projeto apresentado ao Conselho Municipal dos Direitos da Criança e do Adolescente.',
    date: '2024-08-13',
    listImage: combinacaoImg,
    listImageAlt: 'Apresentação pública no CMDCA Rio',
    heroImage: wixHeroImage('92a7cc_ab14a7c529c34d6b9485f5d44732d392', 'png'),
    paragraphs: [
      'O projeto Fazendo Comuns realizou apresentação pública no Conselho Municipal dos Direitos da Criança e do Adolescente do Rio de Janeiro (CMDCA Rio).',
      'Na ocasião, a equipe compartilhou resultados das pesquisas com crianças e adultos da escola pública e discutiu caminhos para a efetivação do recreio como direito.',
      'O CMDCA Rio é um espaço estratégico para o diálogo entre sociedade civil, gestão pública e movimentos em defesa dos direitos da criança e do adolescente.',
    ],
  },
  {
    id: '5',
    slug: 'festa-agostina',
    title: 'Participação na Festa Agostina — escola parceira',
    excerpt:
      'Presença do projeto em evento promovido por escola parceira da rede municipal.',
    date: '2024-08-13',
    listImage: historiasRecreioImg,
    listImageAlt: 'Participação na Festa Agostina',
    heroImage: historiasRecreioImg,
    paragraphs: [
      'O projeto Fazendo Comuns participou da Festa Agostina, evento promovido por escola parceira da rede municipal de ensino do Rio de Janeiro.',
      'A presença no encontro permitiu dialogar com crianças, famílias e profissionais da escola sobre o recreio e as vivências coletivas no espaço escolar.',
      'Atividades como esta aproximam a pesquisa do cotidiano das comunidades escolares e fortalecem os vínculos do projeto com as escolas parceiras.',
    ],
  },
] satisfies Noticia[]

export function getNoticiaBySlug(slug: string): Noticia | undefined {
  return noticias.find((noticia) => noticia.slug === slug)
}

export const newsItemsForHome = noticias.map(
  ({ id, title, excerpt, date, slug, heroImage, listImageAlt }) => ({
    id,
    title,
    excerpt,
    date,
    slug,
    image: heroImage,
    imageAlt: listImageAlt,
  }),
)
