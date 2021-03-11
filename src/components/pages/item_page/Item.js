import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom'

import ItemServices from '../../../services/items'
import ProductStars from '../../stars/ProductStars'
import ErrorNotification from '../../notifications/error_notification/ErrorNotification'
import './item.css'

const Item = () => {
    const [item, setItem] = useState('')
    const [item_number, setItemNumber] = useState(1)
    const [error_displayed, setErrorMessage] = useState('')

    let params = useParams()

    useEffect(() => {
        const fetch_item = async () => {
            const fetched_item = await ItemServices.getItem(params.id)
            setItem(fetched_item)
        }
        fetch_item()
    }, [params.id])


    let error_message = <ErrorNotification message={error_displayed} />
    const available_in_cart = <div className="available_in_cart">1 of this item is currently in your cart</div>

    const increase_quantity = () => {
        if (item_number === item.stockCount) {
            setErrorMessage('Insufficient stock!')
        } else {
            if (item_number <= item.stockCount && item_number > 0) {
                setErrorMessage('')
            }
            setItemNumber(item_number+1)
        }
    }

    const decrease_quantity = () => {
        if (item_number <= 1) {
            setErrorMessage('Invalid number of items')
        } else {
            if (item_number <= item.stockCount && item_number > 0) {
                setErrorMessage('')
            }
            setItemNumber(item_number-1)
        }
    }

    return <div className='row item'>
                <div className="col-sm image_wrapper">
                    <img className="float-sm-right mt-4" src={item.imageUrl} alt={item.name}/>
                </div>
                <div className="col-sm description">
                    <p><strong>{item.name}</strong></p>
                    <ProductStars average_rating={item.avgRating} />
                    <hr className="line"></hr>
                    <p>{item.description}</p>
                    <p className="my-2"><strong>${item.price}</strong></p>
                    <div>Quantity: <span className="quantity">{item_number}</span></div>
                    <div className="my-2">
                        <button className="ml-4 bg-primary" onClick={decrease_quantity}>-</button>
                        <button className="ml-3 bg-primary" onClick={increase_quantity}>+</button>
                    </div>
                    <div className="my-3"><button>Add to Cart</button></div>
                    {error_displayed && error_message}
                    {available_in_cart}
                </div>
            </div>
}

export default Item