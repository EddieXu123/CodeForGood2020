import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import VideoChat from './pages/VideoChat';
import SelfTour from './pages/SelfTour';
import Download from './pages/Download';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/videochat/:roomID' component={VideoChat} />
        <Route exact path='/download' component={Download}/>
        <Route exact path='/podcast' component={Podcast} />
        <Route exact path='/selftour' component={SelfTour} />
        <Route exact={false} path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
