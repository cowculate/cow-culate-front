import { styled } from '@mui/material'

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundImage: 'url(/images/gradient.png)',
  backgroundSize: 'cover',
  backgroundColor: '#404040',
  width: '50%',
  height: '100vh',
  padding: '3rem 1rem 2rem 3rem',
})

export const Title = styled('div')({
  //fontFamily: 'IBM Plex Mono',

  fontSize: '5rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  color: '#FFFFFF',
  textAlign: 'left',
})

export const SubTitle = styled(Title)({
  fontSize: '3.5rem',
  margin: '1rem 0',
})

export const Info = styled(Title)({
  fontSize: '1.5rem',
})
