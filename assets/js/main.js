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
// Galería portfolio: lightbox + navegación de imágenes
(function initPortfolioGallery() {
    const lightbox = document.getElementById('portfolio-lightbox');
    if (!lightbox) return;

    const imgEl = lightbox.querySelector('.lightbox-img');
    const titleEl = lightbox.querySelector('.lightbox-title');
    const counterEl = lightbox.querySelector('.lightbox-counter');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const projectLink = lightbox.querySelector('.lightbox-project-link');
    const githubLink = lightbox.querySelector('.lightbox-github-link');
    const actionsEl = lightbox.querySelector('.lightbox-actions');

    let images = [];
    let currentIndex = 0;
    let lastFocus = null;

    function updateLightboxImage() {
        imgEl.src = images[currentIndex];
        imgEl.alt = `${titleEl.textContent} - imagen ${currentIndex + 1}`;
        counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    function openLightbox(card) {
        images = JSON.parse(card.dataset.images || '[]');
        if (!images.length) return;

        const overlayTitle = card.querySelector('.overlay h3');
        titleEl.textContent = overlayTitle ? overlayTitle.textContent : 'Proyecto';
        currentIndex = 0;
        updateLightboxImage();

        const link = card.dataset.link;
        const github = card.dataset.github;
        if (link) {
            projectLink.href = link;
            projectLink.hidden = false;
        } else {
            projectLink.hidden = true;
        }
        if (github) {
            githubLink.href = github;
            githubLink.hidden = false;
        } else {
            githubLink.hidden = true;
        }
        if (actionsEl) {
            actionsEl.hidden = !link && !github;
        }

        lastFocus = document.activeElement;
        lightbox.hidden = false;
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        lightbox.querySelector('.lightbox-close').focus();
    }

    function closeLightbox() {
        lightbox.hidden = true;
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocus && typeof lastFocus.focus === 'function') {
            lastFocus.focus();
        }
    }

    document.querySelectorAll('.portfolio .proyecto-preview').forEach((btn) => {
        btn.addEventListener('click', () => openLightbox(btn.closest('.proyecto')));
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateLightboxImage();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateLightboxImage();
        }
    });

    lightbox.querySelectorAll('[data-lightbox-close]').forEach((el) => {
        el.addEventListener('click', closeLightbox);
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.hidden) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) prevBtn.click();
        if (e.key === 'ArrowRight' && !nextBtn.disabled) nextBtn.click();
    });
})();

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