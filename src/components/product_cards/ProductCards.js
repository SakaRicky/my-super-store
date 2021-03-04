import React, { useState, useEffect } from 'react'

import ProductCard from './ProductCard/ProductCard'
import itemsServices from '../../services/items'

const ProductCards = () => {
    const [items, setItems] = useState([])

    useEffect(async () => {
        const response_data = await itemsServices.getAllItems()
        // console.log('items: ', response_data.items);
        setItems(response_data.items)
    }, [])

    console.log(items);
    return (
        <div className="container my-5">
            <div className="row my-row">
                {items.map(item => {
                    return (
                        <div className="col-md-4 col-sm-6 my-col" key={item._id} style={{width: "20px"}}>
                            <div className="row mx-2 my-row item-row">
                                <ProductCard
                                        name={item.name}
                                        imgUrl={item.imageUrl} 
                                        description={item.description} 
                                        price={item.price} 
                                    />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductCards