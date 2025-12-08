const products = [
    { id: 1, name: "T-shirt", price: 25.00, image: "images/image1.jpeg" },
    { id: 2, name: "Mug", price: 15.00, image: "images/image2.jpeg" },
    { id: 3, name: "Notebook", price: 10.00, image: "images/image3.jpeg" }
];

const cart = [];

function renderProducts() {
    const productsContainer = document.getElementById("products"); 

    productsContainer.innerHTML = "";

    products.forEach(product => {
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

renderProducts();
