const carouselContainer = document.querySelector('.carousel-container');
const carouselCards = document.querySelectorAll('.carousel-card');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel(index) {
    const cardWidth = carouselCards[0].offsetWidth;
    const gap = 20; // Adjust this value if the gap between cards changes
    carouselContainer.style.transform = `translateX(-${(cardWidth + gap) * index}px)`;

    // Update active card and dots
    carouselCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Attach click event to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(index);
    });
});

// Attach click event to cards
carouselCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(index);
    });
});

// Initialize the carousel
updateCarousel(currentIndex);