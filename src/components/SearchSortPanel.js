import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './css/searchBar.css';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class SearchPanel extends Component {
    constructor() {
        super();
        this.sort = ["name", "price"];
        this.state = {
        }
    }
    inputChange = (e) => {
        this.props.store[e.target.name] = e.target.value;
        if ([e.target.name][0] === "sort") {
            this.props.store.sortProducts(this.props.store.filteredProducts)
        }
        else {
            this.props.store.filteredProducts = this.props.store.filterProducts();
            this.props.store.currentPage = 1;
        }
        this.props.store.getCurrentRecords();
    }

    renderOptions = () => {
        return (
            <div className="search-sort">
                <div className="search-input">
                    <i><FontAwesomeIcon style={{ color: "#555555" }} className="fas" icon={faSearch} /></i>
                    <input type="text" name="searchText" id="searchText" onChange={this.inputChange} value={this.props.store.searchText} placeholder="search products" />
                </div>
                <div>Sort by:  <select name="sort" value={this.props.store.sort} onChange={this.inputChange} >
                    {this.sort.map((c, i) =>
                        <option key={i} value={c}>{c}</option>
                    )};
                </select></div>
            </div>
        )
    }
    render() {
        return (
            <div className="search-bar">
                {this.renderOptions()}
            </div>
        )
    }
}
export default SearchPanel;
