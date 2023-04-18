import React from "react";
import './Products.css';
import Products from './Products';
import { getProductsFromJson } from '../../api/api';
// import { getProductsFromUrl } from '../../api/api';
import { setProducts } from '../../Redux/actions/products';
import { connect } from "react-redux";
import { addToCart, removeFromCart } from '../../Redux/actions/cart';
import orderBy from 'lodash/orderBy';

class ProductsContainer extends React.Component {

    componentDidMount() {
        getProductsFromJson(this.props.count)
            .then(res => this.props.setProducts(res))

        // getProductsFromUrl(this.props.count)
        //     .then(res => this.props.setProducts(res))
    }

    render() {
        return (
            <Products {...this.props} />
        )
    }
}

let sortProducts = (products, sortBy) => {
    switch (sortBy) {
        case 'popular':
            return orderBy(products, 'rating.rate', 'desc');
        case 'price_low':
            return orderBy(products, 'price', 'asc');
        case 'price_high':
            return orderBy(products, 'price', 'desc');
        default:
            return products;
    }
};

let filterProducts = (state, filterBy, sortBy) => {
    if (filterBy === 'all') return sortProducts(state, sortBy);

    return sortProducts(state.filter(el => el.category === filterBy), sortBy)
}

let mapStateToProps = (state) => {
    return {
        products: filterProducts(state.products.products, state.filter.filterBy, state.filter.sortBy),
        cart: state.cart.items
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (products) => {
            let action = setProducts(products);
            dispatch(action);
        },
        addToCart: (product) => {
            dispatch(addToCart(product))
        },
        removeFromCart: (id) => {
            dispatch(removeFromCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);


