"use strict";
/**
 *  Blog Page 
 * 
**/

function ui_blog() {
    let db   = db_blog,
        text = "",
        isThumbnail;
    for (var i = db.length - 1; i >= 0; i--) {
        let {id, title, day, month, year, thumbnails} = db[i];

        if(!thumbnails) {
            isThumbnail = `
                <div class="thumbnails_box">
                    <b class="thumbnails_text">BLOG</b>
                </div>
            `;
        }else {
            isThumbnail = `<img src="./assets/images/blog/${thumbnails}" alt="..."></img>`
        }
        
        text += `
            <div class="col-md-8">
                <div id="blog_${id}" class="single__blog-items  position-relative">
                    <div class="thumbnails">
                        <a href="./single-blog.html?id=${id}">
                            ${isThumbnail}
                        </a>
                    </div>
                    <div class="blog__content">
                        <div class="blog__metabox">
                            <div class="metabox__date">
                                <h5>${day}</h5>
                                <span>${month}</span>
                            </div>
                        </div>
                        <div class="mt-10">
                            <span><i class="fa-duotone fa-user me-2"></i>${postBy}</span>
                            &nbsp;&nbsp;
                            <span><i class="fa-duotone fa-calendar-days me-2"></i>${day+"-"+month+"-"+year}</span>
                        </div>
                        <h3 class="blog__title mt-10 mb-10">
                            <a href="./single-blog.html?id=${id}">${title}</a>
                        </h3>
                    </div>
                </div>
            </div>
        `;
    }
    return text;
}

function ui_blogDiv() {
    return `
        <section class="page__title page-title__height  overflow-hidden position-relative">
            <div class="page-title__shape">
                <img class="page-title__dot-4" src="./assets/images/shape/dot-4.png" alt="image">
                <img class="page-title__dot" src="./assets/images/shape/dot.png" alt="image">
                <img class="page-title__dot-2" src="./assets/images/shape/dot-2.png" alt="image">
                <img class="page-title__dot-3" src="./assets/images/shape/dot-3.png" alt="image">
                <img class="page-title__plus" src="./assets/images/shape/plus.png" alt="image">
                <img class="page-title__triangle" src="./assets/images/shape/triangle.png" alt="image">
                <img class="page-title__circle" src="./assets/images/shape/hero-circle-2.png" alt="circle">
            </div>
            <div class="circle__animation">
                <span class="shape__circle-1"></span>
                <span class="shape__circle-2"></span>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page__title  text-center">
                            <h3>Blog</h3>
                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb  justify-content-center">
                                    <li class="breadcrumb-item"><a href="./index.html ">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Blog</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="blog__area mt-100">
            <div class="container">
                <div id="single__blog" class="single__blog row justify-content-center">
                    ${ui_blog()}
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
        <meta name="twitter:type" content="article">
        <meta name="twitter:author" content="@SuhagAhmed">
        <meta name="twitter:title" content="Learn HTML, CSS, JavaScript, PHP, MySQL, SQL, WordPress, Tips">
        <meta name="twitter:url" content="${url}">
        <meta name="twitter:description" content="how to use HTML, CSS, JavaScript, React, PHP, MySQL, SQL, WordPress, Bootstrap, Java, XML and more.">
        <meta name="twitter:image" content=""></meta>

        <meta name="Keywords" content="HTML, CSS, SQL, JavaScript, How to, PHP, Java, jQuery, Bootstrap, WordPress, Colors, XML, MySQL, Icons, NodeJS, React, Graphics, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website">

        <meta property="og:title"  content="Learn HTML, CSS, JavaScript, PHP, MySQL, WordPress">
        <meta property="og:type"   content="article">
        <meta property="og:locale" content="en_US" />
        <meta property="og:url"    content="${url}">
        <meta property="og:image"  content="">
        <link rel="canonical" href="${url}" />
        <meta name="theme-color"   content="#fafafa">
    `;
}

// kick-off
ui_head('Blog', ui_meta());
document.body.innerHTML = `
    ${get_header()}
    <main>
        ${ui_blogDiv()}
    </main>
    ${get_footer()}  
`;
