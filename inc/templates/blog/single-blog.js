"use strict";
/**
 *  single blog 
 * 
**/

// const urlID = url.substring(51, url.length); // local href
const urlID = url.substring(56, url.length); // server href
const postID = urlID;

// db
const i     = postID;
const db    = db_blog[i-1];

function get_post(){
    let {id, title, subtitle, day, month, year, thumbnails, display, content} = db;
    let isElement, isSubtitle, isContent;

    if(!thumbnails){
        isElement = `
            <div class="thumbnails_box">
                <b class="thumbnails_text">BLOG</b>
            </div>
        `;
    }else {
        isElement = `<img src="./assets/images/blog/${thumbnails}" alt="..."></img>`
    }

    if(!content) {display = "off";}

    if(!subtitle) {
        isSubtitle = ``;
    }else {
        // isSubtitle = `<h5 class="mb-0 mt-30">${subtitle}</h5>`;
        isSubtitle = '';
    }
    
    switch(display) {
        case "on":
            isContent = content;
            break;
        case "off":
            isContent = ``;
            break;
        default:
            isContent = content;
            break;
    }
    
    if(!id) {
        return `
            <div class="col-md-8">
                <h2>Blog is Empty</h2>
                <a href="./blog.html">Back to Blog</a>
            </div>
        `;
    }else{
        return `
            <div class="col-md-8 mt-30">
                <div id="blog_${id}" class="single__blog-items  position-relative">
                    <div class="thumbnails">
                        ${isElement}
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
                        <h3 class="blog__title mt-10 mb-0">${title}</h3>
                        <div class="blog__text mt-30 mb-10">
                            ${isSubtitle}
                            ${isContent}
                        </div>
                    </div>
                </div>
            </div>       
        `;
    }
}

let arrayIcon = "url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;)";

function ui_single_post() {
    return `
        <section class="blog__area mt-50">
            <div class="container">
                <div class="row align-content-center justify-content-center">
                    <div class="col-md-8">
                        <nav style="--${prefix}-breadcrumb-divider: ${arrayIcon}" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
                                <li class="breadcrumb-item"><a href="./blog.html">Blog</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Single Blog</li>
                            </ol>
                        </nav>
                    </div>
                    ${get_post()}
                </div>
            </div>
        </section>
    `;
}

// meta function
function ui_meta() {

    let {title, thumbnails, subtitle} = db;

    let fname = postBy.split(" ")[0],
        lname = postBy.split(" ")[1],
        creatorPost = fname+lname;
    
    let metaType = 'article';

    if(!thumbnails){
        thumbnails = '';
    }else {
        thumbnails = `https://suhag10.github.io/portfolio/assets/images/blog/${thumbnails}`;
    }

    return `
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_suhag10.github.io/portfolio/" />
        <meta name="twitter:type" content="${metaType ?? "portfolio"}" />
        <meta name="twitter:creator" content="@${creatorPost}" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:url" content="${url}" />
        <meta name="twitter:description" content="${subtitle}" />
        <meta name="twitter:image" content="${thumbnails}"></meta>

        <meta name="Keywords" content="HTML, CSS, SQL, JavaScript, How to, PHP, Java, jQuery, Bootstrap, Colors, XML, MySQL, Icons, NodeJS, React, Graphics, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website">

        <meta property="og:title"  content="${title}" />
        <meta property="og:type"   content="${metaType ?? "portfolio"}" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url"    content="${url}" />
        <meta property="og:image"  content="${thumbnails}" />
        <link rel="canonical" href="${url}" />
        <meta name="theme-color"   content="#fafafa" />

        <style>
            @import url("https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.css");
            @import url("https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css");
            :not(pre)>code[class*=language-], pre[class*=language-]{background: var(--barakaUI-gray-900);}
            [data-ui-theme=dark] :not(pre)>code[class*=language-],[data-ui-theme=dark] pre[class*=language-]{background: var(--barakaUI-gray-800);}
        </style>
    `;
}

// kick-off
ui_head(db.title, ui_meta());
document.body.innerHTML = `
    ${get_header()}
    <main>
        ${ui_single_post()}
    </main>
    ${get_footer()}
`;
