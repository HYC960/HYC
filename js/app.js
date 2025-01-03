// Script for Banner Slider
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    const updateSlider = (index) => {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    const autoSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex);
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider(currentIndex);
        });
    });

    setInterval(autoSlide, 5000); // Auto-slide every 5 seconds
});
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
});
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    currentIndex = index;
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    updateSliderPosition();
}

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically change slide every 3 seconds
setInterval(() => showSlide(currentIndex + 1), 3000);

prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
