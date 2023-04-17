import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ header }) => {
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
                </div>
            </div>
        </header>
    )
}

export default Header;