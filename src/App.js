import React, { useState } from 'react';
//import Products from './component/Products/Products';
//import Navbar from './component/Navbar/Navbar';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './component'
import { useEffect } from 'react';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    useEffect(() =>{
        fetchProducts();
    },[]);
    console.log(products)
    return (
        <div>
            <Navbar />
            <Products products={products}/>
        </div>
    )
}
export default App;