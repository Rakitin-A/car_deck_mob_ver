$(function(){

    $('.car__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });


    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();




});