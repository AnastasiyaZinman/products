
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class SavePopUp extends Component {
    
    closeSaveForm = () => {
        this.props.store.indexOfUpdatedProduct = -1;
    }
    render() {
        let index = this.props.store.indexOfUpdatedProduct,
            name=this.props.store.products[index].name;
        return (
            <div className="delete-form">
                <div className="close-button">
                    <FontAwesomeIcon style={{ color: "#AAAAAA" }} className="fas" icon={faTimes} onClick={this.closeSaveForm} />
                </div>
                <div>Thank you for updating product 
                    <div className="bold-text">{name} </div></div>
                <div className="div-button">
                    <button onClick={this.closeSaveForm}>OK</button>
                </div>
            </div>
        )
    }
}

export default SavePopUp;

