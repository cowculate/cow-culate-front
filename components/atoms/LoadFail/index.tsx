import Image from 'next/image'
import { Wrapper } from "./style";


const LoadFail = () => {
  return(
    <Wrapper>
    <Image src="/images/loadfail.png" alt="Failed to load image" width={320} height={320}/>
    </Wrapper>
  )
} 

export default LoadFail
