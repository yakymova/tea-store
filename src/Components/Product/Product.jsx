import { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductSlider from "./ProductSlider";

const Product = () => {
    const [product, setProduct] = useState('');
    const [isProductInCart, setIsProductInCart] = useState(false);
    let { productId } = useParams();

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/yakymova/json-for-tea/products/${productId}`)
            .then(response => setProduct(response.data));
    }, [productId])


    const addProductInCart = () => {
        setIsProductInCart(true);
    }

    const deleteProductFromCart = () => {
        setIsProductInCart(false);
    }

    return (
        <section className="product__container">
            <div className="product">
                <ProductSlider images={product.images} />
                {/* <div className="product__image">
                    <img src={product.images} alt={`product-id ${product.id}`} />
                </div> */}
                <div className="product__content">
                    <h4 className="product__title">{product.title}</h4>
                    <p className="product__price">$ {product.price}</p>

                    <div className="product__rating">
                        <p><span>Rating: </span>{product?.rating?.rate}</p>
                        <p><span>Number of ratings: </span>{product?.rating?.count}</p>
                    </div>

                    <p className="product__category"><span>Categories: </span>{product.category}</p>
                    <p className="product__text">{product.description}</p>
                    {isProductInCart
                        ? <button className="product__btn added" onClick={() => deleteProductFromCart()}>added to cart</button>
                        : <button className="product__btn" onClick={() => addProductInCart()}>add to cart</button>

                    }
                </div>
            </div>
        </section>
    )
}

export default Product;