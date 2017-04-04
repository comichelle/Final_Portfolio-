/////////////////////////////////////////
//SMOOTH SCROLL
////////////////////////////////////////


//Home button////////////////////////////
$('.home-nav').on('click', function(b) {
	$('html, body').animate({
          scrollTop: $("#home").offset().top
        }, 1000);
});

//About button///////////////////////////
$('.about-nav').on('click', function(b) {
	$('html, body').animate({
          scrollTop: $("#about").offset().top
        }, 800);
});

//Work button/////////////////////////////
$('.work-nav').on('click', function(b) {
	$('html, body').animate({
          scrollTop: $("#work").offset().top
        }, 800);
});

//Reel button/////////////////////////////
$('.reel-nav').on('click', function(b) {
	$('html, body').animate({
          scrollTop: $("#reel").offset().top
        }, 800);
});

//Contact button/////////////////////////////
$('.footer-nav').on('click', function(b) {
	$('html, body').animate({
          scrollTop: $("#footer").offset().top
        }, 800);
});


/////////////////////////////////////////
//FADE IN
////////////////////////////////////////

$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
  
            bottom_of_window = bottom_of_window + 200;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                // $(this).animate({'translateY' : '-50px'})
                    
            }
        }); 
    
    });
});

/////////////////////////////////////////
//HAMBURGER MENU
////////////////////////////////////////


// Show & hide navigation
let toggleNav = () => {
    $('.hamburger').on('click', () => {
        $('#nav').toggleClass('hide')
    })
}

// Hide mobile nav on click
let mobileNav = () => {
    let screenSize = $(window).width();
    if (screenSize <= 645) {
        $('#nav').addClass('hide');
        $('.home-nav').on('click', () => {
            $('#nav').toggleClass('hide')
        });
        $('.about-nav').on('click', () => {
            $('#nav').toggleClass('hide')
        });
        $('.work-nav').on('click', () => {
            $('#nav').toggleClass('hide')
        });
        $('.reel-nav').on('click', () => {
            $('#nav').toggleClass('hide')
        });
         $('.footer-nav').on('click', () => {
            $('#nav').toggleClass('hide')
        });
    }
}

mobileNav();
toggleNav();

$(window).on('resize', function() {
  if ($(window).width() > 645) {
      $('nav').show();
   }
});
    

 // $('nav a').on('click', function(){
  //   if ($(window).width() <= 645) {
  //     $('nav').slideToggle();
  //     $('.cross').hide();
  //     $('.hamburger').show();
  //    } 
  // });

//when user clicks on nav anchors
    // $('nav a').on('click', function(){
    //   if ($(window).width() <= 645) {
    //     $('nav').slideToggle();
    //     $('.cross').hide();
    //     $('.hamburger').show();
    //    } 
    // });

    // $(window).on('resize', function() {
    //   if ($(window).width() <= 645) {
    //       $('nav').hide();
    //    }
    // });

  
 
  // $(".hamburger").on('click', function(){
  //   $('nav').slideToggle();
  //   $(this).hide();
  //   $('.cross').show();
  //   $('nav').show();
  // });

  // $('.cross').on('click', function(){
  //   $('nav').slideToggle();
  //   $(this).hide();
  //   $('.hamburger').show();
  //   $('nav').hide();
  // });


// $( ".cross" ).hide();
// $( "nav" ).hide();

// $( ".hamburger" ).on(click (function() {
//   $( "nav" ).slideToggle( "slow", function() {
//     $( ".hamburger" ).hide();
//     $( ".cross" ).show();
//   });
// });

// $( ".cross" ).on(click (function() {
//   $( "nav" ).slideToggle( "slow", function() {
//     $( ".cross" ).hide();
//     $( ".hamburger" ).show();
//     $("nav").hide();
//   });
// });