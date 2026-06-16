import luciaRabelloImg from '@/assets/imgs/equipe/lucia-rabello.jpg'
import adelaideRezendeImg from '@/assets/imgs/equipe/adelaide-rezende.jpg'
import anaLeticiaLimaImg from '@/assets/imgs/equipe/ana-leticia-lima.jpg'
import andreaSzulcImg from '@/assets/imgs/consultores/andrea-szulc.jpg'
import lucianaGageiroImg from '@/assets/imgs/consultores/luciana-gageiro.jpg'
import anaPaulaPedroImg from '@/assets/imgs/colaboradores/ana-paula-pedro.jpg'
import banner01Img from '@/assets/imgs/bannerr01.jpg'
import banner02Img from '@/assets/imgs/banner02.jpg'
import videoRecreioImg from '@/assets/imgs/vídeoVamosFalar.jpeg'
import type {
  ActivityItem,
  Assistente,
  Colaborador,
  Consultor,
  Editorial,
  Evento,
  MediaItem,
  Noticia,
  Pesquisador,
} from '@/features/admin/types'

const daysAgo = (days: number) =>
  new Date(Date.now() - days * 86400000).toISOString()

export const mockPesquisadores: Pesquisador[] = [
  {
    id: 'pes-1',
    name: 'Lucia Rabello de Castro',
    photo: luciaRabelloImg,
    role: 'Coordenadora-Geral',
    miniBio: 'Professora Titular do Instituto de Psicologia da UFRJ.',
    fullBio:
      'Professora Titular do Instituto de Psicologia da Universidade Federal do Rio de Janeiro. Pesquisadora Senior do CNPQ e coordenadora científica do NIPIAC/UFRJ.',
    email: 'lucia.rabello@ufrj.br',
    linkedin: 'https://linkedin.com/in/lucia-rabello',
    lattes: 'http://lattes.cnpq.br/123456789',
    displayOrder: 1,
    status: 'active',
    createdAt: daysAgo(120),
    updatedAt: daysAgo(2),
  },
]

export const mockAssistentes: Assistente[] = [
  {
    id: 'ass-1',
    name: 'Adelaide Rezende de Souza',
    photo: adelaideRezendeImg,
    role: 'Pesquisadora Assistente',
    miniBio: 'Pós-doutoranda em Psicologia na UFRJ.',
    fullBio:
      'Pós-doutoranda em Psicologia no Instituto de Psicologia da UFRJ. Pesquisadora da ONG Redes da Maré.',
    email: 'adelaide.rezende@ufrj.br',
    linkedin: 'https://linkedin.com/in/adelaide-rezende',
    displayOrder: 1,
    status: 'active',
    createdAt: daysAgo(90),
    updatedAt: daysAgo(5),
  },
  {
    id: 'ass-2',
    name: 'Ana Letícia Lima Silva',
    photo: anaLeticiaLimaImg,
    role: 'Pesquisadora Assistente',
    miniBio: 'Graduanda de Psicologia na UFRJ.',
    fullBio:
      'Graduanda de Psicologia no Instituto de Psicologia da Universidade Federal do Rio de Janeiro (UFRJ).',
    email: 'ana.leticia@ufrj.br',
    linkedin: '',
    displayOrder: 2,
    status: 'active',
    createdAt: daysAgo(60),
    updatedAt: daysAgo(10),
  },
]

export const mockConsultores: Consultor[] = [
  {
    id: 'con-1',
    name: 'Andrea Szulc',
    photo: andreaSzulcImg,
    role: 'Consultora Científica',
    institution: 'Universidad de Buenos Aires / CONICET',
    bio: 'Doutora em Antropologia pela Universidade de Buenos Aires. Pesquisadora do CONICET/Argentina.',
    email: 'andrea.szulc@uba.ar',
    linkedin: 'https://linkedin.com/in/andrea-szulc',
    displayOrder: 1,
    status: 'active',
    createdAt: daysAgo(100),
    updatedAt: daysAgo(15),
  },
  {
    id: 'con-2',
    name: 'Luciana Gageiro',
    photo: lucianaGageiroImg,
    role: 'Consultora Científica',
    institution: 'Universidade Federal do Rio de Janeiro',
    bio: 'Professora do Instituto de Psicologia da UFRJ. Pesquisadora na área de infância e juventude.',
    email: 'luciana.gageiro@ufrj.br',
    linkedin: '',
    displayOrder: 2,
    status: 'inactive',
    createdAt: daysAgo(80),
    updatedAt: daysAgo(20),
  },
]

