import type { GetServerSideProps, NextPage } from 'next'
import PageContainer from '../../components/atoms/PageContainer'
import ConsumptionContent from '../../components/molecules/ConsumptionContent'
import Header from '../../components/molecules/Header'

interface ContentObject {
  video: string
  text: string
  topic: string
}
interface ContentsInterface {
  title: string
  placeHolder: ContentObject
}

const pages = ['inercia']

const inerciaPlaceHolder = {
  video: '/videos/inercia.mp4',
  text: 'Um objeto em repouso permanece em repouso, e um objeto em movimento permanece em movimento com velocidade constante e em linha reta, a menos que uma força externa atue sobre ele. \nO princípio da inércia é uma das leis da física que descreve o comportamento dinâmico ou estático dos objetos. Vamos entendê-lo analisando a animação…\n\nTemos um objeto, ou melhor, uma bola. A princípio, as únicas forças que atuam sobre ela são as forças normal e peso. Assim, elas acabam se anulando, e portanto, temos uma força resultante nula. Dessa forma, a nossa bola se mantém parada.\n\nPor outro lado, quando uma força externa é colocada na bola, ela começa a se mover. Veja que ao adicionarmos uma força para a direita, a bola se move aceleradamente para direita.\n\n  A primeira lei de Newton, ou a inércia descreve exatamente isso. Quando um objeto está parado, ele se mantém parado se a força resultante atuando sobre ele for nula. Semelhantemente, se um objeto já em movimento, tiver uma força resultante nula, ele se mantém em movimento. Dessa forma, podemos concluir também, que o objeto só muda de estado quando a força resultante deixar de ser nula.',
  topic: 'fisica',
}

const getPlaceHolder = (page: string) => {
  switch (page) {
    case 'inercia':
      return { title: 'Inércia', placeHolder: inerciaPlaceHolder }
    default:
      return { title: 'Inércia', placeHolder: inerciaPlaceHolder }
  }
}

const Contents: NextPage<ContentsInterface> = ({ title, placeHolder }) => {
  return (
    <PageContainer>
      <Header />
      <ConsumptionContent
        title={title}
        video={placeHolder.video}
        text={placeHolder.text}
        topic={placeHolder.topic}
      />
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page = (params?.pid as string) || ''
  if (!pages.includes(page)) return { notFound: true }
  const { title, placeHolder } = getPlaceHolder(page)

  return {
    props: {
      title,
      placeHolder,
    },
  }
}

export default Contents
