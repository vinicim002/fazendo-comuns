import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Button } from '@/components/ui/button'
import { ProfessoresFalamSectionCard } from '@/features/professores-falam/components/ProfessoresFalamSectionCard'
import { professoresFalamContent } from '@/features/professores-falam/data/professoresFalamContent'

export function ProfessoresFalamPage() {
  const { heading, subtitle, heroImage, heroImageAlt, sections } = professoresFalamContent

  return (
    <>
      <PageHero
        title={heading}
        subtitle={subtitle}
        breadcrumb={[{ label: 'Início', href: '/' }, { label: heading }]}
        align="left"
      />

      <section className="section-padding bg-background" aria-label="Reportagem">
        <div className="container-app">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl shadow-medium">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="aspect-[21/9] w-full object-cover md:aspect-[2.5/1]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="section-padding bg-muted"
        aria-label="Depoimentos de professoras e professores"
      >
        <div className="container-app flex flex-col gap-12 lg:gap-16">
          {sections.map((section, index) => (
            <ProfessoresFalamSectionCard
              key={section.id}
              section={section}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-app border-t border-border pt-8">
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
