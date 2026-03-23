import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";

const ItemCount = ({ stock = 10, initial = 1, item }) => {

    const [count, setCount] = useState(initial);

    const { addToCart } = useContext(CartContext)

    const handleSumar = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleRestar = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAddToCart = () => {
        addToCart({ ...item, count });
        toast.success('✔ Producto agregado al carrito', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "dark",
            style: {
                borderRadius: "10px",
                fontWeight: "500",
            }
        });
    }

    return (
        <Card className="p-3 shadow-sm mt-3">
            <div className="d-flex flex-column align-items-center gap-3">

                <h6 className="text-muted">
                    Stock disponible: {stock}
                </h6>

                <ButtonGroup>
                    <Button
                        variant="danger"
                        onClick={handleRestar}
                        disabled={count <= 1}
                    >
                        −
                    </Button>

                    <Button variant="light" disabled style={{ minWidth: "60px" }}>
                        {count}
                    </Button>

                    <Button
                        variant="success"
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
                    onClick={handleAddToCart}
                >
                    Agregar al carrito
                </Button>

            </div>
        </Card>
    );
};

export default ItemCount;