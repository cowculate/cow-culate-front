import { ButtonBase, styled } from '@mui/material'

export const ImageButton = styled(ButtonBase)({
  position: 'relative',
  width: 150,
  height: 100,
  borderRadius: 6,
  margin: 10,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
})

export const ImageOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: 6,
  background: 'rgba(0, 0, 0, 0.6)',
})

export const Title = styled('h2')({
  overflowWrap: 'break-word',
  // fontFamily: 'Quicksand',
  color: 'white',
})
