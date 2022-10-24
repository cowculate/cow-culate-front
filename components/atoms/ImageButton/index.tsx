import { ImageBackdrop, ImageButton, ImageSrc } from './stylle'

interface ImageButtonInterface {
  image: image
}

interface image {
  url: string
  title: string
}

const ImageButtonComponent: React.FC<ImageButtonInterface> = ({ image }) => {
  return (
    <ImageButton focusRipple key={image.title}>
      <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
      <ImageBackdrop className="MuiImageBackdrop-root" />
    </ImageButton>
  )
}

export default ImageButtonComponent
