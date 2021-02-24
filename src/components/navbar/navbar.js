import React from "react";

import { FaCartArrowDown } from 'react-icons/fa';
import './navbar.css'

const navbar = () => {
    return (<nav className="navbar navbar-expand-md navbar-light bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <a className="navbar-brand display-1 text-white font-weight-bolder" href="#">Super Store</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-2 ">
                            <a className="nav-link text-white font-weight-bold" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-white font-weight-bold" href="#">Deals</a>
                        </li>
                        <li className="nav-item mx-2 ">
                            <a className="nav-link text-white font-weight-bold" href="#">Cart <FaCartArrowDown /></a>
                        </li>
                    </ul>
                </div>
            </nav>
            )
}

export default navbar