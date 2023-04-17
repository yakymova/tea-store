// import { useEffect, useState } from "react";
import "./Product.css";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import ProductSlider from "./ProductSlider";
import StarRating from "../StarRating/StarRating";
import AditionalInformation from './ProductDescriptionItems/AditionalIformation';
import Description from './ProductDescriptionItems/Description';
import Reviews from './ProductDescriptionItems/Reviews';


const Product = (props) => {
    const { product, amount, reviews, changeAmountDecrement, changeAmountIncrement, menuItem, changeMenuItemInDescription } = props;
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
                        <StarRating starsSelected={product?.rating?.rate} countRatings={product?.rating?.count} />
                        {/* <p>{product?.rating?.count}<span> customer review</span></p> */}
                    </div>

                    <p className="product__category"><span>Categories: </span>{product.category}</p>
                    <p className="product__text">{product.description}</p>

                    <div className="product__amount amount-prod">
                        <div className="amount-prod__block">
                            <button className="amount-prod__decrement" onClick={changeAmountDecrement}>-</button>
                            <span className="amount-prod__amount">{amount}</span>
                            <button className="amount-prod__increment" onClick={changeAmountIncrement}>+</button>
                        </div>
                        <button className="product__btn" >add to cart</button>

                        {/* {isProductInCart
                            ? <button className="product__btn added" onClick={() => deleteProductFromCart()}>added to cart</button>
                            : <button className="product__btn" onClick={() => addProductInCart()}>add to cart</button>

                        } */}
                    </div>
                </div>

                <div className="product__description description-product">
                    <menu className="description-product__menu">
                        <button
                            id='description'
                            className={`description-product__btn ${menuItem === 'description' ? 'active' : ''}`}
                            onClick={(e) => changeMenuItemInDescription(e)}>
                            Description
                        </button>
                        <button
                            id='additionalInfo'
                            className={`description-product__btn ${menuItem === 'additionalInfo' ? 'active' : ''}`}
                            onClick={(e) => changeMenuItemInDescription(e)}>
                            Aditional information
                        </button>
                        <button
                            id='reviews'
                            className={`description-product__btn ${menuItem === 'reviews' ? 'active' : ''}`}
                            onClick={(e) => changeMenuItemInDescription(e)}>
                            Reviews({reviews?.length})
                        </button>
                    </menu>
                    <div className="description-product__content content">
                        {
                            menuItem === 'description' ? <Description text={product.description} />
                                : menuItem === 'additionalInfo' ? <AditionalInformation content={product.aditional} />
                                    : menuItem === 'reviews' ? <Reviews reviews={reviews} title={product.title} /> : ''
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;

// const Product = () => {
//     const [product, setProduct] = useState('');
//     const [isProductInCart, setIsProductInCart] = useState(false);
//     let { productId } = useParams();

//     const [reviews, setRewiews] = useState('');

//     useEffect(() => {
//         axios.get(`https://my-json-server.typicode.com/yakymova/json-for-tea/products/${productId}`)
//             .then(response => setProduct(response.data));

//         // setProduct(data.products[productId - 1]);
//         // setRewiews(data.reviews.filter(el => +el.productId === +productId));
//     }, [productId])


//     const addProductInCart = () => {
//         setIsProductInCart(true);
//     }

//     const deleteProductFromCart = () => {
//         setIsProductInCart(false);
//     }


//     const [menuItem, setMenuItem] = useState('description');

//     const changeMenuItemInDescription = (e) => {
//         setMenuItem(() => e.target.id)
//     }

//     const [amount, setAmount] = useState(1);

//     const changeAmountDecrement = () => {
//         if (amount > 1) setAmount(() => amount - 1)
//     }
//     const changeAmountIncrement = () => {
//         setAmount(() => amount + 1)
//     }

//     return (
//         <section className="product__container">
//             <div className="product">
//                 <ProductSlider images={product.images} />
//                 {/* <div className="product__image">
//                     <img src={product.images} alt={`product-id ${product.id}`} />
//                 </div> */}
//                 <div className="product__content">
//                     <h4 className="product__title">{product.title}</h4>
//                     <p className="product__price">$ {product.price}</p>

//                     <div className="product__rating">
//                         <StarRating starsSelected={product?.rating?.rate} countRatings={product?.rating?.count} />
//                         {/* <p>{product?.rating?.count}<span> customer review</span></p> */}
//                     </div>

//                     <p className="product__category"><span>Categories: </span>{product.category}</p>
//                     <p className="product__text">{product.description}</p>

//                     <div className="product__amount amount-prod">
//                         <div className="amount-prod__block">
//                             <button className="amount-prod__decrement" onClick={changeAmountDecrement}>-</button>
//                             <span className="amount-prod__amount">{amount}</span>
//                             <button className="amount-prod__increment" onClick={changeAmountIncrement}>+</button>
//                         </div>

//                         {isProductInCart
//                             ? <button className="product__btn added" onClick={() => deleteProductFromCart()}>added to cart</button>
//                             : <button className="product__btn" onClick={() => addProductInCart()}>add to cart</button>

//                         }
//                     </div>
//                 </div>

//                 <div className="product__description description-product">
//                     <menu className="description-product__menu">
//                         <button
//                             id='description'
//                             className={`description-product__btn ${menuItem === 'description' ? 'active' : ''}`}
//                             onClick={(e) => changeMenuItemInDescription(e)}>
//                             Description
//                         </button>
//                         <button
//                             id='additionalInfo'
//                             className={`description-product__btn ${menuItem === 'additionalInfo' ? 'active' : ''}`}
//                             onClick={(e) => changeMenuItemInDescription(e)}>
//                             Aditional information
//                         </button>
//                         <button
//                             id='reviews'
//                             className={`description-product__btn ${menuItem === 'reviews' ? 'active' : ''}`}
//                             onClick={(e) => changeMenuItemInDescription(e)}>
//                             Reviews({reviews[0]?.reviews?.length})</button>
//                     </menu>
//                     <div className="description-product__content content">
//                         {
//                             menuItem === 'description' ? <Description text={product.description} />
//                                 : menuItem === 'additionalInfo' ? <AditionalInformation content={product.aditional} />
//                                     : menuItem === 'reviews' ? <Reviews reviews={reviews} title={product.title} /> : ''
//                         }
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Product;