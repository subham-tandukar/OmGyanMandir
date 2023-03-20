var loader = document.querySelector(".pre-loader");

function myMove() {
  loader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(function () {
    myMove();
  }, 2000);
});

// ----------------------------------

const body = document.body;
const header = document.querySelector("header");
const main = document.querySelector("main");
const offcanvas = document.querySelector("#offcanvas-slide");
const headerHeight = document.querySelector("header").offsetHeight;
main.style.top = headerHeight + "px";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll - lastScroll > 0) {
    header.classList.add("scroll-down");
    offcanvas.style.top = headerHeight + "px";
    header.classList.remove("scroll-up");
  } else {
    // scrolled up -- header show
    header.classList.add("scroll-up");
    offcanvas.style.top = 0;
    header.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
});

// ----------------------------------

$(".chooseUsContent").hover(function () {
  $(".chooseUsContent.activeContent").removeClass("activeContent");
  $(this).toggleClass("activeContent");
});
$(".about-dropdown").click(function () {
  $(".about-dropdown-content").toggleClass("d-about");
  $(".about-dropdown span ").toggleClass("rotate");
});
$(".gallery-dropdown").click(function () {
  $(".gallery-dropdown-content").toggleClass("d-gallery");
  $(".gallery-dropdown span ").toggleClass("rotate");
});

$(window).scroll(function () {
  var h = $(document).height();
  var hh = $(document).scrollTop();
  if (hh > h / 1.3) {
    $("#top").css({
      // top: "80%",
      opacity: "1",
      visibility: "visible",
      transform: "scale(1)",
    });
  } else {
    $("#top").css({
      // top: "0",
      opacity: "0",
      visibility: "hidden",
      transform: "scale(0.1)",
    });
  }
});

$(function () {
  $(".btn-animate")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });
  $("[href=#]").click(function () {
    return false;
  });
});

var swiper = new Swiper(".mySwiper-banner", {
  spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper-event", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-gallery", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".mySwiper-team", {
  slidesPerView: 4,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".mySwiper-testimonials", {
  spaceBetween: 50,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper-blog", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".mySwiper-recent", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".mySwiper-partner", {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
// -------------------------------

// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
  loop: false,
  protect: true,
});

// -----------------------

gsap.registerPlugin(ScrollTrigger);
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});

// -------------------------

const tl = gsap.timeline({
  defaults: { duration: 1, ease: "Power3.easeOut" },
  scrollTrigger: {
    trigger: "article",
    start: "-100%",
    end: "0%",
    scrub: 1,
  },
});

tl.fromTo(".text1", { x: "50%", opacity: 0 }, { x: 0, opacity: 1 }, "<5%");
tl.fromTo(".text3", { x: "-50%", opacity: 0 }, { x: 0, opacity: 1 }, "<5%");
tl.fromTo(".text2", { y: "50%", opacity: 0 }, { y: 0, opacity: 1 }, "<5%");

// Text Animation ----------------
const tlTxtAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: "article",
    start: "-20%",
    end: "50%",
    scrub: 1,
  },
});

tlTxtAnimation.fromTo(
  ".admission-content",
  { opacity: 1 },
  { opacity: 0, scale: 2 }
);

// ---------------------------------

$(document).mousemove(function (event) {
  var x = event.clientX / $(window).width() - 0.5;
  var y = event.clientY / $(window).height() - 0.5;

  TweenLite.to($(".about-img"), 0.6, {
    rotationY: 10 * x,
    rotationX: 10 * y,
    translateY: 10 * x,
    translateX: 10 * y,
    ease: Power1.easeOut,
    transformPerspective: 500,
    transformOrigin: "center",
  });
});
