import { useMediaQuery } from '@mui/material'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import HomeContent from '../components/atoms/HomeContent'
import CowCulateIcon from '../components/atoms/Icons/CowCulateIcon'
import PageContainer from '../components/atoms/PageContainer'
import Header from '../components/molecules/Header/index'

const Home: NextPage = () => {
  const placeCow = useMediaQuery('(min-width:900px)')

  const [windowHeight, setWindowHeight] = useState(1080)

  useEffect(() => {
    setWindowHeight(window.innerHeight)

    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight)
    })
  }, [])

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
        {placeCow && <CowCulateIcon height={windowHeight * 0.8} />}
      </div>
    </PageContainer>
  )
}

export default Home
