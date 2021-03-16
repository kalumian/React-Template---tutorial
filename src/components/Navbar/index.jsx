import React from 'react'
import { Link } from 'react-router-dom'
import  {Navbarsection, Logo, Text_Logo, Ul_list} from './style.jsx';
import NavList from './navbarList'
import styled from 'styled-components'

const Navbar = () => {
    return(
        <Navbarsection>
            
            <div className="container">
            <Logo>  
                    <Text_Logo >Ultra Profile</Text_Logo>
            </Logo>
                <Ul_list>
                <NavList Link="/" title="Home"/>
                <NavList Link="/" title="Work"/>
                <NavList Link="/" title="Portfolio"/>
                <NavList Link="/" title="Resume"/>
                <NavList Link="/" title="About"/>
                <NavList Link="/contact" title="Contact"/>
                </Ul_list>
                </div>
        </Navbarsection>
    )
}
export default Navbar;