import React from 'react'
import { NavLink } from 'react-router-dom'


const NavItem = ({navName, linkTo, sign_in}) => {
    let className = "nav-item mx-2"
    if (sign_in) {
        className = className + " sign_in"
    }
    return <li className={className}>
                <NavLink 
                    to={linkTo}
                    exact 
                    className="nav-link text-white font-weight-bold" 
                    activeClassName="active">
                    {navName}
                </NavLink>
            </li>
}

export default NavItem