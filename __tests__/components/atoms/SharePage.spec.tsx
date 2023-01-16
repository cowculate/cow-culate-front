import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import SharePage from '../../../components/atoms/SharePage'

describe('SharePage', () => {
  beforeEach(() => {
    act(() => {
      render(<SharePage />)
    })
  })
  it('Renders correctly', () => {
    expect(screen).toBeTruthy()
  })
  it('Clicks Ig', async () => {
    const button = await screen.findByAltText('ig')
    fireEvent.click(button)
  })
  it('Clicks Fb', async () => {
    const button = await screen.findByAltText('fb')
    fireEvent.click(button)
  })
  it('Clicks Wpp', async () => {
    const button = await screen.findByAltText('wpp')
    fireEvent.click(button)
  })
  it('Clicks Tt', async () => {
    const button = await screen.findByAltText('tt')
    fireEvent.click(button)
  })
})
