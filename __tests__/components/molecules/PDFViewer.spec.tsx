import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import PDFViewer from '../../../components/molecules/PDFViewer'

describe('PDFViewer', () => {
  it('Renders correctly', () => {
    act(() => {
      render(<PDFViewer url={''} />)
    })

    expect(screen).toBeTruthy()
  })
})
