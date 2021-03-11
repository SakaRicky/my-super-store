import React from "react";

import { Link, NavLink } from 'react-router-dom'

import { FaCartArrowDown, FaBars } from 'react-icons/fa';
import './navbar.css'

const navbar = () => {
    return (<nav className="navbar navbar-expand-md navbar-light bg-primary">
                <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars className="navbar-toggler-icon" style={{color:"white"}} />
                </button>
                <Link to='/' className="navbar-brand display-1 text-white font-weight-bolder">Super Store</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-2 ">
                            <NavLink 
                                to='/'
                                exact 
                                className="nav-link text-white font-weight-bold" 
                                activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink 
                                to='/deals'
                                className="nav-link text-white font-weight-bold" 
                                activeClassName="active">
                                Deals
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2 ">
                            <NavLink 
                                to='/cart' 
                                className="nav-link text-white font-weight-bold" 
                                activeClassName="active">
                                Cart <FaCartArrowDown />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            )
}

export default navbar