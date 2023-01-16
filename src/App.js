import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import stockData from './pages/stock-data';

function App(props) {
  // Defining routes components
  return (
    <div>
      <Nav />
      <Main stockData={stockData} />
    </div>
  );
}

export default App;
