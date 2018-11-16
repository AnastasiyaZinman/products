import React, { Component } from 'react';
import './css/products.css';
import DeleteForm from './DeleteForm';
import Product from './Product';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class ProductsList extends Component {  
      closeDeleteForm = () => {
          this.props.store.productIdForDelete = -1;
    }

    renderProductList = () => {
        let records = this.props.store.filteredAr;
       return records.map (p => 
        {
            return (<Product p={p}/>)
        })
    }

    render() {
        return (
            <div>
             {(this.props.store.productIdForDelete!==-1) ? 
             <DeleteForm id={this.props.store.productIdForDelete}
                        closeDeleteForm={this.closeDeleteForm}/> 
             : null}
             { this.renderProductList()}
                {/* <img className="main-img" src={mainImg} alt="crm"/> */}
            </div>
        )
    }
}
export default ProductsList;
