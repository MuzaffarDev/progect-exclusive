// header buttonlari activ  holatga keltiradigan js code

let itemBtn = document.querySelectorAll(".header__menu-item");

itemBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
});

// $('.autoplay-slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });

// $(".upcoving__card-list").slick({
//   dots: true,
//   infinite: true,
//   // loop:true,
//   slidesToShow: 2,
//   slidesToScroll: 1,
// });

// $('.slick-slider').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 4,
  paginationClickable: true,
  // speed: 6000,
  // autoplay: {
  //   delay: 1,
  // },
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  dots: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});


// burger menu
document.querySelector(".header__menu-burger").addEventListener("click", () => {
  let header = document.querySelector(".header").classList.add("show");
});
document.querySelector(".header__close-btn").addEventListener("click", () => {
  let header = document.querySelector(".header").classList.remove("show");
});

//  modal section
let elModalOpenBtn = document.querySelector(".open");
let elModalCloseBtn = document.querySelector(".close");
let elModal = document.querySelector(".modal");
let elModalWrapper = document.querySelector(".modal__wrapper");

elModalOpenBtn.addEventListener("click", () => {
  elModal.classList.add("show");
  elModalWrapper.style.top = "50%";
});

elModalCloseBtn.addEventListener("click", () => {
  elModalWrapper.style.top = "40%";
  setTimeout(() => {
    elModal.classList.remove("show");
  }, 200);
});


