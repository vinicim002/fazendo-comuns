import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { Page } from '@/routes/PageSuspense'
import {
  AsCriancasFalamPage,
  BibliografiaPage,
  CartazesHistoriasPage,
  ColaboradoresPage,
  ConsultoresPage,
  ContatoPage,
  CriancasFalamPage,
  EditorialDetailPage,
  EditoriaisPage,
  EquipePage,
  EventosPage,
  EventosSubpagePlaceholder,
  FotosGalleryPage,
  FotosPage,
  HistoriasDoRecreioPage,
  HomePage,
  JornalzinhoPage,
  LinksParceirosPage,
  LivroDetailPage,
  LivrosCapitulosPage,
  LivrosPage,
  MaisIndexPage,
  MultimidiaPage,
  NoticiaDetailPage,
  NoticiasPage,
  OQueEPage,
  ParceirosPage,
  PodcastPage,
  ProducoesPage,
  ProducoesSubpagePlaceholder,
  ProfessoresFalamPage,
  ProjetoCombinacaoPage,
  ProjetoPage,
  RecrearMundosOutrosPage,
  VideoDetailPage,
  VideosPage,
} from '@/routes/lazyPages'
import { adminRoutes } from '@/routes/adminRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Page><HomePage /></Page> },
      {
        path: 'o-projeto-falatorio',
        element: <Page><ProjetoCombinacaoPage /></Page>,
      },
      {
        path: 'criancas-falam',
        element: <Page><CriancasFalamPage /></Page>,
      },
      {
        path: 'professores-falam',
        element: <Page><ProfessoresFalamPage /></Page>,
      },
      {
        path: 'historias-do-recreio',
        element: <Page><HistoriasDoRecreioPage /></Page>,
      },
      {
        path: 'cartazes-com-historias-do-recreio',
        element: <Page><CartazesHistoriasPage /></Page>,
      },
      {
        path: 'video-rap-historias-do-recreio',
        element: (
          <Page>
            <VideoDetailPage slug="video-rap-historias-do-recreio" />
          </Page>
        ),
      },
      {
        path: 'jornalzinho-da-escola-db',
        element: <Page><JornalzinhoPage /></Page>,
      },
      {
        path: 'video-debate-o-recreio-em-cena-final',
        element: (
          <Page>
            <VideoDetailPage slug="video-debate-o-recreio-em-cena-final" />
          </Page>
        ),
      },
      {
        path: 'video-vamos-falar-do-recreio',
        element: (
          <Page>
            <VideoDetailPage slug="video-vamos-falar-do-recreio" />
          </Page>
        ),
      },
      {
        path: 'projeto',
        children: [
          { index: true, element: <Page><ProjetoPage /></Page> },
          {
            path: 'o-que-e',
            element: <Page><OQueEPage /></Page>,
          },
          {
            path: 'equipe',
            element: <Page><EquipePage /></Page>,
          },
          {
            path: 'colaboradores',
            element: <Page><ColaboradoresPage /></Page>,
          },
          {
            path: 'producoes',
            children: [
              { index: true, element: <Page><ProducoesPage /></Page> },
              {
                path: 'artigos',
                element: (
                  <Page>
                    <ProducoesSubpagePlaceholder
                      title="Artigos"
                      description="Artigos científicos do grupo de pesquisa e do NIAJ/UFRJ."
                    />
                  </Page>
                ),
              },
              {
                path: 'livros',
                element: (
                  <Page>
                    <LivrosCapitulosPage />
                  </Page>
                ),
              },
            ],
          },
          {
            path: 'bibliografia',
            element: <Page><BibliografiaPage /></Page>,
          },
          {
            path: 'consultores',
            element: <Page><ConsultoresPage /></Page>,
          },
          {
            path: 'parceiros',
            element: <Page><ParceirosPage /></Page>,
          },
        ],
      },
      {
        path: 'multimidia',
        children: [
          { index: true, element: <Page><MultimidiaPage /></Page> },
          {
            path: 'fotos',
            children: [
              { index: true, element: <Page><FotosPage /></Page> },
              { path: ':galleryId', element: <Page><FotosGalleryPage /></Page> },
            ],
          },
          {
            path: 'videos',
            element: <Page><VideosPage /></Page>,
          },
          {
            path: 'podcast',
            element: <Page><PodcastPage /></Page>,
          },
        ],
      },
      {
        path: 'eventos',
        children: [
          { index: true, element: <Page><EventosPage /></Page> },
          { path: 'as-criancas-falam', element: <Page><AsCriancasFalamPage /></Page> },
          {
            path: 'as-criancas-falam/fotos',
            element: (
              <Page>
                <EventosSubpagePlaceholder
                  title="Fotos do evento"
                  description="Registros fotográficos do evento As Crianças Falam."
                  parentLabel="As Crianças Falam"
                  parentHref="/eventos/as-criancas-falam"
                />
              </Page>
            ),
          },
          {
            path: 'recrear-mundos-outros',
            element: <Page><RecrearMundosOutrosPage /></Page>,
          },
          {
            path: 'recrear-mundos-outros/fotos',
            element: (
              <Page>
                <EventosSubpagePlaceholder
                  title="Fotos do evento"
                  description="Registros fotográficos do evento Em Comuns…Recrear em mundos outros."
                  parentLabel="Em Comuns…Recrear em mundos outros"
                  parentHref="/eventos/recrear-mundos-outros"
                />
              </Page>
            ),
          },
        ],
      },
      {
        path: 'editoriais',
        children: [
          { index: true, element: <Page><EditoriaisPage /></Page> },
          { path: ':slug', element: <Page><EditorialDetailPage /></Page> },
        ],
      },
      {
        path: 'noticias',
        children: [
          { index: true, element: <Page><NoticiasPage /></Page> },
          { path: ':slug', element: <Page><NoticiaDetailPage /></Page> },
        ],
      },
      {
        path: 'mais',
        children: [
          { index: true, element: <Page><MaisIndexPage /></Page> },
          { path: 'links-parceiros', element: <Page><LinksParceirosPage /></Page> },
        ],
      },
      {
        path: 'contato',
        element: <Page><ContatoPage /></Page>,
      },
      {
        path: 'livros',
        children: [
          { index: true, element: <Page><LivrosPage /></Page> },
          { path: ':slug', element: <Page><LivroDetailPage /></Page> },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  ...adminRoutes,
])
