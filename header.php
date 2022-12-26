<?php include "inc/function.php"; ?>
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protfolio</title>
    <?php ui_head();?>
</head>
<body>
    
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
                                <a href="mailto:<?php echo $ui_email; ?>">
                                    <i class="fa-solid fa-envelope"></i>
                                    <p><?php echo $ui_email; ?></p>
                                </a>
                            </li>
                            <li>
                                <a href="tel:<?php echo $ui_number; ?>">
                                    <i class="fa-solid fa-phone-alt"></i>
                                    <p><?php echo $ui_number; ?></p>
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

                        <a href="<?php echo $home_url; ?>" class="theme-img">
                            <img src="<?php echo $header_logo; ?>" alt="Logo">
                        </a>

                     </div>
                  </div>
                  <div class="col-xxl-8 col-xl-8 col-lg-8 d-none d-lg-block text-center">
                     <div class="main-menu">
                        <nav id="mobile-menu">

                            <ul id="nav_menu">
                                <?php foreach($nav_link as $i => $i_value) { ?>
                                    <li class="<?php echo $i;?>">
                                        <a href="<?php echo $i_value;?>">
                                            <?php echo $i;?>
                                        </a>
                                    </li>
                                <?php } ?> 
                            </ul>

                        </nav>
                     </div>
                  </div>
                  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                     <div class="header__right">
                        <div class="sidebar__menu d-lg-none">
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
    <!-- header area end -->

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

                    <a href="<?php echo $home_url; ?>">
                        <img src="<?php echo $header_logo;?>" alt="Logo" class="img-fluid w-50">
                    </a>

                </div>
                <div class="mobile-menu"></div>
            </div>
        </div>
    </div>
    <!-- sidebar area end -->      
    <div class="body-overlay"></div>
    <!-- sidebar area end -->

    <main id="main_content_area" class="page__content">


