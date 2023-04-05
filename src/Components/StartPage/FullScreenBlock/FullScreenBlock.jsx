import { Link } from 'react-scroll';
import './FullScreenBlock.css';

const FullScreenBlock = ({ data }) => {

    return (
        <section className='full-screen'>
            <div className="full-screen__body">
                <h1 className="full-screen__title">tea herbs</h1>
                <h2 className="full-screen__subtitle">premium tea</h2>
                <p className="full-screen__text">Revitalize your day with a sip of our tea</p>
                <Link to='start' className="full-screen__btn" spy={false} smooth={true} offset={0} duration={500}></Link>
            </div>
            <video autoPlay muted loop preload="auto" className="full-screen__video"
                src={data.videoUrl}></video>
        </section>
    )
}

export default FullScreenBlock;