import { Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Button } from '@/components/ui/button'
import { PartnerLinkCard } from '@/features/mais/components/PartnerLinkCard'
import { linksParceirosContent } from '@/features/mais/data/linksParceirosContent'

export function LinksParceirosPage() {
  const { title, partners } = linksParceirosContent

  return (
    <>
      <PageHero
        title={title}
        breadcrumb={[
          { label: 'Início', href: '/' },
          { label: 'Mais', href: '/mais' },
          { label: title },
        ]}
        align="left"
      />

      <section className="section-padding bg-background" aria-label="Links de parceiros">
        <div className="container-app mx-auto max-w-3xl">
          <div className="flex flex-col gap-8">
            {partners.map((partner, index) => (
              <ScrollReveal key={partner.id} delay={index * 0.08}>
                <PartnerLinkCard partner={partner} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-app mx-auto max-w-3xl border-t border-border pt-8">
          <Button variant="outline" asChild>
            <Link to="/contato">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Ir para Contato
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

export function MaisIndexPage() {
  return <Navigate to="/mais/links-parceiros" replace />
}
