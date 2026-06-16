import { Suspense, type ReactNode } from 'react'
import { PageLoader } from '@/components/shared/PageLoader'

export function Page({ children }: { children: ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>
}
