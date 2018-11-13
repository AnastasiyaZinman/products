import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class ProductsList extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {       
        console.log("sort");
        this.props.store.sortProducts();
      }

    renderProductList = () => {
        // debugger;
        let records= this.props.store.products;
        console.log(records);
       return records.map(p => {
            console.log("p", p)
            return (
                //  onClick={() => this.editProduct(p.id)}
                <div className="item" key={p.id}>
                <div><img src={p.thumbnailUrl} alt={p.thumbnailUrl}/></div>
                <div>{p.name}</div>
                <div>{p.description}</div>
                <div>
                  <button type='button' onClick={() => this.deleteRecord(p.id)} />
                 
                </div>
                </div>
            )
        } )
    }

    

    render() {
        return (
            <div>
             { this.renderProductList()}
                {/* <img className="main-img" src={mainImg} alt="crm"/> */}
            </div>
        )
    }
}
export default ProductsList;
