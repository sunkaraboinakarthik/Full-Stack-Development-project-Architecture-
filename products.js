const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    image: "https://via.placeholder.com/250?text=Laptop"
  },
  {
    id: 2,
    name: "Smart Phone",
    price: 20000,
    image: "https://via.placeholder.com/250?text=Phone"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2500,
    image: "https://via.placeholder.com/250?text=Headphones"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 5000,
    image: "https://via.placeholder.com/250?text=Watch"
  },
  {
    id: 5,
    name: "Keyboard",
    price: 1200,
    image: "https://via.placeholder.com/250?text=Keyboard"
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 800,
    image: "https://via.placeholder.com/250?text=Mouse"
  }
];

function loadProducts() {

  const container = document.getElementById("products");

  if (!container) return;

  container.innerHTML = "";

  products.forEach(product => {

    container.innerHTML += `
      <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <h3>${product.name}</h3>

        <p>₹${product.price}</p>

        <button onclick="addToCart('${product.name}', ${product.price})">
          Add to Cart
        </button>

      </div>
    `;

  });

}

window.onload = () => {

  loadProducts();

  updateCartCount();

};