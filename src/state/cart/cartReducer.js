import * as cartTypes from './cartActionTypes'

export const cartInitialState = []

export const cartReducer = (state, action) => {
    switch (action.type) {
        case cartTypes.ADDTOCART:
            // If item in cart, find it and update its quantity
            const itemInCart = state.find(i => i._id === action.data._id)
            if (itemInCart) {
                const updatedItemInCart = {
                    ...itemInCart,
                    quantity: itemInCart.quantity + 1,
                    total_price: action.data.total_price + action.data.price 
                }
                const filteredCartItems = state.filter(i => i._id !== itemInCart._id)
                return [...filteredCartItems, updatedItemInCart]
            } else {  // else add it to cart
                const item = action.data
                const itemToAddToCart = {
                    ...item,
                    quantity: item.item_number,
                    total_price: item.item_number*item.price
                }
                return [...state, itemToAddToCart]
            }

        case cartTypes.REMOVEFROMCART:
            const IDToRemove = action.data
            const newCartItems = state.filter(item => item._id !== IDToRemove)

            return newCartItems
        
        case cartTypes.INCREASECARTITEM:
            const itemToIncrease = action.data
            // find item in cart
            const itemInCartToIncrease = state.find(i => i._id === itemToIncrease._id)
            // find it's index, this is to put that item back at that index
            const indexOfItemInCartToIncrease = state.findIndex(i => i._id === itemToIncrease._id);
            // update the item's quantity and total price
            const updatedItemInCart = {
                ...itemInCartToIncrease,
                quantity: itemInCartToIncrease.quantity + 1,
                total_price: itemInCartToIncrease.total_price + itemInCartToIncrease.price 
            }
            // create a new array of cart items by maintaining all the other items and replacing
            // the item updated to it's exact index
            const newIncreasedCartItems = state.map((item, i) =>  {
                if (i === indexOfItemInCartToIncrease) {
                    return updatedItemInCart
                }
                return item
            })

            return newIncreasedCartItems

        case cartTypes.DECREASECARTITEM:
            const item = action.data
            // find item in cart
            const itemInCartToDecrease = state.find(i => i._id === item._id)
            // find it's index, this is to put that item back at that index
            const indexOfItemInCartToDecrease = state.findIndex(i => i._id === item._id);
            // update the item's quantity and total price
            const decreasedItemInCart = {
                ...itemInCartToDecrease,
                quantity: itemInCartToDecrease.quantity - 1,
                total_price: itemInCartToDecrease.total_price - itemInCartToDecrease.price 
            }

            // create a new array of cart items by maintaining all the other items and replacing
            // the item updated to it's exact index
            const newDecreasedCartItems = state.map((item, i) =>  {
                if (i === indexOfItemInCartToDecrease) {
                    return decreasedItemInCart
                }
                return item
            })
            return newDecreasedCartItems
        
        case cartTypes.INITCART:
            return cartInitialState

        default:
            return state;
    }
}