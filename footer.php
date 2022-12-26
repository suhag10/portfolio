</main> <!-- #main end -->

    <!-- footer -->
    <footer id="footer" class="footer_area mt-100">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mt-50">
                    <div class="footer_widget">

                        <div class="footer_widget_title">
                            <div class="footer_logo">
                                <div class="logo">
                                    <a href="<?php echo $home_url; ?>" class="w-img">
                                        <img src="<?php echo $footer_logo;?>" alt="..." style="width: 150px;">
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="footer_widget_content">
                            <div class="footer_widget_content">
                                <div class="footer__social__inline mt-35">
                                    <ul>                         
                                        <li><a target="_blank" href="<?php echo $social_link['fiverr'];?>"><i class="fa-solid far fa-briefcase"></i></a></li>
                                        <li><a target="_blank" href="<?php echo $social_link['linkedin'];?>"><i class="fab fa-linkedin"></i></a></li>
                                        <li><a target="_blank" href="<?php echo $social_link['twitter'];?>"><i class="fab fa-twitter"></i></a></li>
                                        <li><a target="_blank" href="<?php echo $social_link['instagram'];?>"><i class="fab fa-instagram"></i></a></li>
                                        <li><a target="_blank" href="<?php echo $social_link['facebook'];?>"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a target="_blank" href="<?php echo $social_link['github'];?>"><i class="fab fa-github"></i></a></li>
                                        <li><a target="_blank" href="<?php echo $social_link['youtube'];?>"><i class="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row mt-50">
                        <h3><?php echo $footer_title;?></h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="footer_widget mt-30">
                                <div class="footer_widget_title">
                                    <h6>SENT MAIL</h6>
                                </div>
                                <div class="footer_widget_content">
                                    <div class="footer_link">
                                        <ul>
                                            <li><a href="mailto:<?php echo $ui_email; ?>"><?php echo $ui_email; ?></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="footer_widget mt-30">
                                <div class="footer_widget_title">
                                    <h6>MAKE CALL</h6>
                                </div>
                                <div class="footer_widget_content">
                                    <div class="footer_link">
                                        <ul>
                                            <li><a href="tel:<?php echo $ui_number; ?>"><?php echo $ui_number; ?></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>

            <div class="row">
                <div class="copyright_content text-center mt-30 pt-10 pb-10">
                    <p><?php echo $footer_copyright ?></p>
                </div>
            </div>

        </div>
    </footer>

</body>
</html>

