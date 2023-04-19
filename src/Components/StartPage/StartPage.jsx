import FullScreenBlock from './FullScreenBlock/FullScreenBlock';
import LatestShopping from './LatestShopping/LatestShopping';
import OurNews from './OurNews/OurNews';
import SimpleSlider from './Slider/SimpleSlider';
import './StartPage.css';

const StartPage = ({ startPage }) => {
    return (
        <div className='main'>
            <FullScreenBlock data={startPage} />
            <div className="start-page-content" name='start'>
                <SimpleSlider data={startPage.slider} />
                <LatestShopping />
                <OurNews news={startPage.news} />
            </div>
        </div>
    )
}

export default StartPage;