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


});