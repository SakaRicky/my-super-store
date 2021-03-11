import React from 'react'

import { BsSearch } from 'react-icons/bs';

import './searchbar.css'


const searchbar = () => {
    return <div className="row bg-secondary">
                <form className="form-inline mx-auto h-25">
                    <div className="col-xs">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn search" type="submit"><BsSearch /></button>
                    </div>
                </form>
            </div>
}

export default searchbar