import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router";

const CartWidget = () => {

  const {getCartQuantity} = useContext(CartContext);
  const quantity = getCartQuantity()
  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
        <FontAwesomeIcon className='text-white' icon={faCartShopping} size="lg" />
        <Badge bg="danger"> {quantity} </Badge>
      </div>
    </Link>
  );
};

export default CartWidget;