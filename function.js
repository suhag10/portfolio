'use strict';
/*
 *  Theme Name: Baraka_Theme
 *  Author: github.com/suhag10
 *  Version: 2.1.1
 *  creation: 2022-Jul
 *  Update: 2023-MAy-12
 *  Write Javascript code!
*/
// Variables-----------------------------Start->
const version           = '2.1.1';
const UI_BARAKA_VERSION = version;
const UI_BARAKA_FILE    = './';
const UI_BARAKA_URL     =  UI_BARAKA_FILE;
const UI_BARAKA_ASSETS  = 'assets';
// Variables-----------------------------End::

// top header------------------------->
const ui_plus   = '&plus;';
const ui_number = ui_plus + 88013112519250;
const ui_email  = "hellosuhag140@gmail.com";

// header---------------------------->
// -----------------------------------
const header_logo = Logo();
function Logo() {
    let text = "Suhag";
    let print = text.toUpperCase();

    var logo = `<h1 class="mb-0">${print}</h1>`;
    return logo;
}

// Menu and URL--------------------------------->
const home_url = UI_BARAKA_URL;
function navMenu() {
    const navLink = [ 
        {title:"home", link:home_url},
        {title:"about", link:home_url + "#about"},
        {title:"skills", link:home_url + "#skills"},
        {title:"project", link:home_url + "#portfolio"},
        {title:"blog", link:home_url + "blog.html"},
    ]

    let navLength = navLink.length;

    let nLink = '<ul id="nav_menu">';
    for (let i = 0; i < navLength; i++) {
        nLink += '<li class="'+ navLink[i].title +'"><a href='+'"'+ navLink[i].link +'">'+ navLink[i].title +'</a></li>';
    }
    nLink += '</ul>';

    return nLink;
}

const skills_1 = './assets/img/skill/skill-1.jpg';
const education_1 = './assets/img/education/education-1.jpg';
const education_2 = './assets/img/education/education-2.jpg';

// footer---------------------------->
// -----------------------------------
const footer_logo = header_logo;
var link = [
    {title:"fiverr",     icon:'<i class="fa-solid far fa-briefcase"></i>',  link:"https://www.fiverr.com/users/suhag94"},
    {title:"linkedin",   icon:'<i class="fab fa-linkedin"></i>',            link:"https://www.linkedin.com/in/suhag11/"},
    {title:"twitter",    icon:'<i class="fab fa-twitter"></i>',             link:"https://twitter.com/suhag41"},
    {title:"instagram",  icon:'<i class="fab fa-instagram"></i>',           link:"https://www.instagram.com/suhagDeveloper"},
    {title:"facebook",   icon:'<i class="fab fa-facebook-f"></i>',          link:"https://www.facebook.com/suhagDeveloper"},
    {title:"github",     icon:'<i class="fab fa-github"></i>',              link:"https://github.com/suhag10"},
    {title:"youtube",    icon:'<i class="fab fa-youtube"></i>',             link:"https://www.youtube.com/@suhag10"}
]
function socialLink() {
    
    let socialLength = link.length;

    let sLink = '<ul class="social_link">';
    for (let i = 0; i < socialLength; i++) {
        sLink += '<li class="'+ link[i].title +'"><a href='+'"'+ link[i].link +'">'+ link[i].icon +'</a></li>';
    }
    sLink += '</ul>';

    return sLink;
}


// footer_copyright
const date = new Date();
const year = date.getFullYear();
const experience = year - 2021;

const footer_title     = 'I&apos;m a web developer with ' + experience + ' years of experience.';
const footer_copyright = "&copy; 2022 &mdash; " + year + " &#x25C8; " + "All Rights Reserved.";


// head
document.getElementById("head").innerHTML = uiHead();
function uiHead() {
    var title = "Suhag Ahmed | Protfolio";
    return `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="./assets/img/favicon.png" type="image/x-icon">
        <title>${title}</title>
        ${setupStylesheet()}        
    `;
}

// Ui Script
function setupStylesheet(){
    return `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
        <link rel="stylesheet" href="./assets/css/default.css">
        <link rel="stylesheet" href="./assets/css/style.css">
        <link rel="stylesheet" href="./assets/css/responsive.css">
    `;
}

//themeMode 
const el = document.getElementsByTagName("html")[0];
const themeStorage = localStorage.getItem("data-bs-theme");
const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");

if(themeStorage === "light"){
    lightMode();
} else {
    darkMode();

}

//darkMode
function darkMode(){
    el.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("data-bs-theme", "dark");
    lightModeBtn.classList.remove("active");
    darkModeBtn.classList.add("active");
}
//lightMode
function lightMode(){
    el.setAttribute("data-bs-theme", "light");
    localStorage.setItem("data-bs-theme", "light");
    darkModeBtn.classList.remove("active");
    lightModeBtn.classList.add("active");
}
