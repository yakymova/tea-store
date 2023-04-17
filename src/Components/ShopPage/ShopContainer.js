import React from 'react';
import './Shop.css';
import Shop from './Shop';
import { getCategoriesFromJson } from '../../api/api';
import { connect } from "react-redux";
import { setFilter } from '../../Redux/actions/filter';
import { useState, useEffect } from 'react';


const ShopContainer = (props) => {

    const [categories, setCategories] = useState('');

    useEffect(() => {
        getCategoriesFromJson()
            .then(res => setCategories(res))
    }, [])

    return <Shop setFilter={props.setFilter} categories={categories} />

}

export default connect(null, { setFilter })(ShopContainer);

// class ShopContainer extends React.Component {

//     componentDidMount() {
//         getCategoriesFromJson()
//             .then(res => console.log(this.props.setCategories(res)))
//     }

//     render() {
//         return <Shop {...this.props} />
//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         categories: state.products.categories
//     }
// }
// let mapDispatchToProps = (dispatch) => {
//     return {
//         setFilter: (filter) => {
//             let action = setFilter(filter);
//             dispatch(action);
//         },
//         setCategories: (categories) => {
//             let action = setCategories(categories);
//             dispatch(action);
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);




// const Shop = () => {
//     return (
//         <section className="shop">
//             <div className="shop__container">
//                 <h1 className='shop__title'>Our goods</h1>
//                 <div className="shop__content">
//                     <Options/>
//                     <ProductsContainer />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Shop;