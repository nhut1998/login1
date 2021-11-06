$('.slider__text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider__img',
    dots: true,
    centerMode: false,
    prevArrow: '<img class="prevArrow" src="./img/prev.svg">',
    nextArrow: '<img class="nextArrow" src="./img/next.svg">',
    autoplay: true,
    autoplaySpeed: 1800,
});
$('.slider__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider__text',
    dots: false,
    fade: true
});