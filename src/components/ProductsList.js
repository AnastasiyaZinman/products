import React, { Component } from 'react';
import './css/products.css';
import DeleteForm from './DeleteForm';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
            popUpDelete: false
        }
    }

    componentDidMount() {       
        console.log("sort");
        // this.props.store.sortProducts();
      }
        
      edit = (id) => {
        this.props.store.productIdForEdit = id;
        // let details = this.props.store.getDetails(id);
       
        // console.log(details.id, ' ',details.name)
      }

      delete = (id) => {
          console.log("delete")
        this.props.store.productIdForDelete = id;
      }
      closeDeleteForm = () => {
          this.props.store.productIdForDelete = -1;
      }

    renderProductList = () => {
        // debugger;
        let records= this.props.store.products;
        console.log(records);
       return records.map(p => {
            // console.log("p", p)
            return (   
                // this.editProduct(p.id)           this.setState({color : 'lightblue'})
                <div className="product-item" key={p.id} id={p.id}
                    //  style={{ backgroundColor: this.state.color }}
                    // onClick={() => this.edit(p.id)}
                    >
                <div className="img-thumbnail"><img className="img-100" src={p.thumbnailUrl} alt={p.thumbnailUrl}/></div>
                    <div className="product-descr">
                        <div>{p.name}</div>
                        <div>{p.description}</div>    
                        <button className="btn btn-update" type='button' onClick={() => this.edit(p.id)}>UPDATE</button>
                        <button className="btn btn-delete" type='button' onClick={() => this.delete(p.id)}>DELETE</button>
                    </div>
                </div>
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
