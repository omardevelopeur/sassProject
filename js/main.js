const { generatePath } = require("react-router-dom");

let navbar=document.querySelector(".header .navbar");
let search=document.querySelector(".header .search-form");
let loginForm=document.querySelector(".header .login-form");
let infoForm=document.querySelector(".contact-info");
document.querySelector("#menu-btn").onclick=function(){
    navbar.classList.toggle("active");
    search.classList.remove("active");
    loginForm.classList.remove("active");
};
document.querySelector("#search-btn").onclick=function(){
    search.classList.toggle("active");
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
};
document.querySelector("#login-btn").onclick=function(){
    loginForm.classList.toggle("active");
    navbar.classList.remove("active");
    search.classList.remove("active");
};
document.querySelector("#info-btn").onclick=function(){
    infoForm.classList.add("active");
};
document.querySelector("#close-contact-info").onclick=function(){
    infoForm.classList.remove("active");
};
window.onscroll=()=>{
    navbar.classList.remove("active");
    search.classList.remove("active");
    loginForm.classList.remove("active");
    infoForm.classList.remove("active");
}
