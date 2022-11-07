import { ReactNode } from 'react'
import { PageWrapper } from './stylle'

interface PageContainerInterface {
  children: ReactNode
}

const PageContainer: React.FC<PageContainerInterface> = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>
}

export default PageContainer
