'use strict';
console.log('old ducks babay')

let productContainer = document.getElementById('product_container');
let resultsButton = document.getElementById('results');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
console.log(productContainer, resultsButton, image1, image2, image3);

let clicks = 0;
let maxClicks = 25;
Products.allProductsArray = [];


function Products(name, src) {
    this.name = name;
    this.imageSrc = src;
    this.views = 0;
    this.clickedOn = 0;
    Products.allProductsArray.push(this);
}