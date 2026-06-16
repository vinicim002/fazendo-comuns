import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { featureCards } from '@/features/home/data/homeContent'
import { cn } from '@/lib/utils'

const bubbleTextColors = {
  red: 'bg-brand-red text-white',
  yellow: 'bg-brand-yellow text-neutral-900',
  orange: 'bg-brand-orange text-white',
}

export function FeatureCardsSection() {
  return (
    <section className="section-padding bg-background" aria-labelledby="features-title">
      <div className="container-app">
        <ScrollReveal>
          <h2 id="features-title" className="sr-only">
            Destaques
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {featureCards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col items-center px-6 py-8 text-center">
                  <div
                    className={cn(
                      'inline-flex max-w-full items-center justify-center rounded-full px-6 py-3 shadow-soft',
                      bubbleTextColors[card.color],
                    )}
                  >
                    <h3 className="font-heading text-base font-bold leading-snug md:text-lg">
                      {card.title}
                    </h3>
                  </div>

                  <Button
                    variant="outline"
                    className="mt-6 transition-all group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white"
                    asChild
                  >
                    <Link to={card.href}>
                      Leia mais
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
