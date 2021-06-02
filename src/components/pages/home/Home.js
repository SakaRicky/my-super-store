import React, { useState, useEffect } from 'react'
import Products from '../../products/Products'
import SearchBar from '../../searchbar/Searchbar'
import fetchItemList from '../../../services/items'


import './home.css'
import Pagination from '../../pagination/Pagination'
import constants from '../../../utils/constants'

const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [totalItems, setTotalItems] = useState(null)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')


    // eslint-disable-next-line
    useEffect(() => {
        // fetches for all the data in the backend
        const fetch_data = async () => {
            // Calculate the "from" of the query params 
            const request_from = (page - 1) * constants.PAGE_SIZE
            const params = {
                from: request_from,
                q: search
            }
            // Get the items of the backend for the current page
            const data_items = await fetchItemList(params)        
            // Set number of pages in pagination
            setTotalItems(data_items.total)
            setItems(data_items.items)
            setIsLoading(false)
        }

        fetch_data()
    }, [page, search])

    // called when a user does a search with the searchBar component
    const handleSearch = async (searchItem) => {
        if (searchItem === '') {
            setSearch('')
            setPage(1)
        } else {
            setPage(1)
            setSearch(searchItem)
        }  
    }

    const updatePage = (page) => {
        setPage(page)
    }

    return (
        <div className="container-fluid">
            <SearchBar handleSearch={handleSearch}/>
            {items.length === 0 && !isLoading ? <h3 className="no-item">No items matched your search</h3> : <Products items={items}/>}
            <Pagination updatePage={updatePage} page={page} totalItems={totalItems} />
        </div>
        
    )
}

export default Home