// home_page img
function uiHomePageDiv() {
    
return `
    <section id="hero" class="hero__area p__relative">
        <div class="page-title__shape">
            <img class="page-title__dot-4" src="./assets/img/shape/dot-4.png" alt="image">
            <img class="page-title__dot" src="./assets/img/shape/dot.png" alt="image">
            <img class="page-title__circle z-3" src="./assets/img/shape/hero-circle-2.png" alt="circle">
        </div>
        <div class="hero__active">
            <div class="single__hero">
                <div class="container-fluid">
                    <div class="row align-items-center ">

                        <div class="col-xl-6">
                            <div class="hero__content pt-100 pl-50">
                                <span class="hi p__relative"></span>
                                <h2 class="animate__animated  animate__flipInX">I'm a <span class="hero__dot"></span><br> web developer</h2>
                                <div class="hero__sub-title">
                                    <h4>https://www.<span class="auto_type"></span></h4>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-6">
                            <div class="hero__img w-50 pt-100 mx-auto p__relative">
                                <img src="./assets/img/hero/hero.png" alt="" class="img-fluid  animate__animated animate__zoomInDown">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about_area mt-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-6">
                    <div class="section_title">
                        <span>About Me</span>
                        <h2>Hi, my name is<br>Suhag Ahmed.<br>I'm a web developer,<br>My focus on website quality.</h2>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="about_text pt-70">
                        <p>                
                            I&apos;m a web developer with ${experience} years of experience. 
                            My gig is especially for <b>WordPress E-commerce Websites.</b> 
                            I will do properly WordPress E-commerce Website of your product and other websites.
                        </p>
                        <h6>I am expert in</h6>
                        <div class="about_expert">
                            <ul>
                                <li>PSD to HTML.</li>
                                <li>Figma to HTML.</li>
                                <li>Website to HTML.</li>
                                <li>HTML & CSS Coding.</li>
                                <li>jQuery Framework.</li>
                                <li>HTML and CSS Bug Fix.</li>
                                <li>Responsive to all Devices.</li>
                                <li>Bootstrap Framework.</li>
                                <li>Domain & web hosting.</li>
                            </ul>
                            <ul>
                                <li>PSD, Figma, Website to WordPress.</li>
                                <li>WordPress customization.</li>
                                <li>WordPress Theme plugin.</li>
                                <li>WordPress Addons plugin.</li>
                                <li>WordPress Blog website.</li>
                                <li>WordPress Theme customization.</li>
                                <li>WordPress Theme Development.</li>
                                <li>WordPress WooCommerce-customization.</li>
                                <li><b>WordPress E-commerce Website.</b></li>
                                <li>WordPress Bug Fix.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="skill_area gray__bg pt-100 pb-100 mt-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 pe-5">
                    <div class="skill_img">
                        <img src="${skills_1}" alt="..." class="img-fluid">
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="section_title mt-xl-0 mt-lg-5 mt-sm-5 mt-xl-0">
                        <span>My Skillset</span>
                        <h2>I specialize In Building web development</h2>
                    </div>
                    <div class="progess_wrapper">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="single_skill">
                                    <div class="skill_title">
                                        <h4>HTML5 &amp; CSS3</h4>
                                    </div>
                                    <div class="skill_body mt-10">
                                        <div class="skill_text">
                                            <h3>95%</h3>
                                            <span>100%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar wow slideInLeft" data.wow.duration="1s" data.wow.delay="0.6s" role="progressbar" style="width: 95%; visibility: visible; animation-name: slideInLeft;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single_skill">
                                    <div class="skill_title">
                                        <h4>Bootstrap 5</h4>
                                    </div>
                                    <div class="skill_body mt-10">
                                        <div class="skill_text">
                                            <h3>95%</h3>
                                            <span>100%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar wow slideInLeft" data.wow.duration="1s" data.wow.delay="0.6s" role="progressbar" style="width: 95%; visibility: visible; animation-name: slideInLeft;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single_skill">
                                    <div class="skill_title">
                                        <h4>SASS</h4>
                                    </div>
                                    <div class="skill_body mt-10">
                                        <div class="skill_text">
                                            <h3>60%</h3>
                                            <span>100%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar wow slideInLeft" data.wow.duration="1s" data.wow.delay="0.6s" role="progressbar" style="width: 60%; visibility: visible; animation-name: slideInLeft;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single_skill">
                                    <div class="skill_title">
                                        <h4>JavaScript</h4>
                                    </div>
                                    <div class="skill_body mt-10">
                                        <div class="skill_text">
                                            <h3>50%</h3>
                                            <span>100%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar wow slideInLeft" data.wow.duration="1s" data.wow.delay="0.6s" role="progressbar" style="width: 50%; visibility: visible; animation-name: slideInLeft;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single_skill">
                                    <div class="skill_title">
                                        <h4>PSD to HTML5</h4>
                                    </div>
                                    <div class="skill_body mt-10">
                                        <div class="skill_text">
                                            <h3>95%</h3>
                                            <span>100%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar wow slideInLeft" data.wow.duration="1s" data.wow.delay="0.6s" role="progressbar" style="width: 95%; visibility: visible; animation-name: slideInLeft;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single_skill">
                                    <div class="skill_title">
                                        <h4>WordPress</h4>
                                    </div>
                                    <div class="skill_body mt-10">
                                        <div class="skill_text">
                                            <h3>95%</h3>
                                            <span>100%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar wow slideInLeft" data.wow.duration="1s" data.wow.delay="0.6s" role="progressbar" style="width: 95%; visibility: visible; animation-name: slideInLeft;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single_skill">
                                    <div class="skill_title">
                                        <h4>WordPress Theme Development</h4>
                                    </div>
                                    <div class="skill_body mt-10">
                                        <div class="skill_text">
                                            <h3>90%</h3>
                                            <span>100%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar wow slideInLeft" data.wow.duration="1s" data.wow.delay="0.6s" role="progressbar" style="width: 90%; visibility: visible; animation-name: slideInLeft;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single_skill">
                                    <div class="skill_title">
                                        <h4>Mailchimp</h4>
                                    </div>
                                    <div class="skill_body mt-10">
                                        <div class="skill_text">
                                            <h3>90%</h3>
                                            <span>100%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar wow slideInLeft" data.wow.duration="1s" data.wow.delay="0.6s" role="progressbar" style="width: 90%; visibility: visible; animation-name: slideInLeft;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single_skill">
                                    <div class="skill_title">
                                        <h4>Domain & hosting</h4>
                                    </div>
                                    <div class="skill_body mt-10">
                                        <div class="skill_text">
                                            <h3>96%</h3>
                                            <span>100%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar wow slideInLeft" data.wow.duration="1s" data.wow.delay="0.6s" role="progressbar" style="width: 96%; visibility: visible; animation-name: slideInLeft;" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="portfolio" class="pt-120 pb-120   __d-none">
        <div class="container">
            <div class="row">

                <div class="col-xl-6">
                    <div class="section_title mb-55">
                        <span>Complete Project</span>
                        <h2 class="wow fadeInLeft" data.wow.duration="3s" data.wow.delay=".6s">Creative work.</h2>
                    </div>
                </div>

                <div class="col-xl-6 d-flex align-items-center justify-content-end gap-sm-0">
                    <div class="my__masonry mb-sm-4 mb-md-0">
                        <div class="button__group btn-group text-center">
                            <button data-filter="*" class="active">All works</button>
                            <button data-filter=".cat1">HTML & CSS</button>          
                            <button data-filter=".cat2">JavaScript</button>
                            <button data-filter=".cat3">Design Inspiration</button>           
                            <button data-filter=".cat4">Web Design</button>         
                        </div>
                    </div>
                </div>

            </div>

            <div class="row grid">
                <div class="col-xl-4 grid-item cat3">
                    <div class="portfolio__item mb-30">
                        <img src="./assets/img/portfolio/portfolio-3.png" alt="..." class="img-fluid">
                        <div class="portfolio__text">
                            <span>Design Inspiration</span>
                            <h2><a target="_blank" href="https://suhag10.github.io/bangladesh-visit/">Bangladesh Visit</h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 grid-item cat1">
                    <div class="portfolio__item mb-30">
                        <img src="./assets/img/portfolio/portfolio-1.png" alt="..." class="img-fluid">
                        <div class="portfolio__text">
                            <span>HTML & CSS</span>
                            <h2><a target="_blank" href="https://suhag10.github.io/16D-victory-day-bd-project/">Victory day</h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 grid-item cat4">
                    <div class="portfolio__item mb-30">
                        <img src="./assets/img/portfolio/portfolio-4.png" alt="..." class="img-fluid">
                        <div class="portfolio__text">
                            <span>Web Design</span>
                            <h2><a target="_blank" href="https://suhag10.github.io/digital-marketplace/">Digital Marketplace</a></h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 grid-item cat4">
                    <div class="portfolio__item mb-30">
                        <img src="./assets/img/portfolio/portfolio-4.png" alt="..." class="img-fluid">
                        <div class="portfolio__text">
                            <span>Web Design</span>
                            <h2><a target="_blank" href="https://suhag10.github.io/hobi-personal-portfolio/">Hobi Personal Portfolio</a></h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 grid-item cat2">
                    <div class="portfolio__item mb-30">
                        <img src="./assets/img/portfolio/portfolio-2.png" alt="..." class="img-fluid">
                        <div class="portfolio__text">
                            <span>JavaScript</span>
                            <h2><a target="_blank" href="https://suhag10.github.io/project-video-player-js/">Video Player</a></h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 grid-item cat4">
                    <div class="portfolio__item mb-30">
                        <img src="./assets/img/portfolio/portfolio-4.png" alt="..." class="img-fluid">
                        <div class="portfolio__text">
                            <span>Web Design</span>
                            <h2><a target="_blank" href="https://suhag10.github.io/project-xisen/">Project Xisen</a></h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 grid-item cat4">
                    <div class="portfolio__item mb-30">
                        <img src="./assets/img/portfolio/portfolio-4.png" alt="..." class="img-fluid">
                        <div class="portfolio__text">
                            <span>Web Design</span>
                            <h2><a target="_blank" href="https://suhag10.github.io/project-bemax/">Project Bemax</a></h2>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 grid-item cat4">
                    <div class="portfolio__item mb-30">
                        <img src="./assets/img/portfolio/portfolio-4.png" alt="..." class="img-fluid">
                        <div class="portfolio__text">
                            <span>Web Design</span>
                            <h2><a target="_blank" href="https://suhag10.github.io/project-nubis/">Project Nubis</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="cta_area mt-100">
        <div class="container">
            <div class="any_project icon-dot">
                <div class="row align-items-center">
                    <div class="col-xl-6">
                        <div class="any_project_title">
                            <span>Any Project</span>
                            <h2>Any Project On Your Mind.</h2>
                        </div>
                    </div>
                    <div class="col-xl-6 d-flex justify-content-center">
                        <div class="any_project_btn">
                            <a href="tel:${ui_number}" class="theme_btn cta_btn-one">Call Me</a>
                            <a href="mailto:${ui_email}" class="theme_btn cta_btn-two">Give a Mail</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="experience_area gray__bg pt-100 pb-100 mt-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="section_title text-center mb-50">
                    <span>Experience</span>
                    <h2>Marketplace</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4">
                    <div class="single_experience">
                        <div class="experience_content">
                            <i class="fa-solid fa-briefcase"></i>
                            <div class="experience_title ml-20">
                                <span><a href="${link[0].link}" target="_blank">Fiverr.com [2021]</a></span>
                                <h3><a href="${link[0].link}" target="_blank">Web Development</a></h3>
                            </div>
                        </div>
                        <p class="d-none">Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4">
                    <div class="single_experience">
                        <div class="experience_content">
                        <i class="fa-solid fa-briefcase"></i>
                            <div class="experience_title ml-20">
                                <span><a href="#">Fiverr.com [2017]</a></span>
                                <h3><a href="#">Graphic Designer</a></h3>
                            </div>
                        </div>
                        <p class="d-none">Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4">
                    <div class="single_experience">
                        <div class="experience_content">
                            <i class="fa-solid fa-briefcase"></i>
                            <div class="experience_title ml-20">
                                <span><a href="#">Freelancer.com [2017]</a></span>
                                <h3><a href="#">Graphic Designer</a></h3>
                            </div>
                        </div>
                        <p class="d-none">Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="education_area pt-50 pb-150 mt-50">
        <div class="container">
            <div class="section_title">
                <span>My Qualification</span>
                <h2>Education</h2>
            </div>
            <div class="row ps-4">
                <div class="col-xl-5 col-lg-5">
                      <div class="timeline_wrapper">
                      	<!-- MC College -->
                        <div class="single_timeline d-none">
                            <div class="timeline_content">
                                <span>MC College, Sylhet. [2021]</span>
                                <h2>Bachelor of Social Science (BSS)</h2>
                                <p class="d-none">Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        <!-- MC College -->
                      	<div class="single_timeline">
                            <div class="timeline_content">
                                <span>Freelancerlab, Sylhet. [2022]</span>
                                <h2>Website Development</h2>
                                <p class="d-none">Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>

                        <div class="single_timeline">
                            <div class="timeline_content">
                                <span>MC College, Sylhet. [2021]</span>
                                <h2>Bachelor of Social Science (BSS)</h2>
                                <p class="d-none">Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div> 
                        
                        <div class="single_timeline">
                            <div class="timeline_content">
                                <span>MC College, Sylhet. [2017]</span>
                                <h2>Microsoft Office</h2>
                                <p class="d-none">Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>

                        <div class="single_timeline">
                            <div class="timeline_content">
                                <span>ICT Division, Ghasitula Alim Madrasha, Sylhet. [2017]</span>
                                <h2>LEDP Graphic Design</h2>
                                <p class="d-none">Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>

                        <div class="single_timeline">
                            <div class="timeline_content">
                                <span>National Youth Development Training Centre, Sylhet. [2016]</span>
                                <h2>Computer Hardware</h2>
                                <p class="d-none">Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        
                        <div class="single_timeline">
                            <div class="timeline_content">
                                <span>Shajalal City College, Sylhet. [2016]</span>
                                <h2>Higher Secondary (HSC)</h2>
                                <p class="d-none">Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                      	<div class="single_timeline">
                            <div class="timeline_content">
                                <span>Progoti High School, Sylhet. [2014]</span>
                                <h2>Secondary School (SSC)</h2>
                                <p class="d-none">Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        
                    </div><!-- timeline_wrapper end-->
                </div>
                <div class="col-xl-7 col-lg-7">
                    <div class="education_img">
                        <div class="education_img_one ps-5">
                            <img src="${education_1}" alt="..." class="img-fluid">
                        </div>
                        <div class="education_img_two">
                            <img src="${education_2}" alt="..." class="img-fluid">
                            <span><i class="fa-solid fa-check"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="counter_area gray__bg pt-60 pb-60 mt-100">
        <div class="container">
            <div class="row">
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div class="single_counter text-center">
                        <div class="counter_icon">
                            <i class="fa-solid fa-user-friends"></i>
                        </div>
                        <span class="counter">25</span>
                        <p>Happy Clients</p>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div class="single_counter text-center">
                        <div class="counter_icon">
                            <i class="fa-solid fa-rocket"></i>
                        </div>
                        <span class="counter">100</span><span>+</span>
                        <p>Project Done</p>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div class="single_counter text-center">
                        <div class="counter_icon">
                            <i class="fa-solid fa-coffee"></i>
                        </div>
                        <span class="counter">157</span>
                        <p>Cup of Tea</p>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div class="single_counter text-center">
                        <div class="counter_icon">
                            <i class="fa-solid fa-medal"></i>
                        </div>
                        <span class="counter">45</span>
                        <p>Awards</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

`;}
