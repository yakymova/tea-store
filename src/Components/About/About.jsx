import './About.css';
import Contact from '../Contact/Contact';

const About = () => {
    return (
        <section className="about">
            <div className="about__content">
                <h1 className="about__title">About</h1>
                <h2 className="about__subtitle">Who we are and why we do what we do!</h2>
                <p className="about__text">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
                <div className="about__img"></div>
                <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
                <ul className='about__list'>
                    <li className='about__list-item'>consectetur adipiscing elit. Aliquam placerat</li>
                    <li className='about__list-item'>lorem ipsum dolor sit amet consectetur </li>
                </ul>
                <Contact />
            </div>
        </section>
    )
}

export default About;