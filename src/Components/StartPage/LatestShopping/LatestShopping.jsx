import './LatestShopping.css';
import ProductsContainer from '../../Products/ProductsContainer';
import { NavLink } from 'react-router-dom';

const LatestShopping = () => {
    return (
        <section className='latest-shopping__container'>
            <div className="latest-shopping">
                <h2 className="latest-shopping__title">Shop The Latest</h2>
                <NavLink to='/shop' className='latest-shopping__link'>View all</NavLink>
            </div>
            <ProductsContainer count={4} />
        </section>
    )
}

export default LatestShopping;