// swiper for slider_section

var swiper = new Swiper(".slider_swiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests:true,
      clickable:true
    },
    autoplay:{
      delay:2500,
    },
    loop:true
 });

// swiper for sale_swiper_section
var swiper = new Swiper(".sale_sec", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests:true,
      clickable:true
    },
    slidesPerView:5,
    spaceBetween:30,
    
    autoplay:{
      delay:2500,
    },
     navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
     },
     breakpoints:{
      1600:{
        slidesPerView:5
      },
      1200:{
        slidesPerView:4,
        spaceBetween:30,
      },
      700:{
        slidesPerView:3,
        spaceBetween:15,
      },
      0:{
        slidesPerView:2,
        spaceBetween:10,
      }
     },
    loop:true,
 });

 var swiper = new Swiper(".product_swip", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests:true,
    clickable:true
  },
  slidesPerView:4,
  spaceBetween:30,
  
  autoplay:{
    delay:2500,
  },
   navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
   },
  loop:true,
});