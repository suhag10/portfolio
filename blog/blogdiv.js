/*
 * blog Page 
 * 
*/
const blogDiv = document.getElementById('blog');
blogDiv.innerHTML = uiHeaderArea();
blogDiv.innerHTML += uiblogPage();
blogDiv.innerHTML += uiFooterDiv();

function uiblogPage() {
    return `
        <section class="page__title page-title__height fix p__relative">
            <div class="page-title__shape">
                <img class="page-title__dot-4" src="./assets/img/shape/dot-4.png" alt="image">
                <img class="page-title__dot" src="./assets/img/shape/dot.png" alt="image">
                <img class="page-title__dot-2" src="./assets/img/shape/dot-2.png" alt="image">
                <img class="page-title__dot-3" src="./assets/img/shape/dot-3.png" alt="image">
                <img class="page-title__plus" src="./assets/img/shape/plus.png" alt="image">
                <img class="page-title__triangle" src="./assets/img/shape/triangle.png" alt="image">
                <img class="page-title__circle" src="./assets/img/shape/hero-circle-2.png" alt="circle">
            </div>
            <div class="circle__animation">
                <span class="shape__circle-1"></span>
                <span class="shape__circle-2"></span>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="page__title  text-center">
                            <h3>Blog</h3>
                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb  justify-content-center">
                                    <li class="breadcrumb-item"><a href="./">Home</a></li>
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
                <div id="singleBlog" class="row justify-content-center"></div>
            </div>
        </section>
    `;
}