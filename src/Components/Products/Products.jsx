import { NavLink } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';


const Products = (props) => {
    const { products, cart, addToCart, removeFromCart } = props;
    console.log(props);
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

                                {
                                    cart.filter(item => item.id === product.id).length > 0
                                        ? <button className="item-products__btn added" onClick={removeFromCart.bind(this, product.id)}>in cart</button>
                                        : <button className="item-products__btn" onClick={addToCart.bind(this, product)}>add to cart</button>
                                }

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
