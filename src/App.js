import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
