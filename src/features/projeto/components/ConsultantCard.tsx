import { ExternalLink } from 'lucide-react'
import type { Consultant } from '@/features/projeto/data/consultoresContent'

interface ConsultantCardProps {
  consultant: Consultant
}

export function ConsultantCard({ consultant }: ConsultantCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-medium">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={consultant.image}
          alt={consultant.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-heading text-lg font-bold leading-snug text-foreground">
          {consultant.name}
        </h3>

        <ul className="mt-3 space-y-2">
          {consultant.roles.map((role) => (
            <li
              key={role}
              className="flex gap-2 font-body text-sm leading-relaxed text-muted-foreground"
            >
              <span
                className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-orange"
                aria-hidden="true"
              />
              {role}
            </li>
          ))}
        </ul>

        {consultant.links && consultant.links.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
            {consultant.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted px-3 py-1.5 font-ui text-xs font-semibold text-foreground transition-colors hover:border-brand-red hover:text-brand-red"
                >
                  {link.label}
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
