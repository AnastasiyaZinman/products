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
        }
    changeInput = (e) => {
        this.form[e.target.name]= e.target.value;
    }

    save = ()=> {
        this.props.store.saveDetails();
    }
    renderDetails = () => {
        if (this.props.store.productIdForEdit !== -1) {
            let productDetails = this.props.store.findCurrentItem(this.props.store.productIdForEdit);

            if (this.form.name !== productDetails.name) {
                let name = productDetails.name,
                    descr = productDetails.description,
                    price = productDetails.price,
                    url = productDetails.url;
                this.form = { name, descr, price, url};
            }

            console.log("current item", productDetails);
            return (<div className="item">
                <img className="main-img" src={this.form.url} alt="crm" />
                <div>Name: <br />
                    <input name='name' type='text' value={this.form.name} onChange={this.changeInput}></input>
                </div>
                <div>Description: <br />
                    <input name='description' type='text' value={this.form.description} onChange={this.changeInput}></input>
                </div>
                <div>Price: <br />
                    <input name='price' type='text' value={this.form.price} onChange={this.changeInput}></input>
                </div>
                <div>
                    <button className="btn btn-save" type='button' onClick={ this.save}>SAVE</button>
                </div>
            </div>)
        }
        else return <div>"Click on products for getting more information"</div>

    }
    updateState = (name, descr, price, url) => {
        this.setState({ name: name, description: descr, price: price, url: url });
    }
    render() {
        return (
            <div className="products-details">
                {this.renderDetails()}
            </div>
        )
    }
}
export default ProductDetails;
