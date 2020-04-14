$(function(){
    
    $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
    
    $('.title_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});
    $('.critic_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.prv-arrow',
    nextArrow: '.nxt-arrow',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});
    
    $('.tog_btn1').click(function () {
        $('.exp_1').slideToggle(500);
        $('.ic_1').fadeToggle(500);
        $('.ic_4').fadeToggle(500);
    });
    $('.tog_btn2').click(function () {
        $('.exp_2').slideToggle(500);
        $('.ic_2').fadeToggle(500);
        $('.ic_5').fadeToggle(500);
    });
    $('.tog_btn3').click(function () {
        $('.exp_3').slideToggle(500);
        $('.ic_3').fadeToggle(500);
        $('.ic_6').fadeToggle(500);
    });
    $('.open_btn').click(function () {
        $('.hide_btn').fadeOut(500);
    });
    $('.container').click(function () {
        $('.hide_btn').fadeIn(500);
    });
    $('.brand_slide').slick({
  dots: false,
  infinite: true,
  speed: 500,
     autoplay: true,
  autoplaySpeed: 2000,    
  slidesToShow: 6,
  slidesToScroll: 1,
        arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    }
  ]
});
})

