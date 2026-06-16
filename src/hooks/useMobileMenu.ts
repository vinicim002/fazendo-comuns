import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [locked])
}

export function useCloseOnRouteChange(onClose: () => void) {
  const { pathname } = useLocation()

  useEffect(() => {
    onClose()
  }, [pathname, onClose])
}
