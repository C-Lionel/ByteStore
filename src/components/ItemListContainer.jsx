import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../firebase/db";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {

  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
  setLoading(true);

  if (categoryName) {
  getProductsByCategory(categoryName)
    .then(prods => setItems(prods))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
} else {
  getProducts()
    .then(prods => setItems(prods))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
}

}, [categoryName]);

  return (
    <div className="container mt-4">
      {loading ? <Loader /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;