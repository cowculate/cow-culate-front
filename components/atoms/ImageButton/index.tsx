import { ImageButton } from './stylle'

interface ImageButtonInterface {
  image: image
}

interface image {
  url: string
  title: string
}

const ImageButtonComponent: React.FC<ImageButtonInterface> = ({ image }) => {
  return (
    <ImageButton
      focusRipple
      key={image.title}
      style={{ backgroundImage: `url(${image.url})` }}
    />
  )
}

export default ImageButtonComponent
