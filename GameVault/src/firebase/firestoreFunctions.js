import { collection, getDocs, getDoc, doc, query, where, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Obtener todos los productos
export const getProducts = async () => {
  const productsSnapshot = await getDocs(collection(db, "products"));
  return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Obtener productos por categoría
export const getProductsByCategory = async (category) => {
  const q = query(collection(db, "products"), where("category", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Obtener detalles de un producto por ID
export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const productSnap = await getDoc(docRef);
  return { id: productSnap.id, ...productSnap.data() };
};

// Crear orden de compra
export const createOrder = async (orderData) => {
  const orderRef = await addDoc(collection(db, "orders"), orderData);
  return orderRef.id;
};
