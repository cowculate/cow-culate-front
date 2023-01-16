import { styled } from '@mui/system'

export const StyledHeader = styled('header')({
  backgroundColor: 'black',
  padding: '1rem 2rem',
  display: 'grid',
  gridTemplateColumns: '1fr 161px 1.2fr',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid white',
  '@media(max-width: 730px)': {
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
})

export const ProfileContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '@media(max-width: 1000px)': {
    gridRowStart: '1',
    gridColumnStart: '3',
  },
  '@media(max-width: 730px)': {
    gridRowStart: '1',
    gridColumnStart: '2',
  },
})

export const ProfileDescription = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'IBM Plex Mono, monospace',
  color: 'white',
  fontSize: '0.8rem',
  marginRight: '1rem',
})

export const ProfilePictureContainer = styled('div')({
  width: '35px',
  height: '35px',
  cursor: 'pointer',
})