export const mockColaboradores: Colaborador[] = [
  {
    id: 'col-1',
    name: 'Ana Paula Pedro',
    photo: anaPaulaPedroImg,
    institution: 'Instituto Superior de Educação Pró-Saber',
    role: 'Coordenadora de Arte',
    description:
      'Psicóloga Clínica e Diretora de projetos. Coordenadora de Arte do Projeto Fazendo Comuns.',
    website: 'https://pro-saber.org',
    displayOrder: 1,
    status: 'active',
    createdAt: daysAgo(70),
    updatedAt: daysAgo(3),
  },
]

export const mockNoticias: Noticia[] = [
  {
    id: 'not-1',
    title: 'Ouça o podcast "Direito ao Recreio" — HUMANAMENTE/CNPq',
    summary:
      'Divulgação científica em humanidades sobre o direito das crianças ao recreio escolar.',
    content:
      '<p>Ouça o podcast "Direito ao Recreio" realizado por HUMANAMENTE, Divulgação Científica em Humanidades/CNPq.</p><p>A produção aborda o direito das crianças ao recreio escolar e dialoga com as pesquisas do projeto Fazendo Comuns.</p>',
    coverImage: videoRecreioImg,
    author: 'Equipe Fazendo Comuns',
    date: '2025-06-16',
    category: 'Podcast',
    tags: ['recreio', 'podcast', 'divulgação'],
    featured: true,
    displayOrder: 1,
    status: 'active',
    createdAt: daysAgo(1),
    updatedAt: daysAgo(1),
  },
  {
    id: 'not-2',
    title: 'Evento sobre mobilizações públicas acerca do recreio — EMERJ',
    summary: 'Parceria com a Escola de Magistratura do Estado do Rio de Janeiro.',
    content:
      '<p>Evento realizado em parceria com a EMERJ sobre mobilizações públicas acerca do recreio escolar.</p>',
    coverImage: banner02Img,
    author: 'Equipe Fazendo Comuns',
    date: '2024-10-03',
    category: 'Evento',
    tags: ['recreio', 'EMERJ', 'mobilização'],
    featured: false,
    displayOrder: 2,
    status: 'active',
    createdAt: daysAgo(30),
    updatedAt: daysAgo(30),
  },
  {
    id: 'not-3',
    title: 'Lançamento do site Fazendo Comuns',
    summary: 'Inauguração da plataforma digital do projeto de pesquisa.',
    content:
      '<p>O projeto Fazendo Comuns apresenta este site como interface de comunicação e diálogo com a sociedade.</p>',
    coverImage: banner01Img,
    author: 'Lucia Rabello de Castro',
    date: '2024-01-15',
    category: 'Institucional',
    tags: ['site', 'lançamento'],
    featured: false,
    displayOrder: 3,
    status: 'inactive',
    createdAt: daysAgo(180),
    updatedAt: daysAgo(60),
  },
]

export const mockEditoriais: Editorial[] = [
  {
    id: 'edi-1',
    title: 'As professoras discutem o recreio',
    summary:
      'Editorial sobre as perspectivas das docentes acerca do recreio como pauta política das crianças.',
    content:
      '<p>"Você entende que é direito da criança ter professor, antes mesmo do recreio?" Deparamo-nos com esta pergunta em uma roda de conversa com professoras.</p>',
    image: banner01Img,
    author: 'Equipe Editorial',
    date: '2025-01-01',
    tags: ['professoras', 'recreio', 'política'],
    displayOrder: 1,
    status: 'active',
    createdAt: daysAgo(45),
    updatedAt: daysAgo(45),
  },
  {
    id: 'edi-2',
    title: 'As crianças são sujeitos políticos?',
    summary:
      'Reflexão sobre crianças como sujeitos políticos e a convivência coletiva.',
    content:
      '<p>Fazer esta pergunta é preciso. Talvez porque a política resume essencialmente os desafios invariantes da convivência coletiva.</p>',
    image: banner02Img,
    author: 'Equipe Editorial',
    date: '2024-01-01',
    tags: ['política', 'infância', 'direitos'],
    displayOrder: 2,
    status: 'active',
    createdAt: daysAgo(120),
    updatedAt: daysAgo(90),
  },
]

