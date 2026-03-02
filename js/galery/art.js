// Polaroid Stack Gallery - Interactive Click Handler
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-grid');
    const items = Array.from(document.querySelectorAll('.gallery-item'));

    // Função para atualizar posições e estilos
    function updateGalleryPositions() {
        items.forEach((item, index) => {
            // Remove moving class se estava lá
            item.classList.remove('moving');
            
            // Resetear opacidad para todos
            item.style.opacity = '1';

            if (index === 0) {
                // Primera imagen - totalmente visible
                item.style.zIndex = 23;
                item.style.transform = 'translateY(0) rotateZ(0deg) scale(1)';
                item.style.opacity = '1';
            } else if (index === 1) {
                item.style.zIndex = 22;
                item.style.transform = 'translateY(8px) rotateZ(-2deg) scale(0.98)';
                item.style.opacity = '1';
            } else if (index === 2) {
                item.style.zIndex = 21;
                item.style.transform = 'translateY(16px) rotateZ(1.5deg) scale(0.96)';
                item.style.opacity = '1';
            } else if (index === 3) {
                item.style.zIndex = 20;
                item.style.transform = 'translateY(24px) rotateZ(-1deg) scale(0.94)';
                item.style.opacity = '1';
            } else if (index === 4) {
                item.style.zIndex = 19;
                item.style.transform = 'translateY(32px) rotateZ(2deg) scale(0.92)';
                item.style.opacity = '1';
            } else {
                // Resto de imágenes apiladas abajo totalmente visibles
                item.style.zIndex = 0;
                item.style.transform = 'translateY(40px) rotateZ(-1.5deg) scale(0.90)';
                item.style.opacity = '1';
            }
        });
    }

    // Añadir event listener a cada imagen
    items.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // Solo si es la primera imagen (visible) se puede hacer click
            if (this === items[0]) {
                // Añadir clase de animación
                this.classList.add('moving');

                // Esperar a que termine la animación
                setTimeout(() => {
                    // Mover la imagen al final del array
                    const firstItem = items.shift();
                    items.push(firstItem);

                    // Actualizar posiciones
                    updateGalleryPositions();
                }, 500);
            }
        });
    });

    // Inicializar posiciones
    updateGalleryPositions();
});
