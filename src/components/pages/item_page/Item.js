import React, { useState, useEffect, useContext } from "react";
import { CartContext } from '../../../context/CartContext' 

import { useParams } from 'react-router-dom'

import { getItem } from '../../../services/items'
import ProductStars from '../../stars/ProductStars'
import Notification from '../../notifications/Notification'
import './item.css'

const Item = () => {
    const [cartItems, setCartItems] = useContext(CartContext)
    const [item, setItem] = useState({})
    const [item_number, setItemNumber] = useState(1)
    const [error_displayed, setErrorMessage] = useState('')
    const [addedToCartMessage, setAddedToCartMessage] = useState(false)

    let params = useParams()

    const itemInCart = cartItems.find(cartItem => {
        return cartItem._id === item._id
    })

    useEffect(() => {
        const fetch_item = async () => {
            const fetched_item = await getItem(params.id)
            setItem(fetched_item)
        }
        fetch_item()
    }, [params.id])

    useEffect(() => {
        if (item.stockCount < 1) {
            setErrorMessage('Item no longer in stock')
        }
    }, [item.stockCount]) 

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

    const addToCart = () => {
        // If item in cart, find it and update its quantity
        const itemInCart = cartItems.find(i => i._id === item._id)
        if (itemInCart) {
            const updatedItemInCart = {
                ...itemInCart,
                quantity: itemInCart.quantity + 1,
                total_price: item.total_price + item.price 
            }
            const filteredCartItems = cartItems.filter(i => i._id !== itemInCart._id)
            setCartItems([...filteredCartItems, updatedItemInCart])
        } else {  // else add it to cart
            const itemToAddToCart = {
                ...item,
                quantity: item_number,
                total_price: item_number*item.price
            }
            setCartItems([...cartItems, itemToAddToCart])
        }

        setAddedToCartMessage(true)
        setItem({...item, stockCount: item.stockCount-item_number})
        setTimeout(() => {
            setAddedToCartMessage(false)
        }, 5000);
    }

    const stockStyle = item.stockCount < 1 ? "bg-danger " : "bg-success "

    // disable the button if stockCount is 0
    const disable = item.stockCount === 0 ? true : false
    const disableClass = item.stockCount === 0 ? 'disable-btn' : 'enable-btn'

    return (
        <div className='col'>
            <div className='row text-center'>
                {addedToCartMessage && 
                    <div className="col-md-6 offset-md-3 alert alert-success" role="alert">
                        <Notification message={`Added ${item_number} ${item.name} to Cart`} />
                    </div>
                }
            </div>
            <div className='row item'>
                <div className="col-sm image_wrapper">
                    <img className="float-sm-right mt-4" src={item.imageUrl} alt={item.name}/>
                </div>
                <div className="col-sm description">
                    <p><strong>{item.name}</strong></p>
                    <div><ProductStars average_rating={item.avgRating} /></div>
                    <hr className="line"></hr>
                    <p>{item.description}</p>
                    <p className="my-3"><strong>${item.price}</strong></p>
                    <div className="my-3">Available in stock: <span className={stockStyle + "px-3 py-1 text-white"}>{item.stockCount}</span></div>
                    <div>Quantity: <span className="quantity text-white">{item_number}</span></div>
                    <div className="my-3">
                        <button className="ml-4 bg-primary" onClick={decrease_quantity}>-</button>
                        <button className="ml-3 bg-primary" onClick={increase_quantity}>+</button>
                    </div>
                    <div className="my-3"><button className={disableClass} onClick={addToCart} disabled={disable}>Add to Cart</button></div>
                    {error_displayed && <div className="alert alert-danger" role="alert"><Notification message={error_displayed} /></div>}
                    {itemInCart && <div className="available_in_cart">1 of this item is currently in your cart</div>}
                </div>
            </div>
        </div>
    )
    
}

export default Item