import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Button } from '@/components/ui/button'
import { SociedadeFalamEntryCard } from '@/features/sociedade-falam/components/SociedadeFalamEntryCard'
import { sociedadeFalamContent } from '@/features/sociedade-falam/data/sociedadeFalamContent'

export function SociedadeFalamPage() {
  const { heading, subtitle, heroImage, heroImageAlt, entries } = sociedadeFalamContent

  return (
    <>
      <PageHero
        title={heading}
        subtitle={subtitle}
        breadcrumb={[{ label: 'Início', href: '/' }, { label: heading }]}
      />

      <section className="section-padding bg-background" aria-label="Imagem de abertura">
        <div className="container-app">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl shadow-medium">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="aspect-[21/9] w-full object-cover md:aspect-[2.5/1]"
                loading="eager"
                decoding="async"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="section-padding bg-muted"
        aria-label="Citações sobre recreio e brincadeira"
      >
        <div className="container-app mx-auto max-w-4xl flex flex-col gap-8 lg:gap-10">
          {entries.map((entry, index) => (
            <SociedadeFalamEntryCard key={entry.id} entry={entry} index={index} />
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
