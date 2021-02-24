import React from 'react'

import { BsSearch } from 'react-icons/bs';

import './searchbar.css'


const searchbar = () => {
    return <div className="row bg-secondary">
                <form className="form-inline mx-auto h-25">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn" type="submit"><BsSearch /></button>
                </form>
            </div>
}

export default searchbar