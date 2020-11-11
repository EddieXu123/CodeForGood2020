import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './assets/css/main.css';

import nov8 from '../pages/assets/images/nov8.jpg';
import nov9 from '../pages/assets/images/nov9.jpg';
import nov15 from '../pages/assets/images/nov15.jpg';
import nov16 from '../pages/assets/images/nov16.jpg';
import nov18 from '../pages/assets/images/nov18.jpg';

import p1 from '../pages/assets/audio/pod1.mp3';
import p14 from '../pages/assets/audio/pod14.mp3';
import p15 from '../pages/assets/audio/pod15.mp3';

const audio = new Audio();

const PodcastData = [
  {
    id: '1',
    title: 'E15: Mark Curnutte, Reporting, and Race',
    episode: 'Latest Episode',
    description:
      'Mark Curnutte has been on the faculty of Miami University in Oxford Ohio for the past several years where he teaches courses on journalism and social justice. He is also a multi-award-winning career newspaper journalist who has reported extensively on social issues of race, class, poverty, homelessness, and immigration, including for the Cincinnati Enquirer where he worked 25 years. Over 80 of the articles he wrote for the Enquirer are reproduced in his most recent book: Across the Color Line: Reporting 25 Years in Black Cincinnati.',
  },
  {
    id: '1',
    title: 'E14: Report for America Reporters',
    episode: 'Previous Episode',
    description:
      'This episode of the Real Issues: Real Conversations podcast is about Report for America. In it, we hear from some of the project’s 2020-2021 Ohio-based corps members who all began their new jobs during June of 2020. The guests interviewed are Seyma Bayram, who is reporting on minority and immigrant issues for The Akron Beacon Journal, H.L. Comeriato, who is focusing on Public Health in Akron for The Devil Strip, and Conor Morris, who’s covering poverty-related issues in Cleveland for the Northeast Ohio Journalism Collaborative.',
  },
  {
    id: '1',
    title: 'E1: Mindy McGinnis on her book “Heroine”',
    episode: 'First Episode',
    description:
      'Rachel Claire Hopkin talks with Ohio author Mindy McGinnis about her new book, "Heroine." In it, we hear and discuss the Opioid and Heroine addictions in Ohio, and the dark stories following those. The struggles and misinformation that come with the phrase "addict" are all addressed by McGinnis. Addiction is common in Ohio, and it may not be as stereotypical as it seems. Check out the following podcast to learn more about how McGinnis has experienced these experiences and how they play a role in appeasing the epidemic',
  },
];

const funfacts = [
  'Ohio is known as “The Mother of Presidents” due to its knack for producing POTUSes.',
  "At 900 pounds, the massive poplar tree drumsticks that honor Warren, Ohio's own Dave Grohl are the biggest in the world.",
  'Kelleys Island, located in the middle of Lake Erie, is where you’ll find Glacial Grooves State Memorial—the largest easily accessible set of glacial grooves anywhere in the world.',
  'Joining the likes of Loch Ness and Lake Champlain, Ohio has its own lake monster.',
  "The state flag of Ohio is unique in a particular way—it’s the only flag out of all 50 states' that isn’t rectangular.",
  'Presidents aren’t the only thing Ohio is good at creating. As of 2013, 25 NASA astronauts were from the state.',
  " Ohio is one of the country’s leading producers of tomato juice, and is one of America's top producers of the juicy red fruits.",
];

const podcast = [p1, p14, p15];

const PodcastCard = (props) => {
  const [play, setPlay] = useState(false);

  const getRandomIdx = () => {
    return Math.floor(Math.random() * podcast.length);
  };

  const playSong = () => {
    setPlay(true);
    audio.src = podcast[getRandomIdx()];
    audio.play();
  };

  const pauseSong = () => {
    setPlay(false);
    audio.pause();
  };

  return (
    <article class='col-4 col-12-mobile special'>
      <header>
        <h3>
          <a href='#'>{props.podcast.episode}</a>
        </h3>
      </header>

      <p style={{ textAlign: 'center' }}>{props.podcast.title}</p>

      <p>
        {props.podcast.description} <br />
      </p>
      <div style={{ textAlign: 'center' }}>
        <input
          type='button'
          value='PLAY'
          style={{ backgroundColor: 'rgb(96, 96, 192)' }}
          onClick={play ? pauseSong : playSong}
        />
      </div>
      <br />
      <div
        style={{
          textAlign: 'center',
          position: 'relative',
          bottom: '15px',
        }}
      >
        <a
          href={`/videochat/${props.podcast.id}`}
          class='button'
          style={{ backgroundColor: 'rgb(96, 96, 192)' }}
        >
          Join Live Discussion
        </a>
      </div>
    </article>
  );
};

const Banner = () => {
  const getRandomIdx = () => {
    return Math.floor(Math.random() * funfacts.length);
  };

  const [factIdx, setFactIdx] = useState(getRandomIdx);

  return (
    <section id='banner'>
      <header>
        <h2>
          <strong>Fact of the Day</strong>
        </h2>
        <p>
          {funfacts[factIdx]}
          <br />
          Read more about it{' '}
          <a
            href='https://www.emra.org/about-emra/history/ems-history/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'blue' }}
          >
            here
          </a>
          !
        </p>
        <button
          className='button'
          style={{ padding: '20px', margin: '20px' }}
          onClick={() => setFactIdx(getRandomIdx)}
        >
          Shuffle Random Facts
        </button>
      </header>
    </section>
  );
};

