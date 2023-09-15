"use strict";
/*
 *  Theme Name: BarakaUI
 *  Author: github.com/suhag10
 *  Version: 2.2.1
 *  Creation: 2022-Jul
 *  Update: 06-08-2023
 *  Write Javascript code!
*/

// Variables init------------------------->
// ----------------------------------------
const version           = '3.0.0';
const UI_BARAKA_VERSION = version;
const UI_BARAKA_FILE    = './';
const UI_BARAKA_URL     =  UI_BARAKA_FILE;
const UI_BARAKA_ASSETS  = 'assets';
const url               = document.location.href;

const prefix = "barakaUI";

const ui_plus   = '&plus;';
const ui_dash   = '&mdash;';
const ui_number = ui_plus + 8801311251925;
const ui_email  = "hellosuhag140@gmail.com";

// Date Tima
const date = new Date();

const year = date.getFullYear();
const experience = year - 2021;


// let footer_title     = `I&apos;m a web developer with ${experience} years of experience.`;
const footer_title     = `Contact Us`;
const footer_copyright = `&copy; 2022 ${ui_dash} ${year} &#x25C8; All Rights Reserved.`;
// ----------------------------------------
// --------------------- Variables init --<

// header Logo -------------------------->
function get_logo() {
    let text = "suhag";
    let logo = text.toUpperCase();

    return `<a class="navbar-brand" href="${UI_BARAKA_URL}index.html">${logo}</a>`;
}

// ui_enqueue_style -------------------
// ----------------------------------->
function ui_enqueue_style(){
    let urlAssets = UI_BARAKA_URL+UI_BARAKA_ASSETS;
    return `
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap-grid.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/css/libs/animate.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css">
        
        <link rel="stylesheet" type="text/css" href="${urlAssets}/css/webfonts.min.css">
        <link rel="stylesheet" type="text/css" href="${urlAssets}/css/theme.css">
    `;
}

//ui_head -----------------------------------
// ----------------------------------------->
function ui_head(title, twitter_meta){
    let urlAssets = UI_BARAKA_URL+UI_BARAKA_ASSETS;
    let headEl = `
        <meta charset="utf-8">
        <title>${title ?? 'Portfolio'}</title>

        <meta name="description" content="">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        ${twitter_meta ?? ''}
        
        <link rel="icon" href="${urlAssets}/images/favicon.png" sizes="any">
        <link rel="icon" href="${urlAssets}/images/favicon.png" type="image/png">
        <link rel="apple-touch-icon" href="${urlAssets}/images/favicon.png">

        ${ui_enqueue_style()} 
    `;
    document.getElementsByTagName("head")[0].innerHTML = headEl;
}
// kick-off
ui_head();

// undefined link ------------------>
// ----------------------------------
function und_link() {
    return 'javascript:void(0)';
}

function target_link(t) {
    switch(t) {
        case "b":
            return "_blank";
            break;
        case "t":
            return "_top";
            break;
        case "s":
            return "_self";
            break;
        case "p":
            return "_parent";
            break;
    }
}

// Menu and URL--------------------------------->
// ----------------------------------------------
function register_nav_menus() {
    const home_url = UI_BARAKA_URL+'index.html';
    const navLink = [ 
        {title:"home", link:home_url+'#home'},
        {title:"about", link:home_url + "#about"},
        {title:"skills", link:home_url + "#skills"},
        {title:"project", link:home_url + "#project"},
        {title:"blog", link:UI_BARAKA_URL + "blog.html"}
    ]

    let db = navLink,
        el = '';
    for (let i = 0; i < db.length; i++) {
        let {title, link} = db[i];
        el += `<li class="${title}"><a href="${link}">${title}</a></li>`;
    }
    el += '';
    return el;
}

// theme_switch | dark & light Mode function --->
// ----------------------------------------------
function themeStorage(){
    const storage = localStorage.getItem("data-ui-theme");
    const html = document.documentElement;

    switch (storage) {
        case "light":
            html.setAttribute("data-ui-theme", "light");
            break;
        case "dark":
            html.setAttribute("data-ui-theme", "dark");
            break;
        default:
            html.setAttribute("data-ui-theme", "light");
            break;
    }
}
themeStorage();

