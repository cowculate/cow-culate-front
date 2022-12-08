import Image from 'next/image'
import { Wrapper, ShareButton } from './style'
import TwitterIcon from '../../../public/images/twitter.png'
import InstagramIcon from '../../../public/images/instagram.png'
import WhatsappIcon from '../../../public/images/whatsapp.png'
import FacebookIcon from '../../../public/images/facebook.png'



const SharePage = () => {

    const handleTwitter = () => {return};
    const handleInstagram = () => {return};
    const handleWhatsapp = () => {return};
    const handleFacebook = () => {return};

    return (
        <Wrapper>
            <ShareButton onClick={handleTwitter}>
                <Image src={TwitterIcon} alt="ig" width="32" height="32" />
            </ShareButton>
            <ShareButton onClick={handleInstagram}>
                <Image src={InstagramIcon} alt="fb" width="32" height="32" />
            </ShareButton>
            <ShareButton onClick={handleWhatsapp}>
                <Image src={WhatsappIcon} alt="wpp" width="32" height="32" />
            </ShareButton>
            <ShareButton onClick={handleFacebook}>
                <Image src={FacebookIcon} alt="tt" width="32" height="32" />
            </ShareButton>
        </Wrapper>
    )
}

export default SharePage