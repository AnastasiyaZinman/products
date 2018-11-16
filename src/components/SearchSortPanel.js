import React, { Component } from 'react';
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
        // debugger;
        this.props.store[e.target.name] = e.target.value;
        // console.log("e target name", [e.target.name][0]);
        if ([e.target.name][0] === "sort") {
            this.props.store.sortProducts(this.props.store.filteredAr)
        }
        else this.props.store.filteredAr = this.props.store.filterProducts()
    }

    renderOptions = () => {
        return (
            <div>
                <div className="search">
                    <span>
                        <input type="text" name="searchText" id="searchText" onChange={this.inputChange} value={this.props.store.searchText} placeholder="Search.." />
                    </span>
                </div>
                <div className="sort">
                    <select name="sort" value={this.props.store.sort} onChange={this.inputChange} >
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
