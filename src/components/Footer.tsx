import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Footer.css';

function Footer(props) {
    return (

        <div className={'footer-container'}>
            <section className={'footer-subscription'}>

                <p className={'footer-subscription-heading'}>
                    Join our newsletter to receive our best articles
                </p>
                <p className={'footer-subscription-text'}>
                    You can unsubscribe at any time.
                </p>
                <div className={'input-area'}>
                    <form>
                        <input
                            className={'footer-input'}
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <a href="sign-in" className={' btn-outline'}>Subscribe</a>
                    </form>
                </div>

            </section>
        </div>
    );
}

export default Footer;