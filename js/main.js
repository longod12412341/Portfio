
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

        function validarFormulario() {
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
        }

     
        document.addEventListener('DOMContentLoaded', () => {
            // Inicializa ScrollReveal (ajusta las opciones si quieres)
            // Aquí puedes añadir otras reglas si quieres animar más elementos
            ScrollReveal().reveal('.skill-item', {
                delay: 100,       // Pequeño retraso para cada elemento
                distance: '0px',  // No mover el elemento, solo aplicar el 'afterReveal'
                opacity: 1,       // Mantener la opacidad (no queremos que aparezcan de la nada)
                easing: 'ease-in-out',
                interval: 50,     // Pequeño retraso entre la animación de cada skill-item
                afterReveal: (el) => {
                    // Esta función se ejecuta una vez que el elemento 'skill-item' es visible
                    const fill = el.querySelector('.progress-bar-fill');
                    const percentage = fill.getAttribute('data-progress'); // Leer el porcentaje del atributo data-progress
                    if (fill && percentage) {
                        fill.style.width = percentage; // Aplicar el ancho real, lo que dispara la transición
                    }
                }
            });

            // Opcional: Asegúrate de que las barras empiecen en 0% al cargar la página
            // Esto es redundante si ya lo tienes en CSS, pero no hace daño.
            document.querySelectorAll('.progress-bar-fill').forEach(fill => {
                fill.style.width = '0%';
            });
        });
