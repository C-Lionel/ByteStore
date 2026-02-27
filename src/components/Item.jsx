import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ product }) => {
  return (
    <Card
      style={{ width: '18rem' }}
      className="h-100 d-flex flex-column"
    >
      <Card.Img
        variant="top"
        src={product.thumbnail}
        style={{
          height: "200px",
          objectFit: "contain",
          backgroundColor: "#fff",
          padding: "12px"
        }}
      />

      <Card.Body className="d-flex flex-column">

        <Card.Title style={{ minHeight: "48px" }}>
          {product.title}
        </Card.Title>

        <Card.Text
          style={{
            minHeight: "60px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical"
          }}
        >
          {product.description}
        </Card.Text>

        <Card.Text>
          ⭐ {product.rating} | Stock: {product.stock}
        </Card.Text>

        <Card.Text className="fw-bold">
          ${product.price}
        </Card.Text>

        <Button variant="primary" className="mt-auto">
          Ver más
        </Button>

      </Card.Body>
    </Card>
  );
};

export default Item;