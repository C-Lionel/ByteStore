import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {

        const isInCart = (product) => cart.some(el => el.id === product.id);

        if (!isInCart(product)) {
            setCart([...cart, product])
        } else {
            const copyCart = cart.map(element => {
                if (element.id === product.id) return {...element, count: element.count + product.count}
                return element;
            })
            setCart(copyCart)
        }
    }

    const getCartQuantity = () => {
        const initialValue = 0
        const total = cart.reduce((acc, current) => acc + current.count, initialValue)
        return total;
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getCartQuantity }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;