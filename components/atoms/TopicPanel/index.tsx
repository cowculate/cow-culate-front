import { Title, TitleHighlight, Wrapper } from './stylle'

interface TopicPanelInterface {
  title: string
  image: string
}

const TopicPanel: React.FC<TopicPanelInterface> = ({ title, image }) => {
  return (
    <Wrapper
      data-testid="Panel"
      style={{ backgroundImage: `url(/images/${image}.png)` }}
    >
      <Title>tópicos em</Title>
      <TitleHighlight>{title}</TitleHighlight>
    </Wrapper>
  )
}

export default TopicPanel
