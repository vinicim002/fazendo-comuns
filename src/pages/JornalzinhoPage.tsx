import { Link } from 'react-router-dom'
import { ArrowLeft, Download } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Button } from '@/components/ui/button'
import { jornalzinhoContent } from '@/features/jornalzinho/data/jornalzinhoContent'

export function JornalzinhoPage() {
  const { heading, cover, coverAlt, downloadUrl, downloadLabel } = jornalzinhoContent

  return (
    <>
      <PageHero
        title={heading}
        breadcrumb={[{ label: 'Início', href: '/' }, { label: heading }]}
        align="left"
      />

      <section className="section-padding bg-background" aria-label="Jornalzinho da escola DB">
        <div className="container-app mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="size-4" aria-hidden="true" />
                  {downloadLabel}
                </a>
              </Button>

              <figure className="mt-10 w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
                <img
                  src={cover}
                  alt={coverAlt}
                  className="w-full object-contain"
                />
              </figure>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-app mx-auto max-w-3xl border-t border-border pt-8">
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Voltar ao início
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
