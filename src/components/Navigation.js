import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class Navigation extends Component {
    changePages = (action) => {
        let p = this.props.store.currentPage;
        if (action === 'minus') {
            p = --p;
        }
        else {
            p = ++p;
        }
        this.props.store.currentPage = p;
        this.props.store.getCurrentRecords();
    }

    showPagination = () => {
        let lastPage = (this.props.store.pagination.lastPage === 0) ?
            Math.ceil(this.props.store.products.length / this.props.store.ITEMSPERPAGE)
            : this.props.store.pagination.lastPage;
        return (
            <div className="pagination">
                {this.props.store.currentPage !== 1 ?
                    <span className='page-num' onClick={() => this.changePages("minus")}>{"<Prev Page"}</span> :
                    <span className='page-num inactive'>{"<Prev Page"}</span>}
                <span>{this.props.store.currentPage} of {lastPage}</span>
                {this.props.store.currentPage !== lastPage ?
                    <span className='page-num' onClick={() => this.changePages("plus")}>{'Next Page>'}</span> :
                    <span className='page-num inactive'>{'Next Page>'}</span>}
            </div>)
    }
    render() {
        return (
            <div className="footer-pages">
                {this.showPagination()}
            </div>
        )
    }
}
export default Navigation;


