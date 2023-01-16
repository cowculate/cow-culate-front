import Image from 'next/image'
import { Wrapper, ShareButton } from './style'

const SharePage = () => {
  const handleTwitter = () => {
    return
  }
  const handleInstagram = () => {
    return
  }
  const handleWhatsapp = () => {
    return
  }
  const handleFacebook = () => {
    return
  }

  return (
    <Wrapper>
      <ShareButton onClick={handleTwitter}>
        <Image src={'/images/twitter.png'} alt="ig" width="32" height="32" />
      </ShareButton>
      <ShareButton onClick={handleInstagram}>
        <Image src={'/images/instagram.png'} alt="fb" width="32" height="32" />
      </ShareButton>
      <ShareButton onClick={handleWhatsapp}>
        <Image src={'/images/whatsapp.png'} alt="wpp" width="32" height="32" />
      </ShareButton>
      <ShareButton onClick={handleFacebook}>
        <Image src={'/images/facebook.png'} alt="tt" width="32" height="32" />
      </ShareButton>
    </Wrapper>
  )
}

export default SharePage
