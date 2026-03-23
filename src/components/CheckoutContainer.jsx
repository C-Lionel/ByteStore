import { Container, Row, Col, Card } from "react-bootstrap";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import { useCart } from "../custom-hooks/useCart";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import CheckoutForm from "./CheckoutForm";

const CheckoutContainer = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    if (!cart.length) {
      toast.warning("🛒 Tu carrito está vacío", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "colored",
      });
      return;
    }

    createOrder(
      {
        user: data,
        items: cart,
        total: getCartTotal(),
        time: serverTimestamp(),
      },
      clearCart,
      navigate
    );
  };

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

            <CheckoutForm onSubmit={handleSubmit} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutContainer;