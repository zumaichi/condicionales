
let puntuacion = 0;
const mensajes = {
    ganar: 'Has ganado',
    perder: 'Has perdido',
    plantarse: 'te plantas con:',
    reiniciar: 'Juego reiniciado'
};
const puntosMax = 7.5;

const carta = () => {
    let valor = 0 
    valor = Math.floor(Math.random() * 10) + 1;
    console.log(valor);
   if (valor > 7){
    valor = valor + 2 ;
    console.log("dentro del if" + valor)
   }
   let imagenCarta;
   switch (valor) {
       case 1:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
           break;
       case 2:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
           break;
       case 3:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
           break;
       case 4:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
           break;
       case 5:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
           break;
       case 6:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
           break;
       case 7:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
           break;
       case 10:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
           break;
       case 11:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
           break;
       case 12:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
           break;
       default:
           imagenCarta = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
   }

   return (valor, imagenCarta);
};


const generarCarta = () => {
    const nuevaCarta = carta(); 
    let valorCarta = nuevaCarta 
    if (valorCarta > 7){
        valorCarta = 0.5;
    }
    puntuacion += valorCarta;
    document.getElementById("puntuacion").innerHTML=`Nueva carta: ${nuevaCarta}, Puntuación total: ${puntuacion}`;
    if (puntuacion > puntosMax) {
        document.getElementById("mensaje").innerHTML=`${mensajes.perder}`;
        console.log('Has perdido');
    }
    else if (puntuacion === puntosMax) 
        console.log('Has ganado');

    };
    const reiniciar = () => {
        puntuacion = 0;
        muestraPuntuacion();
        document.getElementById("mensaje").innerHTML=`${mensajes.reiniciar}`;
        console.log('Juego reiniciado');
    };
    
    const plantarse = () => {
        puntuacion = puntuacion;
        document.getElementById("puntuacion").innerHTML='Puntuación total';
        document.getElementById("mensaje").innerHTML=` ${mensajes.plantarse} ${puntuacion} puntos`;
        muestraPuntuacion();
        console.log('plantado');
    };
    const muestraCarta = () => {
        document.getElementById('imagenCarta').innerHTML = valor;
    };
const muestraPuntuacion = () => {
    document.getElementById('puntuacion').innerHTML = puntuacion;
};

const botonDarCarta = document.getElementById('botonDarCarta');
botonDarCarta.addEventListener('click', generarCarta);

const botonReinicio = document.getElementById('botonReinicio');
botonReinicio.addEventListener('click', reiniciar);

const botonPlantarse = document.getElementById('botonPlantarse');
botonPlantarse.addEventListener('click', plantarse);

