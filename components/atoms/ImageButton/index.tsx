import { ImageButton } from './stylle'
interface ImageButtonInterface {
  image: image
  onClick: () => void
}

interface image {
  url: string
  title: string
}

const ImageButtonComponent: React.FC<ImageButtonInterface> = ({
  image,
  onClick,
}) => {
  return (
    <ImageButton
      focusRipple
      key={image.title}
      style={{ backgroundImage: `url(${image.url})` }}
      onClick={onClick}
    />
  )
}

export default ImageButtonComponent
