import { useState } from "react"

import { ProfilePic, LoginModal } from "./style";
import Logo from "../../../public/images/new_user_pic.png"


const LoginBox = () => {
  const [hover, setHover] = useState(false)

  return (
    <>
      <ProfilePic
        src={Logo}
        alt="Imagem perfil padrao"
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
      <LoginModal
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={hover && "active"}
      />
    </>
  )
}

export default LoginBox
