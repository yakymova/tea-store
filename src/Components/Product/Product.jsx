import { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";

const Product = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/yakymova/json-for-tea/products/5")
            .then(response => setProduct(response.data));
    }, [])

    console.log(product);
    return (
        <div className="product">
            <div className="product__image">
                <img src={product.images} alt={`product-id ${product.id}`} />
            </div>
            <div className="product__content">
                <h4 className="product__title">{product.title}</h4>
                <p className="product__price">$ {product.price}</p>
                {/* <div className="product__rating">
                    <span>{product.rating.rate}</span>
                    <span>{product.rating.count}</span>
                </div> */}
                <p className="product__text">{product.description}</p>
                <p className="product__category"><span>Categories: </span>{product.category}</p>
                <button className="product__btn">add to cart</button>
            </div>
        </div>
    )
}

export default Product;