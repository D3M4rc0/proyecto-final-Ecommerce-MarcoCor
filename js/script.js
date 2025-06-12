// // Mostrar/ocultar botón de volver arriba con scroll suave
// window.addEventListener('scroll', () => {
//     const scrollTop = document.querySelector('.scroll-top');
//     if (window.scrollY > 300) {
//         scrollTop.classList.add('visible');
//     } else {
//         scrollTop.classList.remove('visible');
//     }
// });

// // Volver arriba botón
// document.querySelector('.scroll-top').addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// // // Función para mostrar alertas
// function showAlert(message, type = 'success') {
//     const alert = document.createElement('div');
//     alert.className = `custom-alert ${type}`;
//     alert.textContent = message;
//     document.body.appendChild(alert);
//     setTimeout(() => alert.remove(), 3000);
// }
// // // Manejador para limpiar el formulario después del envío
// document.querySelector('form').addEventListener('submit', () => {
//     showAlert('¡Mensaje enviado con éxito!');
//     setTimeout(() => {
//         document.querySelector('form').reset();
//     }, 500);
// });


// // Mostrar/ocultar menú hamburguesa
// document.querySelector('.menu-hamburguesa').addEventListener('click', () => {
//     document.querySelector('.nav-links').classList.toggle('show');
// });
// // Cerrar menú hamburguesa al hacer clic en un enlace
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         document.querySelector('.nav-links').classList.remove('show');
//     });
// });

// Menú hamburguesa
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');

menuHamburguesa.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuHamburguesa.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Cerrar menú al hacer clic en un enlace
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuHamburguesa.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Mostrar/ocultar botón de volver arriba
window.addEventListener('scroll', () => {
    const scrollTop = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

// Volver arriba botón
document.querySelector('.scroll-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Función para mostrar alertas
function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-weight: 600;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    `;
    alert.textContent = message;
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 3000);
}

// Manejador del formulario
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    showAlert('¡Mensaje enviado con éxito!');
    setTimeout(() => {
        e.target.reset();
    }, 500);
});

