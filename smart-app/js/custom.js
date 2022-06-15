// scroll functions
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling
    var scroll = $(window).scrollTop();
    if (scroll >=100) {
        $('.navbar').addClass("navbar-sticky");
    } else {
        $('.navbar').removeClass("navbar-sticky");
    }

});

  // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
  $('[data-toggle="navbarToggler"]').click(function () {
    $('.navbar').toggleClass('active');
    $('body').toggleClass('canvas-open');
});
// MAIN MENU TOGGLER ICON
$('.navbar-toggler').click(function () {
    $('.navbar-toggler-icon').toggleClass('active');
});

// banner slider

// $('.banner-slider').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll:1
//   });

$('.work-process-carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow:1,
    slidesToScroll:1,
    nextArrow: '<div class="slick-prev"><i class="fas fa-angle-right fa-fw"></i></div>',
    prevArrow: '<div class="slick-next"><i class="fas fa-angle-left fa-fw"></i></div>'
});

// quick view...screens
$('.screen-carousel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:true,
    dots:false,
    nextArrow: '<div class="slick-prev"><i class="fas fa-angle-right"></i></div>',
    prevArrow: '<div class="slick-next"><i class="fas fa-angle-left"></i></div>',
    responsive: [
        {
            breakpoint:992,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            }
        }, 
        {
        breakpoint:768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true
            }
        }, 
        {
            breakpoint:501,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true
            }
        }
    ]
  });

//   innovative team
$('.innovative-team').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    margin:10,
    responsive: [
        {
            breakpoint:992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        }, 
       
        {
            breakpoint:600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true
            }
        }
    ]
  });
//// Counter Js
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    target.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
    window.requestAnimationFrame(step);
    }
    };
    window.requestAnimationFrame(step);
    };
    //#endregion - end of - number counter animation
    document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#count1", 0, 200, 2000);
    counterAnim("#count2", 0, 50, 2500);
    counterAnim("#count3", 0, 95, 2000);
    counterAnim("#count4", 0, 10, 3500);
    });

// trusted client
$('.trusted-client-slider').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:5000 
});

// wow js

if ($('.wow').length) {
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 250, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
  //scroll-top
 $(window).on('scroll', function () {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn(200);
            } else {
                $('.scroll-top').fadeOut(200);
            }
        });
        $('.scroll-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });
		
		   // smooth scroll
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            // window.location.hash = target;
        });
    });


