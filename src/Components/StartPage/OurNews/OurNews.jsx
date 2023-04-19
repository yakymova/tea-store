import { NavLink } from 'react-router-dom';
import './OurNews.css';

const OurNews = ({ news }) => {
    return (
        <section className='news__container'>
            <div className="news__wrapper">
                <h2 className="news__main-title">our news</h2>
                <NavLink to='/blog' className='news__link'>View all</NavLink>
            </div>
            {
                news.map((item, ind) => {
                    return <div className="news__item" key={ind}>
                        <div className="news__img">
                            <img src={item.image} alt={`img-news ${ind}`} />
                        </div>
                        <div className="news__content">
                            <h4 className="news__title">{item.title}</h4>
                            <p className="news__text">{item.text}</p>
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default OurNews;