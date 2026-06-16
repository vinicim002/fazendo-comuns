import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { prefersReducedMotion } from '@/lib/prefersReducedMotion'

let activeLenis: Lenis | null = null

export function getLenis() {
  return activeLenis
}

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis
    activeLenis = lenis
    document.documentElement.classList.add('lenis', 'lenis-smooth')

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
      if (activeLenis === lenis) {
        activeLenis = null
      }
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
    }
  }, [])

  return lenisRef
}
