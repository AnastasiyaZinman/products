import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class ProductsList extends Component {
   edit = (id) => {
        this.props.store.productIdForEdit = id;
        let productDetails = this.props.store.findCurrentItem(this.props.store.productIdForEdit);
        this.props.store.updateFormDetails(productDetails);
      }

    delete = (id) => {
        console.log("delete")
        this.props.store.productIdForDelete = id;
    }
    
    render() {
        let p = this.props.p;
        return (
            <div className="product-item" key={p.id} id={p.id}
                //  style={{ backgroundColor: this.state.color }}
                onClick={() => this.edit(p.id)}
            >
                <div className="img-thumbnail"><img className="img-100" src={p.thumbnailUrl} alt={p.thumbnailUrl} /></div>
                <div className="product-descr">
                    <div>{p.name}</div>
                    <div>{p.description}</div>
                    {/* <button className="btn btn-update" type='button' >UPDATE</button> */}
                    <button className="btn btn-delete" type='button' onClick={() => this.delete(p.id)}>DELETE</button>
                </div>
            </div>
        )
    }
}
export default ProductsList;
