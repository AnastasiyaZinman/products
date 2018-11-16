import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SavePopUp from './SavePopUp';
// import { observable} from "mobx";
import './css/product-details.css';
@inject("store")
@observer
class ProductDetails extends Component {

changeInput = (e) => {
    this.props.store.form[e.target.name] = e.target.value;
}
//  toggle = () => {
//     this.showMessage = !this.showMessage;
// }

save = () => {
    this.props.store.indexOfUpdatedProduct = this.props.store.saveDetails();
    // this.toggle()
}
renderDetails = () => {
    if (this.props.store.productIdForEdit !== -1) {
        // console.log("current item", productDetails);
        return (<div className="item">
            <img className="main-img" src={this.props.store.form.url} alt="crm" />
            <div>Name: <br />
                <input name='name' type='text'
                    value={this.props.store.form.name} onChange={this.changeInput}></input>
            </div>
            <div>Description: <br />
                <input name='description' type='text' value={this.props.store.form.description} onChange={this.changeInput}></input>
            </div>
            <div>Price: <br />
                <input name='price' type='text' value={this.props.store.form.price} onChange={this.changeInput}></input>
            </div>
            <div>
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
export default ProductDetails;
