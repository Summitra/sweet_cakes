
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}


var swiper = new Swiper(".product-row", {
    // slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 2800,
        disableOnInteraction:false,
      },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".blogs-row", {
    // slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 2800,
        disableOnInteraction:false,
      },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });




  var swiper = new Swiper(".review-row", {
    // slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 2800,
        disableOnInteraction:false,
      },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });