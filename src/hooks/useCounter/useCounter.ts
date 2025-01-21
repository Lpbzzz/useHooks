import { useState, useCallback } from 'react'

export interface UseCounterOptions {
  initialValue?: number
  step?: number
}

export function useCounter({ initialValue = 0, step = 1 }: UseCounterOptions = {}) {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => {
    setCount((prev: number) => prev + step)
  }, [step])

  const decrement = useCallback(() => {
    setCount((prev: number) => prev - step)
  }, [step])

  const reset = useCallback(() => {
    setCount(initialValue)
  }, [initialValue])

  return {
    count,
    increment,
    decrement,
    reset
  }
} 