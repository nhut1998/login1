window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.padding = " 10px 0";
        document.getElementById("header").style.backgroundColor = "white";
        document.getElementById("header").style.boxShadow = "0 1px 3px 0 #eaebf0";
        document.getElementById("navbar-nav").style.backgroundColor = "white";
        document.getElementById("header").style.transition = "all .3s";
        document.getElementById("navbar-nav").style.transition = "all .3s";
    }
    else {
        document.getElementById("header").style.padding = "27px 0";
        document.getElementById("header").style.backgroundColor = "#F5F6FB";
        document.getElementById("header").style.boxShadow = "none";
        document.getElementById("navbar-nav").style.backgroundColor = "#F5F6FB";
        document.getElementById("header").style.transition = "all .3s";
        document.getElementById("navbar-nav").style.transition = "all .3s";
    }
}