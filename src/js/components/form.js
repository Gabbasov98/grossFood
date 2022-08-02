let emailPattern = pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

$(".footer__btn").click(function (e) {
    e.preventDefault()
    if(footerFormValidate()) {
        $(".footer__form").submit()
    }

})

function footerFormValidate(){
    let emailNameIsValid = false

    let emailInput = $("#footerEmail")
    let emailVal = $(emailInput).val()


    if (!emailVal) {
        $(emailInput).addClass("error")
        emailNameIsValid = false
    }

    if(emailVal.match(emailPattern)){
        $(emailInput).removeClass("error")
        emailNameIsValid = true
    }
    else{
        $(emailInput).addClass("error")
        emailNameIsValid = false
    }

    if(emailNameIsValid){
        return true
    } else {
        return false
    }
}


$(".submit__btn").click(function (e) {
    e.preventDefault()
    if(clientFormValidate()) {
        $(".validate-form").submit()
    }
})

function clientFormValidate(){
    let clientNameIsValid = false
    let phoneIsValid = false
    let emailNameIsValid = false
    let nicheIsValid = false
    let getTypeIsValid = false
    let sumIsValid = false


    let clientNameInput = $("#clientName")
    let clientNameVal = $(clientNameInput).val()

    if (clientNameVal) {
        $(clientNameInput).removeClass("error")
        clientNameIsValid = true
    } else {
        $(clientNameInput).addClass("error")
        clientNameIsValid = false
    }

    let phoneInput = $("#phoneInput")
    let phoneVal = $(phoneInput).val()
    phoneVal = phoneVal.replaceAll('_', '').length;

    if (phoneVal === 18) {
        $(phoneInput).removeClass("error")
        phoneIsValid = true
    } else {
        $(phoneInput).addClass("error")
        phoneIsValid = false
    }


    let emailInput = $("#email")
    let emailVal = $(emailInput).val()

    if (!emailVal) {
        $(emailInput).addClass("error")
        emailNameIsValid = false
    }

    if(emailVal.match(emailPattern)){
        $(emailInput).removeClass("error")
        emailNameIsValid = true
    }
    else{
        $(emailInput).addClass("error")
        emailNameIsValid = false
    }


    let nicheInput = $("#niche")
    let nicheVal = $(nicheInput).val()

    if (nicheVal) {
        $(nicheInput).removeClass("error")
        nicheIsValid = true
    } else {
        $(nicheInput).addClass("error")
        nicheIsValid = false
    }


    let getTypeInput = $("#getType")
    let getTypeVal = $(getTypeInput).val()

    if (getTypeVal) {
        $(getTypeInput).removeClass("error")
        getTypeIsValid = true
    } else {
        $(getTypeInput).addClass("error")
        getTypeIsValid = false
    }


    let sumInput = $("#sum")
    let sumVal = $(sumInput).val()

    if (sumVal) {
        $(sumInput).removeClass("error")
        sumIsValid = true
    } else {
        $(sumInput).addClass("error")
        sumIsValid = false
    }

    if(clientNameIsValid && phoneIsValid && emailNameIsValid && nicheIsValid && getTypeIsValid && sumIsValid) {
        return true
    } else{
        return false
    }


}

