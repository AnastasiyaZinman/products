import React, { Component } from 'react';
import './css/products.css';
import DeleteForm from './DeleteForm';
import Product from './Product';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class ProductsList extends Component {  
     

    renderProductList = () => {
        // let records = this.props.store.filteredAr;
        let records = this.props.store.records;

        // let records = this.props.store.getCurrentRecords();
       return records.map (p => 
        {
            return (<Product key={p.id} p={p}/>)
        })
    }

    render() {
        return (
            <div>
             {(this.props.store.productIdForDelete!==-1) ? 
             <DeleteForm /> 
             : null}
             <div className = "products-list-container">
             { this.renderProductList()}
            </div>
            </div>
        )
    }
}
export default ProductsList;
