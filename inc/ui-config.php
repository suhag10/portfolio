<?php

    /*
        Theme Name: Baraka_Theme
        Author: Suhag Ahmed
        Support: hellosuhag140@gmail.com
        Version: 2.1.0
        creation: 2022-Jul
        Update: 2022-12-26
    */
    
    // Variables-----------------------------Start-->
    $version           = '2.1.0';
    $UI_BARAKA_VERSION = $version;
    $UI_BARAKA_FILE    = './';
    // $UI_BARAKA_PATH    = $DIR;
    $UI_BARAKA_URL     = $UI_BARAKA_FILE;
    $UI_BARAKA_ASSETS  = 'assets';
    // Variables-----------------------------End<--
    

    // top header-------------------------
    $ui_plus   = '+';
    $ui_number = $ui_plus . 88013112519250;
    $ui_email  = "hellosuhag140@gmail.com";

    // header-----------------------------
    // -----------------------------------
    $header_logo = $UI_BARAKA_ASSETS . '/img/logo/logo.png';

    // Menu and URL--------------------------------
    $home_url = $UI_BARAKA_URL;
    $nav_link = array(
        "home"    => $UI_BARAKA_URL,
        "about"   => $home_url . "#about",
        "skills"  => $home_url . "#skills",
        "project" => $home_url . "#portfolio",
        "blog"    => "blog.php",
        // "contact" => $home_url . "#contact"
    );

    
    
    // footer-----------------------------
    // -----------------------------------
    $footer_logo = $UI_BARAKA_ASSETS . '/img/logo/footer-logo.png';
    $social_link = array(
        "fiverr"		=> "https://www.fiverr.com/users/suhag94",
        "linkedin"		=> "https://www.linkedin.com/in/suhag11/",
        "twitter"		=> "https://twitter.com/suhaga11",
        "instagram"		=> "https://www.instagram.com/suhaga11/",
        "facebook"		=> "https://www.facebook.com/suhaga11/",
        "github"		=> "https://github.com/suhag10",
        "youtube"		=> "https://www.youtube.com/@suhag10"
    );
    // echo $social_link['fiverr'];

    $footer_title     = "I'm a Junior web developer with 2 years of experience.";
    $footer_copyright = "&copy; 2022 — " . date('Y') . " ◇ " . "All Rights Reserved.";

