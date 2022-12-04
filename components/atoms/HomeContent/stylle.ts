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
  padding: '3em 1em 2em 3em',
  '@media (max-width: 900px)': {
    width: '100%',
    minWidth: '100%',
  },
  '@media (max-height: 600px)': {
    fontSize: '0.8rem',
  },
  '@media (max-height: 550px)': {
    fontSize: '0.7rem',
  },
})

export const Title = styled('div')({
  fontFamily: 'IBM Plex Mono',

  fontSize: '3em',
  fontWeight: 700,
  letterSpacing: '0.1em',
  color: '#FFFFFF',
  textAlign: 'left',
})

export const SubTitle = styled(Title)({
  fontSize: '2.5em',
  margin: '1em 0',
})

export const Info = styled(Title)({
  fontSize: '1em',
})
