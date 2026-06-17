import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Button } from '@/components/ui/button'
import { ProducoesSectionCard } from '@/features/projeto/components/ProducoesSectionCard'
import { producoesContent } from '@/features/projeto/data/producoesContent'

export function ProducoesPage() {
  const { title, intro, sections } = producoesContent

  return (
    <>
      <PageHero
        title={title}
        breadcrumb={[
          { label: 'Início', href: '/' },
          { label: 'O projeto', href: '/projeto' },
          { label: title },
        ]}
        align="left"
      />

      <section className="section-padding bg-background" aria-label="Produções do projeto">
        <div className="container-app mx-auto max-w-4xl">
          <ScrollReveal>
            <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg md:leading-loose">
              {intro}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            {sections.map((section, index) => (
              <ScrollReveal key={section.id} delay={index * 0.1}>
                <ProducoesSectionCard section={section} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-app mx-auto max-w-4xl border-t border-border pt-8">
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
