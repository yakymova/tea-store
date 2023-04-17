import Product from "./Product";
import { useParams } from "react-router-dom";
import { getSelectedProductFromJson, getReviewsFromJson } from "../../api/api";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setReviews } from '../../Redux/actions/reviews';

const ProductContainer = (props) => {
    const [product, setProduct] = useState('');
    let productId = useParams();

    useEffect(() => {
        getSelectedProductFromJson(productId.productId)
            .then(pr => setProduct(pr));

        getReviewsFromJson(productId.productId)
            .then(rev => props.setReviews(rev));

    }, [productId])


    const [menuItem, setMenuItem] = useState('description');
    const changeMenuItemInDescription = (e) => {
        setMenuItem(() => e.target.id)
    }

    const [amount, setAmount] = useState(1);
    const changeAmountDecrement = () => {
        if (amount > 1) setAmount(() => amount - 1)
    }
    const changeAmountIncrement = () => {
        setAmount(() => amount + 1)
    }

    return (
        <Product product={product} amount={amount} reviews={props.reviews} menuItem={menuItem} changeMenuItemInDescription={changeMenuItemInDescription} changeAmountDecrement={changeAmountDecrement} changeAmountIncrement={changeAmountIncrement} />
    )
}
let mapStateToProps = (state) => {
    return {
        reviews: state.reviews.reviews
    }
}

export default connect(mapStateToProps, { setReviews })(ProductContainer);