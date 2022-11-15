import type { GetServerSideProps, NextPage } from 'next'
import PageContainer from '../../components/atoms/PageContainer'
import ConsumptionContent from '../../components/molecules/ConsumptionContent'
import Header from '../../components/molecules/Header'

import { db } from '../../public/firebase'

interface ContentObject {
  title: string
  video: string
  text: string
}
interface ContentsInterface {
  content: ContentObject
  subject: string
}

const pages = ['inercia',
               'integral_de_riemann', 'metodo_de_newton', 'metodo_da_bisseccao', 'arvore_de_pitagoras',
                'bubblesort']

const generateContentObject = async (page: string, topic: string, subject: string) => {
  let problemTitle: string = ''
  let videoURL:string = ''
  let textURL:string = ''

  await db.collection('videos').doc(subject).collection(topic).doc(page).get()
  .then((document) => {
    problemTitle = document.data()?.nome
    videoURL = document.data()?.url
    textURL = ''
  })

  return {title: problemTitle, video: videoURL, text: textURL}
}

const getFirebaseProps = async (page: string, topic: string, subject: string) => {
  return await generateContentObject(page, topic, subject)
}

const Contents: NextPage<ContentsInterface> = ({ content, subject }) => {
  return (
    <PageContainer>
      <Header />
      <ConsumptionContent
        title={content.title}
        video={content.video}
        text={content.text}
        topic={subject}
      />
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page = (params?.pid as string).split('$')[2] || ''
  const topic = (params?.pid as string).split('$')[1] || ''
  const subject = (params?.pid as string).split('$')[0] || ''

  if (!pages.includes(page)) return { notFound: true }
  const content = await getFirebaseProps(page, topic, subject)

  return {
    props: {
      content,
      subject
    },
  }
}

export default Contents
