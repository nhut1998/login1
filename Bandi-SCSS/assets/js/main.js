$(document).ready(function() {
  (function renderBannerSlides() {
    let content = "";
    let slideArr = ["slider-01.png", "slider-02.png", "slider-01.png"];
    slideArr.map(item => {
      content += `
      <div class="slide" style="background-image: url('assets/img/${item}')">
        <div class="slide__text">
          <h1>Meet <span>Brandi</span>!</h1>
          <h2><span>/creative</span> one page template.</h2>
          <p>We are a team of professionals</p>
        </div>
      </div>
      `;
    });
    $("div.slides").html(content);
  })();

  $("div.slides").slick({
    arrows: false,
    dots: true,
    fade: true
  });

  (function renderFeatureItems() {
    let content = "";
    let featureArr = [
      { icon: "features-branding-icon.png", title: "Branding" },
      { icon: "features-development-icon.png", title: "Development" },
      { icon: "features-consulting-icon.png", title: "Consulting" },
      { icon: "features-branding-icon.png", title: "Branding" },
      { icon: "features-development-icon.png", title: "Development" },
      { icon: "features-consulting-icon.png", title: "Consulting" },
      { icon: "features-branding-icon.png", title: "Branding" },
      { icon: "features-development-icon.png", title: "Development" },
      { icon: "features-consulting-icon.png", title: "Consulting" }
    ];
    featureArr.map(item => {
      content += `
      <div class="features__item">
        <div class="item__icon" style="background-image: url('assets/img/${item.icon}')"></div>
        <div class="item__content">
          <h2>${item.title}</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore
          </p>
        </div>
      </div>
      `;
    });
    $("div.features__items").html(content);
  })();

  $("div.features__items").slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  (function renderTeamItems() {
    let content = "";
    let teamArr = [
      "team-01.png",
      "team-02.png",
      "team-03.png",
      "team-04.png",
      "team-01.png",
      "team-02.png"
    ];
    teamArr.map(item => {
      content += `
      <div class="team__item">
        <div class="item__avatar" style="background-image: url('assets/img/${item}')">
          <div class="overlay">
            <div class="overlay__text">
              <h6>Nemo enim ipsam voluptatem quia voluptas</h6>
              <span>
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem.
              </span>
            </div>
            <div class="overlay__social">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <img src="assets/img/google-plus-top-icon.png" alt="google plus top icon"/>
              </a>
            </div>
          </div>
        </div>
        <div class="item__text">
          <h2>Martin Matrone</h2>
          <span>Lead Developer</span>
        </div>
      </div>
      `;
    });
    $("div.team__items").html(content);
  })();

  $("div.team__items").slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  (function renderFactItems() {
    let content = "";
    let featureArr = [
      {
        icon: "facts-icon-01.png",
        counter: 3200,
        text: "HOURS OF WORK",
        alt: "clock"
      },
      {
        icon: "facts-icon-02.png",
        counter: 120,
        text: "SATISFIED CLINETS",
        alt: "friends"
      },
      {
        icon: "facts-icon-03.png",
        counter: 360,
        text: "PROJECTS DELIVERED",
        alt: "rocket"
      },
      { icon: "facts-icon-04.png", counter: 42, text: "AWARDS WON", alt: "cup" }
    ];
    featureArr.map(item => {
      content += `
        <div class="facts-item">
          <div class="item__icon">
            <img src="assets/img/${item.icon}" alt=${item.alt} />
          </div>
          <h2 class="counter">${item.counter}</h2>
          <span>${item.text}</span>
        </div>
      `;
    });
    $("div.facts__items").html(content);
  })();

  $(".counter").countUp({
    time: 1000
  });
});
