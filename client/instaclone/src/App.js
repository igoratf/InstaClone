import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import FeedPage from './pages/feed-page/feed-page.component';
import LoginPage from './pages/login/login.component';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <FeedPage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
