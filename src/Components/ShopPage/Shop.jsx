import ProductsContainer from '../Products/ProductsContainer';
import Options from './Options/Options';

const Shop = (props) => {
    return (
        <section className="shop">
            <div className="shop__container">
                <h1 className='shop__title'>Our goods</h1>
                <div className="shop__content">
                    <Options {...props} />
                    <ProductsContainer />
                </div>
            </div>
        </section>
    )
}

export default Shop;