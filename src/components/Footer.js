import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Prijavi se na avanturistički newsletter da primiš najbolje ponude
        </p>
        <p className='footer-subscription-text'>
          Možes se odjaviti kada god želiš-.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Ostavi email'
            />
            <Button buttonStyle='btn--outline'>Pretplati se</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>O nama </h2>
            <Link to='/sign-up'>Kako poslujemo?</Link>
            <Link to='/'>Iskustva</Link>
            <Link to='/'>Karijerni put</Link>
            <Link to='/'>Investitori</Link>
            <Link to='/'>Uslovi kotišćenja</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Kontaktiraj nas!</h2>
            <Link to='/'>Kontakt</Link>
            <Link to='/'>Podrška</Link>
            <Link to='/'>Destinacije</Link>
            <Link to='/'>Sponzorstva</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Video</h2>
            <Link to='/'>Prosledi video</Link>
            <Link to='/'>Ambasadori</Link>
            <Link to='/'>Agencija</Link>
            <Link to='/'>Influenseri</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Društvene mreže</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRAVELMAG
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRAVELMAG © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;