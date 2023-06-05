const slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        clearActive()
        slide.classList.add('slide__active')
    })
})

const clearActive = () => {
    const activeSlide = document.querySelector('.slide__active')
    activeSlide.classList.remove('slide__active')
}