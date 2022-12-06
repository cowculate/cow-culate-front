import router from 'next/router'
import VideoContainer from '../../atoms/VideoContainer'
import PDFViewer from '../PDFViewer'
import { Title, Wrapper, ReturnButton } from './stylle'

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
        <ReturnButton onClick={handleClick} />
        {title}
      </Title>
      <VideoContainer video={video} />
      <PDFViewer url={url} />
    </Wrapper>
  )
}

export default ConsumptionContent
