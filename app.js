
$(function () {
  const burger = document.querySelector("#burger"),
        nav    = document.querySelector("#nav");

        burger.addEventListener('click', () => {
          burger.classList.toggle("active");
          nav.classList.toggle('active');
        });

        console.log(nav);
        console.log(burger);

    $('.carousel__inner').slick({
      dots: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2000
      // slidesToShow: 1,
      // adaptiveHeight: true
    });
});
