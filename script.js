// PRODUTOS
const products = [
    {id:1, name:"Chapeu ", price:349.90, stock:10, image:"pr31-70b8c5c42a68b9e1b516789136344828-1024-1024.jpg"},
    {id:2, name:"Chapéu Country feminino (Ana Castela)", price:200.00, stock:15, image:"chapeu_country_ana_castela_mundial_americano_preto_c_strass_ref_961_4639_1_7c5957f38d1b03d2444661ffa9140023.webp"},
    {id:3, name:"Camisa Xadrez", price:89.90, stock:20, image:"whatsapp-image-2023-10-05-at-12-40-04-ca15831c0cc14b52d016965279632445-1024-1024.jpeg"},
    {id:4, name:"Calça Jeans Race Bull", price:190.00, stock:12, image:"images.jpeg"},
    {id:5, name:"Cinto de Couro", price:69.90, stock:30, image:"cinto_em_couro_bovino_modelo_avestruz_cinto_02_1015_1_5734d13e6e59eeb65e6c2976b06bc274.webp"},
    {id:6, name:"Bota texana", price:299.90, stock:8, image:"IMG_3957_800x.webp"}
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
