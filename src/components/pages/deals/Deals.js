import React, { useState, useEffect } from 'react'

import itemsServices from '../../../services/items'
import ProductsOnDeals from '../../products/Products'
import SearchBar from '../../searchbar/Searchbar'
import PaginationButton from '../../PaginationButtons/PaginationButton'

import './deals.css'

const PAGE_SIZE = 6

const Deals = () => {
    const [deals, setDeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [noDeals, setNoDeals] = useState(false)
    const [number_of_pages, setNumberOfPages] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetch_deals = async () => {
            // Get all deals to calculate the number of pages for pagination
            const all_deals = await itemsServices.getDeals('isOnSale=true')
            // set number of pages
            setNumberOfPages(Math.ceil(all_deals.items.length/PAGE_SIZE))
            // Query made to look for deals and from a certain number
            const query = `isOnSale=true&from=${(page - 1) * PAGE_SIZE}&size=${PAGE_SIZE}`
            const response_data = await itemsServices.getDeals(query)
            setDeals(response_data.items)
            setIsLoading(false)
        }
        fetch_deals()
    }, [page])

    // called when a user does a search with the searchBar component
    const handleSearch = async (searchItem) => {
        if (searchItem === '') {
            setPage(1)
            setNoDeals(false)
        } else {
            // construct a query from the search item
            const query = `q=${searchItem}`
            const response = await itemsServices.getSearchedItem(query)
            //Sibce the backend responds with only 1 item, make an array from that
            const item = [response.items[0]]
            if (response.items[0] === undefined) {
                setNoDeals(true)
            } else {
                setDeals(item);
            }
        }
        
    }

    // Increment the page state when next button is clicked
    const handleNextPage = () => {
        setPage(page+1)
    }

    // Decrement the page state when previous button is clicked
    const handlePreviousPage = () => {
        setPage(page - 1)
    }

    // initiate page state to 1
    const handleFirstPage = () => {
        setPage(1)
    }

    // Set page state to last page
    const handleLastPage = () => {
        setPage(number_of_pages)
    }

    // If it's no more loading but the deals state still has length 0, there are no deals in the backend
    const deals_to_display = isLoading === false && deals.length === 0 ? <div className="noDeals"><h1>No Deals available at the moment</h1></div> : <ProductsOnDeals items={deals}/>

    return (
            <div>
                <SearchBar handleSearch={handleSearch}/>
                <div className="row">
                    {noDeals ? <h3 className="no-item">No Deals matched your search</h3> : deals_to_display}
                </div>
                {noDeals ? null : <PaginationButton 
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

export default Deals