document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const themeSwitchButton = document.getElementById("themeSwitchButton");

    function toggleTheme() {
        // the toggleTheme function code here
        if (html.getAttribute("data-ui-theme") === "dark") {
            html.setAttribute("data-ui-theme", "light");
            themeSwitchButton.classList.remove("fa-sun-bright");
            themeSwitchButton.classList.add("fa-moon-stars");
            localStorage.setItem("data-ui-theme", "light");
        } else {
            html.setAttribute("data-ui-theme", "dark");
            themeSwitchButton.classList.remove("fa-moon");
            themeSwitchButton.classList.add("fa-sun-bright");
            localStorage.setItem("data-ui-theme", "dark");
        }
    }
    themeSwitchButton.addEventListener("click", toggleTheme);
});

document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".circle_text p");
    text.innerHTML = text.innerText.split("").map(
        (char, i) => `
            <span style="transform:rotate(${i * 11.5}deg)">${char}</span>
        `
    ).join('');
});

// Social Media Links -------------------------->
// ----------------------------------------------
const db_social = [
    {title:"linkedin",   icon:'<i class="fa-brands fa-linkedin"></i>',    link:"https://www.linkedin.com/in/suhag11/"},
    {title:"twitter",    icon:'<i class="fa-brands fa-twitter"></i>',     link:"https://twitter.com/suhag41"},
    {title:"instagram",  icon:'<i class="fa-brands fa-instagram"></i>',   link:"https://www.instagram.com/suhagDeveloper"},
    {title:"facebook",   icon:'<i class="fa-brands fa-facebook-f"></i>',  link:"https://www.facebook.com/suhagDeveloper"},
    {title:"github",     icon:'<i class="fa-brands fa-github"></i>',      link:"https://github.com/suhag10"},
    {title:"youtube",    icon:'<i class="fa-brands fa-youtube"></i>',     link:"https://www.youtube.com/@suhag10"},
];
let linkedin = db_social[0].link;

function social_media(){
    let db = db_social;
    
    let el = `<ul class="social__media">`;
    for (let i = 0; i < db.length; i++) {
        el += `<li class="${db[i].title}"><a href="${db[i].link}" target="${target_link("b")}">${db[i].icon}</a></li>`;
    }
    el += `</ul>`;
    return el;
}

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

function ui_primaryColor_storage(){
    let dbColorStorage = localStorage.getItem("data-color");
    if(!dbColorStorage){

    }else{
        let dataColor = `--barakaUI-primary: ${'#' + dbColorStorage} !important; --barakaUI-primary-rgb: ${hexToRgb(dbColorStorage)};`;
        document.body.setAttribute('style', dataColor);
    }    
}
ui_primaryColor_storage();

document.addEventListener("DOMContentLoaded", () => {
    
    const buttonGroup = document.getElementById("buttonGroup"); 
    function buttonGroupPressed(e) {
        const isButton = e.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }

        let dataColor = `--barakaUI-primary: ${'#' + e.target.value ?? '#' + dbColorStorage} !important; --barakaUI-primary-rgb: ${hexToRgb(e.target.value) ?? hexToRgb(dbColorStorage)};`;
        document.body.setAttribute('style', dataColor);
        localStorage.setItem("data-color", e.target.value);
    }
    buttonGroup.addEventListener('click', buttonGroupPressed);
    
});

// ----------------------------------------------
//  HOME PAGE FUNCTIONS
// --------------------------------------------->
// about me
function ui_about_sectionTitle() {
    let animate = `class="wow animate__animated animate__fadeInLeft" data.wow.duration="3s" data.wow.delay=".6s"`;
    return `
        <span>About Me</span>
        <h2 ${animate}>
            hi, my name is Suhag Ahmed. 
            I&apos;m a web developer with ${experience} years of experience,
            My focus on website quality.
        </h2>
    `;
}

