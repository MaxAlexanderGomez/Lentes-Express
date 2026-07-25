let currentSlide = 0;

const slides = document.querySelectorAll(".frame-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(slideNumber) {
    if (slideNumber >= slides.length) {
        currentSlide = 0;
    } else if (slideNumber < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = slideNumber;
    }

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active-dot");
    });

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active-dot");
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

/* Automatically change photos every four seconds */
setInterval(() => {
    changeSlide(1);
}, 5000);
