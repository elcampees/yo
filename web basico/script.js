function showProducts() {
    location.href = 'productos.html';  // Redirige a la página de productos
}

function sendMessage() {
    const whatsappNumber = '1234567890'; // Reemplaza con tu número de WhatsApp
    const message = 'Hola, estoy interesado en sus productos.';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    let scrollAmount = 0;

    function autoScroll() {
        if (scrollAmount <= carousel.scrollWidth - carousel.clientWidth) {
            carousel.scrollBy({
                top: 0,
                left: 1,
                behavior: 'smooth'
            });
            scrollAmount += 1;
        } else {
            scrollAmount = 0;
            carousel.scrollLeft = 0;
        }
    }

    setInterval(autoScroll, 10);
});
