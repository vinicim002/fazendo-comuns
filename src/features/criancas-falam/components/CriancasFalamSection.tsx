import { ScrollReveal } from '@/components/shared/ScrollReveal'
import {
  ComicThoughtBubble,
  type BubbleTail,
} from '@/features/criancas-falam/components/ComicThoughtBubble'
import type { CriancasFalamSection as Section } from '@/features/criancas-falam/data/criancasFalamContent'
import { cn } from '@/lib/utils'

interface CriancasFalamSectionProps {
  section: Section
  index: number
}

export function CriancasFalamSection({ section, index }: CriancasFalamSectionProps) {
  return (
    <ScrollReveal delay={index * 0.06}>
      <article>
        <header className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold leading-snug text-foreground md:text-3xl">
            {section.title}
          </h2>
          <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            {section.description}
          </p>
        </header>

        <div
          className="relative mt-8 overflow-hidden rounded-3xl bg-neutral-900 px-5 py-10 sm:px-8 sm:py-12 md:mt-10 lg:px-12 lg:py-14"
          aria-label={`Depoimentos: ${section.title}`}
        >
          <div
            className={cn(
              'relative mx-auto flex flex-col items-center gap-10',
              section.layout === 'scattered' &&
                'md:grid md:min-h-[380px] md:max-w-5xl md:grid-cols-2 md:items-center md:gap-x-10 md:gap-y-8 lg:min-h-[420px]',
              section.layout === 'diagonal' &&
                'md:max-w-4xl md:flex-row md:flex-wrap md:items-stretch md:justify-between md:gap-8',
            )}
          >
            {section.quotes.map((item, quoteIndex) => (
              <ComicThoughtBubble
                key={`${section.id}-${quoteIndex}`}
                quote={item.text}
                tail={item.tail as BubbleTail}
                size={item.size ?? (section.layout === 'diagonal' && quoteIndex === 0 ? 'lg' : 'md')}
                className={cn(
                  'shrink-0',
                  item.positionClass,
                  section.layout === 'scattered' && quoteIndex % 2 === 1 && 'md:justify-self-end',
                  section.layout === 'diagonal' &&
                    quoteIndex === 0 &&
                    'md:max-w-lg md:self-start',
                  section.layout === 'diagonal' &&
                    quoteIndex === 1 &&
                    'md:ml-auto md:max-w-sm md:self-end md:mt-16',
                )}
              />
            ))}
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}
