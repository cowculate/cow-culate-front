import type { GetServerSideProps, NextPage } from 'next'
import PageContainer from '../../components/atoms/PageContainer'
import TopicPanel from '../../components/atoms/TopicPanel/'
import Header from '../../components/molecules/Header'
import TopicContent from '../../components/molecules/TopicContent'
import { db } from '../../public/firebase'

interface ContentObject {
  title: string
  image: string
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
      thumbsImages.push({title: document.data().nome, image: document.data().url})
    })
  })
  
  return thumbsImages
}

const generateTopicObject = async (page: string, subtopicos: string[]) => {
  const resp: TopicObject[] = []
  
  for(const subtopico of subtopicos) {
    let imageList: ContentObject[] = await getThumbnailImages(page, subtopico)
    let title: string = subtopico.charAt(0).toUpperCase() + subtopico.slice(1);
    resp.push({title: title, content: imageList})
  }

  return resp
}

const getFirebaseProps = async (page: string) => {
  let _subtopicos: string[] = []

  await db.collection('thumbnail_images').doc(page).get()
  .then((coll) => {
    _subtopicos = (coll.data().subtopicos)
  })

  const response: TopicObject[] = await generateTopicObject(page, _subtopicos)
  let pageTitle: string = ""
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

  return { title: pageTitle, placeHolder: response }
}


const Topics: NextPage<TopicsInterface> = ({ title, placeHolder }) => {
  return (
    <PageContainer>
      <Header />
      <TopicPanel title={title} image={''} />
      <TopicContent topics={placeHolder} />
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page = (params?.pid as string) || ''
  if (!pages.includes(page)) return { notFound: true }
  const { title, placeHolder } = await getFirebaseProps(page)

  return {
    props: {
      title,
      placeHolder,
    },
  }
}

export default Topics
