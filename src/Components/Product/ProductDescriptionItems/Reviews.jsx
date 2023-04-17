import StarRating from "../../StarRating/StarRating";

const Reviews = ({ reviews, title }) => {
    return (
        <div className="content">
            <div className="content__reviews reviews">
                <h3 className="reviews__title">
                    {reviews.length} Reviews for {title}
                </h3>
                {
                    reviews.map((item, ind) => {
                        return <div className="reviews__item" key={ind}>
                            <p className="reviews__name">{item.name}</p>
                            <span className="reviews__date">{item.date}</span>
                            <div className="reviews__rating">
                                <StarRating starsSelected={item.grade} />
                            </div>
                            <p className="reviews__text">{item.text}</p>
                        </div>
                    })
                }
            </div>
            <div className="content__new-review new-review">
                <h3 className="new-review__title">Add a Review</h3>
                <p className="new-review__comment">Your email address will not be published. Required fields are marked *</p>
                <form action="" className="new-review__form form-review">
                    <label htmlFor="review">Your Review*</label>
                    <textarea name="review-text" id="review" className="form-review__text"></textarea>

                    <label htmlFor="name">Enter your name*</label>
                    <input type="text" id="name" className="form-review__name" />

                    <label htmlFor="email">Enter your Email*</label>
                    <input type="email" name="email" id="email" className="form-review__email" />

                    <label className="form-review__checkbox-label">
                        <input type="checkbox" className="form-review__checkbox" name="save-email" />Save my name, email, and website in this browser for the next time I comment
                        <span className="form-review__custom-checkbox"></span>
                    </label>

                    <p className="form-review__rating-title">Your Rating*</p>
                    <StarRating onlyRead={false} />

                    <input type="submit" className="form-review__btn" value='Submit' />
                </form>
            </div>
        </div>
    )
}

export default Reviews;