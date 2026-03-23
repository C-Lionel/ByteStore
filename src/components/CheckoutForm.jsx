import { Form, Button } from "react-bootstrap";

const CheckoutForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      name: e.target.name.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    onSubmit(data);
  };

  return (
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
  );
};

export default CheckoutForm;