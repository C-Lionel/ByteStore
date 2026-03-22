import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const CheckoutContainer = () => {
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

            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="text-muted small">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email@email.com"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-muted small">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Juan Pérez"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-muted small">Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Calle 123"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="text-muted small">Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+54 9 11 1234 5678"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Group>

              <div className="d-grid">
                <Button
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