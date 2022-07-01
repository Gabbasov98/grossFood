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

function catalogSlider() {
    $('.catalog-index__grid').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 500,
        arrows: false
    });
}

mainSlider()
catalogSlider()