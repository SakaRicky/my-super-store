import React, { useState, useEffect } from 'react'

import ProductCard from './ProductCard/ProductCard'
import itemsServices from '../../services/items'
import './products.css'

const Products = ({deals}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetch_data = async () => {
            const response_data = await itemsServices.getAllItems()
            setItems(response_data.items)
        }
        fetch_data()        
    }, [])

    if (deals) {

        const computed_deals_items = items.filter(item => item.isOnSale)
                                          .map(item => {
                                            return (
                                                <div className="col-md-4 col-sm-6 my-3" key={item._id}>
                                                    <ProductCard
                                                            name={item.name}
                                                            imgUrl={item.imageUrl} 
                                                            description={item.description} 
                                                            price={item.price}
                                                            average_rating={item.avgRating}
                                                            isOnSale={item.isOnSale}
                                                            item_id={item._id}
                                                        />
                                                </div>
                                            )
                                          })
        const returned_deals_items = computed_deals_items.length === 0 ? 
                                        <div className="noDeals"><h2>No Deals at the moment</h2></div>
                                        :
                                        computed_deals_items
        return (
            <div className="container my-5">
                <div className="row">
                    {returned_deals_items}
                </div>
            </div>
        )
    }

    console.log('Items: ', items);

    return (
        <div className="container my-5">
            <div className="row">
                {items.map(item => {
                    return (
                        <div className="col-md-4 col-sm-6 my-3" key={item._id}>
                            <ProductCard
                                    name={item.name}
                                    imgUrl={item.imageUrl} 
                                    description={item.description} 
                                    price={item.price}
                                    average_rating={item.avgRating}
                                    isOnSale={item.isOnSale}
                                    item_id={item._id}
                                />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products