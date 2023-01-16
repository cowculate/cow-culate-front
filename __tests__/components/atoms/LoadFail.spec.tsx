import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import LoadFail from '../../../components/atoms/LoadFail'

describe('LoadFail', () => {
  it('Renders correctly', () => {
    act(() => {
      render(<LoadFail />)
    })

    expect(screen).toBeTruthy()
  })
})
