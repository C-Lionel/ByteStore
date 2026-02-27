import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <Row className="g-4">
      {items.map(product => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Item product={product} key={product.id} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;