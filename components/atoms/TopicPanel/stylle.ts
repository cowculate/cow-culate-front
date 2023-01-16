import { styled } from '@mui/material'

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#404040',
  width: '100%',
  height: '55vh',
  padding: '3rem',
  overflow: 'hidden',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
})

export const Title = styled('div')({
  fontFamily: 'IBM Plex Mono',
  fontSize: '6rem',
  fontWeight: 700,
  letterSpacing: '0em',
  color: '#FFFFFF',
  textAlign: 'left',
  zIndex: 2,

  '@media (max-width: 1400px)': {
    fontSize: '4rem',
  },
  '@media (max-width: 950px)': {
    fontSize: '3rem',
  },
  '@media (max-width: 720px)': {
    fontSize: '2rem',
  },
  '@media (max-width: 500px)': {
    fontSize: '1.2rem',
  },
})

export const TitleHighlight = styled(Title)({
  letterSpacing: '0.7em',
  textTransform: 'uppercase',
  zIndex: 2,
})

export const BackgroundDiv = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 0,
})

export const BackgroundImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  zIndex: 0,
})
