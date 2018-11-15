import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import './css/product-details.css';
@inject("store")
@observer
class ProductDetails extends Component {
     
        @observable form = {
            name: '',
            description: '',
            price: 0,
            url: ''
        };
    
    changeInput = (event) => 
    {
        this.form [event.target.name]= event.target.value;
    }

    renderDetails = () => { 
        if (this.props.store.productIdForEdit !== -1) 
           {
            let productDetails = this.props.store.findCurrentItem(this.props.store.productIdForEdit);
            
            debugger;
            if (this.form.name!== productDetails.name) 
            this.updateState(productDetails.name,productDetails.description, productDetails.price, productDetails.url);
            
            console.log("current item", productDetails);
           return( <div className="item">
             <img className="main-img" src={productDetails.url} alt="crm"/>
             Name: <br/>
             <input name='name' type='text' value={this.form.name} onChange={this.changeInput}></input>
             Description: <br />
             <input name='description' type='text' value={this.form.description} onChange={this.changeInput}></input>
             Price: <br />
             <input name='price' type='text' value={this.form.price} onChange={this.changeInput}></input>
            </div>)
         }
         else return <div>"Click on products for getting more information"</div>

}
    updateState = (name, descr, price, url) =>{

       this.form = {
            name: name,
            description: descr,
            price: price,
            url: url
        };
    }
    render() {
        return (
            <div className="products-details">
            { this.renderDetails()}
            </div>
        )
    }
}
export default ProductDetails;
