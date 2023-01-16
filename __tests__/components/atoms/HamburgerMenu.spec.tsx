import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import HamburgerMenu from '../../../components/atoms/HamburgerMenu'

describe('HamburgerMenu', () => {
  it('Renders correctly active', () => {
    act(() => {
      render(<HamburgerMenu active={true} onClick={jest.fn} />)
    })

    expect(screen).toBeTruthy()
  })
  it('Renders correctly inactive', () => {
    act(() => {
      render(<HamburgerMenu active={false} onClick={jest.fn} />)
    })

    expect(screen).toBeTruthy()
  })
})
