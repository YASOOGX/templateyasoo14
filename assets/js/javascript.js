// start basic 
// // //////load
let load = document.querySelector(".load");
window.onload = function () {
  load.style.display = "none";
  document.body.style.overflowY = "auto";
};
let head =document.querySelector(".bottom-head")
head.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
let up  =document.querySelector(".up")
up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
window.onscroll = function () {
  if (scrollY >= 650) {
    head.classList.add("header-fixed");
  } else {

    head.classList.remove("header-fixed");
  }
};
// end basic 


// start bar 
let bar=document.querySelector(".bar")
let closes=document.querySelector(".closes")

let linksphone=document.querySelector(".links-phone")

bar.onclick=()=>{
linksphone.classList.toggle("left0")
document.body.classList.toggle("over-hide")
}
closes.onclick=()=>{
    linksphone.classList.remove("left0")
document.body.classList.remove("over-hide")

    }
// end bar 


// /////////////////////////////////////
// // plugins
// $(".fade1")
//   .slick({
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     fade: true,
//     cssEase: "linear",
//     rtl: true,
//   })
//   .slickAnimation();
// // start swip photo 

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   autoplay: true,
//   speed: 300,
//   asNavFor: '.slider-nav',
//   rtl: true,
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   autoplay: true,
//   speed: 300,
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true,
//     rtl: true,
// });
  
// // $(".autoplay")
// //   .slick({
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 2300,
// //     rtl:true
// //   }).slickAnimation();
// // ////autoplay 2
(function($){
  "use strict";

  if (screen.width <= 350) {
    $(".autoplay").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
    });
  }
   else if (screen.width <= 768) {
    $(".autoplay").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
    });
  }
  else if (screen.width <= 991) {
    $(".autoplay").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
    });
  }
  else if (screen.width >= 991) {
    $(".autoplay").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
    });
  }

})(jQuery);

(function($){
    "use strict";

    if (screen.width <= 350) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
      });
    }
     else if (screen.width <= 768) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
      });
    }
    else if (screen.width <= 991) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
      });
    }
    else if (screen.width >= 991) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
      });
    }

})(jQuery);


(function($){
    "use strict";

    if (screen.width <= 350) {
      $(".autoplay3").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
      });
    }
     else if (screen.width <= 768) {
      $(".autoplay3").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
      });
    }
    else if (screen.width <= 991) {
      $(".autoplay3").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
      });
    }
    else if (screen.width >= 991) {
      $(".autoplay3").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
      });
    }

})(jQuery);


// // end slider
// ////////////////////////
// // start animation scroll
AOS.init();
// // end animation scroll
// //////////////////////////////
// // // start auto type
// document.addEventListener("DOMContentLoaded", function() {
//   const exampleText = ['عميد الكليه'];
//   const exampleTyping = new AutoTyping('.auto', exampleText, {
//       typeSpeed: 50,
//       deleteSpeed: 50,
//       waitBeforeDelete: 2000,
//       waitBetweenWords: 500,
//   });
//   exampleTyping.start()
// });
// // ///////////////////////////////

// // start counter 
//      // count in who us slide 

// // end count in who us slide 


// // end counter 

// start interactive card1 
var limits = 15.0;

$(".card0").mousemove(function (e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.
  var offsetX = x / rect.width;
  var offsetY = y / rect.height;

  var rotateY = (offsetX) * (limits * 2) - limits;
  var rotateX = (offsetY) * (limits * 2) - limits;

  var shadowOffsetX = (offsetX) * 32 - 16;
  var shadowOffsetY = (offsetY) * 32 - 16;

  $(this).css({
    "box-shadow": (1 / 6) * -shadowOffsetX + "px " + (1 / 6) * -shadowOffsetY + "px 3px rgba(0, 0, 0, 0.051), " +
      (2 / 6) * -shadowOffsetX + "px " + (2 / 6) * -shadowOffsetY + "px 7.2px rgba(0, 0, 0, 0.073), " +
      (3 / 6) * -shadowOffsetX + "px " + (3 / 6) * -shadowOffsetY + "px 13.6px rgba(0, 0, 0, 0.09), " +
      (4 / 6) * -shadowOffsetX + "px " + (4 / 6) * -shadowOffsetY + "px 24.3px rgba(0, 0, 0, 0.107), " +
      (5 / 6) * -shadowOffsetX + "px " + (5 / 6) * -shadowOffsetY + "px 45.5px rgba(0, 0, 0, 0.129), " +
      -shadowOffsetX + "px " + -shadowOffsetY + "px 109px rgba(0, 0, 0, 0.18)",
    transform: "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)"
  });

  var glarePos = rotateX + rotateY + 90;
  $(this)
    .children()
    .children()
    .css("left", glarePos + "%");
});

$(".card0").mouseleave(function (e) {
  $(".card0").css({"box-shadow": "0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), 0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)", "transform": "scale(1.0)"});
  $(".glare").css("left", "100%");
});
