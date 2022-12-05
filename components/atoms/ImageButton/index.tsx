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
    <ImageButton sx = {{
      boxShadow: "rgba(255, 255, 255, 0.4) -5px 5px, rgba(255, 255, 255, 0.3) -10px 10px, rgba(255, 255, 255, 0.2) -15px 15px, rgba(255, 255, 255, 0.1) -20px 20px, rgba(255, 255, 255, 0.05) -25px 25px;"
    }}
      focusRipple
      key={image.title}
      style={{ backgroundImage: `url(${image.url})` }}
      onClick={onClick}
    />
  )
}

export default ImageButtonComponent
