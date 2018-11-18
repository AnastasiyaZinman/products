import React, { Component } from 'react';
import './css/deleteForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class DeleteForm extends Component {

  deleteRecord = () => {
    this.props.store.deleteProduct(this.props.store.productIdForDelete);
    this.closeDeleteForm();
  }
  closeDeleteForm = () => {
    this.props.store.productIdForDelete = -1;
  }

  render() {
    return (
      <div className="delete-form">
        <div className="close-button">
          <FontAwesomeIcon style={{ color: "#AAAAAA" }} className="fas" icon={faTimes} onClick={this.closeDeleteForm} />
        </div>
        <div>Are you sure you want to delete this record? </div>
        <div className="div-button">
          <button onClick={this.deleteRecord}>YES</button>
          <button onClick={this.closeDeleteForm}>NO</button>
        </div>
      </div>
    )
  }
}

export default DeleteForm;

