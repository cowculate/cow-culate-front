import { styled } from "@mui/system"


export const HamburgerBar = styled("div")({
    width: "100%",
    height: "2px",
    backgroundColor: "white",
    transition: ".5s",
})

export const HamburgerItem = styled("div")({
    display: "flex",
    flexDirection: "column",
    width: "2rem",
    height: "1rem",
    justifyContent: "space-between",
    transition: ".5s",
    ":hover": {
        cursor: "pointer",
    },
    "&.active div:nth-child(1)": {
        transform: "rotate(45deg) translateY(calc(0.5rem + 1px))",
    },
    "&.active div:nth-child(2)": {
        opacity: "0",
    },
    "&.active div:nth-child(3)": {
        transform: "rotate(-45deg) translateY(calc(-0.5rem - 1px))",
    },
})
