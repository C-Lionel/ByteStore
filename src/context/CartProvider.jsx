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
                if (element.id === product.id) return { ...element, count: element.count + product.count }
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

    const removeItem = (id) => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateItemQuantity = (id, quantity) => {

        if (quantity < 1) return;

        const updatedCart = cart.map(product => {
            if (product.id === id) {
                return { ...product, count: quantity };
            }
            return product;
        });

        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, getCartQuantity, removeItem, clearCart, updateItemQuantity }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;