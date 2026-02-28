import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {

  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    setLoading(true);

    const url = categoryName
      ? `https://dummyjson.com/products/category/${categoryName}`
      : "https://dummyjson.com/products?limit=36";

    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data.products));
      setLoading(false);

  }, [categoryName]);

  return (
    <div className="container mt-4">
      {loading ? <Loader /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;