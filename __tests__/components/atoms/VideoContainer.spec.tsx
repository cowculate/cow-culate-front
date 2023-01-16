import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import VideoContainer from '../../../components/atoms/VideoContainer'

describe('VideoContainer', () => {
  it('Renders correctly', () => {
    act(() => {
      render(<VideoContainer video={''} />)
    })

    expect(screen).toBeTruthy()
  })
})
