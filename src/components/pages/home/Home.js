import React, { useState, useEffect } from 'react'

import Products from '../../products/Products'
import SearchBar from '../../searchbar/Searchbar'
import itemsServices from '../../../services/items'

import './home.css'

const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetch_data = async () => {
            const response_data = await itemsServices.getAllItems()
            setItems(response_data.items)
        }
        fetch_data()        
    }, [])

    return (
        <div>
            <SearchBar />
            <Products items={items}/>
        </div>
        
    )
}

export default Home