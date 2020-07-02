import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import FeedPage from './pages/feed-page/feed-page.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import ProfilePage from './pages/profile/profile.component';
import DirectPage from './pages/direct/direct.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/direct" component={DirectPage} />
      </Switch>      
    </div>
  );
}

export default App;
