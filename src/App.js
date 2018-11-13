import React, { Component } from 'react';
import logo from './logo.svg';
import ProductDetails from './components/ProductDetails';
import Navigation from './components/Navigation';
import SearchPanel from './components/SearchSortPanel';
// import ProductDetails from './components/ProductDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <span className="logo-name">My Store</span>
        </div>
        <div className="content-box">
          <div className="products-list">
          <SearchPanel />
          <Navigation />
          </div>
            <ProductDetails />
        </div>
      </div>
    );
  }
}

export default App;
