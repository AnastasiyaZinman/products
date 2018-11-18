import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from "mobx";

@inject("store")
@observer
class Navigation extends Component {


    PagePlus = () => {
       let p = this.props.store.currentPage + 1;
        this.props.store.currentPage=p;
        this.props.store.getCurrentRecords();
    }
    PageMinus = () => {
        let p= this.props.store.currentPage - 1;
        this.props.store.currentPage=p;
        this.props.store.getCurrentRecords();
    }

    showPagination = () => {
        // debugger;
        let lastPage = (this.props.store.pagination.lastPage===0)?
        Math.ceil(this.props.store.products.length/this.props.store.ITEMSPERPAGE):this.props.store.pagination.lastPage;
       
        console.log("lastPage", lastPage)
        return (<div className="pagination">
            {this.props.store.currentPage !== 1 ?
                <button onClick={this.PageMinus}>prev</button> : null}

            <span> </span> {this.props.store.currentPage} - {lastPage} <span> </span>
            
            {this.props.store.currentPage !== lastPage ?
                <button onClick={ this.PagePlus}>next</button> : null}
        </div>)
    }

    render() {
        return (
            <div className="footer-pages">
                {this.showPagination()}
                {/* <img className="main-img" src={mainImg} alt="crm"/> */}
            </div>
        )
    }
}
export default Navigation;


