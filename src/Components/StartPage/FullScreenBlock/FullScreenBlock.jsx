import './FullScreenBlock.css';

const FullScreenBlock = ({ data }) => {
    return (
        <section className='full-screen'>
            <div className="full-screen__body">

            </div>
            <video autoPlay muted loop preload="auto" class="full-screen__video"
                src={data.videoUrl}></video>
        </section>
    )
}

export default FullScreenBlock;