// <!-- Initialize Swiper -->
var swiper = new Swiper(".slide-swp", {
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true
  },
  autoplay: {
      delay: 1500, // 🔥 تقليل التأخير لتسريع الحركة
      disableOnInteraction: false
  },
  speed: 600, // 🔥 زيادة سرعة الانتقال بين الشرائح
  loop: document.querySelectorAll(".slide-swp .swiper-slide").length > 1
});

// swiper slide Sale_slide
var saleSlides = document.querySelectorAll(".sale_sec .swiper-slide").length;
var swiperSale = new Swiper(".sale_sec", {
  slidesPerView: saleSlides >= 5 ? 5 : saleSlides,
  spaceBetween: 30,
  autoplay: {
      delay: 1800, // 🔥 تسريع التمرير
      disableOnInteraction: false
  },
  speed: 700, // 🔥 زيادة سرعة الانتقال
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },
  loop: saleSlides > 5,
  breakpoints: {
      1600: { slidesPerView: 5 },
      1200: { slidesPerView: 4, spaceBetween: 30 },
      700: { slidesPerView: 3, spaceBetween: 15 },
      0: { slidesPerView: 2, spaceBetween: 10 }
  }
});

// swiper slide for small cart (Computer & Desktop)
var productSlides = document.querySelectorAll(".product_swip .swiper-slide").length;
var swiperProduct = new Swiper(".product_swip", {
  slidesPerView: productSlides >= 4 ? 4 : productSlides, 
  spaceBetween: 30,
  autoplay: {
      delay: 1800, // 🔥 تسريع التمرير
      disableOnInteraction: false
  },
  speed: 700, // 🔥 زيادة سرعة الانتقال
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },
  loop: productSlides > 4,
  breakpoints: {
      1500: { slidesPerView: 4 },
      1200: { slidesPerView: 3, spaceBetween: 30 },
      900: { slidesPerView: 2 },
      700: { slidesPerView: 3, spaceBetween: 15 },
      0: { slidesPerView: 2, spaceBetween: 10 }
  }
});
