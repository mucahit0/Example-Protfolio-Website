const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".uls");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);

$(window).on("load", function () {
  $(".loader").fadeOut(1000);
});

// navbar kaybetme ozelligi
// let lastScrollTop = 0;
// let navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', function(){
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if(scrollTop > lastScrollTop){
//         navbar.style.top= '-80px'
//     }else{
//         navbar.style.top= '0'
//     }
//     lastScrollTop = scrollTop;
// })
