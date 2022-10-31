import type { GetServerSideProps, NextPage } from 'next'
import TopicPanel from '../../components/atoms/TopicPanel/'
import TopicContent from '../../components/molecules/TopicContent'

interface TopicObject {
  title: string
  content: string[]
}
interface TopicsInterface {
  title: string
  placeHolder: TopicObject[]
}

const pages = ['fisica', 'matematica', 'computacao']

const fiscsPlaceHolder = [
  {
    title: 'Ondulatória',
    content: [
      'https://redu.com.br/wp-content/uploads/2019/03/Movimento-ondulat%C3%B3rio.jpg',
      'http://pm1.narvii.com/6868/853d02f15aa9ca29125c35a8ad626d05c2378332r1-443-332v2_hq.jpg',
    ],
  },
  {
    title: 'Termodinâmica',
    content: [
      'https://static.todamateria.com.br/upload/57/6c/576c7e2b5f79c-termodinamica.jpg?auto_optimize=low',
      'https://blogdoenem.com.br/wp-content/uploads//sites/2/2014/07/lei-termodinamica-fisica.png',
    ],
  },
]

const mathPlaceHolder = [
  {
    title: 'Cálculo',
    content: [
      'https://ead.ucs.br/hubfs/Imported_Blog_Media/calculo-diferencial-e-integral.jpg',
      'https://meutudo.com.br/blog/wp-content/uploads/2020/05/pasted-image-0-7-2.png',
      'https://www.debit.com.br/images/index-gomo1.png',
    ],
  },
  {
    title: 'Conjuntos',
    content: [
      'https://matematicabasica.net/wp-content/uploads/2019/02/conjuntos-numericos-1.png',
    ],
  },
]

const compPlaceHolder = [
  {
    title: 'Ordenação',
    content: ['https://www.productplan.com/uploads/bubble-sort-1024x683-2.png'],
  },
  {
    title: 'Grafos',
    content: [
      'https://www.ime.usp.br/~pf/algoritmos_para_grafos/aulas/figs/Sedgewick-Wayne/TinyNetworkOnly.png',
      'https://cdn.universoracionalista.org/wp-content/uploads/2016/03/social-network.jpg',
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
    <>
      <TopicPanel title={title} image={''} />
      <TopicContent topics={placeHolder} />
    </>
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
