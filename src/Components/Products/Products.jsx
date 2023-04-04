import { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/yakymova/json-for-tea/products')
            .then(response => setProducts(response.data));
    }, [])

    return (
        <div className="products__container">
            {
                products.map(product => {
                    return (
                        <div className="products__item item-products">
                            <div className="item-products__image">
                                <img src={product.images[0]} alt={`product-id ${product.id}`} />
                                <button className="item-products__btn">add to cart</button>
                            </div>
                            <h4 className="item-products__title">{product.title}</h4>
                            <p className="item-products__price">$ {product.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;