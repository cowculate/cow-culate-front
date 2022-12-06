import { useState } from 'react'
import { ImageButton, ImageOverlay, Title } from './stylle'
import Fade from '@mui/material/Fade';
interface ImageButtonInterface {
  image: image
  formatTitle: string
  onClick: () => void
}

interface image {
  url: string
  title: string
}

const ImageButtonComponent: React.FC<ImageButtonInterface> = ({
  image,
  formatTitle,
  onClick,
}) => {

  const [showTitle, setShowTitle] = useState(false)

  const onMouseOver = () => {
    setShowTitle(true)
  }

  const onMouseOut = () => {
    setShowTitle(false)
  }


  return (
    <>
    <ImageButton sx = {{
      boxShadow: "rgba(255, 255, 255, 0.4) -5px 5px, rgba(255, 255, 255, 0.3) -10px 10px, rgba(255, 255, 255, 0.2) -15px 15px, rgba(255, 255, 255, 0.1) -20px 20px, rgba(255, 255, 255, 0.05) -25px 25px;"
    }}
      focusRipple
      key={image.title}
      style={{ backgroundImage: `url(${image.url})` }}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Fade in = {showTitle}  timeout = {300}>

      <ImageOverlay>
        <Title>{formatTitle}</Title>
      </ImageOverlay>
        
      </Fade>

    </ImageButton>
    </>
  )
}

export default ImageButtonComponent
