import { Wrapper, ProductName } from  './style'


const Footer = () => {

  return(
    <Wrapper>
      <ProductName>
        {"CowCulate"}
        <span style={{color: "#555"}}>{"@2022"}</span>
      </ProductName>
    </Wrapper>
  )
} 

export default Footer
