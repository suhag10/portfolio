/*
 * blog Page 
 * 
*/
// single blog
const uiBlog = document.getElementById('singleBlog');
uiBlog.innerHTML = uiblogPage();

function uiblogPage(){
    return `
        ${singleBlogId_1()}
    `;
}

// single blog 
function singleBlogId_1() {
    return `
        <div class="col-xl-8">
            <div id="blog-id_1" class="single__blog-items p__relative">
                <div class="thumbnails">
                    <img src="./assets/img/blog/thumbnail.jpg" alt="...">
                </div>
                <div class="blog__content">
                    <div class="blog__metabox">
                        <div class="metabox__date">
                            <h5>12</h5>
                            <span>May</span>
                        </div>
                    </div>
                    <h3 class="blog__title mt-20 mb-0">Update Website v2.1.1</h3>
                    <div class="blog__text mt-10">
                        <h5 class="mb-0">Design with SCSS ● Class change ● Masonry.js ● typed.js ● ScrollUp.js ● JavaScript Array forLoop ● Dark Mode</h5>
                        
                        <div class="d-none">
                            <div class="article mt-15">
                                <h6>design with SCSS</h6>
                                <div class="pl-20">
                                    Design change CTA, Qualification, Counter, Blog title <br>
                                    <b class="d-block mt-15">SCSS Add</b>
                                    <div class="d-flex flex-wrap gap-5 list_style-disc">
                                        <ul class="pl-15">
                                            <li>top nav</li>
                                            <li>header</li>
                                            <li>hero</li>
                                            <li>about me</li>
                                            <li>skill</li>
                                            <li>Project</li>
                                        </ul>
                                        <ul>
                                            <li>cta</li>
                                            <li>experience</li>
                                            <li>counter</li>
                                            <li>testimonials</li>
                                            <li>blog</li>
                                            <li>footer</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="article mt-15">
                                <h6>Class change</h6>
                                <div class="pl-20">
                                    <p>CSS Class Change before class(-), after class(__)</p>
                                </div>
                            </div>
                            
                            <div class="article mt-15">
                                <h6>Masonry js</h6>
                                <div class="pl-20">
                                    <p>Add Project section</p>
                                </div>
                            </div>
                            
                            <div class="article mt-15">
                                <h6>typed js</h6>
                                <div class="pl-20">
                                    <p>Add hero section</p>
                                </div>
                            </div>
                            
                            <div class="article mt-15">
                                <h6>ScrollUp js</h6>
                                <div class="pl-20">
                                    <p>add all page</p>
                                </div>
                            </div>
                            
                            <div class="article mt-15">
                                <h6>JavaScript Array forLoop</h6>
                                <div class="pl-20">
                                    <p>add Testimonials section</p>
                                </div>
                            </div>
                            
                            <div class="article mt-15">
                                <h6>Dark Mode</h6>
                                <div class="pl-20">
                                    <p>add Dark Mode</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `;
}