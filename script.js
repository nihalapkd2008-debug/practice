
const productContainer = document.getElementById("products");
async function getProducts() {
    const response = await fetch ("https://fakestoreapi.com/products/");
    const products = await response.json();

    products.forEach(function(product) {

        productContainer.innerHTML += `

        <div class="card">

        <img src="${product.image}">

        <h3>${product.title}</h3>

        <p>₹ ${product.price}</p>

        <p>${product.category}</p>

        <button>View Details</button>

        </div>

        `;

    });

}

getProducts();