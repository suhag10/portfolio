"use strict";
/*
 * Header Page 
 * 
*/

function get_header(){
    return `
        <header id="header" class="header__area">
            <div class="top__header">
                <div class="container">
                    <div class="row  align-items-center  justify-content-between  py-1">
                        <div class="col-md-3">
                            <div class="any_question">
                                <p>Have any question?</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ul class="top__header-link   d-flex justify-content-between flex-wrap mb-0">
                                <li>
                                    <a href="mailto:${ui_email}">
                                        <i class="fa-duotone fa-envelope"></i>
                                        <p>${ui_email}</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:${ui_number}">
                                        <i class="fa-duotone fa-phone"></i>
                                        <p>${ui_number}</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="menu_sticky" class="main__menu-bar  bg__secondary">
                <nav class="navbar">
                    <div class="container">
                        <div class="row  align-items-center  py-2">
                            
                            <div class="col-md-3">
                                <div class="logo">
                                    ${get_logo()}
                                </div>
                            </div>

                            <div class="col-md-9">
                                <nav id="nav_menu" class="d-flex align-items-center">
                                    <ul class="nav_menus me-auto mb-2 mb-lg-0">
                                        ${register_nav_menus()}
                                    </ul>
                                    <button class="sidebar__toggler-btn fa-duotone fa-bars"></button>
                                </nav>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
            
        </header>

        <!-- mobile-menu  -->
        <div class="sidebar__area" id="scrollbar">
            <div class="sidebar__wrapper">
                <div class="sidebar__header mt-10  d-flex align-items-center justify-content-between">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">${get_logo()}</h5>
                    <button type="button" class="sidebar__close-btn  fa-duotone fa-circle-xmark"></button>
                </div>
                
                <div class="sidebar__body mt-30">

                    <div class="sidebar__theme-switch">
                        <h3>Color Scheme</h3>
                        <button class="theme__switch  fa-duotone fa-moon-stars" id="themeSwitchButton"></button>
                        
                        <div class="theme-settings mt-20">
                            
                            <div id="buttonGroup" class="text-center">
                                <button class="theme-color-btn" type="button" value="00c684"></button>
                                <button class="theme-color-btn" type="button" value="008080"></button>
                                <button class="theme-color-btn" type="button" value="AB6C56"></button>
                                <button class="theme-color-btn" type="button" value="0d6efd"></button>
                                <button class="theme-color-btn" type="button" value="6610f2"></button>
                                <button class="theme-color-btn" type="button" value="d63384"></button>
                                <button class="theme-color-btn" type="button" value="fd7e14"></button>
                                <button class="theme-color-btn" type="button" value="198754"></button>
                                <button class="theme-color-btn" type="button" value="343a40"></button>
                                <button class="theme-color-btn" type="button" value="000000"></button>
                            </div>
                            
                            <div class="theme-color-input mt-20 d-none">
                                <h6>Choose Custom Color</h6>
                                <input type="color" id="color-setings-input" value="#00c684">
                            </div>

                        </div>
                    </div>

                    <nav id="nav_menu">
                        <ul class="nav_menus mobile-menu mt-30">
                            ${register_nav_menus()}
                        </ul>
                    </nav>

                    <div class="sidebar__social-media mt-50">
                        ${social_media()}
                    </div>

                </div>
            </div>
        </div>
    `;//end return
}
