import React, { Component } from 'react';
import './css/products.css';
import DeleteForm from './DeleteForm';
import { observer, inject } from 'mobx-react';
import Product from './Product';
@inject("store")
@observer
class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
          
        }
    }        
      edit = (id) => {
        this.props.store.productIdForEdit = id;
        let productDetails = this.props.store.findCurrentItem(this.props.store.productIdForEdit);
        this.props.store.updateFormDetails(productDetails);
      }

      delete = (id) => {
        console.log("delete")
        this.props.store.productIdForDelete = id;
      }

      closeDeleteForm = () => {
          this.props.store.productIdForDelete = -1;
      }

    renderProductList = () => {
        let records = this.props.store.filteredAr;
       return records.map(p => {
            return (   
               <Product p={p} delete={this.delete} edit={this.edit}/>
            )
        } )
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
