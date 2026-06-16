# Fazendo Comuns — Frontend

Redesign da plataforma acadêmica [Fazendo Comuns](https://www.fazendocomuns.com.br/), projeto de pesquisa sobre recreio nas escolas públicas (UFRJ).

## Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS 4 + Shadcn/UI + Radix UI
- Framer Motion + Lenis
- React Router DOM + TanStack Query + Zustand

## Desenvolvimento

```bash
cd frontend
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Variáveis de ambiente

Copie `.env.example` para `.env`:

```bash
cp .env.example .env
```

## Estrutura

```
src/
├── app/           → Providers e App root
├── routes/        → React Router
├── pages/         → Páginas
├── features/      → Features por domínio
├── components/    → ui, layout, shared
├── hooks/         → Custom hooks
├── store/         → Zustand
├── animations/    → Framer Motion variants
└── styles/        → Fontes e tokens
```

## Documentação de design

Ver [docs/CONCEITO_VISUAL.md](../docs/CONCEITO_VISUAL.md) para conceito visual, design system, wireframes e justificativas.

## Fontes customizadas

Adicione os arquivos `.woff2` em `src/assets/fonts/`:

- a-little-sunshine.woff2
- sunday-donuts.woff2
- geosans-light.woff2
- magic-bright-serif.woff2
- asenine.woff2
- starrrk-delivery.woff2

Até lá, fallbacks via Google Fonts (Fredoka, DM Sans, Source Serif 4) são usados automaticamente.
