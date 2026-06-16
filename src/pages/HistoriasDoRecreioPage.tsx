import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Button } from '@/components/ui/button'
import { ProducoesSectionCard } from '@/features/projeto/components/ProducoesSectionCard'
import { historiasDoRecreioContent } from '@/features/historias-do-recreio/data/historiasDoRecreioContent'

export function HistoriasDoRecreioPage() {
  const { title, sections } = historiasDoRecreioContent

  return (
    <>
      <PageHero
        title={title}
        breadcrumb={[{ label: 'Início', href: '/' }, { label: title }]}
        align="left"
      />

      <section className="section-padding bg-background" aria-label="Histórias do recreio">
        <div className="container-app mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section, index) => (
              <ScrollReveal key={section.id} delay={index * 0.08}>
                <ProducoesSectionCard section={section} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-app mx-auto max-w-4xl border-t border-border pt-8">
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
