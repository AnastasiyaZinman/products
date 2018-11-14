import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './css/products.css'
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
                <div className="product-item" key={p.id}>
                <div className="img-thumbnail"><img className="img-100" src={p.thumbnailUrl} alt={p.thumbnailUrl}/></div>
                    <div className="product-descr">
                        <div>{p.name}</div>
                        <div>{p.description}</div>    
                        <button className="btn-delete" type='button' onClick={() => this.deleteRecord(p.id)}>DELETE</button>
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
