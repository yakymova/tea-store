import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const ProductsItem = ({ product }) => {
    const [isProductInCart, setIsProductInCart] = useState(false);
    let navigate = useNavigate();

    const selectProduct = (productId) => {
        navigate(`product/${productId}`)
    }

    const addProductInCart = () => {
        setIsProductInCart(true);
    }

    const deleteProductFromCart = () => {
        setIsProductInCart(false);
    }

    return (
        <div className="products__item item-products">
            <div className="item-products__image">
                <img src={product.images[0]} alt={`product-id ${product.id}`} onClick={() => selectProduct(product.id)} />
                {isProductInCart
                    ? <button className="item-products__btn added" onClick={() => deleteProductFromCart()}>delete from cart</button>
                    : <button className="item-products__btn" onClick={() => addProductInCart()}>add to cart</button>

                }
            </div>
            <h4 className="item-products__title" onClick={() => selectProduct(product.id)}>{product.title}</h4>
            <p className="item-products__price">$ {product.price}</p>
        </div>
    )
}

export default ProductsItem;