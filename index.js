document.querySelectorAll('.btn-Consultar').forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        
        const tarjeta = e.target.closest('.subLista');
        const tituloLibro = tarjeta.querySelector('h3').innerText;
        const precioLibro = tarjeta.querySelector('.precio') ? tarjeta.querySelector('.precio').innerText : '';
        
        const numero = "51935473080";
        
        // Se usan saltos de línea (\n) para dar formato al mensaje
        const mensaje = `¡Hola, Lu-Capu! 👋\n\nQuisiera consultar la disponibilidad del siguiente libro:\n📖 Título: ${tituloLibro}\n💰 Precio: ${precioLibro}\n\n¿Me podrían dar detalles para el envío?`;
        
        const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
        
        window.location.href = urlWhatsApp;
    });
});

const secciones = document.querySelectorAll('article[id]');
const navLinks = document.querySelectorAll('.nav-link a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('activo', link.getAttribute('href') === '#' + id);
            });
        }
    });
}, { rootMargin: '-40% 0px -50% 0px' });

secciones.forEach(seccion => observer.observe(seccion));