// About Text
function ui_aboutText() {
    // return `
    //     <p>                
    //         I&apos;m a web developer with ${experience} years of experience. 
    //         My gig is especially for <b>WordPress E-commerce Websites.</b> 
    //         I will do properly WordPress E-commerce Website of your product and other websites.
    //     </p>
    // `;
    return `
        <p>
            As a dedicated web developer, I am passionate about crafting exceptional websites. 
            With ${experience} years of experience in this field, I possess extensive knowledge of various web technologies. 
            My ultimate goal is to deliver web experiences that surpass my client's expectations.
        </p>
    `;
}

// About Expert
function ui_aboutExpert() {
    return `
        <ul>
            <li>PSD to HTML.</li>
            <li>Figma to HTML.</li>
            <li>Website to HTML.</li>
            <li>Responsive to all Devices.</li>
            <li>Bootstrap CSS Framework.</li>
            <li>jQuery Framework.</li>
            <li>Website Bug Fixing.</li>
            <li>PSD to WordPress.</li>
            <li>Figma to WordPress.</li>
            <li>Website to WordPress.</li>
        </ul>
        <ul>
            <li>WordPress Customization.</li>
            <li>WordPress Theme Customization.</li>
            <li>WordPress Theme Development.</li>
            <li>WordPress Plugin Customization.</li>
            <li>WordPress Plugin Development.</li>
            <li>WordPress E-commerce Website-Customization.</li>
            <li>WordPress WooCommerce Themes-Customization.</li>
            <li>WordPress Bug Fixing.</li>
        </ul>
    `;
}

// Skills
let skills_img_1 = `${UI_BARAKA_URL+UI_BARAKA_ASSETS}/images/skill/skill-1.jpg`; 
function ui_skills_sectionTitle() {
    let animate = `class="wow animate__animated animate__fadeInRight" data.wow.duration="3s" data.wow.delay=".6s"`;
    return `
        <span>My Skillset</span>
        <h2 ${animate}>I specialize In Building web development</h2>
    `;
}

function ui_skills() {
    const skillsDB = [
        {name: "HTML5"},
        {name: "CSS3"},
        {name: "JavaScript ES6"},
        {name: "SASS"},
        {name: "PHP 8"},
        {name: "MySQL"},
        {name: "Git Bash"},
        {name: "WordPress - CMS"},
        {name: "Figma"},
        {name: "Photoshop"},
        {name: "Illustrator"},
    ]

    let db = skillsDB,
        el = `<div class="row">`;
    for (let i = 0; i < db.length; i++) {
        let {name} = db[i];
        el += `
            <div class="col-md-4">
                <div class="single_skill">
                    <div class="skill_title">
                        <h6>${name}</h6>
                    </div>
                </div>
            </div>
        `;
    }
    el += `</div>`;
    return el;
}

// Project Masonry Button
function ui_projectMasonry(){
    return `
        <div class="button__group">
            <button data-filter="*" class="active">All works</button>
            <button data-filter=".cat1">HTML & CSS</button>
            <button data-filter=".cat2">JavaScript</button>
            <button data-filter=".cat3">Design Inspiration</button>
            <button data-filter=".cat4">Web Design</button>
        </div>
    `;
}

