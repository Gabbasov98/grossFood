$(document).ready(function() {
    $('input[type="tel"]').mask('+7 (999) 999 99 99', { autoclear: false }, { placeholder: '+7            ' });

    $(".my-select").niceSelect()


    $(".my-select .option").click(function() {
        console.log(true);
        $(this).parents(".my-select").addClass("my-select--selected")
    })

    $(".favourite-btn").click(function () {
        $(this).toggleClass("favourite-btn--active")
    })

});
