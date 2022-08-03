$(".product-card__favourite").click(function() {
    $(this).toggleClass("product-card__favourite--active")
})

$(".product-card__cart").click(function () {
    $(this).addClass("product-card__cart--active")
})

$(".product-card .ccalc-minus").click(function () {
    let val = $(this).siblings("input").val()
    console.log(val)
    if(+val === 1){
        $(this).parents(".product-card").find(".product-card__cart").removeClass("product-card__cart--active")
    }
})

