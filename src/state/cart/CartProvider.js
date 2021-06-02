import { createContext, useContext, useReducer } from "react";
import { cartInitialState, cartReducer } from './cartReducer'

export const CartContext = createContext()

export const CartProvider = (props) => {

    const [state, dispacth] = useReducer(cartReducer, cartInitialState)

    return <CartContext.Provider value={{ cartItems: state, cartDispatch: dispacth }}>
                {props.children}
            </CartContext.Provider>
}

export const useCartState = () => {
    return useContext(CartContext)
}