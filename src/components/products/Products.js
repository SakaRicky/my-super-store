import React, { useState, useEffect } from 'react'

import ProductCard from './ProductCard/ProductCard'
import itemsServices from '../../services/items'

const ProductCards = ({deals}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetch_data = async () => {
            const response_data = await itemsServices.getAllItems()
            setItems(response_data.items)
        }
        fetch_data()        
    }, [])

    if (deals) {
        return (
            <div className="container my-5">
                <div className="row">
                    {items.map(item => {
                        if(item.isOnSale){
                            return (
                                <div className="col-md-4 col-sm-6 my-3" key={item._id}>
                                    <ProductCard
                                            name={item.name}
                                            imgUrl={item.imageUrl} 
                                            description={item.description} 
                                            price={item.price}
                                            average_rating={item.avgRating}
                                            isOnSale={item.isOnSale}
                                        />
                                </div>
                            )
                        }
                    })}
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
                                />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductCards