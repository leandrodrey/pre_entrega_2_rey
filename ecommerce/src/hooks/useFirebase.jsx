import {useState} from 'react'
import {collection, getDoc, getDocs, addDoc, doc, where, query} from "firebase/firestore";
import {db} from "../services/firebase.config";
import item from "../items.json";
import useLoader from "./useLoader";

const UseFirebase = () => {

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const {startLoader, stopLoader} = useLoader();

    const getFirestore = (path) => {
        return collection(db, path);
    }
    const getProducts = async () => {
        startLoader();
        try {
            const col = collection(db,"products")
            const data = await getDocs(col);
            const result = data.docs.map(doc => doc={id:doc.id,...doc.data()});
            setProducts(result);
            /*setProducts(item);*/
        } catch (error) {
            console.log(error);
        } finally {
            stopLoader();
        }
    }

    const getProductById = async (id) => {
        startLoader();
        try {
            const document = doc(db,"products", id)
            const response = await getDoc(document)
            const result = response.data()
            setProduct({id:response.id,...result})
            /*const randomItem = await item[Math.floor(Math.random() * item.length)];
            setProduct(randomItem);*/
        } catch (error) {
            console.log(error);
        } finally {
            stopLoader();
        }
    }

    const getProductsByCategoryId = async (categoryId) => {
        startLoader();
        try {
            const documents = query(collection(db, 'products'), where('categoryId', '==', categoryId));
            const data = await getDocs(documents)
            const result = data.docs.map(doc => doc={id:doc.id,...doc.data()});
            setProducts(result);
            //const filteredItem = results.filter((item) => item.categoryId === categoryId);
        } catch (error) {
            console.log(error);
        } finally {
            stopLoader();
        }
    }

    const handleSubmit = async (e, form) => {
        e.preventDefault();
        const col = collection(db,"orders");
        const order = await addDoc(col, form);
        console.log(order);
    }

    return {
        getProducts,
        getProductsByCategoryId,
        products,
        getProductById,
        product,
        handleSubmit
    }
}
export default UseFirebase;
