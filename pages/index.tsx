import { useMediaQuery } from '@mui/material'
import type { NextPage } from 'next'
import HomeContent from '../components/atoms/HomeContent'
import CowCulateIcon from '../components/atoms/Icons/CowCulateIcon'
import PageContainer from '../components/atoms/PageContainer'
import Header from '../components/molecules/Header/index'

const Home: NextPage = () => {
  const placeCow = useMediaQuery('(min-width:900px)')
  return (
    <PageContainer>
      <Header />

      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <HomeContent />
        {placeCow && <CowCulateIcon />}
      </div>
    </PageContainer>
  )
}

export default Home
