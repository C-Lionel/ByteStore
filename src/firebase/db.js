
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { app } from './config'

const db = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];

  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id })
  });

  return products;
}

export const getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const categories = [];

  querySnapshot.forEach((doc) => {
    categories.push(doc.data().name)
  });

  return categories;
}

export const getProductsByCategory = async (category) => {
  const q = query(collection(db, "products"), where("category", "==", category))
  const querySnapshot = await getDocs(q);
  const products = [];

  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id })
  });

  return products;
}

export const getDetail = async (id) => {

  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      ...docSnap.data(),
      id: docSnap.id
    }
  } else {
    console.error("No se encontro el detalle..")
  }
}

export const createOrder = async (order) => {
  const docRef = await addDoc(collection(db, "orders",), order)
  console.log("Document weitten with ID: ", docRef.id)
}