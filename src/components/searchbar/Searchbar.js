import React, { useState } from 'react'

import { BsSearch } from 'react-icons/bs';

import './searchbar.css'


const Searchbar = ({handleSearch}) => {
    const [searchedItem, setSearchedItem] = useState('')

    const search = (event) => {
        event.preventDefault()
        handleSearch(searchedItem)
    }

    const changeHandler = ({target}) => {
        setSearchedItem(target.value)
        if (target.value === '') {
            handleSearch('')
        }
    }

    return <div className="row bg-secondary">
                <form className="form-inline mx-auto h-25" onSubmit={search}>
                    <div className="col-xs">
                        <input 
                            className="form-control" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            onChange={changeHandler} />
                        <button className="btn search" type="submit"><BsSearch /></button>
                    </div>
                </form>
            </div>
}

export default Searchbar