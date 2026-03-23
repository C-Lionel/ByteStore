import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from "../firebase/db";
import { useCart } from "../custom-hooks/useCart";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";


const CheckoutContainer = () => {

  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!cart.length) {
      toast.warning("🛒 Tu carrito está vacío", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "colored",
      });
      return;
    }

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    createOrder({
      user: { email, name, address, phone },
      items: cart,
      total: getCartTotal(),
      time: serverTimestamp()
    }, clearCart, navigate)
  }

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "85vh", backgroundColor: "#f5f5f5" }}
    >
      <Row>
        <Col>
          <Card
            className="p-4 shadow-sm"
            style={{
              width: "380px",
              borderRadius: "12px",
              border: "1px solid #e5e5e5",
            }}
          >
            <h4 className="mb-4 text-center fw-semibold">
              Finalizá tu compra
            </h4>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="text-muted small">Email</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="email@email.com"
                  required
                  style={{ borderRadius: "8px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-muted small">Nombre</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Juan Pérez"
                  required
                  style={{ borderRadius: "8px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-muted small">Dirección</Form.Label>
                <Form.Control
                  id="address"
                  type="text"
                  placeholder="Calle 123"
                  required
                  style={{ borderRadius: "8px" }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="text-muted small">Teléfono</Form.Label>
                <Form.Control
                  id="phone"
                  type="text"
                  placeholder="+54 9 11 1234 5678"
                  required
                  style={{ borderRadius: "8px" }}
                />
              </Form.Group>

              <div className="d-grid">
                <Button
                  type="submit"
                  variant="dark"
                  size="lg"
                  style={{
                    borderRadius: "8px",
                    padding: "10px",
                    fontWeight: "500",
                  }}
                >
                  Finalizar compra
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutContainer;