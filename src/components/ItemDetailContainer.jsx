import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "./loader";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  if (!item) return <Loader />;

  return (
    <ItemDetail item={item} />
  )
};

export default ItemDetailContainer;