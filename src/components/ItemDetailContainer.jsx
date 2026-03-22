import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getDetail } from "../firebase/db";
import Loader from "./Loader";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
      getDetail(id)
        .then(detail => setItem(detail))
  }, [id]);

  if (!item) return <Loader />;

  return (
    <ItemDetail item={item} />
  )
};

export default ItemDetailContainer;