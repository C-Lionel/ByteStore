
import { useCart } from "../custom-hooks/useCart";
import CartList from "./CartList";

const CartContainer = () => {

    const cartData = useCart();

    return (
       <CartList {...cartData} />
    );
};

export default CartContainer;