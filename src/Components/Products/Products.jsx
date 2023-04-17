// import { useNavigate } from 'react-router-dom';
// import { useState } from "react";
import { NavLink } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';


const Products = ({ products }) => {

    return (
        <div className="products">
            {
                products && products.map(product => {
                    return (
                        <div className="products__item item-products" key={product.id}>
                            <StarRating starsSelected={product.rating.rate} countRatings={product.rating.count} />

                            <div className="item-products__image">
                                <NavLink to={`product/${product.id}`} >
                                    <img src={product.images} alt={`product-id ${product.id}`} />
                                </NavLink>
                                <button className="item-products__btn">add to cart</button>
                            </div>

                            <NavLink to={`product/${product.id}`} >
                                <h4 className="item-products__title">{product.title}</h4>
                            </NavLink>

                            <p className="item-products__price">$ {product.price}</p>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Products;




// const Products = ({ product }) => {
//     const [isProductInCart, setIsProductInCart] = useState(false);
//     let navigate = useNavigate();

//     const selectProduct = (productId) => {
//         navigate(`product/${productId}`)
//     }

//     const addProductInCart = () => {
//         setIsProductInCart(true);
//     }

//     const deleteProductFromCart = () => {
//         setIsProductInCart(false);
//     }

//     return (
//         <div className="products__item item-products">
//             <StarRating starsSelected={product?.rating?.rate} countRatings={product?.rating?.count} />
//             <div className="item-products__image">
//                 <img src={product.images} alt={`product-id ${product.id}`} onClick={() => selectProduct(product.id)} />
//                 {isProductInCart
//                     ? <button className="item-products__btn added" onClick={() => deleteProductFromCart()}>delete from cart</button>
//                     : <button className="item-products__btn" onClick={() => addProductInCart()}>add to cart</button>

//                 }
//             </div>
//             <h4 className="item-products__title" onClick={() => selectProduct(product.id)}>{product.title}</h4>
//             <p className="item-products__price">$ {product.price}</p>
//         </div>
//     )
// }

// export default Products;