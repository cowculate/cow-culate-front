import type { NextPage } from 'next'
import HomeContent from '../components/atoms/HomeContent'
import CowCulateIcon from '../components/atoms/Icons/CowCulateIcon'
import Header from '../components/molecules/Header/index'

const Home: NextPage = () => {
  return (
  <>
    <Header/>
    <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#404040',
    }}
    >
    <HomeContent />
    <CowCulateIcon />
    </div>
  </>
  )
}

export default Home
