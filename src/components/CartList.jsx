import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CartItem from "./CartItem";
import { Navigate, useNavigate } from "react-router";

const CartList = ({ cart, removeItem, clearCart, updateItemQuantity }) => {

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.count,
        0
    );
    const navigate = useNavigate()


    return (
        <Container className="mt-5">

            <h2 className="mb-4 text-center">Tu carrito</h2>

            {cart.length === 0 ? (
                <h5 className="text-center text-muted">
                    El carrito está vacío
                </h5>
            ) : (
                <Row className="justify-content-center">

                    <Col md={8}>

                        {cart.map(product => (
                            <CartItem
                                key={product.id}
                                product={product}
                                removeItem={removeItem}
                                updateItemQuantity={updateItemQuantity}
                            />
                        ))}

                        <Card className="shadow mt-4">

                            <Card.Body className="d-flex justify-content-between align-items-center">

                                <h4 className="mb-0">
                                    Total: ${totalPrice.toFixed(2)}
                                </h4>

                                <div className="d-flex gap-2">

                                    <Button
                                        variant="outline-danger"
                                        onClick={clearCart}
                                    >
                                        Vaciar carrito
                                    </Button>

                                    <Button
                                        variant="success"
                                        size="lg"
                                        onClick={() => navigate('/checkout')}
                                    >
                                        Completar datos
                                    </Button>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>
            )}

        </Container>
    );
};

export default CartList;