$(".contacts__tab").click(function () {
    let path = $(this).attr("data-tabs-path")
    console.log(path)
    $(".contacts__tab").removeClass("contacts__tab--active")
    $(this).addClass("contacts__tab--active")
    $(".contacts__tab-content").removeClass("contacts__tab-content--active")
    $(`.contacts__tab-content[data-tabs-path="${path}"]`).addClass("contacts__tab-content--active")
})