const Carousel = () => (
  <section class='carousel'>
    <div class='reel'>
      <article>
        <a
          href='http://www.ohiohumanities.org/event/the-newish-jewish-encyclodedia-from-abraham-to-zabars-and-everything-in-between/'
          target='_blank'
          rel='noopener noreferrer'
          class='image featured'
        >
          <img src={nov8} alt='' />
        </a>
        <header>
          <h3>
            <a href='http://www.ohiohumanities.org/event/the-newish-jewish-encyclodedia-from-abraham-to-zabars-and-everything-in-between/'></a>
            Nov 8 @7:30 PM
          </h3>
        </header>
        <p>
          <u>
            The Newish Jewish Encyclodedia: from Abraham to Zabar’s and
            Everything in Between
          </u>
          . <br /> Click{' '}
          <a href='http://www.ohiohumanities.org/event/the-newish-jewish-encyclodedia-from-abraham-to-zabars-and-everything-in-between/'>
            here
          </a>{' '}
          to see the event!
        </p>
      </article>

      <article>
        <a
          href='http://www.ohiohumanities.org/event/the-yellow-bird-sings/'
          target='_blank'
          rel='noopener noreferrer'
          class='image featured'
        >
          <img src={nov9} alt='' />
        </a>
        <header>
          <h3>
            <a href='http://www.ohiohumanities.org/event/the-yellow-bird-sings/'>
              Nov 9 @7:00 pm
            </a>
          </h3>
        </header>
        <p>
          Join us for talk by Jennifer Rosner, author of{' '}
          <u>The Yellow Bird Sings</u>, followed by a Q&A.
          <br /> Click{' '}
          <a href='http://www.ohiohumanities.org/event/the-yellow-bird-sings/'>
            here
          </a>{' '}
          to see the event!
        </p>
      </article>

      <article>
        <a
          href='http://www.ohiohumanities.org/event/essential-conversations-for-anxious-parents-and-worried-kids/'
          target='_blank'
          rel='noopener noreferrer'
          class='image featured'
        >
          <img src={nov15} alt='' />
        </a>
        <header>
          <h3>
            <a href='http://www.ohiohumanities.org/event/essential-conversations-for-anxious-parents-and-worried-kids/'>
              Nov 15 @10:00 am
            </a>
          </h3>
        </header>
        <p>
          Check out this weeks info on{' '}
          <u>Essential Conversations for Anxious Aarents & Worried Kids</u>.{' '}
          <br />
          Click{' '}
          <a href='http://www.ohiohumanities.org/event/essential-conversations-for-anxious-parents-and-worried-kids/'>
            here
          </a>{' '}
          to see the event!
        </p>
      </article>

      <article>
        <a
          href='http://www.ohiohumanities.org/event/the-hunt-for-hitlers-hidden-soldiers-in-america/'
          target='_blank'
          rel='noopener noreferrer'
          class='image featured'
        >
          <img src={nov16} alt='' />
        </a>
        <header>
          <h3>
            <a href='http://www.ohiohumanities.org/event/the-hunt-for-hitlers-hidden-soldiers-in-america/'>
              Nov 16 @11:00 am
            </a>
          </h3>
        </header>
        <p>
          Join us for a serious conversation on the hunt for{' '}
          <u>Hitler’s Hidden Soldiers in America</u>.<br /> Click{' '}
          <a href='http://www.ohiohumanities.org/event/the-hunt-for-hitlers-hidden-soldiers-in-america/'>
            here
          </a>{' '}
          to see the event!
        </p>
      </article>

      <article>
        <a
          href='http://www.ohiohumanities.org/event/getting-good-at-getting-older/'
          target='_blank'
          rel='noopener noreferrer'
          class='image featured'
        >
          <img src={nov18} alt='' />
        </a>
        <header>
          <h3>
            <a href='http://www.ohiohumanities.org/event/getting-good-at-getting-older/'>
              Nov 18 @1:00 pm
            </a>
          </h3>
        </header>
        <p>
          Here from our distinguished speaker on{' '}
          <u>Getting Good at Getting Older</u>, followed by a Q&A! <br /> Click{' '}
          <a href='http://www.ohiohumanities.org/event/getting-good-at-getting-older/'>
            here
          </a>{' '}
          to see the event!
        </p>
      </article>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className='homepage is-preload'>
      <div id='page-wrapper'>
        <Header />
        <Banner />
        <h1
          style={{
            textAlign: 'center',
            fontSize: '50px',
            position: 'relative',
            top: '80px',
            left: '1px',
          }}
        >
          <strong>Events</strong>
        </h1>
        <hr style={{ width: '250px', position: 'relative' }}></hr>
        <Carousel />
        <div>
          <br />
        </div>

        <div class='wrapper style1'>
          <section id='features' className='container special'>
            <header>
              <h2>Podcasts</h2>
              <p>
                A podcast of real conversations about real issues that are
                important to all Ohioans. We offer a humanities perspective on
                what's going on in the world.{' '}
              </p>
            </header>
            <div class='row'>
              {PodcastData.map((podcast) => (
                <PodcastCard podcast={podcast} />
              ))}
            </div>
          </section>
        </div>
        <div>
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <a
              href='/podcast'
              className='button'
              style={{ marginBottom: '5vh' }}
            >
              View all Podcasts
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
