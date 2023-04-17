import { useState } from 'react';
import './Options.css';

const Options = ({ categories, setFilter }) => {
    const changeProducts = (category) => {
        setFilter(category);
    }

    const [isFilterBlockVisible, setIsFilterBlockVisible] = useState(false);
    const changeVisible = () => {
        setIsFilterBlockVisible(!isFilterBlockVisible)
    }
    return (
        <div className="filter">
            <input type="search" placeholder='Search...' className='filter__search' />
            <div className="filter__by-category">
                <button className={isFilterBlockVisible ? 'filter__by-btn active' : 'filter__by-btn'} onClick={changeVisible}>Filter by</button>
                <menu className={isFilterBlockVisible ? "visible" : ''}>
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