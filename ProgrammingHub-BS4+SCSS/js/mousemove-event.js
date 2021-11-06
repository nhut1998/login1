$(window).mousemove(function (e) {
    $(".planet").css({
        "margin-left": -(e.pageX * 0.015),
        "margin-top": -(e.pageY * 0.015)
    });
    $(".meteor-1").css({
        "margin-left": -(e.pageX * 0.04),
        "margin-bottom": (e.pageY * 0.04)
    });
    $(".meteor-2").css({
        "margin-left": -(e.pageX * 0.06),
        "margin-top": -(e.pageY * 0.06)
    });
    $(".astronaut").css({
        "margin-right": (e.pageX * 0.01),
        "margin-bottom": (e.pageY * 0.01)
    });
    $(".robot").css({
        "margin-right": (e.pageX * 0.08),
        "margin-top": -(e.pageY * 0.08)
    });
});