document.addEventListener('DOMContentLoaded', function() {
    // Código para desplazamiento suave de los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el comportamiento por defecto del ancla

            const targetId = this.getAttribute('href'); // Obtiene el ID del elemento de destino
            
            // Si el enlace es solo '#', se desplaza al top de la página
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Calcula la altura de la navbar para evitar que el contenido quede oculto
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    // Calcula la posición de desplazamiento ajustando por la altura de la navbar
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Inicialización y configuración de ScrollReveal
    ScrollReveal().reveal('.header-content-left', { delay: 300, origin: 'left' });
    ScrollReveal().reveal('.header-content-right', { delay: 300, origin: 'right' });
    ScrollReveal().reveal('.info-left', { delay: 200, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.info-right', { delay: 200, origin: 'right', distance: '50px' });
    ScrollReveal().reveal('#about-me', { delay: 100, origin: 'bottom', distance: '20px' });
    ScrollReveal().reveal('#barra-separadora-proyectos', { delay: 100, origin: 'bottom' });
    ScrollReveal().reveal('#contact-section', { delay: 100, origin: 'bottom' });
    ScrollReveal().reveal('footer', { delay: 100, origin: 'bottom' });
    ScrollReveal().reveal('#habilidades h2', { delay: 100, origin: 'top' });
    ScrollReveal().reveal('#habilidades h3', { delay: 150, origin: 'top' });
    
    // Configuración para las barras de progreso usando ScrollReveal
    ScrollReveal().reveal('.skill-item', {
        delay: 100,       // Pequeño retraso para cada elemento
        distance: '0px',  // No mover el elemento, solo aplicar el 'afterReveal'
        opacity: 1,       // Mantener la opacidad 
        easing: 'ease-in-out',
        interval: 50,     // Pequeño retraso entre la animación de cada skill-item
        afterReveal: (el) => {
            // Esta función se ejecuta una vez que el elemento 'skill-item' es visible
            const fill = el.querySelector('.progress-bar-fill');
            // Leer el porcentaje del atributo data-progress del div .progress-bar-fill
            const percentage = fill ? fill.getAttribute('data-progress') : null;
            if (fill && percentage) {
                fill.style.width = percentage; // Aplicar el ancho real, lo que dispara la transición
            }
        }
    });

    // Configuración de ScrollReveal para las secciones de habilidades técnicas
    document.querySelectorAll('.progress-bar-fill').forEach(fill => {
        fill.style.width = '0%';
    });

    // Función de validación de formulario
    window.validarFormulario = function() {
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        // Validación de campos vacíos
        if (nombre.trim() == '' || email.trim() == '' || mensaje.trim() == '') {
            alert('Por favor, complete todos los campos.');
            return false; // Evita que el formulario se envíe
        }

        // Validación del formato del correo electrónico usando una expresión regular
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduzca una dirección de correo electrónico válida.');
            return false; // Evita que el formulario se envíe
        }

        // Si todas las validaciones son exitosas
        alert('¡Formulario enviado con éxito!');
        return true; // Permite que el formulario se envíe
    };
});
// Este código es para manejar el clic en los botones de detalles de proyecto.
// con la estructura actual de las barras de progreso que usan data-progress
const pythonBar = document.querySelector('.technical-skills-section .progress-bar[data-skill="python"]'); // Asumiendo un atributo data-skill
if (pythonBar) {
    pythonBar.style.width = '85%'; // Esto seguirá funcionando perfectamente
}
document.body.addEventListener('click', function(event) {
        // Verificar si el elemento clicado tiene la clase 'btn-detalles-proyecto'
        // 'matches()' es un método útil para esto.
        if (event.target.matches('.btn-detalles-proyecto')) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            // Simplemente un alert genérico.
            const botonClicado = event.target;
            alert('¡Esta función está en desarrollo!');
        }
    });
