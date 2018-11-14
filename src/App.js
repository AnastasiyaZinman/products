import React, { Component } from 'react';
// import logo from './logo.svg';
import ProductDetails from './components/ProductDetails';
import Navigation from './components/Navigation';
import SearchPanel from './components/SearchSortPanel';
import ProductsList from './components/ProductsList';
// import ProductDetails from './components/ProductDetails';
import './App.css';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class App extends Component {
  constructor() {
    super();
   
} 
  componentDidMount(){
   this.props.store.getData()
}

  render() {
    return (
      <div className="App">
        <div className="header">
          <span className="logo-name">My Store</span>
        </div>
        <div className="content-box">
          <div className="products-list">
          <SearchPanel />
          {(!this.props.store.isLoading)?<ProductsList />:<div>no data</div>}
          {/* <Navigation /> */}
          </div>
            <ProductDetails />
        </div>
      </div>
    );
  }
}

export default App;
