import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <FontAwesomeIcon className='text-white' icon={faCartShopping} size="lg" />
      <Badge bg="danger">3</Badge>
    </div>
  );
};

export default CartWidget;

