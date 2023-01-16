import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import ConsumptionContent from '../../../components/molecules/ConsumptionContent'
import Router from 'next/router'

jest.mock('next/router', () => ({ push: jest.fn() }))

describe('ConsumptionContent', () => {
  it('Renders correctly', () => {
    act(() => {
      render(
        <ConsumptionContent
          title={'Teste'}
          video={'Teste'}
          text={'Teste'}
          topic={'Teste'}
        />
      )
    })

    expect(screen).toBeTruthy()
  })

  it('Clicks return', async () => {
    act(() => {
      render(
        <ConsumptionContent
          title={'Teste'}
          video={'Teste'}
          text={'Teste'}
          topic={'Teste'}
        />
      )
    })
    const button = await screen.findByRole('button')
    fireEvent.click(button)
    expect(Router.push).toHaveBeenCalledWith('/topicos/Teste')
  })
})
