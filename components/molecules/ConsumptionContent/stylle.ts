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
  position: 'absolute',
  margin: '1.5rem 0',

  left: '5px',
  width: 0,
  height: 0,
  borderTop: '10px solid transparent',
  borderBottom: '10px solid transparent',
  borderRight: '20px solid #D9D9D9',
  borderLeft: '20px solid transparent',
  background: 'transparent',
  cursor: 'pointer',
  '@media (max-width: 700px)': {
    position: 'relative',
    left: '-25px',
  },
})
