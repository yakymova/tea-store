import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = ({ footer }) => {
    return (
        <footer>
            <div className="footer__container">
                <menu className="footer__links">
                    {
                        footer.links.map(link => <NavLink to={link.path}>{link.name}</NavLink>)
                    }
                </menu>
                <form className="footer__form">
                    <input type="text" placeholder='Give an email, get the newsletter.' />
                    <button className='footer__form-btn' onClick={(e) => e.preventDefault()}>&#8594;</button>
                </form>
                <div className="footer__copyring">
                    {footer.copyring}
                </div>
                <div className="footer__social-media social-media__icons">
                    {
                        footer.icons.map(icon => <div className={`social-media__icon ${icon.name}`}><a href={icon.url} target='_blank' style={{ backgroundImage: `url(${icon.icon})` }}></a></div>)
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer;