import { styled, TextField } from '@mui/material'

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#404040',
  height: '100%',
  justifyContent: 'space-between',
  gap: '1em',
  padding: '1.5em',
})

export const Title = styled('div')({
  fontFamily: 'IBM Plex Mono',

  fontSize: '3em',
  fontWeight: 700,
  letterSpacing: '0.1em',
  color: '#FFFFFF',
  textAlign: 'left',
})

export const LoginTextField = styled(TextField)({
  input: {
    color: 'white',
  },
  '& .MuiFormLabel-root': {
    color: 'white',
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: 'white',
  },
  '& .MuiInputBase-root.MuiFilledInput-root:after': {
    borderBottom: '2px solid #ffffff',
  },
})
