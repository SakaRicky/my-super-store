import React from 'react'

import { BsSearch } from 'react-icons/bs';


const searchbar = () => {
    return <div className="row bg-secondary">
                <form class="form-inline mx-auto h-25">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit"><BsSearch /></button>
                </form>
            </div>
}

export default searchbar