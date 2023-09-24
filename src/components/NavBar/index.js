import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    Hamburger,
    MenuContent
} from './NavBarElements';

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Nav>
                <Hamburger open={open} setOpen={setOpen} />
                <MenuContent open={open} setOpen={setOpen} />
                <NavMenu>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/imageRecognition'>
                        Image Recognition
                    </NavLink>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBar;