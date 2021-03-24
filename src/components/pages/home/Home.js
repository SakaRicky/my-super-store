import React, { useState, useEffect } from 'react'

import Products from '../../products/Products'
import SearchBar from '../../searchbar/Searchbar'
import itemsServices from '../../../services/items'
import PaginationButton from '../../PaginationButtons/PaginationButton'

import './home.css'

const PAGE_SIZE = 6;

const Home = () => {
    const [items, setItems] = useState([])
    const [noItems, setNoItems] = useState(false)
    const [number_of_pages, setNumberOfPages] = useState(null)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState(false)

    // fetches for all the data in the backend
    const fetch_data = async () => {
        // Calculate the "from" of the query params 
        const request_from = (page - 1) * PAGE_SIZE
        // Get all the ietems of the backend to calculate number of pages
        const response_data = await itemsServices.getAllItems()
        // Set number of pages in pagination
        setNumberOfPages(Math.ceil(response_data.items.length/PAGE_SIZE))

        const data_items = await itemsServices.getPageItems(request_from)
        setItems(data_items.items)
    }

    // eslint-disable-next-line
    useEffect(() => {
        fetch_data()        
    }, [page])

    // called when a user does a search with the searchBar component
    const handleSearch = async (searchItem) => {
        if (searchItem === '') {
            setPage(1)
            setNoItems(false)
            setSearch(false)
            fetch_data()
        } else {
            // construct a query from the search item
            const query = `q=${searchItem}`
            const response = await itemsServices.getSearchedItem(query)
            //Sibce the backend responds with only 1 item, make an array from that
            const item = [response.items[0]]
            setSearch(true)
            if (response.items[0] === undefined) {
                setNoItems(true)
            } else {
                setItems(item);
            }
        }
        
    }

    const handleNextPage = () => {
        setPage(page+1)
    }

    const handlePreviousPage = () => {
        setPage(page - 1)
    }

    const handleFirstPage = () => {
        setPage(1)
    }

    const handleLastPage = () => {
        setPage(number_of_pages)
    }

    return (
        <div>
            <SearchBar handleSearch={handleSearch}/>
            {noItems ? <h3 className="no-item">No items matched your search</h3> : <Products items={items}/>}
            {!search &&  <PaginationButton 
                                currentPage={page} 
                                allPages={number_of_pages}
                                nextPage={handleNextPage}
                                prevPage={handlePreviousPage}
                                firstPage={handleFirstPage}
                                lastPage={handleLastPage}
            />}
        </div>
        
    )
}

export default Home