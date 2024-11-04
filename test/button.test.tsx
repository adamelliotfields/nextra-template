import { afterEach, beforeEach, describe, expect, mock, test } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '@/components/ui/button'

const handleClick = mock((_) => undefined)

beforeEach(() => {
  render(<Button onClick={handleClick}>Button</Button>)
})

afterEach(() => {
  cleanup()
  mock.restore()
})

describe('Button', () => {
  test('renders the button', () => {
    // name is the text content of the button
    expect(screen.getByRole('button', { name: 'Button' }).textContent).toBe('Button')
  })

  test('clicks the button', async () => {
    const button = screen.getByRole('button', { name: 'Button' })
    await userEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
