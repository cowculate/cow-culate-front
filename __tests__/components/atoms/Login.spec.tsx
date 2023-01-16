import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import Login from '../../../components/atoms/Login'

describe('Login', () => {
  it('Renders correctly', () => {
    act(() => {
      render(<Login />)
    })

    expect(screen).toBeTruthy()
  })
})
