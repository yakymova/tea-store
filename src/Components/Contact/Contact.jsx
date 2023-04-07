import './Contact.css';

const Contact = () => {
    const sendForm = (e) => {
        e.preventDefault();
        alert('The form has been submitted');
    }
    return (
        <section className="contact">
            <div className="contact__container">
                <div className="contact__content">
                    <h1 className='contact__title'>Contact us</h1>
                    <p className="contact__text">Say Hello send us your thoughts about our products or share
                        your ideas with our Team!</p>
                </div>
                <form action="" className="contact__form">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                    <input type="email" placeholder='Email' />
                    <input type="tel" placeholder='Phone' />
                    <textarea name="" id="" placeholder='Message'></textarea>
                    <button onClick={(e) => sendForm(e)}>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;