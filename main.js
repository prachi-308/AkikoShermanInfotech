function updateContent(title, description, backgroundImage) {
    const contentSection = document.getElementById('content-section');
    const content = document.getElementById('content');

    // Smooth fade-out effect for content
    content.style.transition = "opacity 0.3s ease-in-out";
    content.style.opacity = 0;

    setTimeout(() => {
        // Update content
        content.innerHTML = `
            <h1>${title}</h1>
            <p>${description}</p>
            <button>READ MORE</button>
        `;

        // Change background image
        contentSection.style.background = `url('${backgroundImage}') no-repeat center center/cover`;

        // Smooth fade-in effect for content
        content.style.opacity = 1;
    }, 300);

    // Update active button state
    const buttons = document.querySelectorAll('.vertical-menu button');
    buttons.forEach(button => button.classList.remove('active'));

    if (event && event.target) {
        event.target.classList.add('active');
    }
}

let currentIndex = 0;

function nextSlide() {
    const sliderContainer = document.querySelector('.slider-container');
    const totalSlides = document.querySelectorAll('.slider-item').length;

    currentIndex = (currentIndex + 1) % totalSlides;
    sliderContainer.style.transition = "transform 0.5s ease-in-out";
    sliderContainer.style.transform = `translateX(-${currentIndex * 66.67}%)`;

    resetProgress();
}

function prevSlide() {
    const sliderContainer = document.querySelector('.slider-container');
    const totalSlides = document.querySelectorAll('.slider-item').length;

    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    sliderContainer.style.transition = "transform 0.5s ease-in-out";
    sliderContainer.style.transform = `translateX(-${currentIndex * 66.67}%)`;

    resetProgress();
}

function resetProgress() {
    document.querySelectorAll('.progress-bar').forEach(bar => bar.style.width = '0');

    setTimeout(() => {
        document.querySelectorAll('.progress-bar')[currentIndex].style.width = '100%';
    }, 50);
}

function changeBlog(image, title, description) {
    // Get the left content elements
    const mainImage = document.querySelector('#main-image-custom'); // Correct ID selector
    const mainTitle = document.querySelector('#main-title-custom'); // Correct ID selector
    const mainDescription = document.querySelector('#main-description-custom'); // Correct ID selector

    // Check if elements exist
    if (!mainImage || !mainTitle || !mainDescription) {
        console.error('Error: One or more elements are not found in the DOM.');
        return;
    }

    // Add smooth transitions
    mainImage.style.transition = "opacity 0.3s ease-in-out";
    mainTitle.style.transition = "opacity 0.3s ease-in-out";
    mainDescription.style.transition = "opacity 0.3s ease-in-out";

    // Fade-out effect
    mainImage.style.opacity = 0;
    mainTitle.style.opacity = 0;
    mainDescription.style.opacity = 0;

    setTimeout(() => {
        // Preload the image to avoid flickering
        const img = new Image();
        img.src = image;
        img.onload = () => {
            mainImage.src = image;
            mainTitle.textContent = title;
            mainDescription.textContent = description;

            // Fade-in effect
            mainImage.style.opacity = 1;
            mainTitle.style.opacity = 1;
            mainDescription.style.opacity = 1;
        };
    }, 300);
}