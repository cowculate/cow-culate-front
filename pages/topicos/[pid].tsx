import type { GetServerSideProps, NextPage } from 'next'
import PageContainer from '../../components/atoms/PageContainer'
import TopicPanel from '../../components/atoms/TopicPanel/'
import Header from '../../components/molecules/Header'
import TopicContent from '../../components/molecules/TopicContent'
import Footer from '../../components/molecules/Footer'
import { db } from '../../firebase'

interface ContentObject {
  title: string
  titleURL: string
  formatTitle: string
  image: string
  page: string
}
interface TopicObject {
  title: string
  content: ContentObject[]
}
interface TopicsInterface {
  title: string
  content: TopicObject[]
}

const pages = ['fisica', 'matematica', 'computacao']

const getThumbnailImages = async (page: string, subtopico: string) => {

  const thumbsImages: ContentObject[] = []

  await db.collection('thumbnail_images').doc(page).collection(subtopico).get()
  .then((snapshot) => {
    snapshot.docs.forEach((document) => {
      thumbsImages.push({title: document.id, formatTitle: document.data().nome, titleURL: subtopico, image: document.data().url, page})
    })
  })

  return thumbsImages
}

const generateTopicObject = async (page: string, subtopicos: Map<string, string>) => {
  const resp: TopicObject[] = []

  for (const [key, value] of Object.entries(subtopicos)){
    const imageList: ContentObject[] = await getThumbnailImages(page, key)
    const title: string = value
    resp.push({title: title, content: imageList})
  }

  return resp
}

const getFirebaseProps = async (page: string) => {
  let _subtopicos : Map<string, string> = new Map()

  await db.collection('thumbnail_images').doc(page).get()
  .then((coll) => {
    _subtopicos = (coll.data()?.subtopicos)
  })

  const response: TopicObject[] = await generateTopicObject(page, _subtopicos)
  let pageTitle = ""
  switch (page){
    case 'fisica':
      pageTitle = 'Física'
      break
    case 'matematica':
      pageTitle = 'Matemática'
      break
    case 'computacao':
      pageTitle = 'Computação'
      break
  }

  return { title: pageTitle, content: response }
}


const Topics: NextPage<TopicsInterface> = ({ title, content }) => {
  return (
    <PageContainer>
      <Header />
      <TopicPanel title={title} image={''} />
      <TopicContent topics={content} />
      <Footer />
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page = (params?.pid as string) || ''
  if (!pages.includes(page)) return { notFound: true }
  const { title, content } = await getFirebaseProps(page)

  return {
    props: {
      title,
      content,
    },
  }
}

export default Topics
