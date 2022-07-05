function mainSlider() {
    $('.main').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
}

function clientSlider() {
    $('.clients__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 500,
        infinite: false,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: false
                }
            },
        ]
    });
}
// function catalogSlider() {
//     $('.catalog-index__grid').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         variableWidth: true,
//         speed: 500,
//         arrows: false
//     });
// }

// function collectionSlider() {
//     $('.collection__grid').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         variableWidth: true,
//         speed: 500,
//         arrows: false
//     });
// }



mainSlider()
clientSlider()

// if (window.innerWidth < 800) {
//     catalogSlider()
// } else {
//     function catalogSlider() {}
//     catalogSlider()
// }
// if (window.innerWidth < 1200) {
//     collectionSlider()
// } else {
//     function collectionSlider() {}
//     collectionSlider()
// }