$(function () {
    var thumbsSwiper = new Swiper('#thumbs',{
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,/*避免出现bug*/
        watchSlidesProgress: true,
    })
    var gallerySwiper = new Swiper('#gallery',{
        spaceBetween: 10,
        thumbs: {
            swiper: thumbsSwiper,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
})