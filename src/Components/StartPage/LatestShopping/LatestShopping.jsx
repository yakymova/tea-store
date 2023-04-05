import './LatestShopping.css';
import Products from '../../Products/Products';
import { NavLink } from 'react-router-dom';

const LatestShopping = () => {
    return (
        <section className='latest-shopping__container'>
            <div className="latest-shopping">
                <h2 className="latest-shopping__title">Shop The Latest</h2>
                <NavLink to='/shop' className='latest-shopping__link'>View all</NavLink>
            </div>
            <Products />
        </section>
    )
}

export default LatestShopping;