import { HamburgerItem, HamburgerBar } from "./styles"


type HamburgerMenuProps = {
    active: boolean,
    onClick: () => void,
}

const HamburgerMenu = ({ active, onClick }: HamburgerMenuProps) => {
    return (
        <HamburgerItem onClick={onClick} className={active ? "active" : ""}>
            <HamburgerBar />
            <HamburgerBar />
            <HamburgerBar />
        </HamburgerItem>
    )
}

export default HamburgerMenu