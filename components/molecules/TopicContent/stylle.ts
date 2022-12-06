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
  fontSize: '1.15rem',
  // fontFamily: 'Quicksand',
  fontWeight: 'bold',
  letterSpacing: '0em',
  color: '#FFFFFF',
  textAlign: 'left',
  marginLeft: 20,
})

export const ButtonsWrapper = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  padding: '10px 0',
})
