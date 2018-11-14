import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './css/product-details.css';
@inject("store")
@observer
class ProductDetails extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            price: 0
        }
    }
    changeInput = (event) => this.setState({
        [event.target.name]: event.target.value
      })

    renderDetails = () => { 
       
        if (this.props.store.productIdForEdit !== -1) 
           {
            let productDetails = this.props.store.findCurrentItem(this.props.store.productIdForEdit);
            // this.updateState(productDetails)
            console.log("current item", productDetails);
           return( <div className="item">
             <img className="main-img" src={productDetails.url} alt="crm"/>
             Name: <br/>
             <input name='name' type='text' value={this.state.name} onChange={this.changeInput}></input>
             Description: <br />
             <input name='description' type='text' value={this.state.description} onChange={this.changeInput}></input>
             Price: <br />
             <input name='price' type='text' value={this.state.price} onChange={this.changeInput}></input>
            </div>)
         }
         else return <div>"Click on products for getting more information"</div>

}
    updateState = (productDetails) =>{
       
        this.setState({
            'name': productDetails.name,
            'description': productDetails.description,
            'price': productDetails.price
        });
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
