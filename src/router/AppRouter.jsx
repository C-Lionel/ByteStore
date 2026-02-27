import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from "../components/ItemListContainer";
import NavBarContainer from "../components/NavbarContainer";
import Container from "react-bootstrap/Container";

const AppRouter = () => {

  return (
    <BrowserRouter>

      <NavBarContainer />

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
        </Routes>
      </Container>

    </BrowserRouter>
  );
};

export default AppRouter;