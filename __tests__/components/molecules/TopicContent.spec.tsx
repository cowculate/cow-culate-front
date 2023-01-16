import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import Router from 'next/router'
import TopicContent from '../../../components/molecules/TopicContent'

jest.mock('next/router', () => ({ push: jest.fn() }))

const topicsMock = [
  {
    title: 'Cálculo',
    content: [
      {
        title: 'integral_de_riemann',
        formatTitle: 'Integral de Riemann',
        titleURL: 'calculo',
        image:
          'https://firebasestorage.googleapis.com/v0/b/cowculate-unifesp.appspot.com/o/thumbnail_images%2Fmatematica%2Fintegral_riemann.png?alt=media&token=13ac2610-7735-434a-8dc9-bdd76dfe8187',
        page: 'matematica',
      },
    ],
  },
]

describe('TopicContent', () => {
  it('Renders correctly', () => {
    act(() => {
      render(<TopicContent topics={topicsMock} />)
    })

    expect(screen).toBeTruthy()
  })
  it('Click topic', async () => {
    act(() => {
      render(<TopicContent topics={topicsMock} />)
    })
    const button = await screen.findByRole('button')
    fireEvent.click(button)
    expect(Router.push).toHaveBeenCalledWith(
      '/conteudo/matematica$calculo$integral_de_riemann'
    )
  })
})
