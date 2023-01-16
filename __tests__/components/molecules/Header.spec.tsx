import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import Header from '../../../components/molecules/Header'

describe('Header', () => {
  it('Renders Mobile header', () => {
    act(() => {
      render(<Header />)
    })
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))

    expect(screen).toBeTruthy()
  })
  it('Renders Medium header', () => {
    act(() => {
      render(<Header />)
    })
    global.innerWidth = 900
    global.dispatchEvent(new Event('resize'))

    expect(screen).toBeTruthy()
  })
  it('Renders Desktop header', () => {
    act(() => {
      render(<Header />)
    })
    global.innerWidth = 1200
    global.dispatchEvent(new Event('resize'))

    expect(screen).toBeTruthy()
  })
})
