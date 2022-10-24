
import './App.css';
import React from 'react';
import Header from './components/layaout/Header';
import { Footer } from './components/layaout/Footer';
import Home from './components/Home';
import {ProductDetails } from './components/produts/ProductDetails';

//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
            <div className='container container-fluid'>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Home" element={<Home />}/>
                <Route path='/producto/:id' element={<ProductDetails/>}/>
              </Routes>
            </div>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;

