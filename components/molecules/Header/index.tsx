import { useState, useEffect, forwardRef } from 'react'
import Image from 'next/image'

import HeaderNavBar, { HeaderNavLink } from '../../atoms/HeaderNavBar'
import HamburgerMenu from '../../atoms/HamburgerMenu'

import {
  StyledHeader,
  ProfileContainer,
  ProfileDescription,
  ProfilePictureContainer,
} from './styles'
import Link from 'next/link'
import Login from '../../atoms/Login'
import { Dialog, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Header = () => {
  const links: Array<HeaderNavLink> = [
    {
      href: '/',
      value: 'home',
    },
    {
      href: '/topicos/fisica',
      value: 'física',
    },
    {
      href: '/topicos/matematica',
      value: 'matemática',
    },
    {
      href: '/topicos/computacao',
      value: 'computação',
    },
  ]

  const [collapsed, setCollapsed] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const [windowWidth, setWindowWidth] = useState(1100)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  return (
    <StyledHeader>
      {windowWidth <= 800 ? (
        <HamburgerMenu
          active={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        />
      ) : null}
      <HeaderNavBar
        collapsed={collapsed}
        links={links}
        mobile={windowWidth <= 800}
      />
      {windowWidth > 1000 ? (
        <Link href="/">
          <Image
            src={'/images/titulo-navbar-cow-culate.png'}
            alt="Logotipo CowCulate"
            width={161}
            height={36}
          />
        </Link>
      ) : null}
      <ProfileContainer>
        {windowWidth > 800 ? (
          <ProfileDescription>
            <span>Nos Contate!</span>
            <span>cowculate.contato@gmail.com</span>
          </ProfileDescription>
        ) : null}
        <ProfilePictureContainer onClick={() => setShowLogin(!showLogin)}>
          <Image
            src={'/images/new_user_pic.png'}
            alt="Imagem perfil padrao"
            width={34}
            height={34}
          />
        </ProfilePictureContainer>
      </ProfileContainer>
      <Dialog
        open={showLogin}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowLogin(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <Login />
      </Dialog>
    </StyledHeader>
  )
}

export default Header
