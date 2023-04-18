import { useState } from 'react';
import './Options.css';

const Options = ({ categories, setFilter, setSort }) => {
    const changeProducts = (category) => {
        setFilter(category);
    }
    const changeSortRule = (val) => {
        setSort(val);
    }

    const [isFilterBlockVisible, setIsFilterBlockVisible] = useState(false);
    const changeVisible = () => {
        setIsFilterBlockVisible(!isFilterBlockVisible)
    }
    const [isSortBlockVisible, setIsSortBlockVisible] = useState(false);
    const changeSort = () => {
        setIsSortBlockVisible(!isSortBlockVisible)
    }
    return (
        <div className="filter sort">
            <input type="search" placeholder='Search...' className='filter__search' />

            <div className="sort__by">
                <button className={isSortBlockVisible ? 'sort__by-btn active' : 'sort__by-btn'} onClick={changeSort}>Sort by</button>
                <menu className={isSortBlockVisible ? "sort-visible" : ''}>
                    <ul>
                        <li className='sort__item' onClick={changeSortRule.bind(this, "popular")}>Popular</li>
                        <li className='sort__item' onClick={changeSortRule.bind(this, "price_low")}>Low price</li>
                        <li className='sort__item' onClick={changeSortRule.bind(this, "price_high")}>High price</li>
                    </ul>
                </menu>
            </div>

            <div className="filter__by-category">
                <button className={isFilterBlockVisible ? 'filter__by-btn active' : 'filter__by-btn'} onClick={changeVisible}>Filter by</button>
                <menu className={isFilterBlockVisible ? "filter-visible" : ''}>
                    <button onClick={changeProducts.bind(this, 'all')} className='filter__show-all'>Show all</button>
                    <ul>
                        {
                            categories && categories.map(item => {
                                return (
                                    <li key={item.id} className='filter__item' onClick={changeProducts.bind(this, item.category)}>{item.name}</li>
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