// Project Function
function ui_projectDB(set){
    const db_project = [
        {
            name:  "Project Nubis",
            title: "Web Design",
            image: "portfolio-4.png",
            cat:   "cat4",
            link:  "https://suhag10.github.io/project-nubis/"
        },
        {
            name:  "Project Bemax",
            title: "Web Design",
            image: "portfolio-4.png",
            cat:   "cat4",
            link:  "https://suhag10.github.io/project-bemax/"
        },
        {
            name:  "Project Xisen",
            title: "Web Design",
            image: "portfolio-4.png",
            cat:   "cat4",
            link:  "https://suhag10.github.io/project-xisen/"
        },
        {
            name:  "Video Player",
            title: "JavaScript",
            image: "portfolio-2.png",
            cat:   "cat2",
            link:  "https://suhag10.github.io/project-video-player-js/"
        },
        {
            name:  "Hobi Personal Portfolio",
            title: "Web Design",
            image: "portfolio-4.png",
            cat:   "cat4",
            link:  "https://suhag10.github.io/hobi-personal-portfolio/"
        },
        {
            name:  "Digital Marketplace",
            title: "Web Design",
            image: "portfolio-4.png",
            cat:   "cat4",
            link:  "https://suhag10.github.io/digital-marketplace/"
        },
        {
            name:  "Victory day",
            title: "HTML & CSS",
            image: "",
            cat:   "cat1",
            link:  "https://suhag10.github.io/16D-victory-day-bd-project/"
        },
        {
            name:  "Bangladesh Visit",
            title: "Design Inspiration",
            image: "portfolio.jpg",
            cat:   "cat3",
            link:  "https://suhag10.github.io/bangladesh-visit/"
        },      
    ];

    const db = db_project;
    const setItems = set ?? db.length;
    
    let el = '';
    for (var i = setItems - 1; i >= 0; i--) {

        let {name, title, link, cat} = db[i];
        el += `
            <div class="single__portfolio grid-item ${cat}" data-width="33.33333333%">
                <div class="portfolio__item mb-30">
                    <div class="title">
                        <h2>${title}</h2>
                    </div>
                    <div class="portfolio__text">
                        <span>${title}</span>
                        <h2><a target="top" href="${link}">${name}</a></h2>
                    </div>
                </div>
            </div>
        `;
    }
    el += '';
    return el;
}

// Experience Function
function ui_experienceContent(){
    const db_experience = [
        {
            title: "Freelancer.com [2017]",
            name:  "Graphic Designer",
            icon:  "fa-briefcase",
            text:  ""
        },
        {
            title: "Fiverr.com [2017]",
            name:  "Graphic Designer",
            icon:  "fa-briefcase",
            text:  ""
        },
        {
            title: "Fiverr.com [2021]",
            name:  "Web Development",
            icon:  "fa-briefcase",
            text:  ""
        },
    ];

    let el = '';
    for (var i = db_experience.length - 1; i >= 0; i--) {
        let {title, name, icon, text} = db_experience[i];
        el += `
            <div class="col-md-6 col-lg-4">
                <div class="single_experience">
                    <div class="experience_content">
                        <i class="fa-duotone ${icon}"></i>
                        <div class="experience_title ml-20">
                            <span>${title}</span>
                            <a href="${und_link()}" target="${target_link("s")}"><h3>${name}</h3></a>
                        </div>
                    </div>
                    <!-- <p class="d-none m-0">${text}</p> -->
                </div>
            </div>
        `;
    }
    el += '';
    return el;
}

// Qualification
const education_img_1 = "./assets/images/education/education-1.jpg";
const education_img_2 = "./assets/images/education/education-2.jpg";

function ui_qualificationContent(){
    const db_qualification = [
        {
            title: "Freelancerlab, Sylhet. [2022]",
            name:  "Web Design & Web Development",
            icon:  "fa-code",
            text:  ""
        },
        {
            title: "MC College, Sylhet. [2020]",
            name:  "Bachelor of Social Science (BSS)",
            icon:  "fa-graduation-cap",
            text:  ""
        },
        {
            title: "MC College, Sylhet. [2017]",
            name:  "Microsoft Office",
            icon:  "fa-laptop-code",
            text:  ""
        },
        {
            title: "ICT Division, Ghasitula Alim Madrasha, Sylhet. [2017]",
            name:  "LEDP Graphic Design",
            icon:  "fa-paintbrush-pencil",
            text:  ""
        },
        {
            title: "National Youth Development Training Centre, Sylhet. [2016]",
            name:  "Computer Hardware",
            icon:  "fa-microchip ml-2",
            text:  ""
        },
        {
            title: "Shajalal City College, Sylhet. [2016]",
            name:  "Higher Secondary School Certificate (HSC)",
            icon:  "fa-graduation-cap",
            text:  ""
        },
        {
            title: "Progoti High School, Sylhet. [2014]",
            name:  "Secondary School Certificate (SSC)",
            icon:  "fa-graduation-cap",
            text:  ""
        },        
    ];
    //<p class="d-none">${text}</p>

    let el = `<div class="timeline__wrapper  position-relative">`;
    for (let i = 0; i < db_qualification.length; i++) {
        let {title, name, icon} = db_qualification[i];
        el += `
            <div class="single_timeline">
                <i class="fa-duotone ${icon}"></i>
                <div class="timeline_content">
                    <span>${title}</span>
                    <h2 class="m-0">${name}</h2>
                </div>
            </div>
        `;
    }
    el += `</div>`;
    return el;
}

