import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import Footer from '../../../components/atoms/Footer'

describe('Footer', () => {
  it('Renders correctly', () => {
    act(() => {
      render(<Footer />)
    })

    expect(screen).toBeTruthy()
  })
})
