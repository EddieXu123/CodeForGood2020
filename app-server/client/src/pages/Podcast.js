import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { CONTENT_ENDPOINT } from '../util/config';
import './assets/css/main.css';

const PodcastCard = ({ podcast }) => {
  const history = useHistory();
  return (
    <article className='pod-list' style={{ padding: '40px' }}>
      <div className='left'>
        <h3>{podcast.title}</h3>
        <p>{podcast.desc.slice(0, 100)}</p>
      </div>
      <div className='play'>
        <input type='button' value='Play'></input>
      </div>
      <br></br>
      <br></br>
      <div className='live'>
        <input
          type='button'
          value='Join Live Discussion'
          onClick={() => history.push(`/videochat/${podcast.id}`)}
        ></input>
      </div>
    </article>
  );
};

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);

  const fetchPodcast = async () => {
    try {
      const res = await axios({
        url: `${CONTENT_ENDPOINT}/api/podcast`,
        method: 'GET',
        timeout: 0,
      });
      const data = res.data;
      if (!Array.isArray(data)) return;
      setPodcasts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPodcast();
  }, []);

  return (
    <div id='page-wrapper'>
      <Header />
      <div className='wrapper style1'>
        <div className='container'>
          <article id='main' className='special'>
            <header>
              <h2>
                <a href='#'>All Podcasts</a>
              </h2>
              <p>All your favorite podcasts in one place!</p>
            </header>
          </article>
          <div className='row'>
            {podcasts &&
              podcasts.length > 0 &&
              podcasts.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Podcast;
