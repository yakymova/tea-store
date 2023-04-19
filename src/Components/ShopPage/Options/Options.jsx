import { useState } from 'react';
import './Options.css';

const Options = (props) => {
    let { categories, setFilter, setSort, setSearchQuery, filterBy, sortBy } = props;

    const changeProducts = (category) => {
        setFilter(category);
    }
    const changeSortRule = (val) => {
        setSort(val);
    }
    const changeSearchField = (e) => {
        setSearchQuery(e.target.value);
    }

    let isFilter = localStorage.getItem('isFilterBlockVisible');
    const [isFilterBlockVisible, setIsFilterBlockVisible] = useState(isFilter === 'true' ? isFilter : '');
    const changeVisible = () => {
        setIsFilterBlockVisible(!isFilterBlockVisible);
        localStorage.setItem("isFilterBlockVisible", !isFilterBlockVisible)
    }

    let isSort = localStorage.getItem('isSortBlockVisible');
    const [isSortBlockVisible, setIsSortBlockVisible] = useState(isSort === 'true' ? isSort : '');
    const changeSort = () => {
        setIsSortBlockVisible(!isSortBlockVisible);
        localStorage.setItem("isSortBlockVisible", !isSortBlockVisible)
    }

    return (
        <div className="filter sort">
            <input type="search" placeholder='Search...' className='filter__search' onChange={changeSearchField} />

            <div className="sort__by">
                <button className={isSortBlockVisible ? 'sort__by-btn active' : 'sort__by-btn'} onClick={changeSort}>Sort by</button>
                <menu className={isSortBlockVisible ? "sort-visible" : ''}>
                    <ul>
                        <li className={`sort__item ${sortBy === 'popular' ? "active-item" : ""}`} onClick={changeSortRule.bind(this, "popular")}>Popular</li>
                        <li className={`sort__item ${sortBy === 'price_low' ? "active-item" : ""}`} onClick={changeSortRule.bind(this, "price_low")}>Low price</li>
                        <li className={`sort__item ${sortBy === 'price_high' ? "active-item" : ""}`} onClick={changeSortRule.bind(this, "price_high")}>High price</li>
                    </ul>
                </menu>
            </div>

            <div className="filter__by-category">
                <button className={isFilterBlockVisible ? 'filter__by-btn active' : 'filter__by-btn'} onClick={changeVisible}>Filter by</button>
                <menu className={isFilterBlockVisible ? "filter-visible" : ''}>
                    <button onClick={changeProducts.bind(this, 'all')} className={`filter__show-all ${filterBy === 'all' ? "active-item" : ""}`}>Show all</button>
                    <ul>
                        {
                            categories && categories.map(item => {
                                return (
                                    <li key={item.id} className={`filter__item ${filterBy === item.category ? "active-item" : ""}`} onClick={changeProducts.bind(this, item.category)}>{item.name}</li>
                                )
                            })
                        }
                    </ul>
                </menu>
            </div>

        </div>
    )
}

export default Options;