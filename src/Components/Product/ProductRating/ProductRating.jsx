import './ProductRating.css';

const ProductRating = () => {
    return (
        <div className="rating">
            <div className="rating__items">
                <input className="rating__item" name="rating" id="rating-5" type="radio" value="5" />
                <label htmlFor="rating-5" className="rating__label"></label>
                <input className="rating__item" name="rating" id="rating-4" type="radio" value="4" />
                <label htmlFor="rating-4" className="rating__label"></label>
                <input className="rating__item" name="rating" id="rating-3" type="radio" value="3" />
                <label htmlFor="rating-3" className="rating__label"></label>
                <input className="rating__item" name="rating" id="rating-2" type="radio" value="2" checked />
                <label htmlFor="rating-2" className="rating__label"></label>
                <input className="rating__item" name="rating" id="rating-1" type="radio" value="1" disabled />
                <label htmlFor="rating-1" className="rating__label"></label>
            </div>
        </div>
    )
}

export default ProductRating;