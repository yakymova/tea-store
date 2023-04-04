import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css';
import Slider from "react-slick";

const SimpleSlider = ({ data }) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 900,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    return (
        <div className="slider__container">
            <Slider {...settings}>
                {
                    data.map(el => {
                        return (
                            <div className={`slide-id${el.id}`}>
                                <div className='slide-img' style={{ backgroundImage: `url(${el.image})` }}>
                                    <div className="slide__content">
                                        <h3 className='slide__title'>
                                            {el.title}
                                        </h3>
                                        <p className='slide__text'>
                                            {el.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default SimpleSlider;