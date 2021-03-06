import React from 'react'

import Products from '../../products/Products'
import SearchBar from '../../searchbar/Searchbar'
import './home.css'

const home = () => {
    return (
        <div>
            <SearchBar />
            <Products />
        </div>
    )
}

export default home