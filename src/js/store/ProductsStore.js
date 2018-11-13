// import React, { Component } from 'react';
import { observable, action, computed, reaction } from "mobx";
import axios from 'axios';
class ProductsStore {
    @observable products = [];
    @observable isLoading = true;
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

    @action sortProducts =() => {
        this.products.sort((a, b) => (new Date(b.creationDate) - new Date(a.creationDate)));
    }
       
}
const store = new ProductsStore();
export default store;