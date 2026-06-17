import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getEditorialBySlug } from '@/features/editoriais/data/editoriaisContent'
import { PlaceholderPage } from '@/pages/PlaceholderPage'

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
              <p
                key={index}
                className="font-body text-base leading-relaxed text-foreground md:text-lg md:leading-loose"
              >
                {paragraph}
              </p>
            ))}
          </div>

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
