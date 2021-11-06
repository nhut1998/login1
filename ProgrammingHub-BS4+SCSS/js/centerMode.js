$('.centerMode__img').slick({
  centerPadding: '56px',
  variableWidth: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: '.centerMode__text',
  dots: false,
  centerMode: true,
  prevArrow: '<img class="prevArrow" src="./img/prev.svg">',
  nextArrow: '<img class="nextArrow" src="./img/next.svg">',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '88px'
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding: '137px'
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '138px'
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerPadding: '152px',
        arrows: false,
      }
    },
  ]
});
$('.centerMode__text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.centerMode__img',
  dots: true,
});