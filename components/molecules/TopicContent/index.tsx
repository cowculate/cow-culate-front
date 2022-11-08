import { Divider } from '@mui/material'
import router from 'next/router'
import ImageButton from '../../atoms/ImageButton'
import { ButtonsWrapper, Title, Wrapper } from './stylle'
interface ContentObject {
  title: string
  image: string
}
interface TopicContentInterface {
  topics: TopicObject[]
}

interface TopicObject {
  title: string
  content: ContentObject[]
}

const TopicContent: React.FC<TopicContentInterface> = ({ topics }) => {
  const handleClick = (content: string) => {
    router.push(`/conteudo/${content}`)
  }
  return (
    <Wrapper>
      {topics.map((topic) => (
        <>
          <Title key={topic.title}>{topic.title}</Title>
          <Divider />
          <ButtonsWrapper>
            {topic.content.map((content) => (
              <ImageButton
                key={content.title}
                image={{ title: content.title, url: content.image }}
                onClick={() => handleClick(content.title)}
              />
            ))}
          </ButtonsWrapper>
        </>
      ))}
    </Wrapper>
  )
}

export default TopicContent
