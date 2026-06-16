import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import quebraCabecaImg from '@/assets/imgs/quebra_Cabeça.png'

const quickLinks = [
  { label: 'O projeto', href: '/projeto' },
  { label: 'Multimídia', href: '/multimidia' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Editoriais', href: '/editoriais' },
  { label: 'Contato', href: '/contato' },
]

export function NotFoundPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-gradient-hero paper-texture">
      <div className="container-app flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center py-16 text-center md:py-24">
        <motion.img
          src={quebraCabecaImg}
          alt=""
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="mb-8 h-20 w-auto object-contain md:h-24"
        />

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.05 }}
          className="font-ui text-sm font-semibold uppercase tracking-widest text-brand-red"
        >
          Erro 404
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Página não encontrada
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.15 }}
          className="mt-5 max-w-lg font-body text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          O endereço que você acessou não existe ou foi movido. Que tal voltar ao
          início ou explorar outra seção do Fazendo Comuns?
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" asChild>
            <Link to="/">
              <Home className="size-4" aria-hidden="true" />
              Ir para o início
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/projeto">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Conhecer o projeto
            </Link>
          </Button>
        </motion.div>

        <motion.nav
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.25 }}
          aria-label="Links úteis"
          className="mt-12 w-full max-w-xl"
        >
          <p className="flex items-center justify-center gap-2 font-ui text-sm font-semibold text-foreground">
            <Search className="size-4 text-brand-orange" aria-hidden="true" />
            Talvez você esteja procurando
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="inline-flex rounded-full border border-border/60 bg-card px-4 py-2 font-ui text-sm font-medium text-foreground/80 shadow-soft transition-colors hover:border-brand-amber hover:bg-brand-amber/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </section>
  )
}
