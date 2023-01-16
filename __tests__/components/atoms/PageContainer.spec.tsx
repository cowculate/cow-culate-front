import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import PageContainer from '../../../components/atoms/PageContainer'

describe('PageContainer', () => {
  it('Renders correctly', () => {
    act(() => {
      render(
        <PageContainer>
          <div>test</div>
        </PageContainer>
      )
    })

    expect(screen).toBeTruthy()
  })
})
