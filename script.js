// ===========================
// Dark Mode
// ===========================

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️";

localStorage.setItem("theme","dark");

}else{

themeBtn.innerHTML="🌙";

localStorage.setItem("theme","light");

}

});

}

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

if(themeBtn){

themeBtn.innerHTML="☀️";

}

}

// ===========================
// Shopping Cart
// ===========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){

const count=document.getElementById("cart-count");

if(count){

count.innerHTML=cart.length;

}

}

updateCartCount();

function addToCart(name,price){

cart.push({

name:name,

price:price

});

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

updateCartCount();

alert(name+" Added to Cart");

}

// ===========================
// Product Search
// ===========================

const search=document.getElementById("search");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const products=document.querySelectorAll(".product-card");

products.forEach(product=>{

const text=product.innerText.toLowerCase();

if(text.includes(value)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}

// ===========================
// Newsletter
// ===========================

const subscribeBtn=document.getElementById("subscribeBtn");

if(subscribeBtn){

subscribeBtn.addEventListener("click",()=>{

const email=document.getElementById("email").value;

if(email==""){

alert("Please Enter Email");

return;

}

alert("Subscribed Successfully!");

document.getElementById("email").value="";

});

}

// ===========================
// Contact Form
// ===========================

const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully!");

contactForm.reset();

});

}

// ===========================
// Welcome Message
// ===========================

window.onload=()=>{

console.log("Welcome to Karthik Store");

};