import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getCategories } from "../firebase/db";


const NavBarContainer = () => {

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {

    getCategories()
      .then(cats => setCategories(cats))

  }, []);

  return (
    <NavBar
      categories={categories}
    />
  );
};

export default NavBarContainer;