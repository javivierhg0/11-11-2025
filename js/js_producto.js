//COMPONENTES--------------------------
const productos = [
    {nombre:"TituloUNAM", precio:20, img:"https://www.titulosydiplomas.com/cdn/shop/files/TI-UNAM-TYD09A-Frente_bcb0e81a-5c08-43cd-96fb-229314ccba66.png?v=1751411460"},
    {nombre:"Pantunflas", precio:2000, img:"https://i0.wp.com/webadictos.com/media/2020/09/pantuflas_de_bolillo.png?resize=499%2C470&ssl=1"}
];

const contendor = document.getElementById("contenedor");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <button>Agregar</button>
    `;
    contendor.appendChild(card);
});