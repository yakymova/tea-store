import React from 'react';
import './Shop.css';
import Shop from './Shop';
import { getCategoriesFromJson } from '../../api/api';
import { connect } from "react-redux";
import { setFilter, setSort } from '../../Redux/actions/filter';
import { useState, useEffect } from 'react';


const ShopContainer = (props) => {

    const [categories, setCategories] = useState('');

    useEffect(() => {
        getCategoriesFromJson()
            .then(res => setCategories(res))
    }, [])

    return <Shop setFilter={props.setFilter} setSort={props.setSort} categories={categories} />

}

// let mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         filterBy: state.filter.filterBy,
//         sortBy: state.filter.sortBy
//     }
// }

export default connect(null, { setFilter, setSort })(ShopContainer);
