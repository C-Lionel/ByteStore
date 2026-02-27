import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const NavBarContainer = () => {

  const [categories, setCategories] = useState([]);

  const categoryMap = {
    smartphones: "Smartphones",
    laptops: "Notebooks",
    tablets: "Tablets",
    "mobile-accessories": "Accesorios",
    furniture: "Ergonomía"
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then(res => res.json())
      .then(data => {
        const allowedCategories = Object.keys(categoryMap);

        const filtered = data.filter(cat =>
          allowedCategories.includes(cat)
        );

        setCategories(filtered);
      });
  }, []);

  return (
    <NavBar
      categories={categories}
      categoryMap={categoryMap}
    />
  );
};

export default NavBarContainer;