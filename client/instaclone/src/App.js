import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import FeedPage from "./pages/feed-page/feed-page.component";
import LoginPage from "./pages/login/login.component";
import SignUpPage from "./pages/sign-up/sign-up.component";
import ProfilePage from "./pages/profile/profile.component";
import DirectPage from "./pages/direct/direct.component";
import StoryPage from "./pages/story/story.component";
import { withRouter } from "react-router-dom";

function App({ location }) {
  return (
    <div className="App">
      {location.pathname === "/feed" ||
      location.pathname === "/direct" ||
      location.pathname === "/profile" ? (
        <Header />
      ) : null}
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route exact path="/feed" component={FeedPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/direct" component={DirectPage} />
        <Route path="/story" component={StoryPage} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
