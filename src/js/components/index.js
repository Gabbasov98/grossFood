function mainSlider() {
    $('.main').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700,
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


mainSlider()
clientSlider()

