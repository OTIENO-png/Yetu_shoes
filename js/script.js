let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});

// SHOPPING CART


// Get references to the HTML elements
const addToCartBtn = document.getElementsByClassName('btn');
const cartItems = document.getElementById('cart-items');

// Define an event listener for the "Add to Cart" button
addToCartBtn.addEventListener('click', addToCart);

// Function to handle adding an item to the cart
function addToCart() {
  // Get the item details (name, price, etc.) from your data source
  const itemName = 'Example Item';
  const itemPrice = 9.99;

  // Create a new cart item element
  const newItem = document.createElement('li');
  newItem.textContent = `${itemName} - $${itemPrice}`;

  // Add the new item to the cart
  cartItems.appendChild(newItem);
}

