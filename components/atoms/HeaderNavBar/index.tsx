import { Collapse } from "@mui/material"

import { NavBar, HeaderLink } from "./styles"


export type HeaderNavLink = {
    href: string,
    value: string,
}

type HeaderNavProps = {
    collapsed: boolean,
    links: Array<HeaderNavLink>,
    mobile: boolean,
}

const HeaderNavBar = ({ collapsed, links, mobile } : HeaderNavProps) => {

    return (
        <Collapse in={mobile ? collapsed : true}>
            <NavBar>
                {links.map(link =>
                    <HeaderLink key={link.href} href={link.href}>
                        {link.value}
                    </HeaderLink>
                )}
            </NavBar>
        </Collapse>
    )
}

export default HeaderNavBar
