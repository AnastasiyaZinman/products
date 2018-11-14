// import React, { Component } from 'react';
import { observable, action, computed, reaction } from "mobx";
import axios from 'axios';
class ProductsStore {
    @observable products = [];
    @observable isLoading = true;
    @observable productIdForEdit = -1;
    @observable productIdForDelete = -1;
    @action getData = () => {
        console.log("here");
		axios.get('https://msbit-exam-products-store.firebaseio.com/products.json')
			.then(result => {
				console.log(result);
				this.products = result.data;
				console.log("store products", this.products);
				this.isLoading = false;
            })
            .catch(function (error) {
            console.log(error);
          })
    }

    @action sortProducts = () => {
        this.products.sort((a, b) => (new Date(b.creationDate) - new Date(a.creationDate)));
    }

    @action getDetails = (id) => {
        console.log("productIdForEdit"+ id);
        let item = this.findCurrentItem(id)
        console.log("item " + item.name);
        return(item)
    }
    @action deleteProduct = (id) => {
        console.log("delete"+ id);
        let newProducts = [...this.products]; 
        newProducts = this.products.filter(p => p.id !== id);
        this.products = newProducts;
        console.log("after delete",this.products);
        
    }

    @action findCurrentItem = (id) => {
        return this.products.filter(p => p.id === id)[0];
    }
}

const store = new ProductsStore();
export default store;