import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import FeedPage from './pages/feed-page/feed-page.component';

function App() {
  return (
    <div className="App">
      <Header />
      <FeedPage />
    </div>
  );
}

export default App;
