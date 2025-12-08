// Array to hold the list of products
const products = [
    { id: 1, name: "T-shirt", price: 25.00, image: "images/image1.jpeg" },
    { id: 2, name: "Mug", price: 15.00, image: "images/image2.jpeg" },
    { id: 3, name: "Notebook", price: 10.00, image: "images/image3.jpeg" }
];

// Array to hold the items added to the cart
const cart = [];

// Function to render products on the screen
function renderProducts() {
    const productsContainer = document.getElementById("products"); 

    productsContainer.innerHTML = "";

    // Loop through each product in the array
    products.forEach(product => {
        // Template literal to create the product card HTML
        const productCardHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: GHS ${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        
        productsContainer.innerHTML += productCardHTML;
    });
}

// Immediately call the function to display products on page load
renderProducts();