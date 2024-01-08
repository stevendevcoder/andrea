
const botonNO = document.querySelector(".no");
const contenedorPrincipal = document.querySelector(".contenedor");
const maxWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const maxHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const sonidos = [
    document.getElementById('s1'),
    document.getElementById('s2'),
    document.getElementById('s3'),
    document.getElementById('s4'),
    document.getElementById('s5'),
    document.getElementById('s6')
];

console.log(maxWidth, " ", maxHeight);

function cambiarPosicion(elemento){
    elemento.style.position = 'absolute';

    // Obtener las dimensiones del contenedor principal
    const contenedorWidth = contenedorPrincipal.clientWidth;
    const contenedorHeight = contenedorPrincipal.clientHeight;

    // Obtener las dimensiones del botón
    const botonWidth = botonNO.clientWidth;
    const botonHeight = botonNO.clientHeight;

    // Calcular las posiciones aleatorias dentro de los límites del contenedor
    let randomWidth = Math.floor(Math.random() * (contenedorWidth - botonWidth));
    let randomHeight = Math.floor(Math.random() * (contenedorHeight - botonHeight));

    // Establecer las nuevas posiciones
    elemento.style.top = randomHeight + 'px';
    elemento.style.left = randomWidth + 'px';
    console.log("h:", randomHeight, " . w:", randomWidth);
    sonidos[Math.floor(Math.random() * sonidos.length)].play();
}

botonNO.addEventListener("click", () => cambiarPosicion(botonNO));
