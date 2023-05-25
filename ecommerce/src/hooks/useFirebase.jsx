import {useState} from 'react'
import {collection, getDocs} from "firebase/firestore";
import {db} from "../services/firebase.config";

const UseFirebase = () => {

    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        try {
            const col = collection(db, 'products');
            const data = await getDocs(col);
            const result = data.docs.map(doc => doc={id:doc.id,...doc.data()});
            setProducts(result);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        getProducts,
        products
    }
}
export default UseFirebase
