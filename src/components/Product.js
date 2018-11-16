import React, { Component } from 'react';

class ProductsList extends Component {
    delete = (id) => {
        this.props.delete(id)
    }
    edit = (id) => {
        this.props.edit(id)
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
