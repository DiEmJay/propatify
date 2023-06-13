let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let moreBtn = document.querySelector('#more-btn');
let propaForm = document.querySelector('.propa-own-form-container');
let submitForm = document.querySelector('#propa-own-btn');


window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    propaForm.classList.remove('active');
}

moreBtn.addEventListener('click', ()=>  {
propaForm.classList.add('active');
});


formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
    });
    });


    var swiper = new swiper('.ads-slider', {
        spaceBetween: 20,
        loop:true,
        autoplay: {
             delay: 2500,
             disableOnInteraction: false,
         },
         breakpoints: {
             640:{
                 slidePerView: 1
             },
             768:{
                 slidePerView: 2
             },
             1024:{
                 slidePerView: 3
             },
     
         },
     
     });
     var swiper = new swiper('.review-slider', {
        spaceBetween: 20,
        loop:true,
        autoplay: {
             delay: 2500,
             disableOnInteraction: false,
         },
         breakpoints: {
             640:{
                 slidePerView: 1
             },
             768:{
                 slidePerView: 2
             },
             1024:{
                 slidePerView: 3
             },
     
         },
     
     });
     var swiper = new swiper('.brand-slider', {
        spaceBetween: 20,
        loop:true,
        autoplay: {
             delay: 2500,
             disableOnInteraction: false,
         },
         breakpoints: {
             640:{
                 slidePerView: 1
             },
             768:{
                 slidePerView: 2
             },
             1024:{
                 slidePerView: 3
             },
     
         },
     
     });


     let slideIndex = 1;
     showSlides(slideIndex);
     
     // Next/previous controls
     function plusSlides(n) {
       showSlides(slideIndex += n);
     }
     
     // Thumbnail image controls
     function currentSlide(n) {
       showSlides(slideIndex = n);
     }
     
     function showSlides(n) {
       let i;
       let slides = document.getElementsByClassName("mySlides");
       let dots = document.getElementsByClassName("dot");
       if (n > slides.length) {slideIndex = 1}
       if (n < 1) {slideIndex = slides.length}
       for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
       }
       for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
       }
       slides[slideIndex-1].style.display = "block";
       dots[slideIndex-1].className += " active";
     }
