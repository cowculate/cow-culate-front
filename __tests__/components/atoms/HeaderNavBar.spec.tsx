import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import HeaderNavBar from '../../../components/atoms/HeaderNavBar'

describe('HeaderNavBar', () => {
  it('Renders correctly Desktop', () => {
    act(() => {
      render(<HeaderNavBar collapsed={false} links={[]} mobile={false} />)
    })

    expect(screen).toBeTruthy()
  })
  it('Renders correctly Mobile', () => {
    act(() => {
      render(<HeaderNavBar collapsed={false} links={[]} mobile={true} />)
    })

    expect(screen).toBeTruthy()
  })
})
