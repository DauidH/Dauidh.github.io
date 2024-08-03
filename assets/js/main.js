let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Para llamar la función de incrementar porcentajes
const elementoContador  = document.getElementsByClassName('contador');
let activarNumeros = false
//Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distanciaSkills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        const skillsTexto = ["javascript","htmlcss","angular","node","postgre","git","python","java","bootstrap","aws","comunicacion","trabajo","creatividad","dedicacion","project"]
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].classList.add(skillsTexto[i])
        }
        if (!activarNumeros) {
            activarNumeros = true
            for (let i = 0; i < elementoContador.length; i++) {
                contadorPorcentaje(Number(elementoContador[i].textContent), i)
            }
        }
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}

function contadorPorcentaje(numeroFinal, i) {
    let contador = 0;
    const intervalo = setInterval(() => {
        elementoContador[i].textContent = `${contador}%`;
        if (contador >= numeroFinal) {
            clearInterval(intervalo);
        } else {
            contador++;
        }
    }, 17);
}

// mostrar educacion complementaria
document.getElementById('edu-comp-butt').addEventListener('click', mostrarEduComp)
function mostrarEduComp() {
    let eduCompVent = document.getElementById('edu-comp-vent');
    if (eduCompVent.classList.contains('mostrar')) {
        eduCompVent.classList.remove('mostrar');
    } else {
        eduCompVent.classList.add('mostrar');
    }
}
//funcion del formulario
function submitAndResetForm(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    const form = event.target;

    if (form.checkValidity()) {
        alert('Se ha enviado tu mensaje, muchas gracias.');
        form.reset();
    } else {
        form.reportValidity(); // Muestra los mensajes de error de validación
    }
}