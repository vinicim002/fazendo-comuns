import { Link } from 'react-router-dom'
import { ArrowLeft, ImageIcon } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Button } from '@/components/ui/button'
import type { OQueESection } from '@/features/projeto/data/oQueEContent'
import { oQueEContent } from '@/features/projeto/data/oQueEContent'
import { cn } from '@/lib/utils'

function renderParagraph(text: string, index: number) {
  const parts = text.split('(ver Produções)')
  if (parts.length === 1) {
    return (
      <p
        key={index}
        className="font-body text-base leading-relaxed text-foreground md:text-lg md:leading-loose"
      >
        {text}
      </p>
    )
  }

  return (
    <p
      key={index}
      className="font-body text-base leading-relaxed text-foreground md:text-lg md:leading-loose"
    >
      {parts[0]}
      (
      <Link
        to="/projeto/producoes"
        className="font-semibold text-brand-red underline-offset-4 transition-colors hover:text-brand-orange hover:underline"
      >
        ver Produções
      </Link>
      )
      {parts[1]}
    </p>
  )
}

function SectionImage({ section }: { section: OQueESection }) {
  if (section.image) {
    const isLogos = section.id === 'qualificacao'

    return (
      <figure
        className={cn(
          'overflow-hidden rounded-2xl border border-border/60 shadow-soft',
          isLogos ? 'bg-neutral-950 p-6 md:p-8' : 'bg-card',
        )}
      >
        <img
          src={section.image.src}
          alt={section.image.alt}
          className={cn(
            'w-full object-contain',
            isLogos ? 'mx-auto max-h-56 md:max-h-64' : 'aspect-[4/3] object-cover md:aspect-auto',
          )}
        />
      </figure>
    )
  }

  if (section.imagePlaceholder) {
    return (
      <figure className="flex min-h-[220px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-brand-amber/50 bg-brand-amber/5 px-6 py-10 text-center md:min-h-[280px]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-amber/20 text-brand-orange">
          <ImageIcon className="size-7" aria-hidden="true" />
        </div>
        <figcaption>
          <p className="font-ui text-xs font-semibold uppercase tracking-widest text-brand-orange">
            {section.imagePlaceholder.label}
          </p>
          {section.imagePlaceholder.description && (
            <p className="mt-2 font-body text-sm text-muted-foreground md:text-base">
              {section.imagePlaceholder.description}
            </p>
          )}
        </figcaption>
      </figure>
    )
  }

  return null
}

export function OQueEPage() {
  const { title, subtitle, sections } = oQueEContent

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

      {sections.map((section, sectionIndex) => {
        const hasVisual = Boolean(section.image ?? section.imagePlaceholder)
        const imageFirst = section.id === 'historico'

        return (
          <section
            key={section.id}
            className={cn(
              'section-padding',
              sectionIndex % 2 === 0 ? 'bg-background' : 'bg-muted',
            )}
            aria-labelledby={section.title ? `${section.id}-title` : undefined}
          >
            <div
              className={cn(
                'container-app mx-auto',
                hasVisual ? 'max-w-5xl' : 'max-w-3xl',
              )}
            >
              <ScrollReveal delay={sectionIndex * 0.05}>
                {section.title && (
                  <h2
                    id={`${section.id}-title`}
                    className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl"
                  >
                    {section.title}
                  </h2>
                )}

                <div
                  className={cn(
                    hasVisual &&
                      'mt-8 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10',
                    !hasVisual && section.title && 'mt-8',
                  )}
                >
                  <div
                    className={cn(
                      'space-y-6',
                      hasVisual && imageFirst && 'lg:order-2',
                    )}
                  >
                    {section.paragraphs.map((paragraph, index) =>
                      renderParagraph(paragraph, index),
                    )}
                  </div>

                  {hasVisual && (
                    <div className={cn(imageFirst && 'lg:order-1')}>
                      <SectionImage section={section} />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </section>
        )
      })}

      <section className="section-padding bg-background">
        <div className="container-app mx-auto max-w-3xl border-t border-border pt-8">
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
