import React from 'react';
import './App.css';
import Header from './components';
import Home from './modules/Home';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
