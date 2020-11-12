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

            {/*Social media info*/}
            <section className={'social-media'}>
                <div className={'social-media-wrap'}>
                    <div className={'footer-logo'}>
                        <Link to='/' className={'social-logo'}>
                            Phood Tran
                            <i className={'fa fa-adjust'}></i>
                        </Link>
                    </div>
                    <small className={'website-rights'}>Phood Tran © 2020</small>
                    <div className={'social-icons'}>
                        <Link
                            className={'social-icon-link'}
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className={'fab fa-facebook-f'}/>
                        </Link>
                        <Link
                            className={'social-icon-link'}
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className={'fab fa-instagram'}/>
                        </Link>
                        <Link
                            className={'social-icon-link'}
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className={'fab fa-youtube'}/>
                        </Link>
                        <Link
                            className={'social-icon-link'}
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className={'fab fa-twitter'}/>
                        </Link>
                        <Link
                            className={'social-icon-link'}
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className={'fab fa-linkedin'}/>
                        </Link>
                    </div>
                </div>
            </section>
            {/*End Social media info*/}
        </div>
    );
}

export default Footer;