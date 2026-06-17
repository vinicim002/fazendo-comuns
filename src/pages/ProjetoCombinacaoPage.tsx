import { Link } from 'react-router-dom'
import { ArrowLeft, Download } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Button } from '@/components/ui/button'
import { projetoCombinacaoContent } from '@/features/projeto-combinacao/data/projetoCombinacaoContent'
import { cn } from '@/lib/utils'

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-6">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="font-body text-base leading-relaxed text-foreground md:text-lg md:leading-loose"
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export function ProjetoCombinacaoPage() {
  const {
    title,
    apresentacao,
    books,
    dimensions,
    recreioImage,
    pdf,
    references,
  } = projetoCombinacaoContent

  const { intro, capa, metodologia, livretosPreview } = apresentacao

  return (
    <>
      <PageHero
        title={title}
        breadcrumb={[{ label: 'Início', href: '/' }, { label: title }]}
        align="left"
      />

      <section className="section-padding bg-background" aria-label="Apresentação do projeto">
        <div className="container-app mx-auto max-w-3xl">
          <ScrollReveal>
            <Paragraphs paragraphs={intro} />
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <figure className="mb-10 mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
              <img src={capa.url} alt={capa.alt} className="w-full object-contain" loading="lazy" />
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Paragraphs paragraphs={metodologia} />
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {livretosPreview.map((image) => (
                <figure
                  key={image.url}
                  className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {books.map((book, bookIndex) => (
        <section
          key={book.id}
          className={cn(
            'section-padding',
            bookIndex % 2 === 0 ? 'bg-muted' : 'bg-background',
          )}
          aria-labelledby={`${book.id}-title`}
        >
          <div className="container-app mx-auto max-w-3xl">
            <ScrollReveal delay={bookIndex * 0.04}>
              <h2
                id={`${book.id}-title`}
                className="font-heading text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl"
              >
                {book.title}
              </h2>

              <div className="mt-8 space-y-8">
                <Paragraphs paragraphs={book.paragraphs} />

                <figure className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
                  <img
                    src={book.image.url}
                    alt={book.image.alt}
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </figure>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <section className="section-padding bg-background" aria-label="Dimensões investigadas">
        <div className="container-app mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="font-body text-base leading-relaxed text-foreground md:text-lg md:leading-loose">
              {dimensions.intro}
            </p>

            <ul className="mt-6 space-y-3 border-l-2 border-brand-amber/50 pl-6">
              {dimensions.items.map((item) => (
                <li
                  key={item}
                  className="font-body text-base leading-relaxed text-foreground md:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-body text-base leading-relaxed text-foreground md:text-lg md:leading-loose">
              {dimensions.outro}
            </p>

            <figure className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
              <img
                src={recreioImage.url}
                alt={recreioImage.alt}
                className="w-full object-contain"
                loading="lazy"
              />
            </figure>

            <div className="mt-10 text-center">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90" asChild>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  <Download className="size-4" aria-hidden="true" />
                  {pdf.label}
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-muted" aria-label="Referências bibliográficas">
        <div className="container-app mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
              Referências Bibliográficas
            </h2>

            <ol className="mt-8 space-y-4 border-l-2 border-brand-amber/40 pl-6 md:pl-8">
              {references.map((entry, index) => (
                <li
                  key={index}
                  className="font-body text-sm leading-relaxed text-foreground md:text-base md:leading-loose"
                >
                  {entry}
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
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
