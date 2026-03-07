import { CartContext } from "./CartContext";

const CartProvider = ({children}) => {

    const pepito = 'pepito';

    return (
        <CartContext.Provider value={pepito}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;