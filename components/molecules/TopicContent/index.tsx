import { Divider } from '@mui/material'
import router from 'next/router'
import ImageButton from '../../atoms/ImageButton'
import { ButtonsWrapper, Title, Wrapper } from './stylle'
interface ContentObject {
  title: string
  titleURL : string
  image: string
  page: string
}
interface TopicContentInterface {
  topics: TopicObject[]
}

interface TopicObject {
  title: string
  content: ContentObject[]
}

const TopicContent: React.FC<TopicContentInterface> = ({ topics }) => {
  const handleClick = (materia:string ,topic: string, content: string) => {
    topic = topic.toLowerCase()
    const path = materia +'$' + topic + '$' + content
    router.push(`/conteudo/${path}`)
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
                onClick={() => handleClick(content.page, content.titleURL, content.title)}
              />
            ))}
          </ButtonsWrapper>
          <br></br>
        </>
      ))}
    </Wrapper>
  )
}

export default TopicContent
