import { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';
import ProductsItem from './ProductsItem';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/yakymova/json-for-tea/products')
            .then(response => setProducts(response.data));
    }, [])

    fetch('https://tea-collection.herokuapp.com/types_of_tea/0')
        .then(response => response.json())
        .then(data => console.log(data));

    return (
        <div className="products">
            {
                products.map(product => <ProductsItem product={product} key={product.id} />)
            }
        </div>
    )
}

export default Products;