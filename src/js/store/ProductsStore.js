// import React, { Component } from 'react';
import { observable, action, computed, reaction } from "mobx";
import axios from 'axios';
import { runInThisContext } from "vm";
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

    @action sortProducts = () => {
        // debugger;
        let sortParameter = this.sort;
        console.log("sort Parameter", sortParameter);
        let sortedArray = [...this.filteredAr]
        this.filteredAr = sortedArray.sort((a, b) => {
            return (b[sortParameter] > a[sortParameter]) ? 1 : -1;
        });
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
        // debugger;
        console.log("delete" + id);
        if (this.productIdForEdit === id){
            this.productIdForEdit = -1;
        }
        let newProducts = [...this.products];
        newProducts = this.products.filter(p => p.id !== id);
        this.products = newProducts;
        this.filteredAr=this.filterProducts();
        this.sortProducts();
        console.log("after delete", this.products);

    }

    @action findCurrentItem = (id) => {
        return this.filteredAr.filter(p => p.id === id)[0];
    }
}

const store = new ProductsStore();
export default store;