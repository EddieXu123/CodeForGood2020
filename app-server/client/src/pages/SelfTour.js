import axios from 'axios';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './assets/css/main.css';

class SelfTour extends React.Component {
  componentDidMount() {
    axios
      .get('http://127.0.0.1:5000/api/tour/get')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div id='page-wrapper'>
        <Header />
        <div class='wrapper style1'>
          <section id='features' class='container special'>
            <header class='center'>
              <h2>Self-Guided Tours</h2>
              <p>Check out one of our tours!</p>
            </header>
            <div class='row'>
              <article class='col-4 col-12-mobile special'>
                <header class='center'>
                  <h3>
                    <a href='https://www.google.com/maps/dir/Columbus,+OH/Cleveland,+OH/@40.730346,-82.8996491,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883889c1b990de71:0xe43266f8cfb1b533!2m2!1d-82.9987942!2d39.9611755!1m5!1m1!1s0x8830ef2ee3686b2d:0xed04cb55f7621842!2m2!1d-81.6943605!2d41.49932!3e0'>Tour of Cleveland</a>
                  </h3>
                </header>
                <p class='center'>Discover more about what Cleveland has to offer!</p>
                <div class='center'>
                  <a href='https://www.google.com/maps/dir/Columbus,+OH/Cleveland,+OH/@40.730346,-82.8996491,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883889c1b990de71:0xe43266f8cfb1b533!2m2!1d-82.9987942!2d39.9611755!1m5!1m1!1s0x8830ef2ee3686b2d:0xed04cb55f7621842!2m2!1d-81.6943605!2d41.49932!3e0' class='button'>
                    Directions
                  </a>
                  <br></br>
                  <br></br>
                </div>
                <div class='center'>
                  <a href='https://podcasts.ricksteves.com/walkingtours/barcelona-eixample-walk.mp3' class='button'>
                    Download
                  </a>
                </div>
              </article>
              <article class='col-4 col-12-mobile special'>
                <header class='center'>
                  <h3>
                    <a href='https://www.google.com/maps/dir/Columbus,+OH/Cincinnati,+OH/@39.5405538,-84.3286125,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883889c1b990de71:0xe43266f8cfb1b533!2m2!1d-82.9987942!2d39.9611755!1m5!1m1!1s0x884051b1de3821f9:0x69fb7e8be4c09317!2m2!1d-84.5120196!2d39.1031182!3e0'>Tour of Cincinnati</a>
                  </h3>
                </header>
                <p class='center'>Learn about the historic city of Cincinnati!</p>
                <div class='center'>
                  <a href='https://www.google.com/maps/dir/Columbus,+OH/Cincinnati,+OH/@39.5405538,-84.3286125,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x883889c1b990de71:0xe43266f8cfb1b533!2m2!1d-82.9987942!2d39.9611755!1m5!1m1!1s0x884051b1de3821f9:0x69fb7e8be4c09317!2m2!1d-84.5120196!2d39.1031182!3e0' class='button'>
                    Directions
                  </a>
                  <br></br>
                  <br></br>
                </div>
                <div class='center'>
                  <a href='https://podcasts.ricksteves.com/walkingtours/spa-madrid-city.mp3' class='button'>
                    Download
                  </a>
                </div>
              </article>
              <article class='col-4 col-12-mobile special'>
                <header class='center'>
                  <h3>
                    <a href='https://www.google.com/maps/dir/Columbus,+OH//@39.961236,-83.0338137,13z/data=!4m9!4m8!1m5!1m1!1s0x883889c1b990de71:0xe43266f8cfb1b533!2m2!1d-82.9987942!2d39.9611755!1m0!3e0'>Tour of Columbus</a>
                  </h3>
                </header>
                <p class='center'>Check out the awesome landmarks in Columbus!</p>
                <div class='center'>
                  <a href='https://www.google.com/maps/dir/Columbus,+OH//@39.961236,-83.0338137,13z/data=!4m9!4m8!1m5!1m1!1s0x883889c1b990de71:0xe43266f8cfb1b533!2m2!1d-82.9987942!2d39.9611755!1m0!3e0' class='button'>
                    Directions
                  </a>
                  <br></br>
                  <br></br>
                </div>
                <div class='center'>
                  <a href='https://podcasts.ricksteves.com/walkingtours/spa-madrid-city.mp3' class='button'>
                    Download
                  </a>
                </div>
              </article>
            </div>
            <div class='wrapper style1'>
              <section id='features' class='container special'>
                <header class='center'>
                  <h2>Discussion Board and Download Instructions</h2>
                </header>
              </section>
              <article class='col-4 col-12-mobile special'>
                <header class='center'>
                  <h3>
                    <a href='#'>Download Instructions</a>
                  </h3>
                </header>
                <p class='center'>
                  Confused on how to download or use an audio file? You've come
                  to the right place. <br/>Simply download the audio file onto your phone
                  and then listen to it on the road!
                </p>
                <div class='center'>
                  <a href='/download' class='button'>
                    Instructions
                  </a>
                </div>
              </article>
              <article class='col-4 col-12-mobile special'>
                <header class='center'>
                  <h3>
                    <a href='#'>Discussion Board</a>
                  </h3>
                </header>
                <p class='center'>
                  Share any thoughts you have about the routes here.
                </p>
                <div class='center'>
                  <a href='#' class='button'>
                    Enter Discussion Board
                  </a>
                </div>
              </article>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SelfTour;
