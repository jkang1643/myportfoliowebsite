"use client"

import { useEffect, useRef, useState, useCallback } from 'react'

// Hook for throttling scroll events with requestAnimationFrame
export function useThrottledScroll(callback: () => void, deps: any[] = []) {
  const rafRef = useRef<number>()
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const throttledCallback = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      callbackRef.current()
    })
  }

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, deps)

  return throttledCallback
}

// Hook for debouncing function calls
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout>()

  return ((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }) as T
}

// Hook for intersection observer with performance optimizations
export function useIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) {
  const observerRef = useRef<IntersectionObserver>()

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [callback, options])

  return observerRef.current
}

// Hook for smooth scrolling with performance optimizations
export function useSmoothScroll() {
  const scrollToElement = useCallback((element: HTMLElement, behavior: ScrollBehavior = 'smooth') => {
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior,
        block: 'start',
        inline: 'nearest'
      })
    })
  }, [])

  const scrollToTop = useCallback((behavior: ScrollBehavior = 'smooth') => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior
      })
    })
  }, [])

  return { scrollToElement, scrollToTop }
}

// Hook for managing animation states with performance optimizations
export function useAnimationState(initialState: boolean = false) {
  const [isAnimating, setIsAnimating] = useState(initialState)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const startAnimation = useCallback((duration: number = 300) => {
    setIsAnimating(true)
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
    }, duration)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return { isAnimating, startAnimation, stopAnimation }
}
