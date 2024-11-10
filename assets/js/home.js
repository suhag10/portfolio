import { dataBlog } from "../../data/blog.js";
import { projects } from "../../data/projects.js";
import { testimonial } from "../../data/testimonial.js";

(function ($) {
    'use strict';

    // ==================================================
    // Hero
    $('#greetings').text('Hey, I\'m Suhag Ahmed');
    $('#workTitle').text(Author['workTitle']);
    $('#letsTalk').attr('href', socialMedia['linkedin']);
    $('#heroImage').attr('src', './assets/images/hero.png');

    // ==================================================
    // About
    $('#experienceYears').attr('data-purecounter-end', year - 2021).text(year - 2021);

    // ==================================================
    // Skill & Experiences

    // ==================================================
    // Qualification
    $("#education-btn").on("click", function () {
        $('.is-switch').removeClass('translate-x-[104px]');
        $('.is-education').removeClass('hidden overflow-hidden');
        $('.is-internship').addClass('hidden overflow-hidden');
    });

    $("#internship-btn").on("click", function () {
        $('.is-switch').addClass('translate-x-[104px]');
        $('.is-internship').removeClass('hidden overflow-hidden');
        $('.is-education').addClass('hidden overflow-hidden');
    });

    // ==================================================
    // Creative Work 

    // ==================================================
    // CTA
    $('#ctaNumber').attr('href', 'tel:'+Author['number']);
    $('#ctaEmail').attr('href', 'mailto:'+Author['email']);

    // ==================================================
    // Web Design
    $('#projects').each(function(){
        var element = '';
        for (const key in projects.reverse()) {

            if (!projects[key].image) {
                projects[key].image = url.origin + '/portfolio/assets/images/project/project-0.png';
            }

            element += `
                <div class="w-3/12 max-sm:w-full grid-item mt-25 ${projects[key].filter}">
                    <div class="portfolio_grid-item relative group overflow-hidden" data-fx="1" data-meta-tag="${projects[key].subtitle}" data-title="${projects[key].title}">
                        <a 
                            target="_blank" 
                            rel="noopener" 
                            href="${projects[key].url}" 
                            class="block h-330 bg-center bg-cover" 
                            style="background-image: url(&quot;${projects[key].image}&quot;);"
                        >
                        </a>
                    </div>
                </div>
            `;
        }

        $(this).html(element);
    });

    // ================================
    // Masonary grid
    var $grid = $('.masonary_grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        filter: '.allItem',
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
        }
    });

    // filter items on button click
    $('.masonary_menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // menu active class
    $('.masonary_menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // ========================================
    // Testimonial
    $('#testimonial').each(function(){
        var element = '';
        for (const key in testimonial) {
            element += `
                <div class="testimonial_item swiper-slide w-[366.5px] min-h-[254px] mb-35 pt-35 px-30 pb-40 bg-white dark:bg-gray-800 shadow hover:shadow-xl transition_all">
                    <div class="rating mb-20 text-base text-theme-6">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="content">
                        <p class="text-base mb-30 text-theme-7 dark:text-gray-300">${testimonial[key].content}</p>
                    </div>
                    <div class="flex items-center space-x-16 mt-20">
                        <img src="${url.origin}/portfolio/assets/images/testimonial/${testimonial[key].image}" alt="" class="flex-none w-50 h-50 rounded-full object-cover">
                        <div class="flex-auto">
                            <a href="${testimonial[key].url}" target="_blank" rel="noopener"><h3 class="text-base font-semibold text-theme-7 dark:text-white hover:text-primary dark:hover:text-primary">${testimonial[key].name}</h3></a>
                            <span class="text-sm text-theme-8 dark:text-gray-400">${testimonial[key].title}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        $(this).html(element);
    });

    // Testimonial slider active
    var slider = new Swiper('.testimonial_slider-active', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        // mousewheel: {
        //     invert: true,
        // },
        breakpoints: {
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
        },
    });

    // ==================================================
    // Blog
    $('#blog').addClass('hidden');
    $('#homePageBlog').each(function(){
        let element = '';
        let count   = 0;
        const reversedData = Object.entries(dataBlog).reverse();

        for (const [key, value] of reversedData) {

            if (key) {
                let {date, category, thumbnail, title} = value;

                if (!thumbnail) {
                    thumbnail = url.origin + '/portfolio/assets/images/blog/blog-1.jpg';
                }

                title = getTruncateText(title, 10, '...');

                element += (`
                    <div class="w-4/12 max-lg:w-6/12 max-sm:w-full mb-25">
                        <div class="blog_item bg-white dark:bg-gray-800 border dark:border-gray-700">
                            <div class="blog_thumb relative overflow-hidden group">
                                <a href="./single-blog.html?id=${key}">
                                    <img src="${thumbnail}" alt="" class="w-full group-hover:-rotate-3 group-hover:scale-110 transition_all">
                                </a>

                                <a href="#${category}" alt="" class="blog_tag absolute top-3.5 right-3.5 font-inter text-sm font-medium bg-white text-heading px-8 py-2 rounded-md">${category}</a>
                            </div>

                            <div class="blog_content">
                                <div class="blog_content-top p-30 max-md:px-10">
                                    <div class="blog_meta-date  flex items-center gap-5 mb-5 font-inter text-sm text-slate-600 dark:text-gray-400">
                                        <i class="fa-duotone fa-solid fa-calendar-days"></i>
                                        <span>${date}</span>
                                    </div>
                                    <h3 class="font-oswald text-2xl font-medium _mb-10 text-heading dark:hover:underline dark:text-gray-300 hover:text-primary"><a href="./single-blog.html?id=${key}">${title}</a></h3>
                                    <!-- <p class="font-inter text-15 text-slate-700">description...</p> -->
                                </div>

                                <div class="blog_content-bottom flex items-center justify-between py-14 px-30 max-md:px-10 border-t dark:border-gray-700">
                                    <div class="blog_meta-author flex items-center gap-10">
                                        <div class="blog_meta-author-thumb w-24 h-24">
                                            <img src="${Author['image']}" alt="" class="rounded-full">
                                        </div>
                                        <div class="blog_meta-author-content">
                                            <span class="font-inter text-sm font-medium text-slate-500">By<a class="ml-4 text-heading dark:text-gray-400 hover:text-primary">${Author['name']}</a></span>
                                        </div>
                                    </div>
                                    <div class="blog_meta -flex items-center gap-10 font-inter text-sm text-slate-700 dark:text-gray-400 hidden">
                                        <span><i class="fa-light fa-comment mr-5"></i>35</span>
                                        <span><i class="fa-light fa-eye mr-5"></i>234,5k</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
            }

            count++;
            if (count === 3) break;
        }

        $(this).html(element);
    });

    // ==================================================
    // Footer
    $('#footerWorkTitle').text(Author['workTitle']);
    $('#footerNumber').attr('href', 'tel:'+Author['number']).text(Author['number']);
    $('#footerEmail').attr('href', 'mailto:'+Author['email']).text(Author['email']);

})(jQuery);