var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    effect: 'fade',
    speed: 300,
    grabCursor: true,
    autoplay: {
        delay: 25000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickbale: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});