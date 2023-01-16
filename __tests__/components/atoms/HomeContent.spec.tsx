import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import HomeContent from '../../../components/atoms/HomeContent'

describe('HomeContent', () => {
  it('Renders correctly', () => {
    act(() => {
      render(<HomeContent />)
    })

    expect(screen).toBeTruthy()
  })
})
