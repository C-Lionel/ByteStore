import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";

const ItemCount = ({ stock = 10, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const handleSumar = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleRestar = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <Card className="p-3 shadow-sm mt-3">
            <div className="d-flex flex-column align-items-center gap-3">

                <h6 className="text-muted">
                    Stock disponible: {stock}
                </h6>

                <ButtonGroup>
                    <Button
                        variant="outline-dark"
                        onClick={handleRestar}
                        disabled={count <= 1}
                    >
                        −
                    </Button>

                    <Button variant="light" disabled style={{ minWidth: "60px" }}>
                        {count}
                    </Button>

                    <Button
                        variant="outline-dark"
                        onClick={handleSumar}
                        disabled={count >= stock}
                    >
                        +
                    </Button>
                </ButtonGroup>

                <Button
                    variant="primary"
                    size="lg"
                    className="w-100 mt-3 fw-semibold"
                    disabled={stock === 0}
                >
                    Agregar al carrito
                </Button>

            </div>
        </Card>
    );
};

export default ItemCount;