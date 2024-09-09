import React from 'react';
import Header from './components/Header';
import QuoteSection from './components/QuoteSection';
import FeaturedTopics from './components/FeaturedTopics';
import Agenda from './components/Agenda';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <QuoteSection />
      <FeaturedTopics />
      <Agenda />
    </div>
  );
}

export default App;