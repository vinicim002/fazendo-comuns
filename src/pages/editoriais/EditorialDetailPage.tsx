import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getEditorialBySlug } from '@/features/editoriais/data/editoriaisContent'
import { cn } from '@/lib/utils'
import { PlaceholderPage } from '@/pages/PlaceholderPage'

const paragraphClass =
  'font-body text-base leading-relaxed text-justify text-foreground md:text-lg md:leading-loose'

export function EditorialDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const editorial = slug ? getEditorialBySlug(slug) : undefined

  if (!editorial) {
    return (
      <PlaceholderPage
        title="Editorial não encontrado"
        description="O editorial solicitado não existe ou foi removido."
      />
    )
  }

  return (
    <>
      <PageHero
        title={editorial.title}
        subtitle={editorial.subtitle}
        breadcrumb={[
          { label: 'Início', href: '/' },
          { label: 'Editoriais', href: '/editoriais' },
          { label: editorial.title },
        ]}
      />

      <article className="section-padding bg-background">
        <div className="container-app mx-auto max-w-3xl">
          <Badge variant="red" className="mb-6 font-ui uppercase tracking-wider">
            Editorial {editorial.number}
          </Badge>

          <div className="space-y-6">
            {editorial.content.map((paragraph, index) => (
              <p key={index} className={paragraphClass}>
                {paragraph}
              </p>
            ))}
          </div>

          {editorial.closingDate ? (
            <p className={cn('mt-10', paragraphClass)}>{editorial.closingDate}</p>
          ) : null}

          {editorial.signature && editorial.signature.length > 0 ? (
            <div className="mt-6 space-y-1">
              {editorial.signature.map((line, index) => (
                <p
                  key={index}
                  className={cn(
                    paragraphClass,
                    index === 0 && 'font-semibold',
                  )}
                >
                  {line}
                </p>
              ))}
            </div>
          ) : null}

          {editorial.references && editorial.references.length > 0 ? (
            <div className="mt-12">
              {editorial.referencesTitle !== false ? (
                <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
                  {editorial.referencesTitle ?? 'Referências'}
                </h2>
              ) : null}
              <ol
                className={cn(
                  'list-none space-y-4 border-l-2 border-brand-amber/40 pl-6 md:pl-8',
                  editorial.referencesTitle !== false ? 'mt-6' : 'mt-0',
                )}
              >
                {editorial.references.map((entry, index) => (
                  <li
                    key={index}
                    className="relative font-body text-sm leading-relaxed text-foreground md:text-base md:leading-loose"
                  >
                    <span
                      className="absolute -left-6 top-0.5 font-ui text-xs font-semibold text-brand-red md:-left-8"
                      aria-hidden="true"
                    >
                      {index + 1}.
                    </span>
                    {entry}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          <div className="mt-12 border-t border-border pt-8">
            <Button variant="outline" asChild>
              <Link to="/editoriais">
                <ArrowLeft className="size-4" aria-hidden="true" />
                Voltar para Editoriais
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  )
}
