// const navLinkEls = document.querySelectorAll('.navlink');
// const windowPathname = window.location.pathname;

// navLinkEls.forEach(navLinkEls =>{
//     const navLinkPathname = new URL(navLinkEls.href).pathname;
//     if((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')){
//         navLinkEls.classList
//     }
// })

// // let  menuIcon = document.querySelector('#menu-icon');
// // let  navbar = document.querySelector('.navbar');
// // menuIcon.onclick = () =>{
// //     menuIcon.classList.toggle('bx-x');
// //     navbar.classList.toggle('active');
// // }
// // let sections =  document.querySelectorAll('section');
// // let navlinks= document.querySelectorAll('header nav navlink');

const harmburger = document.querySelector('.harmburger');
const navMenu= document.querySelector('.nav-menu');

harmburger.addEventListener('click',() => {
    harmburger.classList.toggle("active");
    navMenu.classList.toggle('active');

})
document.querySelectorAll('.navlink').forEach(n => n.addEventListener('click',() =>{
    harmburger.classList.remove('active');
    navMenu.classList.remove('active');
}))
