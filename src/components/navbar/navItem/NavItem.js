import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GrCart } from 'react-icons/gr'
import { CartContext } from '../../../context/CartContext'
// import { IconContext } from "react-icons"

import './navItem.css'


const NavItem = ({navName, linkTo, sign_in}) => {
    const [cartItems, setCartItems] = useContext(CartContext)

    let className = "nav-item mx-2"
    if (sign_in) {
        className = className + " sign_in"
    }
    if (navName === 'Cart') {

        const pillNotification = cartItems.length !== 0 ? <div className="icon-tag">{cartItems.length}</div> : null
        
        return <li className={className}>
                <NavLink 
                    to={linkTo}
                    exact 
                    className="nav-link text-white font-weight-bold icon-block" 
                    activeClassName="active">
                    {navName}  <GrCart size={30} style={{ color: 'white' }}/>
                    {pillNotification}
                </NavLink>
            </li>
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