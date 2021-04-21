import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import {CartContext} from '../../../context/CartContext'
import CartItem from './cartItem/CartItem'
import Notification from '../../notifications/Notification'
import './cart.css'

const Cart = () => {
    const [cartItems, setCartItems] = useContext(CartContext)
    const [notification, setNotification] = useState({})

    useEffect(() => {
        if (cartItems.length === 0) {
            notify({
                message: "Cart empty for now",
                class: "alert alert-danger"
            })
        }
    }, [])
    
    const notify = (notification) => {
        setNotification(notification)
        setTimeout(() => {
            setNotification({})
        }, 5000)
    }

    const history = useHistory()

    const updateIncreaseCartItem = (item) => {
        // find item in cart
        const itemInCartToUpdate = cartItems.find(i => i._id === item._id)
        // find it's index, this is to put that item back at that index
        const indexOfItemInCartToUpdate = cartItems.findIndex(i => i._id === item._id);
        // update the item's quantity and total price
        const updatedItemInCart = {
            ...itemInCartToUpdate,
            quantity: itemInCartToUpdate.quantity + 1,
            total_price: itemInCartToUpdate.total_price + itemInCartToUpdate.price 
        }
        // create a new array of cart items by maintaining all the other items and replacing
        // the item updated to it's exact index
        const newCartItems = cartItems.map((item, i) =>  {
            if (i === indexOfItemInCartToUpdate) {
                return updatedItemInCart
            }
            return item
        })
        setCartItems(newCartItems)
    }

    const updateDecreaseCartItem = (item) => {
        // find item in cart
        const itemInCartToUpdate = cartItems.find(i => i._id === item._id)
        // find it's index, this is to put that item back at that index
        const indexOfItemInCartToUpdate = cartItems.findIndex(i => i._id === item._id);
        // update the item's quantity and total price
        const updatedItemInCart = {
            ...itemInCartToUpdate,
            quantity: itemInCartToUpdate.quantity - 1,
            total_price: itemInCartToUpdate.total_price - itemInCartToUpdate.price 
        }

        // create a new array of cart items by maintaining all the other items and replacing
        // the item updated to it's exact index
        const newCartItems = cartItems.map((item, i) =>  {
            if (i === indexOfItemInCartToUpdate) {
                return updatedItemInCart
            }
            return item
        })
        setCartItems(newCartItems)
    }

    const remove =(id) => {
        const newCartItems = cartItems.filter(item => item._id !== id)
        setCartItems(newCartItems)
    }

    const checkout = () => {
        setCartItems([])
        history.push('/thankyou')
    }

    // Extract all total prices and compute the total price for all items in the cart
    const total_prices_array = cartItems.map(cart_item => cart_item.total_price)
    const all_total_prices = total_prices_array.length !== 0 ? total_prices_array.reduce((acc, current_val) => acc + current_val) : null

    return (<div className="row">
                <div className="col">
                    {notification ? <div className="row">
                                                <div className={`col-sm-6 offset-sm-3 ${notification.class}`} role="alert">
                                                    <Notification message={notification.message} />
                                                </div>
                                            </div> : null}
                    <div className="row">
                        <div className="col py-5 mx-4">
                            <div className="row">
                                <div className="col-sm-8 offset-sm-2 p-0">
                                    <h1 className="py-5">Shopping Cart</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-8 offset-xs-2 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                                    <ul className="list-group cart-list">
                                        {cartItems.map(item => {
                                            return <CartItem
                                                        key={item._id}
                                                        item={item}
                                                        notify={notify}
                                                        increaseItem={updateIncreaseCartItem}
                                                        decreaseItem={updateDecreaseCartItem}
                                                        remove={remove}>{item.name}
                                                    </CartItem>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-8 offset-xs-2 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                                    <div className="row py-5">
                                        <div className="col"><button className="btn btn-lg checkout-btn" onClick={checkout}><strong>Checkout</strong></button></div>
                                        <div className="col d-flex justify-content-end "><h4><strong>Total: ${all_total_prices}</strong></h4></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
}

export default Cart