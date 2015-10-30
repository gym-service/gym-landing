jQuery.extend(jQuery.easing, { easeInOutExpo:function(e,f,a,h,g) { 
                                  if(f==0) { return a }
                                  if(f==g) { return a+h }
                                  if((f/=g/2)<1) { return h/2*Math.pow(2,10*(f-1))+a }
                                  return h/2*(-Math.pow(2,-10*--f)+2)+a
                                  }
                            });

$('body').scrollspy({
    target: '.navbar',
    offset: 65
})

$(window).scroll(function() {
        if ($(document).scrollTop() > 250) {
          $('nav').addClass('shrink');
        } else {
          $('nav').removeClass('shrink');
        }
});

new WOW().init();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:10000,
    autoplayHoverPause:true
});

});


/////////////////////////////////////////////////////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
/////////////////////////////////////////////////////////////////////

$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -64
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


/////////////////////////
// Scroll to top button
/////////////////////////

// Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

// Click event to scroll to top
$('.scrolltotop').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return false;
});



////////////////////////////////////////////////////////////////////
// Close mobile menu when click menu link (Bootstrap default menu)
////////////////////////////////////////////////////////////////////

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});











