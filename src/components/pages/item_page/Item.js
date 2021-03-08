import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom'

import ItemServices from '../../../services/items'
import FullStar from '../../stars/FullStart'
import HalfStar from '../../stars/HalfStar'
import EmptyStar from '../../stars/EmptyStar'
import ErrorNotification from '../../notifications/error_notification/ErrorNotification'
import './item.css'

const Item = () => {
    const [item, setItem] = useState('')
    const [item_number, setItemNumber] = useState(1)
    const [display_error, setDisplayError] = useState(false)
    const [error_displayed, setErrorMessage] = useState('')

    let params = useParams()

    useEffect(() => {
        const fetch_item = async () => {
            const fetched_item = await ItemServices.getItem(params.id)
            setItem(fetched_item)
        }
        fetch_item()
    }, [params.id])

    const getStars = () => {
        const stars = []

        const number_of_full_stars = Math.trunc(item.avgRating)
        const number_of_half_stars = item.avgRating % 1 > 0 ? 1 : 0
        const number_of_empty_stars = 5 - (number_of_full_stars+number_of_half_stars)

        for (let i = 0; i < number_of_full_stars; i++) {
            stars.push(<FullStar key={`full_star_${i}`}/>)
        }
        for (let i = 0; i < number_of_half_stars; i++) {
            stars.push(<HalfStar key={`half_star_${i}`}/>)
        }
        for (let i = 0; i < number_of_empty_stars; i++) {
            stars.push(<EmptyStar key={`empty_star_${i}`}/>)
        }
        return stars
    }

    let error_message = <ErrorNotification message={error_displayed} />
    const available_in_cart = <div className="available_in_cart">1 of this item is currently in your cart</div>

    const increase_quantity = () => {
        if (item_number === item.stockCount) {
            setErrorMessage('Insufficient stock!')
            setDisplayError(true)
        } else {
            setItemNumber(item_number+1)
        }
        if (item_number > 0 ) {
            setDisplayError(false)
        }
    }

    const decrease_quantity = () => {
        if (item_number <= 1) {
            setErrorMessage('Invalid number of items')
            setDisplayError(true)
        } else {
            setItemNumber(item_number-1)
        }
        if (item_number === item.stockCount) {
            setDisplayError(false)
        }
    }

    return <div className='row item'>
                <div className="col-sm image_wrapper">
                    <img className="float-sm-right mt-4" src={item.imageUrl} alt={item.name}/>
                </div>
                <div className="col-sm description">
                    <p><strong>{item.name}</strong></p>
                    <div>{getStars()}</div>
                    <hr className="line"></hr>
                    <p>{item.description}</p>
                    <p className="my-2"><strong>${item.price}</strong></p>
                    <div>Quantity: <span className="quantity">{item_number}</span></div>
                    <div className="my-2">
                        <button className="ml-4 bg-primary" onClick={decrease_quantity}>-</button>
                        <button className="ml-3 bg-primary" onClick={increase_quantity}>+</button>
                    </div>
                    <div className="my-3"><button>Add to Cart</button></div>
                    {display_error && error_message}
                    {available_in_cart}
                </div>
            </div>
}

export default Item