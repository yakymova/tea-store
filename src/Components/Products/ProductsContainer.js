// import { useEffect, useState } from 'react';
import './Products.css';
import Products from './Products';
import { getProductsFromJson } from '../../api/api';
// import { getProductsFromUrl } from '../../api/api';
import { setProducts } from '../../Redux/actions/products';
import React from "react";
import { connect } from "react-redux";

class ProductsContainer extends React.Component {

    componentDidMount() {
        getProductsFromJson(this.props.count)
            .then(res => this.props.setProducts(res))

        // getProductsFromUrl(this.props.count)
        //     .then(res => this.props.setProducts(res))
    }

    render() {
        return (
            <Products products={this.props.products} />
        )
    }
}

let filterProducts = (state, filterBy) => {
    if (filterBy === 'all') return state;

    return state.filter(el => el.category === filterBy)
}

let mapStateToProps = (state) => {
    return {
        products: filterProducts(state.products.products, state.filter.filterBy)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (products) => {
            let action = setProducts(products);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);


// const ProductsContainer = (props) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         // getProductsFromUrl(props.count)
//         //     .then(res => setProducts(res))

//         setProducts(getProductsFromJson(props.count));
//     }, [props.count])

//     return (
//         <div className="products">
//             {
//                 products.map(product => <Products product={product} key={product.id} />)
//             }
//         </div>
//     )
// }

// export default ProductsContainer;

