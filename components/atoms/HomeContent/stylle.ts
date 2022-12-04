import { styled } from '@mui/material'

export const Wrapper = styled('div')({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundImage: 'url(/images/gradient.png)',
  backgroundSize: 'cover',
  backgroundColor: '#404040',
  width: '50%',
  minWidth: '632px',
  padding: '3rem 1rem 2rem 3rem',
  '@media (max-width: 900px)': {
    width: '100%',
    minWidth: '100%',
  },
})

export const Title = styled('div')({
  fontFamily: 'IBM Plex Mono',

  fontSize: '5rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  color: '#FFFFFF',
  textAlign: 'left',
  '@media (max-width: 650px)': {
    fontSize: '4rem',
  },
})

export const SubTitle = styled(Title)({
  fontSize: '3.5rem',
  margin: '1rem 0',
  '@media (max-width: 650px)': {
    fontSize: '2.5rem',
  },
})

export const Info = styled(Title)({
  fontSize: '1.5rem',
  '@media (max-width: 650px)': {
    fontSize: '1rem',
  },
})
