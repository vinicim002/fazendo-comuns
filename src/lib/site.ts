const DEFAULT_SITE_URL = 'https://www.fazendocomuns.com.br'

export const SITE_NAME = 'Fazendo Comuns'

export function getSiteUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined
  if (fromEnv) return fromEnv.replace(/\/$/, '')

  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  return DEFAULT_SITE_URL
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${getSiteUrl()}${normalized}`
}
