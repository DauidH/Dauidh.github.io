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

//Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distanciaSkills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("angular");
        habilidades[3].classList.add("node");
        habilidades[4].classList.add("postgre");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("project");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
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