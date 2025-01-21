import { renderHook } from '@testing-library/react'
import {  act } from 'react'
import { describe, it, expect } from 'vitest'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('应该使用默认值初始化', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
  })

  it('应该使用提供的初始值', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }))
    expect(result.current.count).toBe(10)
  })

  it('应该正确增加计数', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0, step: 2 }))
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(2)
  })

  it('应该正确减少计数', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10, step: 5 }))
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(5)
  })

  it('应该正确重置计数', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }))
    act(() => {
      result.current.increment()
      result.current.reset()
    })
    expect(result.current.count).toBe(10)
  })
}) 