export const mockEventos: Evento[] = [
  {
    id: 'evt-1',
    name: 'As Crianças Falam',
    shortDescription: 'Evento de escuta e expressão das crianças sobre o recreio.',
    fullDescription:
      '<p>Encontro público com crianças de escolas municipais do Rio de Janeiro para discutir o recreio como direito e pauta política.</p>',
    image: banner01Img,
    date: '2024-11-20',
    time: '14:00',
    location: 'Instituto de Psicologia — UFRJ',
    link: '/eventos/as-criancas-falam',
    featured: true,
    displayOrder: 1,
    status: 'active',
    createdAt: daysAgo(50),
    updatedAt: daysAgo(10),
  },
  {
    id: 'evt-2',
    name: 'Em Comuns… Recrear em mundos outros',
    shortDescription: 'Mesa de debate sobre recreação e comuns na escola pública.',
    fullDescription:
      '<p>Evento acadêmico com pesquisadores, professoras e crianças debatendo práticas de recreação coletiva.</p>',
    image: banner02Img,
    date: '2024-09-15',
    time: '10:00',
    location: 'Auditório IP-UFRJ',
    link: '/eventos/recrear-mundos-outros',
    featured: false,
    displayOrder: 2,
    status: 'active',
    createdAt: daysAgo(80),
    updatedAt: daysAgo(40),
  },
]

export const mockMediaLibrary: MediaItem[] = [
  {
    id: 'med-1',
    name: 'banner-principal.jpg',
    url: banner01Img,
    type: 'image',
    size: '245 KB',
    uploadedAt: daysAgo(5),
    alt: 'Banner principal do site',
  },
  {
    id: 'med-2',
    name: 'evento-recreio.jpg',
    url: banner02Img,
    type: 'image',
    size: '312 KB',
    uploadedAt: daysAgo(12),
    alt: 'Evento sobre recreio',
  },
  {
    id: 'med-3',
    name: 'podcast-recreio.jpg',
    url: videoRecreioImg,
    type: 'image',
    size: '189 KB',
    uploadedAt: daysAgo(1),
    alt: 'Capa do podcast Direito ao Recreio',
  },
  {
    id: 'med-4',
    name: 'lucia-rabello.jpg',
    url: luciaRabelloImg,
    type: 'image',
    size: '156 KB',
    uploadedAt: daysAgo(30),
    alt: 'Foto de Lucia Rabello de Castro',
  },
  {
    id: 'med-5',
    name: 'equipe-evento.jpg',
    url: adelaideRezendeImg,
    type: 'image',
    size: '198 KB',
    uploadedAt: daysAgo(20),
    alt: 'Equipe em evento',
  },
  {
    id: 'med-6',
    name: 'consultora-andrea.jpg',
    url: andreaSzulcImg,
    type: 'image',
    size: '167 KB',
    uploadedAt: daysAgo(45),
    alt: 'Andrea Szulc',
  },
]

export const mockActivities: ActivityItem[] = [
  {
    id: 'act-1',
    action: 'Criou',
    entity: 'Notícia',
    entityName: 'Podcast "Direito ao Recreio"',
    timestamp: daysAgo(1),
  },
  {
    id: 'act-2',
    action: 'Editou',
    entity: 'Pesquisador(a)',
    entityName: 'Lucia Rabello de Castro',
    timestamp: daysAgo(2),
  },
  {
    id: 'act-3',
    action: 'Desativou',
    entity: 'Consultor',
    entityName: 'Luciana Gageiro',
    timestamp: daysAgo(5),
  },
  {
    id: 'act-4',
    action: 'Reordenou',
    entity: 'Assistentes',
    entityName: 'Lista de assistentes',
    timestamp: daysAgo(7),
  },
  {
    id: 'act-5',
    action: 'Criou',
    entity: 'Evento',
    entityName: 'As Crianças Falam',
    timestamp: daysAgo(10),
  },
]

export const newsCategories = [
  'Institucional',
  'Evento',
  'Podcast',
  'Publicação',
  'Parceria',
] as const
