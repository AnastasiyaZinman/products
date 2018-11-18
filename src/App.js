import React, { Component } from 'react';
import ProductDetails from './components/ProductDetails';
import Navigation from './components/Navigation';
import SearchPanel from './components/SearchSortPanel';
import ProductsList from './components/ProductsList';
import './App.css';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class App extends Component {

  componentDidMount() {
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
            {(!this.props.store.isLoading) ? <ProductsList /> : <div>no data to display</div>}
            <Navigation />
          </div>
          <ProductDetails productId={this.props.store.productIdForEdit} filteredAr={this.props.store.filteredAr} />
        </div>
      </div>
    );
  }
}

export default App;
