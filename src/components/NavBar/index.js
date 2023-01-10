import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavBarElements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars/>
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