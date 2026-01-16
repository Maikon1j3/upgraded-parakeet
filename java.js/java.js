function toggleWa() {
    document.getElementById('waMenu').classList.toggle('active');
}

window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function moveCarousel(id, direction) {
    const track = document.getElementById(id + 'Track');
    const itemWidth = id === 'hist' ? 280 : 360;

    track.style.transition = "transform 0.4s ease-in-out";

    if (direction === 1) {
        // Mover para a direita (próximo)
        track.style.transform = `translateX(-${itemWidth}px)`;
        setTimeout(() => {
            track.style.transition = "none";
            track.appendChild(track.firstElementChild);
            track.style.transform = "translateX(0)";
        }, 400);
    } else {
        // Mover para a esquerda (anterior)
        track.style.transition = "none";
        track.prepend(track.lastElementChild);
        track.style.transform = `translateX(-${itemWidth}px)`;
        setTimeout(() => {
            track.style.transition = "transform 0.4s ease-in-out";
            track.style.transform = "translateX(0)";
        }, 10);
    }
}