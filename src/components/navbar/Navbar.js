import React from "react";

import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa';
import NavItem from './navItem/NavItem'
import './navbar.css'

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light py-2 head_bar">
            <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <FaBars className="navbar-toggler-icon" style={{color:"white"}} />
            </button>
            <Link to='/' className="navbar-brand display-1 text-white font-weight-bolder">Super Store</Link>

            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto">
                    <NavItem navName="Home" linkTo='/' />
                    <NavItem navName="Deals" linkTo='/deals' />
                    <NavItem navName="Cart" linkTo='/cart' />
                    <NavItem sign_in navName="Sign In" linkTo='/signin' />
                </ul>
            </div>
        </nav>
    )
}

export default navbar