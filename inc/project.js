"use strict";

function ui_completeProject(){
    return `
        <section class="project__area pt-120 pb-120">
            <div class="container">
                <div class="row">

                    <div class="col-md-12 text-center">
                        <div class="section__title mb-55">
                            <span>Complete Project</span>
                            <h2 class="wow animate__animated animate__fadeInUp" data.wow.duration="3s" data.wow.delay=".6s">Creative work.</h2>
                        </div>
                    </div>

                    <div class="col-md-12 d-flex align-items-center justify-content-center gap-sm-0 mb-40">
                        <div class="masonry__btn mb-sm-4 mb-md-0">
                            ${ui_projectMasonry()}
                        </div>
                    </div>
                </div>
                <div class="row grid">
                   ${ui_projectDB()}
                </div>

            </div>
        </section>
    `;
}

// kick-off
ui_head('Project | Portfolio');
const appDiv = document.body;
appDiv.innerHTML = `
    ${get_header()}
    <main>
        ${ui_completeProject()}
    </main>
    ${get_footer()}
`;
