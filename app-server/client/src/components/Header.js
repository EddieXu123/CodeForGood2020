import React from 'react';
import logo from '../pages/assets/images/updated_logo.png';

const Header = () => {
  return (
    <div id='header'>
      <div className='inner'>
        <header>
          <h1>
            <img src={logo} style={{ width: '50%' }} />
          </h1>
          <hr />
          We work hard to bring REAL CONVERSATIONS ABOUT REAL ISSUES to
          communities across the state.
        </header>

        <footer>
          <p style={{ textAlign: 'center' }}>
            Click the button below to join one of our live events!
          </p>
          <a href={`/videochat/${0}`} className='button circled scrolly'>
            Teleport
          </a>
        </footer>
      </div>

      <nav id='nav'>
        <ul>
          <li>
            <a
              href='http://www.ohiohumanities.org/pathways/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Pathways Magazine
            </a>
          </li>
          <li>
            <a href='/' rel='noopener noreferrer'>
              Home
            </a>
          </li>
          <li>
            <a href='/selftour' rel='noopener noreferrer'>
              Self-Guided Tour
            </a>
          </li>
          <li>
            <a href='/podcast' rel='noopener noreferrer'>
              Podcast
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
