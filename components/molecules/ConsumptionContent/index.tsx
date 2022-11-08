import router from 'next/router'
import VideoContainer from '../../atoms/VideoContainer'
import { Title, Text, Wrapper, ReturnButton } from './stylle'

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
  const newText = text.split('\n').map((str, index) => <p key={index}>{str}</p>)
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
      <Text>{newText}</Text>
    </Wrapper>
  )
}

export default ConsumptionContent
