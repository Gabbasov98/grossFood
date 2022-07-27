function collectionSlider() {
    $('.collection__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        infinite: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3.1,
                    // variableWidth: true,
                    arrows: false,
                    // infinite: true
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3.2,
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    arrows: false,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2.1,
                    arrows: false,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1.7,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2.2,
                    arrows: false,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 2.1,
                    arrows: false,
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1.9,
                    arrows: false,
                }
            },
        ]
    });
}
// let collectionSlidersArray = []
//
//
// function collectionSliders() {
//     $(".collection__slider").each(function(index, el) {
//         $(el).attr("data-slider-id", `${index}`)
//         collectionSlidersArray[index] = new Swiper(`.collection__slider[data-slider-id="${index}"] .swiper-container`, {
//             slidesPerView: 4,
//             spaceBetween: 24,
//             navigation: {
//                 nextEl: `.collection__slider[data-slider-id="${index}"] .swiper-button-next`,
//                 prevEl: `.collection__slider[data-slider-id="${index}"] .swiper-button-prev`,
//             },
//             breakpoints: {
//                 320: {
//                     slidesPerView: 1.9,
//                     spaceBetween: 14
//                 },
//                 340: {
//                     slidesPerView: 2.1,
//                     spaceBetween: 14
//                 },
//                 380: {
//                     slidesPerView: 2.2,
//                     spaceBetween: 14
//                 },
//                 576: {
//                     slidesPerView: 1.7,
//                     spaceBetween: 24
//                 },
//                 620: {
//                     slidesPerView: 2.1,
//                     spaceBetween: 24
//                 },
//                 840: {
//                     slidesPerView: 2.5,
//                     spaceBetween: 24
//                 },
//                 1024: {
//                     slidesPerView: 3.1,
//                     spaceBetween: 24
//                 },
//                 1300: {
//                     slidesPerView: 4,
//                     spaceBetween: 24
//                 },
//             }
//         })
//     })
// }


$(".catalog-detail__tab").click(function () {
    let path = $(this).attr("data-tabs-path")
    console.log(path)
    $(".catalog-detail__tab").removeClass("catalog-detail__tab--active")
    $(this).addClass("catalog-detail__tab--active")
    $(".catalog-detail__tab-content").removeClass("catalog-detail__tab-content--active")
    $(`.catalog-detail__tab-content[data-tabs-path="${path}"]`).addClass("catalog-detail__tab-content--active")
})


// collectionSliders()
collectionSlider()

$(".catalog-item__btn").click(function () {
    $(this).addClass("catalog-item__btn--active")
})
