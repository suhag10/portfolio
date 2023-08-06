/*
 * Footer Page 
 * 
*/

// get_footer
function get_footer(){
    return `
        <footer class="footer__area bg__secondary mt-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mt-50">
                        <div class="footer_widget">

                            <div class="footer_widget_title">
                                <div class="footer_logo">
                                    <div class="logo">
                                        ${get_logo()}
                                    </div>
                                </div>
                            </div>

                            <div class="footer_widget_content">
                                <div class="footer__social__inline mt-35">
                                    ${social_media()}
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row mt-50">
                            <h3>${footer_title}</h3>
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
                                                <li><a href="mailto:${ui_email}">${ui_email}</a></li>
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
                                                <li><a href="tel:${ui_number}">${ui_number}</a></li>
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
                        <p class="m-0">${footer_copyright}</p>
                    </div>
                </div>

            </div>
        </footer>
    `;
}
