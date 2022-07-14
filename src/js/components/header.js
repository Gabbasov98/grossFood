if (window.innerWidth > 1200) {
    $(".nav__item").hover(onIn, onOut);
} else{
    $(".nav__item-show").click(function() {
        $(".nav__item-show").removeClass("nav__item-show--active")
        $(this).addClass("nav__item-show--active")
    })

    $(".nav__item-back").click(function() {
        $(".nav__item-show").removeClass("nav__item-show--active")
    })
}

function onIn() {
    let el = $(this)
    setTimeout(function() {
        if (el.is(':hover')) {
            console.log(el)
            el.children(".nav__item-show").addClass("nav__item-show--active")
        }
    }, 200);
}

function onOut() {
    $(this).children(".nav__item-show").removeClass("nav__item-show--active")
}


$(".header-catalog__show").click(function() {
    $(".header-catalog__show").removeClass("header-catalog__show--active")
    $(this).addClass("header-catalog__show--active")
})

$(".header-catalog__back").click(function() {
    $(".header-catalog__show").removeClass("header-catalog__show--active")
})

$(".header__search-toggler").click(function() {
    $(this).addClass("header__search-toggler--disabled")
    $(".header__search").addClass("header__search--active")
})

$(document).mouseup(function(e) {
    var div = $('.header__search');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".header__search").removeClass("header__search--active")
        $(".header__search-toggler").removeClass("header__search-toggler--disabled")
    }
});

$(".header__catalog-btn").click(function() {
    $(this).toggleClass("header__catalog-btn--active")
    $(".header-catalog").toggleClass("header-catalog--active")
    if (window.innerWidth < 576) {
        $("body").toggleClass("fixed-body")
    }
})

if (window.innerWidth > 576){
    $(document).mouseup(function(e) {
        var div = $('.header-catalog');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".header__catalog-btn").removeClass("header__catalog-btn--active")
            $(".header-catalog").removeClass("header-catalog--active")
            $("body").removeClass("fixed-body")
        }
    });
}




$(".header__burger").click(function() {
    $(this).toggleClass("header__burger--active")
    $(".nav").toggleClass("nav--active")
    if (window.innerWidth < 576) {
        $("body").toggleClass("fixed-body")
    }
})

fixHeader()
$(window).scroll(function() {
    fixHeader()
})
$(window).resize(function() {
    fixHeader()
})

function fixHeader() {
    if (window.innerWidth < 576) {
        if ($(window).scrollTop() > 90) {
            $(".header").addClass("header--fix")
            // $(".header__search").hide()
        } else {
            $(".header").removeClass("header--fix")
            // $(".header__search").show()
        }
    }else {
        $(".header__search").show()
    }
}



changeCartNumSize()
function changeCartNumSize() {
    let cartNum = $(".header__cart-num").html().length
    if(cartNum > 1){
        $(".header__cart-num").addClass("header__cart-num--big")
    } else{
        $(".header__cart-num").removeClass("header__cart-num--big")
    }
}
