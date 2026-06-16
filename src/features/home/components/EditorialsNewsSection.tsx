import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { featuredEditorial, newsItems } from '@/features/home/data/homeContent'
import quebraCabecaImg from '@/assets/imgs/quebra_Cabeça.png'

export function EditorialsNewsSection() {
  return (
    <section
      className="bg-background pt-[var(--spacing-section)] pb-28 sm:pb-36 md:pb-44"
      aria-labelledby="editorials-news-title"
    >
      <div className="container-app">
        <h2 id="editorials-news-title" className="sr-only">
          Editoriais e Notícias
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          {/* Editoriais */}
          <ScrollReveal direction="left">
            <article className="flex h-full flex-col">
              <div className="mb-6 flex justify-center lg:justify-start">
                <img
                  src={quebraCabecaImg}
                  alt=""
                  className="h-32 w-auto object-contain md:h-40"
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-heading text-3xl font-bold text-brand-red md:text-4xl">
                Editoriais
              </h3>

              <div className="mt-6 flex-1 rounded-2xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
                <h4 className="font-heading text-xl font-bold leading-snug md:text-2xl">
                  {featuredEditorial.title}
                </h4>
                <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                  {featuredEditorial.excerpt}
                </p>
                <Link
                  to={`/editoriais/${featuredEditorial.slug}`}
                  className="mt-5 inline-flex items-center gap-1 font-ui text-sm font-semibold text-brand-red transition-colors hover:underline"
                >
                  Leia mais
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>

              <Button className="mt-6 w-full sm:w-auto" asChild>
                <Link to="/editoriais">
                  Ver todos os editoriais
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </article>
          </ScrollReveal>

          {/* Notícias */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <h3 className="font-heading text-3xl font-bold text-brand-orange md:text-4xl">
                Notícias
              </h3>

              <ul className="mt-6 space-y-4">
                {newsItems.map((news, index) => (
                  <li key={news.id}>
                    <ScrollReveal delay={index * 0.06}>
                      <article className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-medium">
                        <div className="flex flex-col sm:flex-row sm:items-stretch">
                          <div className="relative h-36 shrink-0 overflow-hidden sm:h-auto sm:w-36 md:w-44">
                            <img
                              src={news.image}
                              alt={news.imageAlt}
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>

                          <div className="flex flex-1 flex-col p-5">
                            <time
                              dateTime={news.date}
                              className="font-ui text-xs uppercase tracking-wider text-muted-foreground"
                            >
                              {format(parseISO(news.date), "d 'de' MMMM 'de' yyyy", {
                                locale: ptBR,
                              })}
                            </time>
                            <h4 className="mt-2 font-heading text-base font-semibold leading-snug transition-colors group-hover:text-brand-red md:text-lg">
                              {news.title}
                            </h4>
                            <p className="mt-2 line-clamp-2 flex-1 font-body text-sm text-muted-foreground">
                              {news.excerpt}
                            </p>
                            <Link
                              to={`/noticias/${news.slug}`}
                              className="mt-3 inline-flex items-center gap-1 font-ui text-sm font-medium text-brand-red hover:underline"
                            >
                              Ler mais
                              <ArrowRight className="size-3.5" aria-hidden="true" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </ScrollReveal>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="mt-6 w-full sm:w-auto" asChild>
                <Link to="/noticias">
                  Ver todas as notícias
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
