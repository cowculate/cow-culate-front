import { styled } from '@mui/material'

export const Wrapper = styled('div')({
    display: 'flex',
    gap: '1rem',
    marginLeft: 'auto',
    padding: '0',

    "@media(max-width: 660px)": {
        display: 'none',
    }
})

export const ShareButton = styled('div')({ 
  border: 'transparent',
  background: 'transparent',
  cursor: 'pointer',
})