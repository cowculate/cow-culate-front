import type { GetServerSideProps, NextPage } from 'next'
import TopicPanel from '../../components/atoms/TopicPanel/'

interface iTopics {
  page: string
}

const Topics: NextPage<iTopics> = ({ page }) => {
  return (
    <>
      <TopicPanel title={page} image={''} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page = params.slug || null
  return {
    props: {
      page,
    },
  }
}

export default Topics
