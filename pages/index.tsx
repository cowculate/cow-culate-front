import { useMediaQuery } from '@mui/material'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import HomeContent from '../components/atoms/HomeContent'
import CowCulateIcon from '../components/atoms/Icons/CowCulateIcon'
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
    <div style={{
       display: 'flex',
       flexDirection: 'column',
       height: '100vh',
       backgroundColor: '#202020'
    }}>
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
    </div>
  )
}

export default Home
