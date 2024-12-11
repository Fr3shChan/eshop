import React from 'react';
import './App.css';
import Header from './components';
import Home from './modules/Home';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';

function App() {
  return (
    <div>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
