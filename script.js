const boton = document.getElementById("entrar");

const portada = document.querySelector(".hero");

const invitacion = document.getElementById("invitacion");

boton.addEventListener("click", ()=>{

    portada.style.display = "none";

   invitacion.style.display = "block";

setTimeout(()=>{

    invitacion.classList.add("mostrar");

},100);

    // Iniciar música automáticamente
    musica.play();

    btnMusica.classList.add("girar");

    reproduciendo = true;

    window.scrollTo({

        top: invitacion.offsetTop,

        behavior:"smooth"

    });

});

// Fecha de la boda
const fechaBoda = new Date("August 21, 2026 15:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaBoda - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

}

setInterval(actualizarContador,1000);

actualizarContador();

const imagenes = document.querySelectorAll(".grid-galeria img");

const lightbox = document.getElementById("lightbox");
const imagenGrande = document.getElementById("imagenGrande");

const cerrar = document.querySelector(".cerrar");
const anterior = document.querySelector(".anterior");
const siguiente = document.querySelector(".siguiente");

let indiceActual = 0;

imagenes.forEach((imagen, indice)=>{

    imagen.addEventListener("click", ()=>{

        indiceActual = indice;

        mostrarImagen();

        lightbox.style.display="flex";
        
        setTimeout(()=>{

    imagenGrande.style.transform="scale(1)";

},10);

    });

});

function mostrarImagen(){

    imagenGrande.src = imagenes[indiceActual].src;

}

cerrar.addEventListener("click", ()=>{

    imagenGrande.style.transform="scale(.8)";

    setTimeout(()=>{

        lightbox.style.display="none";

    },200);

});
siguiente.addEventListener("click", ()=>{

    indiceActual++;

    if(indiceActual>=imagenes.length){

        indiceActual=0;

    }

    mostrarImagen();

});

anterior.addEventListener("click", ()=>{

    indiceActual--;

    if(indiceActual<0){

        indiceActual=imagenes.length-1;

    }

    mostrarImagen();

});
document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        imagenGrande.style.transform="scale(.8)";

        setTimeout(()=>{

            lightbox.style.display="none";

        },200);

    }
    document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!="flex") return;

    if(e.key==="ArrowRight"){

        indiceActual++;

        if(indiceActual>=imagenes.length){

            indiceActual=0;

        }

        mostrarImagen();

    }

    if(e.key==="ArrowLeft"){

        indiceActual--;

        if(indiceActual<0){

            indiceActual=imagenes.length-1;

        }

        mostrarImagen();

    }

});

});
const musica = document.getElementById("musica");

const btnMusica = document.getElementById("btnMusica");

let reproduciendo = false;

btnMusica.addEventListener("click", ()=>{

    if(reproduciendo){

        musica.pause();

        btnMusica.classList.remove("girar");

    }else{

        musica.play();

        btnMusica.classList.add("girar");

    }

    reproduciendo=!reproduciendo;

});

//================ PÉTALOS =================//

const contenedorPetalos = document.getElementById("petalos");

function crearPetalo(){

    const petalo = document.createElement("div");

    petalo.classList.add("petalo");

    petalo.innerHTML = "🌸";

    petalo.style.left = Math.random()*100+"vw";

    petalo.style.animationDuration =
    (6 + Math.random()*6)+"s";

    petalo.style.fontSize =
    (18 + Math.random()*20)+"px";

    contenedorPetalos.appendChild(petalo);

    setTimeout(()=>{

        petalo.remove();

    },12000);

}

setInterval(crearPetalo,500);

//================ REGALOS =================//

const botonCuenta = document.getElementById("mostrarCuenta");
const cuenta = document.getElementById("cuenta");

botonCuenta.addEventListener("click",()=>{

    if(cuenta.style.display==="block"){

        cuenta.style.display="none";

        botonCuenta.innerHTML='<i class="fa-solid fa-envelope-open"></i> Ver información';

    }else{

        cuenta.style.display="block";

        botonCuenta.innerHTML='<i class="fa-solid fa-eye-slash"></i> Ocultar información';

    }

});
//================ PRELOADER =================//

window.addEventListener("load",()=>{

    setTimeout(()=>{

        const preloader = document.getElementById("preloader");

        preloader.style.opacity="0";

        setTimeout(()=>{

            preloader.style.display="none";

        },800);

    },1800);

});

