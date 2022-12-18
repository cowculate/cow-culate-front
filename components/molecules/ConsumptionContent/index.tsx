import router from 'next/router'
import VideoContainer from '../../atoms/VideoContainer'
import PDFViewer from '../PDFViewer'
import SharePage from '../../atoms/SharePage/'
import { Title, Wrapper, ReturnButton, SharePageWrapper } from './stylle'
import Image from 'next/image'
import BackButton from '../../../public/images/backbutton.png'

interface ConsumptionInterface {
  title: string
  video: string
  text: string
  topic: string
}

const ConsumptionContent: React.FC<ConsumptionInterface> = ({
  title,
  video,
  text,
  topic,
}) => {
  const url = text
  const handleClick = () => {
    router.push(`/topicos/${topic}`)
  }
  return (
    <Wrapper>
      <Title>
        <ReturnButton onClick={handleClick}>
        <Image src={BackButton} alt="return" width="48" height="48" />
        </ReturnButton>
        {title}
        <SharePageWrapper>
          <SharePage/>
        </SharePageWrapper>
      </Title>
      <VideoContainer video={video} />
      <PDFViewer url={url} />
    </Wrapper>
  )
}

export default ConsumptionContent
