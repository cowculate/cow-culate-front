import { useState, useEffect } from "react"
import Image from "next/image"

import HeaderNavBar, { HeaderNavLink } from "../../atoms/HeaderNavBar"
import HamburgerMenu from "../../atoms/HamburgerMenu"
import LoginBox from "../../atoms/LoginBox"

import { StyledHeader, ProfileContainer, ProfileDescription, ProfilePictureContainer } from "./styles"
import TituloHeader from "../../../public/images/titulo-navbar-cow-culate.png"
import Logo from "../../../public/images/new_user_pic.png"
import Link from "next/link"


const Header = () => {
    const links: Array<HeaderNavLink> = [
        {
            href: "/",
            value: "home"
        },
        {
            href: "/topicos/fisica",
            value: "física"
        },
        {
            href: "/topicos/matematica",
            value: "matemática"
        },
        {
            href: "/topicos/computacao",
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
            { windowWidth <= 800 ? 
                <HamburgerMenu active={collapsed} onClick={() => setCollapsed(!collapsed)}/>
                : null
            }
            <HeaderNavBar collapsed={collapsed} links={links} mobile={windowWidth <= 800} />
            { windowWidth > 1000 ?
                <Link href="/"><Image src={TituloHeader} alt="Logotipo CowCulate" /></Link>
                : null
            }
            <ProfileContainer>
                { windowWidth > 800 ?
                    <ProfileDescription>
                        <span>Nos Contate!</span>
                        <span>cowculate.contato@gmail.com</span>
                    </ProfileDescription>
                    : null
                }
                <ProfilePictureContainer>
                    <LoginBox />
                </ProfilePictureContainer>
            </ProfileContainer>
        </StyledHeader>
    )
}

export default Header
