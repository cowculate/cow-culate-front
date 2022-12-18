import { Wrapper, ProductName } from  './style'


const Footer = () => {

    return(
        <Wrapper>
            <ProductName>
                <div style={{color: 'gray'}}>{"@2022"}</div>
                <div style={{color: 'white'}}>{"CowCulate"}</div>
            </ProductName>
        </Wrapper>
    )
} 

export default Footer