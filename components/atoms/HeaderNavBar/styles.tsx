import { styled } from "@mui/system"


export const NavBar = styled("nav")({
    display: "flex",
    "@media(max-width: 730px)": {
        flexDirection: "column",
    }
})

export const HeaderLink = styled("a")({
    fontFamily: "IBM Plex Mono, monospace",
    fontWeight: "13",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "block",
    color: "white",
    margin: ".5rem 1rem .5rem 0",
    transition: ".2s",
    "&:hover": {
        color: "rgb(210,210,210)",
        transition: ".2s",
        textShadow: "2px 2px rgb(80,80,80)",
    }
})
