import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: "80vh" }}>
      
      <FaExclamationTriangle size={70} className="text-warning mb-4" />

      <h1 className="display-4 fw-bold">404</h1>

      <h3 className="mb-3">Página no encontrada</h3>

      <p className="text-muted mb-4" style={{ maxWidth: "400px" }}>
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </p>

      <Button as={Link} to="/" variant="dark">
        Volver al inicio
      </Button>

    </Container>
  );
};

export default NotFound;