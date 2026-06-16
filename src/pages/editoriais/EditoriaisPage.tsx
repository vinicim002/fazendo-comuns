import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { EditorialCard } from '@/features/editoriais/components/EditorialCard'
import {
  editoriais,
  editoriaisHubIntro,
} from '@/features/editoriais/data/editoriaisContent'

export function EditoriaisPage() {
  return (
    <>
      <PageHero
        title={editoriaisHubIntro.title}
        subtitle={editoriaisHubIntro.subtitle}
        breadcrumb={[{ label: 'Início', href: '/' }, { label: 'Editoriais' }]}
      />

      <section className="section-padding bg-background" aria-label="Lista de editoriais">
        <div className="container-app">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            {editoriais.map((editorial, index) => (
              <ScrollReveal key={editorial.id} delay={index * 0.05}>
                <EditorialCard editorial={editorial} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
