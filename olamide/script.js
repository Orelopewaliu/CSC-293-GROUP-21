let menu=document.querySelector(".menu-icon");

menu.onclick=() =>{
    menu.classList.toggle("move")
}
// Review Swipper
var swiper = new swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

});

//Header Background Change on Scroll
let header= document.querySelector('header')

window.addEventListener('scroll',() =>{
  header.classList.toggle("header-active", window.scrollY > 0)
})



//Scroll Top
let scrollTop= document.querySelector('.scroll-top')

window.addEventListener('scroll',() =>{
  scrollTop.classList.toggle("scroll-active", window.scrollY > 0)
})

