'use strict';
console.log('old ducks babay');

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
console.log('duccckksss', Products.allProductsArray);


function getRandomNumber() {
  return Math.floor(Math.random() * Products.allProductsArray.length);
}

function renderProducts() {
  let product1 = getRandomNumber();
  let product2 = getRandomNumber();
  let product3 = getRandomNumber();
  console.log(typeof product1, product2, product3);

  while (product1 === product2 || product1 === product3) {
    product1 = getRandomNumber();
  }


  while (product2 === product1 || product2 === product3) {
    product2 = getRandomNumber();
  }


  image1.src = Products.allProductsArray[product1].imageSrc;
  image2.src = Products.allProductsArray[product2].imageSrc;
  image3.src = Products.allProductsArray[product3].imageSrc;

  image1.alt = Products.allProductsArray[product1].name;
  image2.alt = Products.allProductsArray[product2].name;
  image3.alt = Products.allProductsArray[product3].name;

  console.log(image1, image2, image3);

  Products.allProductsArray[product1].views++;
  Products.allProductsArray[product2].views++;
  Products.allProductsArray[product3].views++;
}

function handleProductClick(event) {
  console.log(event.target);
  if (event.target === productContainer) {
    alert('Please click product image!');
  }


  clicks++;
  let clickedOnProduct = event.target.alt;
  console.log('🚀 ~ file: app.js:68 ~ clickedOnProduct:', clickedOnProduct);
  for (let i = 0; i < Products.allProductsArray.length; i++) {
    if (clickedOnProduct === Products.allProductsArray[i].name) {
      Products.allProductsArray[i].clickedOn++;
      break;
    }
  }


  if(clicks === maxClicks) {
    productContainer.removeEventListener('click', handleProductClick);
    resultsButton.addEventListener('click', renderResults);
    productContainer.className = 'no-voting';
  } else {
    console.log('products are renderinggg');
    renderProducts();
  }
}

function renderResults() {
  let ul = document.getElementById('results_list');
  for(let i = 0; i , Products.allProductsArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${Products.allProductsArray[i].name} had ${Products.allProductsArray[i].views} views and was clicked ${Products.allProductsArray[i].clickedOn} times.`;
    ul.appendChild(li);
  }
}

new Products ('Roller bag', '../images/bag.jpg');
new Products ('Banana', '../images/banana.jpg');
new Products ('Bathroom', '../images/bathroom.jpg');
new Products ('Boots', '../images/boots.jpg');
new Products ('Breakfast', '../images/breakfast.jpg');
new Products ('Bubblegum', '../images/bubblegum.jpg');
new Products ('Chair', '../images/chair.jpg');
new Products ('Cthulhu', '../images/cthulhu.jpg');
new Products ('Dog', '../images/dog-duck.jpg');
new Products ('Dragon', '../images/dragon.jpg');
new Products ('Pen', '../images/pen.jpg');
new Products ('Pet Sweep', '../images/pet-sweep.jpg');
new Products ('Scissors', '../images/scissors.jpg');
new Products ('Shark', '../images/shark.jpg');
new Products ('Sweep', '../images/sweep.png');
new Products ('Tauntaun', '../images/tauntaun.jpg');
new Products ('Unicorn', '../images/unicorn.jpg');
new Products ('Water Can', '../images/water-can.jpg');
new Products ('Wine Glass', '../images/wine-glass.jpg');


renderProducts();




function renderChart() {
  console.log(Products.allProductsArray);

  let productsName = [];
  let productsLike = [];
  let productsView = [];


  for(let i = 0; i < Products.allProductsArray.length; i++) {
    productsName.push(Products.allProductsArray[i].name);
    productsLike.push(Products.allProductsArray[i].clickedOn);
    productsView.push(Products.allProductsArray[i].views);
  }
  console.log(productsName, productsLike, productsView);

  const ctx = document.getElementById('chartDemo');

  new Chart(ctx, {
    type: 'bar',

    data: {
      labels: productsName,
      datasets: [
        {
          label: 'Products Liked',
          backgroundColor: 'rgb(169, 206, 244)',
          borderColor: 'rgb(152, 210, 235)',
          data: productsLike,
          borderWidth: 2,
        },
        {
          label: 'Products Viwed',
          backgroundColor: 'rgb(67, 146, 241)',
          borderColor: 'rgb(152, 210, 235)',
          data: productsView,
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}


productContainer.addEventListener('click', handleProductClick);

