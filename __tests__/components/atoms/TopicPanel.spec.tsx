import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import TopicPanel from '../../../components/atoms/TopicPanel'

describe('Topic Panel', () => {
  it('Renders with correct background', () => {
    act(() => {
      render(<TopicPanel title={'Física'} image={'fisic'} />)
    })
    const adComponent = screen.getByTestId('Panel')

    expect(adComponent).toHaveStyle('background-image: url(/images/fisic.png)')
  })
})
