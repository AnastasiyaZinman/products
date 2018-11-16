import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ReactTimeout from 'react-timeout'
import SavePopUp from './SavePopUp';
import { observable} from "mobx";
import './css/product-details.css';
@inject("store")
@observer
class ProductDetails extends Component {

@observable showMessage = false;

changeInput = (e) => {
    this.props.store.form[e.target.name] = e.target.value;
}
 toggle = () => {
    this.showMessage = !this.showMessage;
}
showErrorMessage = () => {
    this.props.setTimeout(this.toggle, 3000) // call the `toggle` function after 5000ms
  }

save = () => {
    let form = this.props.store.form;
    if (form.name && form.description && this.props.store.form.price )
    {
    this.props.store.indexOfUpdatedProduct = this.props.store.saveDetails();
    }
    else {
        this.toggle()
        this.showErrorMessage()
    }
}
renderDetails = () => {
    if (this.props.store.productIdForEdit !== -1) {
        // console.log("current item", productDetails);
        return (<div className="item details">
            <img className="main-img" src={this.props.store.form.url} alt="crm" />
            <div>Name: <br />
                <input id="updName" name='name' type='text'
                    value={this.props.store.form.name} onChange={this.changeInput}></input>
            </div>
            <div>Description: <br />
                <textarea rows="4" cols="50" id="updDescr" name='description'  value={this.props.store.form.description} onChange={this.changeInput}></textarea>
            </div>
            <div>Price: <br />
                <input id="updPrice" name='price' type='text' value={this.props.store.form.price} onChange={this.changeInput}></input>
            </div>
            <div className="save-bottom">
                {(this.showMessage)?
                <span>Please enter all inputs </span>:
                null }
                <button className="btn btn-save" type='button' onClick={this.save}>SAVE</button>
            </div>
        </div>)
    }
    else return <div>"Click on products for getting more information"</div>
}

render() {
    return (
        <div className="products-details">
            {(this.props.store.indexOfUpdatedProduct!==-1) ? 
             <SavePopUp /> 
             : null}
            {this.renderDetails()}
        </div>
    )
}
}
export default ReactTimeout(ProductDetails);
