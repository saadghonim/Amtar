$(document).ready(function(){

  
    /* ************************start navbar******************* */

    if ($(window).width() <= 767) {
      $(".bt_bars").click(function() {
          $(".navbar_").addClass("open_");
          $(".moboverlay").fadeIn('500');
          $(".bars_icon").addClass("close_");
          $("body").addClass("over");
      });

      $(".moboverlay").click(function() {
          $(".navbar_").removeClass("open_");
          $(".moboverlay").fadeOut('500');
          $(".bars_icon").removeClass("close_");
          $("body").removeClass("over");

      });
      $(".fa-times").click(function() {
          $(".navbar_").removeClass("open_");
          $(".moboverlay").fadeOut('500');
          $(".bars_icon").removeClass("close_");
          $("body").removeClass("over");

      });
      $(".menu_hover").click(function() {
          $(".drop_menu").slideToggle("500");
      });
      $(".dropdown-lang").click(function() {
        $(".dropdown-content-lang").slideToggle(400);
    })
  };



      /* ************************start slider******************* */

      $('.slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        autoplay: true,
        navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* ************************end slider******************* */


    
    /* ****************************************************
    ***************************start caragory*************
     **************************************************** */

    
    if ($(window).width() <= 767) {
      $(".categoery").addClass("owl-carousel");
      $(".catego_div").addClass("item");
      $('.categoery.owl-carousel').owlCarousel({
          loop: true,
          nav: true,
          margin: 5,
          rtl: true,
          autoplay: true,
          rtl: $("html").attr("dir") == "rtl" ? true : false,
          navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
          responsive: {
              0: {
                  items: 3
              },
              600: {
                  items: 4
              },
              1000: {
                  items: 5
              }
          }
      });

  }else{
    $(".categoery").removeClass("owl-carousel");
    $(".catego_div").removeClass("item");
  }

    /* ****************************************************
    ***************************end caragory*************
     **************************************************** */


      /* ************************end navbar******************* */

  /* ************************start new******************* */
  if ($(window).width() <= 1200){
    $(".new").addClass("owl-carousel");
    $(".div_item").addClass("item");

  }else{
    $(".new").removeClass("owl-carousel");
    $(".div_item").removeClass("item");
  }

  $('.new.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    rtl: true,
    autoplay: true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
});
  /* ************************end new******************* */


    /********************************************************
     ************************start most_viewed******************* */

    $('.best_seller .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    margin: 30,
    stagePadding: 6,
    autoplay: true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
    responsive: {
        0: {
            items: 2,
            margin:15
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
/********************************************************
 ************************end most_viewed******************* */

/********************************************************
 ************************start brands******************* */
$('.brands .owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  rtl: true,
  navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
  responsive: {
      0: {
          items: 3
      },
      600: {
          items: 4
      },
      1000: {
          items: 5
      }
  }
})
/********************************************************
 ***********************end shorkaa******************** */

});

$(window).load(function() {
  $(".preloader-sa").fadeOut();
});