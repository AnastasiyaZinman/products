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
       this.props.store.sort = e.target.value;
       alert(e.target.value)
       this.props.store.sortProducts();
      }
    
    renderOptions = () => {
        return (
            <div className="sort">
                <select name="sort" value={this.props.store.sort} onChange={this.inputChange} >
                    {this.sort.map((c, i) =>
                        <option key={i} value={c}>{c}</option>
                    )};
          </select></div>
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
