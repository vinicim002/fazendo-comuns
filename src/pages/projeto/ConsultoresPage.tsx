import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Button } from '@/components/ui/button'
import { ConsultantCard } from '@/features/projeto/components/ConsultantCard'
import { consultoresContent } from '@/features/projeto/data/consultoresContent'

export function ConsultoresPage() {
  const { title, subtitle, consultants } = consultoresContent

  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumb={[
          { label: 'Início', href: '/' },
          { label: 'O projeto', href: '/projeto' },
          { label: title },
        ]}
        align="left"
      />

      <section className="section-padding bg-background" aria-label="Consultores do projeto">
        <div className="container-app">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {consultants.map((consultant, index) => (
              <ScrollReveal key={consultant.id} delay={index * 0.05} className="h-full">
                <ConsultantCard consultant={consultant} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-app border-t border-border pt-8">
          <Button variant="outline" asChild>
            <Link to="/projeto">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Voltar para O projeto
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
