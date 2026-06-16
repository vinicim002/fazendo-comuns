import { PageHero } from '@/components/layout/PageHero'
import { SeoHead } from '@/components/shared/SeoHead'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { LivroCard } from '@/features/livros/components/LivroCard'
import { livros } from '@/features/livros/data/livrosContent'
import { livrosHubIntro } from '@/features/livros/data/livrosHubContent'

export function LivrosPage() {
  return (
    <>
      <SeoHead
        title={`${livrosHubIntro.seo.title} | Fazendo Comuns`}
        description={livrosHubIntro.seo.description}
        canonicalPath="/livros"
        ogType="website"
      />

      <PageHero
        title={livrosHubIntro.title}
        subtitle={livrosHubIntro.subtitle}
        breadcrumb={[
          { label: 'Início', href: '/' },
          { label: livrosHubIntro.title },
        ]}
      />

      <section className="section-padding bg-background" aria-label="Lista de livros e publicações">
        <div className="container-app">
          <div className="mx-auto flex max-w-4xl flex-col gap-8 md:gap-10">
            {livros.map((livro, index) => (
              <ScrollReveal key={livro.slug} delay={index * 0.05}>
                <LivroCard livro={livro} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
