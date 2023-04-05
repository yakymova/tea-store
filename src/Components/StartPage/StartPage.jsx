// import Product from '../Product/Product';
import FullScreenBlock from './FullScreenBlock/FullScreenBlock';
import LatestShopping from './LatestShopping/LatestShopping';
import SimpleSlider from './Slider/SimpleSlider';
import './StartPage.css';

const StartPage = ({ startPage }) => {
    return (
        <div className='main'>
            <FullScreenBlock data={startPage} />
            <div className="start-page-content">
                <SimpleSlider data={startPage.slider} />
                <LatestShopping />
                {/* <Product /> */}
            </div>
        </div>
    )
}

export default StartPage;