// Counter Function
function ui_counterNumber(){
    const db_counter = [
        {
            title: "Happy Clients",
            icon:  "fa-user-group",
            count: 25,
            plus:  '',
        },
        {
            title: "Project Done",
            icon:  "fa-rocket-launch",
            count: 100,
            plus:  `<span>+</span>`,
        },
        {
            title: "Cup of Tea",
            icon:  "fa-mug-hot",
            count: 157,
            plus:  '',
        },
        {
            title: "Awards",
            icon:  "fa-medal",
            count: 45,
            plus: '',
        },
    ];

    let el = ``;
    for (let i = 0; i < db_counter.length; i++) {
        let {title, count, icon, plus} = db_counter[i];
        el += `
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div class="single_counter text-center">
                    <div class="counter_icon">
                        <i class="fa-duotone ${icon}"></i>
                    </div>
                    <span class="counter wow">${count}</span>
                    ${plus}
                    <p>${title}</p>
                </div>
            </div>
        `;
    }
    el += ``;
    return el;
}

// Testimonials Function
function get_testimonial() {
    let testimonialDB = [
        {
            name:     "Saidul Hussen",
            userName: "saidul",
            image:    "testimonial-3.jpg",
            content:  "Very impressive! keep up the amazing work Ma sha Allah",
            url:      "https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870",
        },
        {
            name:     "Tasnim Juhee",
            userName: "tasnim",
            image:    "testimonial-2.png",
            content:  "Absolutely amazing...carry on &#10084;",
            url:      "https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870",
        },
        {
            name:     "Md Inzamamul Haque",
            userName: "inzamamul",
            image:    "testimonial-4.jpg",
            content:  "Wow! That's awesome!",
            url:      "https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870",
        },
        {
            name:     "Sabbir Ahmed",
            userName: "sabbir",
            image:    "testimonial-5.jpg",
            content:  "Awesome",
            url:      "https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870",
        },
        {
            name:     "Jid AN",
            userName: "jid-an",
            image:    "testimonial-1.png",
            content:  "Great work",
            url:      "https://www.facebook.com/photo/?fbid=3445963055638002",
        },
        {
            name:     "Emad Hussen",
            userName: "emad",
            image:    "testimonial-6.jpg",
            content:  "Keep up the good work!",
            url:      "https://www.facebook.com/photo/?fbid=3445963055638002",
        },
        {
            name:     "Jid AN",
            userName: "jid-an",
            image:    "testimonial-1.png",
            content:  "Keep it up",
            url:      "https://www.facebook.com/groups/learnwithfreelancerlab/permalink/557122046261110",
        },
    ];

    const db = testimonialDB;

    let el = `<div class="testimonial_active">`;
    for (let i = 0; i < db.length; i++) {
        el += `
            <div class="single_testimonial" __data-width="350">
                <div class="testimonial_person">
                    <div class="testimonial_avater">
                        <img src="${UI_BARAKA_URL+UI_BARAKA_ASSETS}/images/testimonial/${db[i].image}" class="img-fluid">
                    </div>
                    <div class="testimonial_info">
                        <h5>${db[i].name}</h5>
                        <a href="${db[i].url}" target="${target_link("b")}"><span>@${db[i].userName}</span></a>
                    </div>
                </div>
                <div class="testimonial_text">
                    <p class="m-0">${db[i].content}</p>
                </div>
            </div>
        `;
    }
    el += `</div>`;
    return el;
}
