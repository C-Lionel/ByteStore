import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <Container className="mt-5">
            <Card className="shadow-lg p-4">
                <Row className="align-items-center">

                    {/* Img */}

                    <Col md={6} className="text-center">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="img-fluid"
                            style={{ maxHeight: "400px", objectFit: "contain" }}
                        />
                    </Col>

                    {/* Info */}

                    <Col md={6}>
                        <h2>{item.title}</h2>

                        <Badge bg="secondary" className="mb-2">
                            {item.category}
                        </Badge>

                        <p className="text-muted">{item.description}</p>

                        <h4 className="fw-bold">${item.price}</h4>

                        <p>
                            ⭐ {item.rating} | Stock disponible: {item.stock}
                        </p>

                        <ItemCount
                            stock={item.stock}
                            initial={1}
                        />
                    </Col>

                </Row>
            </Card>
        </Container>
    )
};

export default ItemDetail;