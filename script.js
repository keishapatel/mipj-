let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    index = (index + step + totalSlides) % totalSlides;
    const slideWidth = slides[0].clientWidth;

    document.querySelector('.slider').style.transform = `translateX(-${index * slideWidth}px)`;
}
