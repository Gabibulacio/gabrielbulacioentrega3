const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const productos = [
    {
        id: 1,
        nombre: "Sandalias",
        precio: 4500,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/936/990/products/c7107065-eb0d-46ba-8c0a-5b451566a52b1-554eb26560abc147dd16699358569842-640-0.jpeg", 
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Borcegos",
        precio: 6000,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/936/990/products/ae20cd64-771c-40dd-95dc-aab7bb00e248-3e09251963adaaa64416587943562509-640-0.jpeg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Botas",
        precio: 6000,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/936/990/products/d14153b5-3a2f-4664-a2a7-9b2848a7a8291-d9b1132f89986e651016769082600109-1024-1024.webp",
        cantidad: 1,
    },    
    
    {
        id: 4,
        nombre: "Texanas",
        precio: 6000,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/936/990/products/01ae7b6c-82ef-47e8-ad18-a2fc749023bc1-91168e35cce53a543f16780359048209-1024-1024.webp",
        cantidad: 1,
    },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
     <img src= "${product.img}">
     <h3>${product.nombre}</h3>
     <p class="price">${product.precio}$</p>
     `;

shopContent.append(content);

let comprar = document.createElement("button");
comprar.innerText = "comprar";
comprar.className = "comprar";

content.append(comprar);

comprar.addEventListener("click" , () =>{

const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

if (repeat){
    carrito.map((prod) => {
        if (prod.id === product.id) {
            prod.cantidad++;
        }
    });
} else {
        carrito.push({
            id : product.id,
            img: product.img,
            nombre:product.nombre,
            precio:product.precio,
            cantidad:product.cantidad,
        });
    }
    console.log(carrito);
    console.log(carrito.length);
    carritoCounter();
    saveLocal();
 });
});

    const saveLocal = () => { 
localStorage.setItem("carrito", JSON.stringify (carrito));
};




