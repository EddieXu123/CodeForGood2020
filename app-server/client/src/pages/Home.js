import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './assets/css/main.css';

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
    title: 'E15: Mark Curnutte, Reporting, and Race',
    episode: 'Latest Episode',
    description:
      'Mark Curnutte has been on the faculty of Miami University in Oxford Ohio for the past several years where he teaches courses on journalism and social justice. He is also a multi-award-winning career newspaper journalist who has reported extensively on social issues of race, class, poverty, homelessness, and immigration, including for the Cincinnati Enquirer where he worked 25 years. Over 80 of the articles he wrote for the Enquirer are reproduced in his most recent book: Across the Color Line: Reporting 25 Years in Black Cincinnati.',
  },
  {
    id: '1',
    title: 'E15: Mark Curnutte, Reporting, and Race',
    episode: 'Latest Episode',
    description:
      'Mark Curnutte has been on the faculty of Miami University in Oxford Ohio for the past several years where he teaches courses on journalism and social justice. He is also a multi-award-winning career newspaper journalist who has reported extensively on social issues of race, class, poverty, homelessness, and immigration, including for the Cincinnati Enquirer where he worked 25 years. Over 80 of the articles he wrote for the Enquirer are reproduced in his most recent book: Across the Color Line: Reporting 25 Years in Black Cincinnati.',
  },
];

const PodcastCard = (props) => {
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
        />
        <audio id='audio' src='pod15.mp3'></audio>
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

const Banner = () => (
  <section id='banner'>
    <header>
      <h2>
        <strong>Fact of the Day</strong>
      </h2>
      <p>
        The first ambulance service was established in Cincinnati in 1865!
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
    </header>
  </section>
);

const Carousel = () => (
  <section class='carousel'>
    <div class='reel'>
      <article>
        <a
          href='http://www.ohiohumanities.org/event/the-newish-jewish-encyclodedia-from-abraham-to-zabars-and-everything-in-between/'
          class='image featured'
        >
          <img src='images/pic01.jpg' alt='' />
        </a>
        <header>
          <h3>
            <a href='http://www.ohiohumanities.org/event/the-newish-jewish-encyclodedia-from-abraham-to-zabars-and-everything-in-between/'></a>
            Nov 8 @7:30 PM
          </h3>
        </header>
        <p>
          The Newish Jewish Encyclodedia: from Abraham to Zabar’s and everything
          in-between. <br /> Click{' '}
          <a href='http://www.ohiohumanities.org/event/the-newish-jewish-encyclodedia-from-abraham-to-zabars-and-everything-in-between/'>
            here
          </a>{' '}
          to see the event!
        </p>
      </article>

      <article>
        <a
          href='http://www.ohiohumanities.org/event/the-yellow-bird-sings/'
          class='image featured'
        >
          <img src='images/pic02.jpg' alt='' />
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
          class='image featured'
        >
          <img src='images/pic03.jpg' alt='' />
        </a>
        <header>
          <h3>
            <a href='http://www.ohiohumanities.org/event/essential-conversations-for-anxious-parents-and-worried-kids/'>
              Nov 15 @10:00 am
            </a>
          </h3>
        </header>
        <p>
          Check out this weeks info on essential conversations for anxious
          parents and worried kids. <br />
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
          class='image featured'
        >
          <img src='images/pic04.jpg' alt='' />
        </a>
        <header>
          <h3>
            <a href='http://www.ohiohumanities.org/event/the-hunt-for-hitlers-hidden-soldiers-in-america/'>
              Nov 16 @11:00 am
            </a>
          </h3>
        </header>
        <p>
          Join us for a serious conversation on the hunt for Hitler’s hidden
          soldiers in America.
          <br /> Click{' '}
          <a href='http://www.ohiohumanities.org/event/the-hunt-for-hitlers-hidden-soldiers-in-america/'>
            here
          </a>{' '}
          to see the event!
        </p>
      </article>

      <article>
        <a
          href='http://www.ohiohumanities.org/event/getting-good-at-getting-older/'
          class='image featured'
        >
          <img src='images/pic05.jpg' alt='' />
        </a>
        <header>
          <h3>
            <a href='http://www.ohiohumanities.org/event/getting-good-at-getting-older/'>
              Nov 18 @1:00 pm
            </a>
          </h3>
        </header>
        <p>
          Here from our distinguished speaker on "getting good at getting
          older," followed by a Q&A! <br /> Click{' '}
          <a href='http://www.ohiohumanities.org/event/getting-good-at-getting-older/'>
            here
          </a>{' '}
          to see the event!
        </p>
      </article>

      <article>
        <a href='#' class='image featured'>
          <img src='images/pic01.jpg' alt='' />
        </a>
        <header>
          <h3>
            <a href='#'>Pulvinar sagittis congue</a>
          </h3>
        </header>
        <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
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
