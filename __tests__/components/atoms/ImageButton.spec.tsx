import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import ImageButton from '../../../components/atoms/ImageButton'

const image = {
  url: 'Teste',
  title: 'Teste',
}

describe('ImageButton', () => {
  it('Renders correctly', () => {
    act(() => {
      render(
        <ImageButton image={image} formatTitle={'Teste'} onClick={jest.fn} />
      )
    })

    expect(screen).toBeTruthy()
  })
  it('Shows text on hover', async () => {
    act(() => {
      render(
        <ImageButton image={image} formatTitle={'Teste'} onClick={jest.fn} />
      )
    })

    const button = await screen.findByRole('button')
    fireEvent.mouseEnter(button)
    const text = await screen.findByText('Teste')
    expect(text).toBeTruthy()
    fireEvent.mouseLeave(button)
  })
})
