import React, { Component } from 'react';
import CryptoCard from './components/crypto-card'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CryptoCard
        name="Bitcoin"
        symbol="BTC"
        />
      </div>
    );
  }
}

export default App;
