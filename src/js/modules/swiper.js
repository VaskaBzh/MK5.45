// import Swiper JS
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

export function swipersInit() {
    if (document.querySelector(".product_card")) {
        const swiperProduct = new Swiper(".product_card .swiper", {
            speed: 400,
            slidesPerView: 1,
            spaceBetween: 10,
            direction: "horizontal",
            // Optional parameters
            loop: true,

            modules: [Navigation, Pagination, Scrollbar],
            // If we need pagination
            pagination: {
                el: '.product_card .swiper .swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    // Тут у нас есть индекс текущего слайда. Мы можем использовать его,
                    // чтобы получить ссылку на изображение и добавить ее в элемент пагинации.
                    var slideImageSrc = document.querySelectorAll('.swiper-slide')[index].querySelector('img').src;
                    return '<div class="' + className + '"><img src="' + slideImageSrc + '" width="50" height="50"></div>';
                }
            },

            // Navigation arrows
            navigation: {
                nextEl: '.product_card .swiper .swiper-button-next',
                prevEl: '.product_card .swiper .swiper-button-prev',
            },
        })
    }
    if (document.querySelector(".reviews")) {
        const swiperProduct = new Swiper(".reviews .swiper", {
            speed: 400,
            slidesPerView: 1,
            spaceBetween: 10,
            direction: "horizontal",
            // Optional parameters
            loop: true,

            modules: [Navigation, Pagination],
            pagination: {
                el: '.reviews .swiper-pagination-reviews',
                clickable: true,
                type: 'bullets',
            },

            navigation: {
                nextEl: '.reviews .swiper-button-next-reviews',
                prevEl: '.reviews .swiper-button-prev-reviews',
            },
        })
    }
}