$(".validate-form input[type='tel']").on('change', function() {
    let phoneVal = $(this).val()
    phoneVal = phoneVal.replaceAll('_', '').length;

    if (phoneVal == 18) {
        $(this).parents(".validate-form").find(".submit__btn").prop("disabled", false)
        $(this).removeClass("error")
    } else {
        $(this).addClass("error")
        $(this).parents(".validate-form").find(".submit__btn").prop("disabled", true)
    }

})