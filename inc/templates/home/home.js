"use strict";

function ui_hero() {
    let urlAssets = UI_BARAKA_URL+UI_BARAKA_ASSETS;
    let animate = `wow animate__animated animate__fadeInUp`;
    let delay = `data.wow.duration="3s" data.wow.delay=".10s"`;

    return `
        <section id="home" class="hero__area position-relative">
            <div class="page-title__shape xd-none">
                <img class="page-title__dot-4" src="${urlAssets}/images/shape/dot-4.png" alt="image">
                <img class="page-title__dot" src="${urlAssets}/images/shape/dot.png" alt="image">
                <img class="page-title__circle" src="${urlAssets}/images/shape/hero-circle-2.png" alt="circle">
            </div>
            <div class="hero__active">
                <div class="single__hero">
                    <div class="container-fluid">
                        <div class="row align-items-center">

                            <div class="col-md-6">
                                <div class="hero__content pt-100 pl-50">
                                    <h2>
                                        <span>Hey, I'm</span>
                                        <img class="waving-hand fa-shake"  src="${urlAssets}/images/shape/waving-hand.png" alt=""><br />
                                        <span>Suhag Ahmed.</span><br />
                                        <span class="auto_type" data-text="Web Developer">Web Developer</span>
                                    </h2>

                                    <div class="hero__sub-title mt-50 d-flex align-items-center column-gap-5 ${animate}" ${delay}>
                                        <a href="${linkedin}" target="_blank" class="btn btn-primary">Hire Me</a>
                                        ${social_media()}
                                    </div>

                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="hero__img pt-100 mx-auto position-relative">
                                    <img src="./assets/images/hero/hero.png" alt="" class="img-fluid  wow animate__animated animate__zoomIn">
                                    <span class="conic__gradients"></span>
                                    <div class="experience__circle z-5">
                                    
                                        <div class="circle_text">
                                            <p>Experience - Web Development - </p>
                                        </div>
                                        <h3>${experience}+ Years</h3>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function ui_aboutMe() {
    return `
        <section id="about" class="about_area mt-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="section__title">
                            ${ui_about_sectionTitle()}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="about_text pt-70">
                            ${ui_aboutText()}
                            <h6>I am expert in</h6>
                            <div class="about_expert">
                                ${ui_aboutExpert()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function ui_mySkillset() {
    return `
        <section id="skills" class="skill_area bg__light pt-100 pb-100 mt-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-6 pe-5">
                        <div class="skill_img">
                            <img src="${skills_img_1}" alt="..." class="img-fluid">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="section__title mt-xl-0 mt-lg-5 mt-sm-5 mt-xl-0">
                            ${ui_skills_sectionTitle()}
                        </div>
                        <div class="progess_wrapper">
                            ${ui_skills()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function ui_completeProject(){
    return `
        <section id="project" class="project__area pt-120 pb-120">
            <div class="container">
                <div class="row">

                    <div class="col-md-6">
                        <div class="section__title mb-55">
                            <span>Complete Project</span>
                            <h2 class="wow animate__animated animate__fadeInUp" data.wow.duration="3s" data.wow.delay=".6s">Creative work.</h2>
                        </div>
                    </div>

                    <div class="col-md-6 d-flex align-items-center justify-content-end gap-sm-0">
                        <div class="masonry__btn  mb-sm-4 mb-md-0">
                            ${ui_projectMasonry()}
                        </div>
                    </div>
                </div>
                <div class="row  grid">
                   ${ui_projectDB(6)}
                </div>
                <div class="row justify-content-center text-center">
                    <a href="./project.html" class="btn btn-secondary" data-width="15rem">More</a>
                </div>
            </div>
        </section>
    `;
}

function ui_cta(){
    return `
        <section class="cta__area mt-50">
            <div class="container">
                <div class="cta_content icon-dot">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="cta_title">
                                <span>Any Project</span>
                                <h2>Any Project On Your Mind.</h2>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex justify-content-center">
                            <div class="cta_btn">
                                <a href="tel:${ui_number}" class="btn btn-primary">Call Me</a>
                                <a href="mailto:${ui_email}" class="btn btn-primary">Give a Mail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function ui_experience(){
    return `
        <section class="experience__area bg__light pt-100 pb-100 mt-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="section__title text-center mb-50">
                        <span>Experience</span>
                        <h2 class="wow animate__animated animate__fadeInUp" data.wow.duration="3s" data.wow.delay=".6s">Marketplace</h2>
                    </div>
                </div>

                <div class="row">
                    ${ui_experienceContent()}
                </div>

            </div>
        </section>
    `;
}

function ui_myQualification(){
    return `
        <section class="education__area pt-50 pb-100 mt-50">
            <div class="container">
                <div class="section__title">
                    <span>My Qualification</span>
                    <h2 class="wow animate__animated animate__fadeInUp" data.wow.duration="3s" data.wow.delay=".6s">Education & Internship</h2>
                </div>
                <div class="row ps-4">
                    <div class="col-md-10 col-lg-10 col-xl-5">
                        ${ui_qualificationContent()}
                    </div>
                    <div class="col-md-10 col-lg-7">
                        <div class="education_img position-relative">
                            <div class="education_img_one ps-5">
                                <img src="${education_img_1}" alt="..." class="img-fluid">
                            </div>
                            <div class="education_img_two">
                                <img src="${education_img_2}" alt="..." class="img-fluid">
                                <span><i class="fa-duotone fa-check"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    `;
}

function ui_counter(){
    return `
        <section class="counter__area bg__light pt-60 pb-60 mt-100">
            <div class="container">
                <div class="row row-gap-4">
                    ${ui_counterNumber()}
                </div>
            </div>
        </section>
    `;
}

function ui_testimonialsDiv() {
    return `
      <section class="testimonials_area pt-50 pb-50 mt-50">
        <div class="container">
            <div class="section__title">
                <span>Testimonials</span>
                <h2 class="wow animate__animated animate__fadeInUp" data.wow.duration="3s" data.wow.delay=".6s">Sweet Comment</h2>
            </div>
            <div class="row">
                <div class="col-xl-12 _overflow-hidden">
                    ${get_testimonial()}
                </div>
            </div>
        </div>
      </section>
    `;
}

// meta function
function ui_meta() {
    return `
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@_suhag10.github.io/portfolio/">
        <meta name="twitter:type" content="portfolio">
        <meta name="twitter:author" content="@SuhagAhmed">
        <meta name="twitter:title" content="Hey, I'm Suhag Ahmed. web developer">
        <meta name="twitter:url" content="${url}">
        <meta name="twitter:description" content="hi, my name is Suhag Ahmed. I'm a web developer with ${experience} years of experience, My focus on website quality.">
        <meta name="twitter:image" content="https://suhag10.github.io/portfolio/assets/images/skill/skill-1.jpg"></meta>

        <meta name="Keywords" content="HTML, CSS, SQL, JavaScript, How to, PHP, Java, jQuery, Bootstrap, WordPress, MySQL, Icons, NodeJS, React, Graphics, AI, Git, Data Science, Tutorials, Programming, Web Development, Training, Learning, Quiz, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Portfolio, Landing page, Website">
        
        <meta property="og:title"  content="Hey, I'm Suhag Ahmed. web developer">
        <meta property="og:locale" content="en_US" />
        <meta property="og:type"   content="portfolio">
        <meta property="og:url"    content="${url}">
        <meta property="og:image"  content="https://suhag10.github.io/portfolio/assets/images/skill/skill-1.jpg">
        <link rel="canonical" href="${url}" />
        <meta name="theme-color"   content="#fafafa">
    `;
}

// kick-off
ui_head(`Portfolio ${ui_dash} Suhag Ahmed`, ui_meta());
document.body.innerHTML = `
    ${get_header()}
    <main>
        ${ui_hero()}
        ${ui_aboutMe()}
        ${ui_mySkillset()}
        ${ui_completeProject()}
        ${ui_cta()}
        ${ui_experience()}
        ${ui_myQualification()}
        ${ui_counter()}
        ${ui_testimonialsDiv()}
    </main>
    ${get_footer()} 
`;
