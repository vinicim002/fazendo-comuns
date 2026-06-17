import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Button } from '@/components/ui/button'
import { PhotoGalleryGrid } from '@/features/multimidia/components/PhotoGalleryGrid'
import { getFotosGalleryById } from '@/features/multimidia/data/fotosContent'

export function FotosGalleryPage() {
  const { galleryId } = useParams<{ galleryId: string }>()
  const gallery = galleryId ? getFotosGalleryById(galleryId) : undefined

  if (!gallery) {
    return <Navigate to="/multimidia/fotos" replace />
  }

  return (
    <>
      <PageHero
        title={gallery.title}
        breadcrumb={[
          { label: 'Início', href: '/' },
          { label: 'Multimídia', href: '/multimidia' },
          { label: 'Fotos', href: '/multimidia/fotos' },
          { label: gallery.title },
        ]}
      />

      <section className="section-padding bg-background" aria-label={gallery.title}>
        <div className="container-app">
          <PhotoGalleryGrid gallery={gallery} />
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-app border-t border-border pt-8">
          <Button variant="outline" asChild>
            <Link to="/multimidia/fotos">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Voltar para Fotos
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
