import type { GetServerSideProps, NextPage } from 'next'
import PageContainer from '../../components/atoms/PageContainer'
import TopicPanel from '../../components/atoms/TopicPanel/'
import Header from '../../components/molecules/Header'
import TopicContent from '../../components/molecules/TopicContent'

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
  placeHolder: TopicObject[]
}

const pages = ['fisica', 'matematica', 'computacao']

const fiscsPlaceHolder = [
  {
    title: 'Primeira Lei',
    content: [
      {
        title: 'inercia',
        image: '/images/inercia.png',
      },
    ],
  },
  {
    title: 'Ondulatória',
    content: [
      {
        title: 'Ondulatória',
        image:
          'https://redu.com.br/wp-content/uploads/2019/03/Movimento-ondulat%C3%B3rio.jpg',
      },
      {
        title: 'Ondulatória',
        image:
          'http://pm1.narvii.com/6868/853d02f15aa9ca29125c35a8ad626d05c2378332r1-443-332v2_hq.jpg',
      },
    ],
  },
  {
    title: 'Termodinâmica',
    content: [
      {
        title: 'Termodinâmica',
        image:
          'https://static.todamateria.com.br/upload/57/6c/576c7e2b5f79c-termodinamica.jpg?auto_optimize=low',
      },
      {
        title: 'Termodinâmica',
        image:
          'https://blogdoenem.com.br/wp-content/uploads//sites/2/2014/07/lei-termodinamica-fisica.png',
      },
    ],
  },
]

const mathPlaceHolder = [
  {
    title: 'Cálculo',
    content: [
      {
        title: 'Cálculo',
        image:
          'https://ead.ucs.br/hubfs/Imported_Blog_Media/calculo-diferencial-e-integral.jpg',
      },
      {
        title: 'Cálculo',
        image:
          'https://meutudo.com.br/blog/wp-content/uploads/2020/05/pasted-image-0-7-2.png',
      },
    ],
  },
  {
    title: 'Conjuntos',
    content: [
      {
        title: 'Conjuntos',
        image:
          'https://matematicabasica.net/wp-content/uploads/2019/02/conjuntos-numericos-1.png',
      },
    ],
  },
]

const compPlaceHolder = [
  {
    title: 'Ordenação',
    content: [
      {
        title: 'Ordenação',
        image: 'https://www.productplan.com/uploads/bubble-sort-1024x683-2.png',
      },
    ],
  },
  {
    title: 'Grafos',
    content: [
      {
        title: 'Grafos',
        image:
          'https://www.ime.usp.br/~pf/algoritmos_para_grafos/aulas/figs/Sedgewick-Wayne/TinyNetworkOnly.png',
      },
      {
        title: 'Grafos',
        image:
          'https://cdn.universoracionalista.org/wp-content/uploads/2016/03/social-network.jpg',
      },
    ],
  },
]

const getPlaceHolder = (page: string) => {
  switch (page) {
    case 'fisica':
      return { title: 'Física', placeHolder: fiscsPlaceHolder }
    case 'matematica':
      return { title: 'Matemática', placeHolder: mathPlaceHolder }
    case 'computacao':
      return { title: 'Computação', placeHolder: compPlaceHolder }

    default:
      return { title: 'Física', placeHolder: fiscsPlaceHolder }
  }
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
  const { title, placeHolder } = getPlaceHolder(page)

  return {
    props: {
      title,
      placeHolder,
    },
  }
}

export default Topics
