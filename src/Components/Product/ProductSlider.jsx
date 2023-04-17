import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductSlider = ({ images }) => {
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        pauseOnHover: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
    };


    return (
        <div className="product__slider">
            <Slider {...settings}>
                {
                    images?.map((img, ind) => <div className="product__image" key={ind}><img src={img} alt="product" /></div>)
                }
            </Slider>
        </div>
    )
}

export default ProductSlider;