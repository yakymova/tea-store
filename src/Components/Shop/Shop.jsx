import Products from '../Products/Products';
import Options from './Options/Options';
import './Shop.css';

const Shop = () => {
    return (
        <section className="shop">
            <div className="shop__container">
                <h1 className='shop__title'>Our goods</h1>
                <div className="shop__content">
                    <Options />
                    <Products />
                </div>
            </div>
        </section>
    )
}

export default Shop;