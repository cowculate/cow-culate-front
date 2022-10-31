import type { NextPage } from 'next'
import HomeContent from '../components/atoms/HomeContent'
import CowCulateIcon from '../components/atoms/Icons/CowCulateIcon'

const Home: NextPage = () => {
  return (
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
  )
}

export default Home
