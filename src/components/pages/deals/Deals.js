import React, { useState, useEffect } from 'react'

import itemsServices from '../../../services/items'
import ProductsOnDeals from '../../products/Products'

import './deals.css'

const Deals = () => {
    const [deals, setDeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetch_deals = async () => {
            const query = 'isOnSale=true'
            const response_data = await itemsServices.getDeals(query)
            setDeals(response_data.items)
            setIsLoading(false)
        }
        fetch_deals()
    }, [])

    const deals_to_display = isLoading === false && deals.length === 0 ? <div className="noDeals"><h1>No Deals available at the moment</h1></div> : <ProductsOnDeals items={deals}/>

    return <div className="row">
                {deals_to_display}
            </div>
}

export default Deals