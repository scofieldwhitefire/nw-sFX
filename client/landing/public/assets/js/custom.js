var scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.style.opacity = "0";

// =================== preloader js  ================== //
window.addEventListener("load", function () {
  var preloader = document.querySelector(".preloader");
  preloader.style.transition = "opacity .5s ease";
  preloader.style.opacity = "0";
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1500);
});

// =================== preloader js end ================== //

setTimeout(() => {

  // =================== header js start here ===================

  // Add class 'menu-item-has-children' to parent li elements of '.submenu'
  var submenuList = document.querySelectorAll("ul>li>.submenu");
  submenuList.forEach(function (submenu) {
    var parentLi = submenu.parentElement;
    if (parentLi) {
      parentLi.classList.add("menu-item-has-children");
    }
  });

  // Fix dropdown menu overflow problem
  var menuList = document.querySelectorAll("ul");
  menuList.forEach(function (menu) {
    var parentLi = menu.parentElement;
    if (parentLi) {
      parentLi.addEventListener("mouseover", function () {
        var menuPos = menu.getBoundingClientRect();
        if (menuPos.left + menu.offsetWidth > window.innerWidth) {
          menu.style.left = -menu.offsetWidth + "px";
        }
      });
    }
  });

  // Toggle menu on click
  // Disabled to fix reload problem
  
  // var menuLinks = document.querySelectorAll(".menu li a");

  // menuLinks.forEach(function (link) {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault()
  //     e.stopPropagation(); // prevent the event from bubbling up to parent elements
  //     var element = link.parentElement;
  //     if (parseInt(window.innerWidth, 10) < 1200) {
  //       if (element.classList.contains("open")) {
  //         element.classList.remove("open");
  //         element.querySelector("ul").style.display = "none";
  //       } else {
  //         element.classList.add("open");
  //         element.querySelector("ul").style.display = "block";
  //       }
  //     }
  //   });
  // });

  // Toggle header bar on click
  var headerBar = document.querySelector(".header-bar");
  headerBar.addEventListener("click", function () {
    headerBar.classList.toggle("active");
    var menu = document.querySelector(".menu");
    if (menu) {
      menu.classList.toggle("active");
    }
  });

  //Header
  var fixedTop = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      fixedTop.classList.add("header-fixed", "fadeInUp");
    } else {
      fixedTop.classList.remove("header-fixed", "fadeInUp");
    }
  });

  // =================== header js end here =================== //

  //Animation on Scroll initializing
  AOS.init();

  // =================== custom safewayfx slider js here =================== //

  // component slider here
  const Partner = new Swiper(".partner__slider", {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 25,
      },
    },
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    speed: 2000,
  });

  // blog  slider here
  const blog = new Swiper(".blog__slider", {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },

    autoplay: true,
    speed: 500,
    navigation: {
      nextEl: ".blog__slider-next",
      prevEl: ".blog__slider-prev",
    },
  });

  // testimonial slider

  const testimonial = new Swiper(".testimonial__slider", {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
    },

    autoplay: true,
    speed: 500,

    navigation: {
      nextEl: ".testimonial__slider-next",
      prevEl: ".testimonial__slider-prev",
    },
  });

  // testimonial slider 2
  const testimonial2 = new Swiper(".testimonial__slider2", {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },

    autoplay: true,
    speed: 500,

    navigation: {
      nextEl: ".testimonial__slider-next",
      prevEl: ".testimonial__slider-prev",
    },
  });

  // roadmap slider
  const roadmapSlider = new Swiper(".roadmap__slider", {
    grabCursor: true,
    // loop: true,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },

    autoplay: true,
    speed: 500,
  });

  // =================== custom safewayfx slider end here =================== //

  // =================== scroll js start here =================== //

  // Show/hide button on scroll
  window.addEventListener("scroll", function () {
    var scrollToTop = document.querySelector(".scrollToTop");

    if (scrollToTop) {
      if (window.pageYOffset > 300) {
        scrollToTop.style.bottom = "7%";
        scrollToTop.style.opacity = "1";
        scrollToTop.style.transition = "all .5s ease";
      } else {
        scrollToTop.style.bottom = "-30%";
        scrollToTop.style.opacity = "0";
        scrollToTop.style.transition = "all .5s ease";
      }
    }
  });

  var scrollToTop = document.querySelector(".scrollToTop");

  if (scrollToTop) {
    // Click event to scroll to top
    scrollToTop.addEventListener("click", function (e) {
      e.preventDefault();
      var scrollDuration = 250; // Set scroll duration in milliseconds
      var scrollStep = -window.scrollY / (scrollDuration / 15);
      var scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    });
  }

  // =================== scroll js end here =================== //

  // =================== count start here =================== //
  new PureCounter();
  // =================== count end here =================== //
}, 1200);
