import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const CartItem = ({ product, removeItem, updateItemQuantity }) => {

    return (
        <Card className="mb-3 shadow-sm">

            <Card.Body>

                <Row className="align-items-center">

                    <Col md={2}>
                        <Card.Img
                            src={product.thumbnail}
                            style={{ maxHeight: "80px", objectFit: "contain" }}
                        />
                    </Col>

                    <Col md={3}>
                        <Card.Title className="mb-1">
                            {product.title}
                        </Card.Title>

                        <small className="text-muted">
                            Precio: ${product.price}
                        </small>
                    </Col>

                    <Col md={3}>

                        <ButtonGroup>

                            <Button
                                variant="outline-secondary"
                                onClick={() =>
                                    updateItemQuantity(product.id, product.count - 1)
                                }
                            >
                                -
                            </Button>

                            <Button variant="light" disabled>
                                {product.count}
                            </Button>

                            <Button
                                variant="outline-secondary"
                                onClick={() =>
                                    updateItemQuantity(product.id, product.count + 1)
                                }
                            >
                                +
                            </Button>

                        </ButtonGroup>

                    </Col>

                    <Col md={2}>
                        <strong>
                            ${(product.price * product.count).toFixed(2)}
                        </strong>
                    </Col>

                    <Col md={2} className="text-end">

                        <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => removeItem(product.id)}
                        >
                            Eliminar
                        </Button>

                    </Col>

                </Row>

            </Card.Body>

        </Card>
    );
};

export default CartItem;