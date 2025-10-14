// PRODUTOS
const products = [
    {id:1, name:"Bota Country Masculina", price:349.90, stock:10, image:""},
    {id:2, name:"Chapéu Cowboy", price:129.90, stock:15, image:"https://i.imgur.com/64nq5Oj.jpg"},
    {id:3, name:"Camisa Xadrez", price:89.90, stock:20, image:"https://i.imgur.com/YwGfQKl.jpg"},
    {id:4, name:"Calça Jeans Country", price:159.90, stock:12, image:"https://i.imgur.com/5y4XqGh.jpg"},
    {id:5, name:"Cinto de Couro", price:69.90, stock:30, image:"https://i.imgur.com/3h9PnQh.jpg"},
    {id:6, name:"Bota Feminina Country", price:299.90, stock:8, image:"https://i.imgur.com/RfYqHnD.jpg"}
];

// RENDERIZAR PRODUTOS
const container = document.getElementById("products-container");
let cart = 0;
const cartCount = document.getElementById("cart-count");

function renderProducts(list){
    container.innerHTML = "";
    list.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>Estoque: ${p.stock}</p>
            <p class="price">R$ ${p.price.toFixed(2)}</p>
            <button onclick="addToCart(${p.id})">Adicionar ao carrinho</button>
        `;
        container.appendChild(card);
    });
}

// ADICIONAR AO CARRINHO
function addToCart(id){
    cart++;
    cartCount.textContent = cart;
    alert("Produto adicionado ao carrinho!");
}

// BUSCA
document.getElementById("search").addEventListener("input", function(e){
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(filtered);
});

// BANNER AUTOMÁTICO
let currentSlide = 0;
const slides = document.querySelectorAll(".banner-slide");
setInterval(()=>{
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
},5000);

// INICIAL
renderProducts(products);
