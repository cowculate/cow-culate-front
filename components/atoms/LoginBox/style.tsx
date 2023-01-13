import Image from "next/image";

import { styled } from "@mui/material"


export const ProfilePic = styled(Image) ({
  transition: "1s",
  position: "relative",
  zIndex: 10,
  "&:hover" : {
    transform: "rotate(360deg)"
  }
})

export const LoginModal = styled("div") ({
  zIndex: 5,
  position: "absolute",
  top: "2rem",
  right: "3.5rem",
  width: "20rem",
  height: "30rem",
  backgroundColor: "white",
  transition: "1s",
  opacity: 0,
  zIndex: -1,
  "&.active": {
    opacity: 1,
    zIndex: 5
  },
  "@media(max-width: 445px)": {
    width: "80vw",
    left: "10%",
    right: "10%"
  }
})

