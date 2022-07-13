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
                    variableWidth: true,
                    arrows: false
                }
            },
        ]
    });
}


$(".catalog-detail__tab").click(function () {
    let path = $(this).attr("data-tabs-path")
    console.log(path)
    $(".catalog-detail__tab").removeClass("catalog-detail__tab--active")
    $(this).addClass("catalog-detail__tab--active")
    $(".catalog-detail__tab-content").removeClass("catalog-detail__tab-content--active")
    $(`.catalog-detail__tab-content[data-tabs-path="${path}"]`).addClass("catalog-detail__tab-content--active")
})


collectionSlider()
