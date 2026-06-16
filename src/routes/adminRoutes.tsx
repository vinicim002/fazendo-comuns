import { AdminLayout } from '@/features/admin/components/layout/AdminLayout'
import { DashboardPage } from '@/features/admin/pages/DashboardPage'
import { AssistenteFormPage } from '@/features/admin/pages/assistentes/AssistenteFormPage'
import { AssistentesListPage } from '@/features/admin/pages/assistentes/AssistentesListPage'
import { ColaboradorFormPage } from '@/features/admin/pages/colaboradores/ColaboradorFormPage'
import { ColaboradoresListPage } from '@/features/admin/pages/colaboradores/ColaboradoresListPage'
import { ConsultorFormPage } from '@/features/admin/pages/consultores/ConsultorFormPage'
import { ConsultoresListPage } from '@/features/admin/pages/consultores/ConsultoresListPage'
import { EditorialFormPage } from '@/features/admin/pages/editoriais/EditorialFormPage'
import { EditoriaisListPage } from '@/features/admin/pages/editoriais/EditoriaisListPage'
import { EventoFormPage } from '@/features/admin/pages/eventos/EventoFormPage'
import { EventosListPage } from '@/features/admin/pages/eventos/EventosListPage'
import { MediaLibraryPage } from '@/features/admin/pages/media/MediaLibraryPage'
import { NoticiaFormPage } from '@/features/admin/pages/noticias/NoticiaFormPage'
import { NoticiasListPage } from '@/features/admin/pages/noticias/NoticiasListPage'
import { PesquisadorFormPage } from '@/features/admin/pages/pesquisadores/PesquisadorFormPage'
import { PesquisadoresListPage } from '@/features/admin/pages/pesquisadores/PesquisadoresListPage'

export const adminRoutes = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'pesquisadores', element: <PesquisadoresListPage /> },
      { path: 'pesquisadores/novo', element: <PesquisadorFormPage /> },
      { path: 'pesquisadores/:id/editar', element: <PesquisadorFormPage /> },
      { path: 'assistentes', element: <AssistentesListPage /> },
      { path: 'assistentes/novo', element: <AssistenteFormPage /> },
      { path: 'assistentes/:id/editar', element: <AssistenteFormPage /> },
      { path: 'consultores', element: <ConsultoresListPage /> },
      { path: 'consultores/novo', element: <ConsultorFormPage /> },
      { path: 'consultores/:id/editar', element: <ConsultorFormPage /> },
      { path: 'colaboradores', element: <ColaboradoresListPage /> },
      { path: 'colaboradores/novo', element: <ColaboradorFormPage /> },
      { path: 'colaboradores/:id/editar', element: <ColaboradorFormPage /> },
      { path: 'noticias', element: <NoticiasListPage /> },
      { path: 'noticias/novo', element: <NoticiaFormPage /> },
      { path: 'noticias/:id/editar', element: <NoticiaFormPage /> },
      { path: 'editoriais', element: <EditoriaisListPage /> },
      { path: 'editoriais/novo', element: <EditorialFormPage /> },
      { path: 'editoriais/:id/editar', element: <EditorialFormPage /> },
      { path: 'eventos', element: <EventosListPage /> },
      { path: 'eventos/novo', element: <EventoFormPage /> },
      { path: 'eventos/:id/editar', element: <EventoFormPage /> },
      { path: 'midia', element: <MediaLibraryPage /> },
    ],
  },
]
