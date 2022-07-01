$(document).ready(function() {
    // $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__right").toggleClass("header__right--active")
    })

});