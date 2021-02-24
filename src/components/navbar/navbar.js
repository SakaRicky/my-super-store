import React from "react";

import { Link } from 'react-router-dom'

import { FaCartArrowDown, FaBars } from 'react-icons/fa';
import './navbar.css'

const navbar = () => {
    return (<nav className="navbar navbar-expand-md navbar-light bg-primary">
                <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars className="navbar-toggler-icon" style={{color:"white"}} />
                </button>
                <Link to='/' className="navbar-brand display-1 text-white font-weight-bolder" href="#">Super Store</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-2 ">
                            <Link to='/' className="nav-link text-white font-weight-bold" href="#">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='/deals' className="nav-link text-white font-weight-bold" href="#">Deals</Link>
                        </li>
                        <li className="nav-item mx-2 ">
                            <Link to='/cart' className="nav-link text-white font-weight-bold" href="#">Cart <FaCartArrowDown /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            )
}

export default navbar