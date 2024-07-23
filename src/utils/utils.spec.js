import { describe, expect, it } from 'vitest'
import { dateFormat, timeFormat } from './'

describe('dateFormat', () => {
  it('formats date correctly', () => {
    const formattedDate = dateFormat('2023-07-15')
    expect(formattedDate).toBe('15 Jul 2023')
  })
})

describe('timeFormat', () => {
  it('formats time correctly', () => {
    const formattedTime1 = timeFormat(120)
    expect(formattedTime1).toBe('2h 0m')

    const formattedTime2 = timeFormat(45)
    expect(formattedTime2).toBe('45m')
  })
})
