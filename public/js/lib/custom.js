
/**
 * Navigation
 */

/* Auto close navbar on click (mobile menu) */

$(".navbar-nav > li > a").click(function() {
    $(".navbar-collapse").collapse('hide');
});


/* Change navbar class on scroll */

$(".wrapper").waypoint(function() {
    $(".navbar").toggleClass("js-navbar-top");
    $(".navbar.js-toggleClass").toggleClass("navbar-default navbar-inverse");
    return false;
}, { offset: "-20px" });


/* Change navbar class on collapse/uncollapse in its top position */

$('.wrapper .navbar-collapse').on('show.bs.collapse', function () {
    $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
    $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
});

$('.wrapper .navbar-collapse').on('hide.bs.collapse', function () {
    $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
    $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
});


/* Sidebar */

$(".js-toggle-sidebar").on('click', function() {
    $(".wrapper").toggleClass("js-wrapper-aside");
    $(".navbar").toggleClass("js-navbar-aside");
    $(".sidebar").toggleClass("js-sidebar-aside");
    return false;
});


/**
 * Smooth scroll to anchor
 */

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 70) // 70px offset for navbar menu
                }, 1000);
                return false;
            }
        }
    });
});


// Bootstrap Custom JS
$(document).ready(function() {

  // Tooltip opt-in
  $('[data-toggle="tooltip"]').tooltip()

  // Carousel controls
  $('.carousel-control.left').click(function() {
    $('#myCarousel').carousel('prev');
  });

  $('.carousel-control.right').click(function() {
    $('#myCarousel').carousel('next');
  });

  $('#jmbutton').click(function () {
    $('#jmbio').collapse('toggle');
  })
});

/**
 * Own carousel :: Sponsors
 */

// $(document).ready(function() {
//   var owl = $('.owl-carousel');
//   owl.owlCarousel({
//       items:4,
//       loop:true,
//       margin:5,
//       responsiveBaseElement:".owl-wrapper",
//       autoplay:true,
//       autoplayTimeout:1000,
//       autoplayHoverPause:true
//   });
// });
/**
 * Doughnut charts :: Skills
 */

/* Base donut styles */

// $.fn.peity.defaults.donut = {
//     delimiter: null,
//     fill: ["#F67280", "#eee"],
//     height: null,
//     innerRadius: 68,
//     radius: 70,
//     width: null
// };

/* Animating donuts */

// $(document).ready(function() {
//     $(".js-skills__item_first").waypoint(function() {
//
//         setTimeout(function () {
//             $('.skills__item').css("visibility", "visible");
//         }, 11);
//
//         $('.skills-item__donut').each(function () {
//             var $this = $(this);
//
//             var updateChart = $this.peity('donut');
//             var text = "";
//             var i = 0;
//             var str = $this.html();
//             var arr = str.split("/");
//             var value = arr[0];
//             var maxValue = arr[1];
//             var step = value/100;
//
//             function myLoop() {
//                 setTimeout(function () {
//
//                     text = i + "/" + maxValue;
//
//                     updateChart.text(text)
//                         .change()
//
//                     i = i + step;
//
//                     if (i <= value) myLoop();
//
//                 }, 10)
//             }
//             myLoop();
//         });
//
//         this.destroy();
//
//     }, { offset: 'bottom-in-view' });
// });

// Wow Plugins

$(".wow").each(function() {
    var wowHeight = $(this).height();
    $(this).attr("data-wow-offset", wowHeight);
});

new WOW().init();

// E-mail submittal to Formspree
$(document).ready(function() {

  $( "#form" ).submit(function( event ) {
    $.ajax({
      url: "//formspree.io/jmatthews@thegreatacademy.org",
      method: "POST",
      data: $(this).serialize(),
      dataType: 'json',
    });
  });

});
