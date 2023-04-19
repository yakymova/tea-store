import React from 'react';
import './Shop.css';
import Shop from './Shop';
import { getCategoriesFromJson } from '../../api/api';
import { connect } from "react-redux";
import { setFilter, setSort, setSearchQuery } from '../../Redux/actions/filter';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);
};


const ShopContainer = (props) => {
    useScrollToTop();
    const [categories, setCategories] = useState('');

    useEffect(() => {
        setCategories(getCategoriesFromJson())
        // getCategoriesFromJson()
        //     .then(res => setCategories(res))
    }, [])

    return <Shop {...props} categories={categories} />

}

let mapStateToProps = (state) => {
    return {
        filterBy: state.filter.filterBy,
        sortBy: state.filter.sortBy
    }
}

export default connect(mapStateToProps, { setFilter, setSort, setSearchQuery })(ShopContainer);
