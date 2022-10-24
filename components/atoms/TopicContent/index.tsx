import { Divider } from '@mui/material'
import ImageButton from '../ImageButton'
import { Title, Wrapper } from './stylle'

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
          {topic.content.map((content) => (
            <ImageButton
              key={content}
              image={{ title: content, url: content }}
            />
          ))}
        </>
      ))}
    </Wrapper>
  )
}

export default TopicContent
