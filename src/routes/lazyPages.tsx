import { lazy } from 'react'

export const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage })),
)
export const ProjetoCombinacaoPage = lazy(() =>
  import('@/pages/ProjetoCombinacaoPage').then((m) => ({
    default: m.ProjetoCombinacaoPage,
  })),
)
export const CriancasFalamPage = lazy(() =>
  import('@/pages/CriancasFalamPage').then((m) => ({ default: m.CriancasFalamPage })),
)
export const ProfessoresFalamPage = lazy(() =>
  import('@/pages/ProfessoresFalamPage').then((m) => ({
    default: m.ProfessoresFalamPage,
  })),
)
export const HistoriasDoRecreioPage = lazy(() =>
  import('@/pages/HistoriasDoRecreioPage').then((m) => ({
    default: m.HistoriasDoRecreioPage,
  })),
)
export const CartazesHistoriasPage = lazy(() =>
  import('@/pages/CartazesHistoriasPage').then((m) => ({
    default: m.CartazesHistoriasPage,
  })),
)
export const JornalzinhoPage = lazy(() =>
  import('@/pages/JornalzinhoPage').then((m) => ({ default: m.JornalzinhoPage })),
)
export const ProjetoPage = lazy(() =>
  import('@/pages/projeto/ProjetoPage').then((m) => ({ default: m.ProjetoPage })),
)
export const OQueEPage = lazy(() =>
  import('@/pages/projeto/OQueEPage').then((m) => ({ default: m.OQueEPage })),
)
export const EquipePage = lazy(() =>
  import('@/pages/projeto/EquipePage').then((m) => ({ default: m.EquipePage })),
)
export const ColaboradoresPage = lazy(() =>
  import('@/pages/projeto/ColaboradoresPage').then((m) => ({
    default: m.ColaboradoresPage,
  })),
)
export const ProducoesPage = lazy(() =>
  import('@/pages/projeto/ProducoesPage').then((m) => ({ default: m.ProducoesPage })),
)
export const ProducoesSubpagePlaceholder = lazy(() =>
  import('@/pages/projeto/ProducoesSubpagePlaceholder').then((m) => ({
    default: m.ProducoesSubpagePlaceholder,
  })),
)
export const BibliografiaPage = lazy(() =>
  import('@/pages/projeto/BibliografiaPage').then((m) => ({
    default: m.BibliografiaPage,
  })),
)
export const ConsultoresPage = lazy(() =>
  import('@/pages/projeto/ConsultoresPage').then((m) => ({
    default: m.ConsultoresPage,
  })),
)
export const ParceirosPage = lazy(() =>
  import('@/pages/projeto/ParceirosPage').then((m) => ({ default: m.ParceirosPage })),
)
export const MultimidiaPage = lazy(() =>
  import('@/pages/multimidia/MultimidiaPage').then((m) => ({
    default: m.MultimidiaPage,
  })),
)
export const FotosPage = lazy(() =>
  import('@/pages/multimidia/FotosPage').then((m) => ({ default: m.FotosPage })),
)
export const FotosGalleryPage = lazy(() =>
  import('@/pages/multimidia/FotosGalleryPage').then((m) => ({
    default: m.FotosGalleryPage,
  })),
)
export const VideosPage = lazy(() =>
  import('@/pages/multimidia/VideosPage').then((m) => ({ default: m.VideosPage })),
)
export const PodcastPage = lazy(() =>
  import('@/pages/multimidia/PodcastPage').then((m) => ({ default: m.PodcastPage })),
)
export const VideoDetailPage = lazy(() =>
  import('@/pages/multimidia/VideoDetailPage').then((m) => ({
    default: m.VideoDetailPage,
  })),
)
export const EventosPage = lazy(() =>
  import('@/pages/eventos/EventosPage').then((m) => ({ default: m.EventosPage })),
)
export const AsCriancasFalamPage = lazy(() =>
  import('@/pages/eventos/AsCriancasFalamPage').then((m) => ({
    default: m.AsCriancasFalamPage,
  })),
)
export const RecrearMundosOutrosPage = lazy(() =>
  import('@/pages/eventos/RecrearMundosOutrosPage').then((m) => ({
    default: m.RecrearMundosOutrosPage,
  })),
)
export const EventosSubpagePlaceholder = lazy(() =>
  import('@/pages/eventos/EventosSubpagePlaceholder').then((m) => ({
    default: m.EventosSubpagePlaceholder,
  })),
)
export const EditoriaisPage = lazy(() =>
  import('@/pages/editoriais/EditoriaisPage').then((m) => ({
    default: m.EditoriaisPage,
  })),
)
export const EditorialDetailPage = lazy(() =>
  import('@/pages/editoriais/EditorialDetailPage').then((m) => ({
    default: m.EditorialDetailPage,
  })),
)
export const NoticiasPage = lazy(() =>
  import('@/pages/noticias/NoticiasPage').then((m) => ({ default: m.NoticiasPage })),
)
export const NoticiaDetailPage = lazy(() =>
  import('@/pages/noticias/NoticiaDetailPage').then((m) => ({
    default: m.NoticiaDetailPage,
  })),
)
export const MaisIndexPage = lazy(() =>
  import('@/pages/mais/LinksParceirosPage').then((m) => ({ default: m.MaisIndexPage })),
)
export const LinksParceirosPage = lazy(() =>
  import('@/pages/mais/LinksParceirosPage').then((m) => ({
    default: m.LinksParceirosPage,
  })),
)
export const ContatoPage = lazy(() =>
  import('@/pages/ContatoPage').then((m) => ({ default: m.ContatoPage })),
)
