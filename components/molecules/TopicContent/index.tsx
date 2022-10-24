import { Divider } from '@mui/material'
import ImageButton from '../../atoms/ImageButton'
import { ButtonsWrapper, Title, Wrapper } from './stylle'

interface TopicContentInterface {
  topics: TopicObject[]
}

interface TopicObject {
  title: string
  content: string[]
}

const TopicContent: React.FC<TopicContentInterface> = ({ topics }) => {
  return (
    <Wrapper>
      {topics.map((topic) => (
        <>
          <Title key={topic.title}>{topic.title}</Title>
          <Divider />
          <ButtonsWrapper>
            {topic.content.map((content) => (
              <ImageButton
                key={content}
                image={{ title: content, url: content }}
              />
            ))}
          </ButtonsWrapper>
        </>
      ))}
    </Wrapper>
  )
}

export default TopicContent
