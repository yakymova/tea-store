import "./Product.css";
import ProductSlider from "./ProductSlider";
import StarRating from "../StarRating/StarRating";
import AditionalInformation from './ProductDescriptionItems/AditionalIformation';
import Description from './ProductDescriptionItems/Description';
import Reviews from './ProductDescriptionItems/Reviews';


const Product = (props) => {
    const { product, amount, reviews, addToCart, removeFromCart, changeAmountDecrement, changeAmountIncrement, menuItem, changeMenuItemInDescription } = props;
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
                    </div>

                    <p className="product__category"><span>Categories: </span>{product.category}</p>
                    <p className="product__text">{product.description}</p>

                    <div className="product__amount amount-prod">
                        <div className="amount-prod__block">
                            <button className="amount-prod__decrement" onClick={changeAmountDecrement}>-</button>
                            <span className="amount-prod__amount">{amount}</span>
                            <button className="amount-prod__increment" onClick={changeAmountIncrement}>+</button>
                        </div>

                        {
                            props.cart.filter(item => item.id === product.id).length > 0
                                ? <button className="product__btn added" onClick={removeFromCart.bind(this, product.id)}>in cart</button>
                                : <button className="product__btn" onClick={addToCart.bind(this, product)}>add to cart</button>
                        }

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