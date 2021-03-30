import React from 'react'

import PaginationButton from './PaginationButtons/PaginationButton'

const PAGE_SIZE = 6

const Pagination = ({updatePage, page, totalItems}) => {

    const number_of_pages = Math.ceil(totalItems/PAGE_SIZE)

    const handleNextPage = () => {
        updatePage(page+1)
    }

    const handlePreviousPage = () => {
        updatePage(page - 1)
    }

    const handleFirstPage = () => {
        updatePage(1)
    }

    const handleLastPage = () => {
        updatePage(number_of_pages)
    }

    return (
        <PaginationButton 
            currentPage={page} 
            allPages={number_of_pages}
            nextPage={handleNextPage}
            prevPage={handlePreviousPage}
            firstPage={handleFirstPage}
            lastPage={handleLastPage}
        />
    )
}

export default Pagination