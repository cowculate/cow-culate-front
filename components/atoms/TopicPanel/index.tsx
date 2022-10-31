import { Title, TitleHighlight, Wrapper } from './stylle'

interface TopicPanelInterface {
  title: string
  image: string
}

const TopicPanel: React.FC<TopicPanelInterface> = ({ title, image }) => {
  console.log(image)
  return (
    <Wrapper>
      <Title>tópicos em</Title>
      <TitleHighlight>{title}</TitleHighlight>
    </Wrapper>
  )
}

export default TopicPanel
