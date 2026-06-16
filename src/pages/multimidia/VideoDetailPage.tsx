import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Button } from '@/components/ui/button'
import { EventPanelVideo } from '@/features/eventos/components/EventPanelVideo'
import { getVideoBySlug } from '@/features/multimidia/data/videosContent'

interface VideoDetailPageProps {
  slug?: string
}

export function VideoDetailPage({ slug: slugProp }: VideoDetailPageProps = {}) {
  const { slug: slugParam } = useParams<{ slug: string }>()
  const slug = slugProp ?? slugParam
  const video = slug ? getVideoBySlug(slug) : undefined

  if (!video) {
    return <Navigate to="/multimidia/videos" replace />
  }

  return (
    <>
      <PageHero
        title={video.title}
        breadcrumb={[
          { label: 'Início', href: '/' },
          { label: 'Multimídia', href: '/multimidia' },
          { label: 'Vídeos', href: '/multimidia/videos' },
          { label: video.title },
        ]}
        align="left"
      />

      <section className="section-padding bg-background" aria-label={video.title}>
        <div className="container-app mx-auto max-w-4xl">
          <ScrollReveal>
            <EventPanelVideo
              title={video.title}
              color={video.color}
              videoUrl={video.videoUrl}
            />
          </ScrollReveal>

          {video.description ? (
            <ScrollReveal delay={0.1}>
              <p className="mt-8 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
                {video.description}
              </p>
            </ScrollReveal>
          ) : null}
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-app mx-auto max-w-4xl border-t border-border pt-8">
          <Button variant="outline" asChild>
            <Link to="/multimidia/videos">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Voltar para Vídeos
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
