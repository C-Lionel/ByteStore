import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from "../components/ItemListContainer";
import NavBarContainer from "../components/NavbarContainer";
import Container from "react-bootstrap/Container";
import ItemDetailContainer from "../components/ItemDetailContainer";
import NotFound from "../components/NotFound";
import CartContainer from "../components/CartContainer";
import CheckoutContainer from "../components/CheckoutContainer";

const AppRouter = () => {

  return (
    <BrowserRouter>

      <NavBarContainer />

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/items/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>

    </BrowserRouter>
  );
};

export default AppRouter;