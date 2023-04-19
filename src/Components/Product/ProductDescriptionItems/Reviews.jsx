import StarRating from "../../StarRating/StarRating";
import NewReview from "./NewReview";


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

            <NewReview />
        </div>
    )
}

export default Reviews;