 
 import React, { Component } from 'react';
import './css/deleteForm.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class DeleteForm extends Component {
  deleteRecord = () => {
   this.props.store.deleteProduct(this.props.id);
      this.props.closeDeleteForm();   
  }

  render() {
    return (
      <div className="delete-form">
        <div className="close-button">
        {/* <FontAwesomeIcon onClick={this.props.closeDeleteForm} icon="window-close" />*/}
        </div> 
        <div>Are you sure you want to delete this record? </div>
        <div className="div-button">
          <button onClick={this.deleteRecord}>YES</button>
          <span> </span>
          <button onClick={this.props.closeDeleteForm}>NO</button>
        </div>
      </div>
    )
  }
}
  
export default DeleteForm;

