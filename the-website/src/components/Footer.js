import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./Button";
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best
                    holiday deals 
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email"
                        className="footer-input"
                        />
                        <Button buttonStyle='btn--outline'>
                            SUBSCRIBE
                        </Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Tejas</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Another one</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>YouTube</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>LinkedIn</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Tejas Chandrasekar <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>
                        Tejas Chandrasekar Copyright. 2020
                    </small>
                    <div className='social-icons'>
                        <Link 
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='YouTube'
                        >
                            <i className='fab fa-youtube'/>
                        </Link>
                        <Link 
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'/>
                        </Link>
                        <Link 
                        className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Footer;