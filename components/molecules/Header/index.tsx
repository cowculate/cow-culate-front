import { useState, useEffect } from "react"
import Image from "next/image"

import HeaderNavBar, { HeaderNavLink } from "../../atoms/HeaderNavBar"
import HamburgerMenu from "../../atoms/HamburgerMenu"

import { StyledHeader, ProfileContainer, ProfileDescription, ProfilePictureContainer } from "./styles"
import TituloHeader from "../../../public/images/titulo-navbar-cow-culate.png"
import Logo from "../../../public/images/new_user_pic.png"


const Header = () => {
    const links: Array<HeaderNavLink> = [
        {
            href: "/fisica",
            value: "física"
        },
        {
            href: "/matematica",
            value: "matematica"
        },
        {
            href: "/computacao",
            value: "computação"
        },
    ]

    const [collapsed, setCollapsed] = useState(false)
    const [windowWidth, setWindowWidth] = useState(1100)

    useEffect(() => {
        setWindowWidth(window.innerWidth)

        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [])

    return (
        <StyledHeader>
            { windowWidth <= 730 ? 
                <HamburgerMenu active={collapsed} onClick={() => setCollapsed(!collapsed)}/>
                : null
            }
            <HeaderNavBar collapsed={collapsed} links={links} mobile={windowWidth <= 730} />
            { windowWidth > 1000 ?
                <Image src={TituloHeader} alt="Logotipo CowCulate" />
                : null
            }
            <ProfileContainer>
                { windowWidth > 730 ?
                    <ProfileDescription>
                        <span>Nos Contate!</span>
                        <span>cowculate@gmail.com</span>
                    </ProfileDescription>
                    : null
                }
                <ProfilePictureContainer>
                    <Image
                        src={Logo}
                        alt="Imagem perfil padrao"
                    />
                </ProfilePictureContainer>
            </ProfileContainer>
        </StyledHeader>
    )
}

export default Header