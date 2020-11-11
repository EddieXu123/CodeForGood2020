import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './assets/css/main.css';
import step1 from './assets/images/step1.png';
import step2 from './assets/images/step2.png';
import step3 from './assets/images/step3.png';

const Download = () => {
  return (
    <div id='page-wrapper'>
      <Header />
      <div className='wrapper style1'>
        <div className='container'>
          <article id='main' className='special'>
            <header>
              <h2>
                <a href='#'>Step 1:</a>
              </h2>
              <p>Press the download button</p>
              <img src={step1} width='1000' height='500' background></img>
              <h2>
                <a href='#'>Step 2:</a>
              </h2>
              <p>Right click anywhere</p>
              <img src={step2} width='1000' height='500' background></img>
              <h2>
                <a href='#'>Step 3:</a>
              </h2>
              <p>Click "Save Audio As"</p>
              <img src={step3} width='1000' height='500' background></img>
            </header>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Download;
