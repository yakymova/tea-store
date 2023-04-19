import { connect } from 'react-redux';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { removeFromCart } from '../../Redux/actions/cart';
import { useState } from 'react';


const Header = ({ header, cart, removeFromCart }) => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const showCart = () => {
        setIsCartVisible(!isCartVisible)
    }
    let addedCount = {};
    return (
        <header>
            <div className="header__container">
                <div className="header__logo">
                    <NavLink to='/'>
                        <img src={header.logo} alt="logo" />
                    </NavLink>
                </div>
                <nav className="header__menu">
                    <ul>
                        {
                            header.links.map(link => <li key={link.name}><NavLink to={link.path} key={link.name}>{link.name} </NavLink></li>)
                        }
                    </ul>
                </nav>
                <div className="header__icons">
                    {
                        header.icons.map((item, ind) => <button className='header__icon' key={ind} style={{ backgroundImage: `url(${item})` }}></button>)
                    }
                    {
                        cart.length > 0 ? <div className="wrapper-cart-icon" onClick={showCart}><div className="header__cart-icon">{cart.length}</div></div> : ''
                    }
                </div>
                <div className={`header__cart ${isCartVisible ? 'active' : ''}`}>
                    {
                        cart.map((item, i) => {
                            if (addedCount[item.id]) { addedCount[item.id] += 1; return }

                            addedCount[item.id] = 1;

                            return <div className='cart-item' key={i}>
                                <div className="cart-item__img">
                                    <img src={item.images} alt="" />
                                </div>
                                <span>{item.title},</span>
                                <span style={{ fontSize: 14 + 'px' }}>{item.category},</span>
                                <span>{item.price} $</span>
                                {/* <span>Amount: {addedCount[item.id]}</span> */}
                                <button onClick={removeFromCart.bind(this, item.id)}>x</button>
                            </div>
                        })
                    }
                    <p>Total: {cart.reduce((total, cur) => total + cur.price, 0)} $</p>
                </div>
            </div>
        </header>
    )
}

let mapStateToProps = (state) => {
    return {
        cart: state.cart.items
    }
}

export default connect(mapStateToProps, { removeFromCart })(Header);