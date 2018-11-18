// import React, { Component } from 'react';
import { observable, action, computed, reaction } from "mobx";
import axios from 'axios';
class ProductsStore {
    @observable products = [];
    @observable isLoading = true;
    @observable productIdForEdit = -1;
    @observable productIdForDelete = -1;
    @observable sort = 'name';
    @observable filteredAr = [];
    @observable searchText = '';
    @observable indexOfUpdatedProduct = -1;
    @observable currentPage = 1;
    @observable ITEMSPERPAGE = 4;
    @observable pagination = {
        startIndex: 0,
        endIndex: 0,
        lastPage: 0
    };
    @observable form = {
        name: '',
        description: '',
        price: 0,
        url: ''
    };
    @observable records =[];
    @action getData = () => {
        console.log("here");
        axios.get('https://msbit-exam-products-store.firebaseio.com/products.json')
            .then(result => {

                this.products = result.data;
                console.log("this products", this.products);
                this.filteredAr = [...this.products]
                this.sortProducts(this.filteredAr)
                this.isLoading = false;
            })
            .then(() => {
                this.getCurrentRecords();
            }

            )
            .catch(function (error) {
                console.log(error);
            })
    }

    @action sortProducts = () => {
        let sortParameter = this.sort;
        console.log("sort Parameter", sortParameter);
        let sortedArray = [...this.filteredAr]
        this.filteredAr = sortedArray.sort((a, b) => {
            return (b[sortParameter] < a[sortParameter]) ? 1 : -1;
        });
    }

    @action getDetails = (id) => {
        console.log("productIdForEdit" + id);
        let item = this.findCurrentItem(id)
        console.log("item " + item.name);
        return (item)
    }
    @action filterProducts = () => {
        // debugger;
        console.log("searchText", this.searchText)
        return this.products.filter(p =>
            ((p["name"].toLowerCase().includes(this.searchText.toLowerCase()))
                ||
                (p["description"].toLowerCase().includes(this.searchText.toLowerCase())))
        )
    }
    @action saveDetails = () => {
        let index = this.findIndexItem(this.productIdForEdit)
        if (index !== -1) {
            this.products[index].name = this.form.name;
            this.products[index].description = this.form.description;
            this.products[index].price = this.form.price;
        }
        return index
    }

    @action deleteProduct = (id) => {
        if (this.productIdForEdit === id) {
            this.productIdForEdit = -1;
        }
        let newProducts = [...this.products];
        newProducts = this.products.filter(p => p.id !== id);
        this.products = newProducts;
        this.filteredAr = this.filterProducts();
        this.sortProducts();
        this.getCurrentRecords()
        console.log("after delete", this.products);

    }

    @action findCurrentItem = (id) => {
        return this.filteredAr.filter(p => p.id === id)[0];
    }

    findIndexItem = (id) => {
        return this.products.findIndex(item => { return item.id === id }
        )
    }

    @action updateFormDetails = (arr) => {
        this.form.name = arr.name;
        this.form.description = arr.description;
        this.form.price = arr.price;
        this.form.url = arr.url;
    }
    @action getCurrentRecords = () => {
        // debugger;
        let records = [...this.filteredAr];
        let startIndex = (this.currentPage - 1) * this.ITEMSPERPAGE + 1,
        endIndex = startIndex + this.ITEMSPERPAGE - 1,
        lastPage = Math.ceil(records.length / this.ITEMSPERPAGE);
        this.pagination = { startIndex, endIndex, lastPage }
        this.records = records.slice(startIndex - 1, endIndex);
       
    }
}
const store = new ProductsStore();
export default store;