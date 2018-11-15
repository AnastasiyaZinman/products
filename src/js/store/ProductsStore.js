// import React, { Component } from 'react';
import { observable, action, computed, reaction } from "mobx";
import axios from 'axios';
class ProductsStore {
    @observable products = [];
    @observable isLoading = true;
    @observable productIdForEdit = -1;
    @observable productIdForDelete = -1;
    @observable sort = 'name';
    @observable filteredAr =[];
    @observable searchText = '';
    @action getData = () => {
        console.log("here");
        axios.get('https://msbit-exam-products-store.firebaseio.com/products.json')
            .then(result => {

                this.products = result.data;
                console.log("this products", this.products);
                this.filteredAr=[...this.products]
                this.sortProducts(this.filteredAr)
                this.isLoading = false;
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    @action sortProducts = (arrayForSort) => {
        debugger;
        let sortParameter = this.sort;
        console.log("sort Parameter", sortParameter);
        let sortedArray = [...this.filteredAr]
        sortedArray.sort((a, b) => (b[sortParameter] - a[sortParameter]));
        this.filteredAr = sortedArray;
        console.log("sort", this.filteredAr);
    }

    @action getDetails = (id) => {
        console.log("productIdForEdit" + id);
        let item = this.findCurrentItem(id)
        console.log("item " + item.name);
        return (item)
    }
    @action filterProducts = () => {
        // debugger;
        console.log("searchText",this.searchText)
        return this.products.filter (p =>
           ( (p["name"].toLowerCase().includes(this.searchText.toLowerCase()))
            ||
            (p["description"].toLowerCase().includes(this.searchText.toLowerCase())))
        )
    }


    @action deleteProduct = (id) => {
        console.log("delete" + id);
        let newProducts = [...this.products];
        newProducts = this.products.filter(p => p.id !== id);
        this.products = newProducts;
        this.filteredAr=this.filterProducts();
        this.sortProducts(this.filteredAr);
        console.log("after delete", this.products);

    }

    @action findCurrentItem = (id) => {
        return this.filteredAr.filter(p => p.id === id)[0];
    }
}

const store = new ProductsStore();
export default store;