import React, { Component } from 'react';
import './css/products.css';
import DeleteForm from './DeleteForm';
import Product from './Product';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class ProductsList extends Component {  
     

    renderProductList = () => {
        let records = this.props.store.filteredAr;
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
             { this.renderProductList()}
                {/* <img className="main-img" src={mainImg} alt="crm"/> */}
            </div>
        )
    }
}
export default ProductsList;
