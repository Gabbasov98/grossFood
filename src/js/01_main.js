$(document).ready(function() {
    $('input[type="tel"]').mask('+7 (999) 999 99 99', { autoclear: false }, { placeholder: '+7            ' });

    $(".my-select").niceSelect()
    cartCalc()


    $(".my-select .option").click(function() {
        console.log(true);
        $(this).parents(".my-select").addClass("my-select--selected")
    })

    $(".favourite-btn").click(function () {
        $(this).toggleClass("favourite-btn--active")
    })



});

function cartCalc(){
    $('.cartcalc .ccalc-minus').click(function(){
        let a = $(this).closest('.cartcalc').find('input').val();
        if(a>1){
            let b = +a-1;
            $(this).closest('.cartcalc').find('input').val(b);
        }else{
            $(this).closest('.cartcalc').find('input').val(a);
        }
    });
    $('.cartcalc .ccalc-plus').click(function(){
        let a = $(this).closest('.cartcalc').find('input').val();
        let b = +a+1;
        $(this).closest('.cartcalc').find('input').val(b);
    });
}
