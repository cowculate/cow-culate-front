import { styled } from '@mui/material'

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#000000',
  width: '100%',
  padding: '3rem',
})

export const Title = styled('div')({
  fontSize: '1.5rem',
  fontFamily: 'IBM Plex Mono',
  fontWeight: 'bold',
  letterSpacing: '2px',
  color: '#FFFFFF',
  textAlign: 'left',
  marginTop: 20,
  marginLeft: '4rem',
  alignSelf: 'start',
  padding: '10px 18px',
  borderRadius: 3,
  textTransform: 'uppercase',
  backgroundColor: '#343434',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '6rem',
    height: 3,
    borderRadius: '0 3px 3px 0',
    backgroundColor: '#333',
    position: 'absolute',
    right: '-6rem',
    top: 'calc(50% - 3px/2)',
  },
  '&::before': {
    content: '""',
    display: 'block',
    width: '3rem',
    height: 3,
    borderRadius: '3px 0 0 3px',
    backgroundColor: '#333',
    position: 'absolute',
    left: '-3rem',
    top: 'calc(50% - 3px/2)',
  },
  "@media(max-width: 730px)": {
    "&::before": {
      display: 'none',
    },
    "&::after": {
      display: 'none',
    },
    margin: '25px auto 0 auto',
  }
})

export const ButtonsWrapper = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  padding: '10px 0',
  "@media(max-width: 500px)": {
    justifyContent: 'center',
  }
})
