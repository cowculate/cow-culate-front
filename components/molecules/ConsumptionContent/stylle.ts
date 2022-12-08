import { styled } from '@mui/material'

export const Wrapper = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#404040',
  width: '100%',
  padding: '2rem 5rem',
  '@media (max-width: 700px)': {
    padding: '0.5rem',
  },
})

export const Title = styled('div')({
  //fontFamily: 'IBM Plex Mono',
  display: 'flex',
  fontSize: '3rem',
  fontWeight: 600,
  letterSpacing: '0em',
  alignItems: 'center',
  color: '#FFFFFF',
  textAlign: 'left',
})

export const Text = styled('text')({
  //fontFamily: 'IBM Plex Mono',
  fontSize: '1rem',
  fontWeight: 400,
  letterSpacing: '0em',
  color: '#FFFFFF',
  textAlign: 'left',
})

export const ReturnButton = styled('button')({
  position: 'relative',
  margin: '0.25rem 1.25rem 0.25rem 0.25rem',

  left: '5px',
  border: 'transparent',
  background: 'transparent',
  cursor: 'pointer',
  '@media (max-width: 700px)': {
    position: 'relative',
    left: '-5px',
  },
})

export const SharePageWrapper = styled('div')({	
  marginLeft: 'auto',
  paddingLeft: '10px',
})
