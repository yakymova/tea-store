import { connect } from 'react-redux';
import { updateMessageBody, updateMessageName, setDate, sendMessage, setRating } from '../../../Redux/actions/reviews';
import StarRating from "../../StarRating/StarRating";

const NewReview = (props) => {
    const { updateMessageBody, updateMessageName, setDate, sendMessage, setRating } = props;

    const onSubmitForm = (e) => {
        e.preventDefault();

        let date = new Date().toLocaleDateString();
        setDate(date);

        sendMessage();
        e.target.reset();
    }

    const onSetRating = (e) => {
        setRating(e.target.dataset.starRate);
    }

    return (
        <div className="content__new-review new-review">
            <h3 className="new-review__title">Add a Review</h3>
            <p className="new-review__comment">Your email address will not be published. Required fields are marked *</p>
            <form onSubmit={(e) => onSubmitForm(e)} action="" className="new-review__form form-review">
                <label htmlFor="review">Your Review*</label>
                <textarea name="text" id="review" className="form-review__text" onChange={(e) => updateMessageBody(e.target.value)} required></textarea>

                <label htmlFor="name">Enter your name*</label>
                <input type="text" name="name" id="name" className="form-review__name" onChange={(e) => updateMessageName(e.target.value)} required />

                <label htmlFor="email">Enter your Email*</label>
                <input type="text" name="email" id="email" className="form-review__email" required />

                <label className="form-review__checkbox-label">
                    <input type="checkbox" className="form-review__checkbox" name="save-email" />Save my name, email, and website in this browser for the next time I comment
                    <span className="form-review__custom-checkbox"></span>
                </label>

                <p className="form-review__rating-title">Your Rating*</p>
                <div onClick={onSetRating}>
                    <StarRating onlyRead={false} />
                </div>

                <input type="submit" className="form-review__btn" value='Submit' />
            </form>
        </div>
    )
}

export default connect(null, { updateMessageBody, updateMessageName, setDate, sendMessage, setRating })(NewReview);