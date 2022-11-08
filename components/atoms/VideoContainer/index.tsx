import { Video, Wrapper } from './stylle'

interface VideoContainerInterface {
  video: string
}

const VideoContainer: React.FC<VideoContainerInterface> = ({ video }) => {
  return (
    <Wrapper>
      <Video controls>
        <source src={video} type="video/mp4" />
      </Video>
    </Wrapper>
  )
}

export default VideoContainer
