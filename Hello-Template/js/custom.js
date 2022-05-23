
        $(window).scroll(function(e) {
            // add/remove class to navbar when scrolling
            var scroll = $(window).scrollTop();
            if (scroll >= 300) {
            $('.navbar').addClass("navbar-sticky");
            } else {
            $('.navbar').removeClass("navbar-sticky");
            }
            });
    
            $('.navbar-nav .nav-link').click( function() {
            $('.navbar-collapse').removeClass('show');
            });
    
      
    
            $('.client-review').slick({
                infinite: true,
                slidesToShow: 1, 
                slidesToScroll: 1,
                dots: true
            });
    
            // owl
            $('.app-screenshot-img').owlCarousel({
                loop:true,
                items:1,
                center:true,
                margin:10,
                dots:false,
                responsiveClass: true,
                responsive:{
                    0:{
                        items:1  
                    },
                    768:{
                        items:2  
                    },
                    992:{
                        items:3
                    }
                }
            })
    
            $('.technical_slider').owlCarousel({
                loop:true,
                items:2,
                center:false,
                margin:10,
                dots:false,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:2
                    }
                }
            })
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
    