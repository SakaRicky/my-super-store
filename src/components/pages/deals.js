import React from 'react'

import Products from '../products/Products'
import SearchBar from '../searchbar/Searchbar'

const Deals = () => {
    return (
        <div>
            <SearchBar />
            <div className="row">
                <Products deals />
            </div>
        </div>
    )
}

export default Deals