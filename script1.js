let currentSlide = 0;

function updateSlider() {
    const sliderContainer = document.querySelector('.custom-slider-container');
    const slideWidth = document.querySelector('.custom-slider').clientWidth;
    sliderContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function customPrevSlide() {
    const sliderWrapper = document.querySelector('.custom-slider-wrapper');
    if (currentSlide > 0) { currentSlide--; } else { currentSlide = Math.floor(sliderWrapper.children.length / 6) - 1; }
    updateSlider();
}

function customNextSlide() {
    const sliderWrapper = document.querySelector('.custom-slider-wrapper');
    if (currentSlide < Math.floor(sliderWrapper.children.length / 6) - 1) { currentSlide++; } else { currentSlide = 0; }
    updateSlider();
}
window.addEventListener('resize', updateSlider);
window.addEventListener('load', updateSlider);