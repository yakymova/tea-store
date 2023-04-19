import { NavLink } from 'react-router-dom';
import './Footer.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { createRef } from 'react';

const Footer = ({ footer }) => {
    let btn = createRef();
    window.onscroll = () => {
        if (window.scrollY > 400) btn.current.className = 'scroll-to-top';
        if (window.scrollY < 400) btn.current.className = ''
    }
    return (
        <footer>
            <div className="footer__container">
                <menu className="footer__links">
                    {
                        footer.links.map(link => <NavLink to={link.path} key={link.name}>{link.name}</NavLink>)
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
                        footer.icons.map(icon => <div className={`social-media__icon ${icon.name}`} key={icon.name}><a href={icon.url} target='_blank' rel="noopener noreferrer" style={{ backgroundImage: `url(${icon.icon})` }}></a></div>)
                    }
                </div>
            </div>
            <button onClick={() => scroll.scrollToTop()} ref={btn}></button>
        </footer>
    )
}

export default Footer;