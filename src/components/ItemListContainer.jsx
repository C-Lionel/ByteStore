import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {

    const url = categoryName
      ? `https://dummyjson.com/products/category/${categoryName}`
      : "https://dummyjson.com/products";

    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data.products));

  }, [categoryName]);

  return (
    <div className="container mt-4">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;