/*
 * Header Page 
 * 
*/
function uiHeaderArea() {
    return `
        <header id="header" class="header_area">
            <div class="top__header">
                <div class="container">
                    <div class="row py-1 align-items-center justify-content-between">
                        <div class="col-xl-2">
                            <div class="any__question">
                                <p>Have any question?</p>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <ul class="top__header__link">
                                <li>
                                    <a href="mailto:${ui_email}">
                                        <i class="fa-solid fa-envelope"></i>
                                        <p>${ui_email}</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:${ui_number}">
                                        <i class="fa-solid fa-phone-alt"></i>
                                        <p>${ui_number}</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="menu-sticky" class="main__menu__bar blur py-3">
                <div class="container">
                <div class="row align-items-center">
                    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                        <div class="logo">

                            <a href="${home_url}" class="theme-img">
                                ${header_logo}
                            </a>

                        </div>
                    </div>
                    <div class="col-xxl-8 col-xl-8 col-lg-8 d-none d-lg-block text-center">
                        <div class="main-menu">
                            <nav id="mobile-menu">
                                ${navMenu()}
                            </nav>
                        </div>
                    </div>
                    
                    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                        <div class="header__right">
                            <div class="sidebar__menu">
                                <div class="sidebar__toggle__btn" id="sidebar-toggle">
                                    <i class="fa-solid fa-bars "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </header>

        <!-- Mobile sidebar area start -->
        <div class="sidebar__area">
            <div class="sidebar__wrapper">
                <div class="sidebar__close">
                    <button class="sidebar__close-btn" id="sidebar__close-btn">
                    <span><i class="fa-solid fa-times"></i></span>
                    <span>close</span>
                    </button>
                </div>
                <div class="sidebar__content">
                    <div class="logo mt-10 mb-40">

                        <a href="${home_url}" class="theme-img-50">
                            ${header_logo}
                        </a>

                    </div>

                    <div class="mobile-menu">
                        <div class="main-menu d-block d-lg-none">
                            <nav id="mobile-menu" class="sidebar__navMenu">
                                ${navMenu()}
                            </nav>
                        </div>
                    </div>

                    <div class="mt-sm-5 mb-sm-5 pb-sm-5 pt-sm-5    mt-md-0 mb-md-0 pb-md-0 pt-md-0"></div>

                    <div class="mt-5">
                        <div class="col-auto mb-3">
                            <div class="setting-panel-item border rounded p-3">
                                <h5 class="text-secondary">Color Scheme</h5>
                                <div class="row">
                                    <div class="col-6 px-0">
                                        <a id="lightModeBtn"  class="theme_switch  border rounded bg-light text-secondary text-decoration-none"   onclick="lightMode(this)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                            </svg>
                                            Light
                                        </a>
                                    </div>
                                    <div class="col-6 px-0">
                                        <a id="darkModeBtn"  class="theme_switch  border rounded bg-dark text-secondary text-decoration-none"   onclick="darkMode(this)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                                            </svg>
                                            Dark
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar__social_link mt-5">
                        ${socialLink()}
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- sidebar area end -->      
        <div class="body-overlay"></div>
        <!-- sidebar area end -->

    `;
}