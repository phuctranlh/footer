import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Footer.css';

function Footer(props) {
    return (

        <div className={'footer-container'}>

            {/*Subscription*/}
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
            {/*End Subscription*/}

            {/*Footer links*/}
            <div className={'footer-link-wrapper'}>
                <div className={'footer-link-items'}>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className={'footer-link-items'}>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
                <div className={'footer-link-items'}>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className={'footer-link-items'}>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                    <Link to='/'>LinkedIn</Link>
                </div>
            </div>
            {/*End Footer links*/}
        </div>
    );
}

export default Footer;