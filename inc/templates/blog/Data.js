"use strict";

const postBy = "Suhag Ahmed";
const db_blog = [
    {
        id: 1,
        day: 12,
        month: "May",
        year: 2023,
        title: "Update Website v1.0.0",
        subtitle: "Design with SCSS &#9679; Class change &#9679; Masonry.js &#9679; typed.js &#9679; ScrollUp.js &#9679; JavaScript Array forLoop &#9679; Dark Mode",
        thumbnails: "",
        display: "on",
        content: `
            <ul class="mb-0 mt-30">
                <li> &#9679; design with sass</li>
                <li> &#9679; add Sidebar</li>
                <li> &#9679; add Masonry.js</li>
                <li> &#9679; add Typed.js</li>
                <li> &#9679; add ScrollUp.js</li>
                <li> &#9679; add Dark Mode</li>
            </ul>
            
            <div hidden>
                <div class="article mt-15">
                    <h6>design with SCSS</h6>
                    <div class="pl-20">
                        Design change CTA, Qualification, Counter, Blog title <br>
                        <b class="d-block mt-15">SCSS Add</b>
                        <div class="d-flex flex-wrap gap-5 list-style-disc">
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
        `
    },
    {
        id: 2,
        day: 17,
        month: "Jun",
        year: 2023,
        title: "Printf Function in PHP",
        subtitle: "Learn how to printf - Output a formatted string",
        thumbnails: "blog-2.png",
        display: "on",
        content: `

        <p>printf - Output a formatted string</p>
        <p>The arg1, arg2, ++ parameters will be inserted at percent (%) signs in the main string. This function works "step-by-step". At the first % sign, arg1 is inserted, at the second % sign, arg2 is inserted, etc.</p>
    
<pre class="language-php line-numbers code-toolbar"><code>// printf function in php
$integer = 11 + 5;
$float   = 9.95;
$string  = "The quick brown fox jumps over the lazy dog.";

printf("%s", $string);
printf("%d", $integer);
printf("%g", $float);
printf("%f", $float);

// The quick brown fox jumps over the lazy dog.
// 15
// 9.95
// 9.950000
</code></pre>

   `},
    {
        id: 3,
        day: 30,
        month: "July",
        year: 2023,
        title: "How To Hide Arrows From Input Number with CSS",
        subtitle: "Learn how to remove arrows/spinners from input type number with CSS.",
        thumbnails: "blog-3.png",
        display: "on",
        content: `
            <div class="mb-15">
                <p>Learn how to remove arrows/spinners from input type number with CSS.</p>
                <img src="./assets/images/blog/input-number-spin-button.png">
            </div>
            
            <div class="demo-from-id-3 mb-15">
                <div>
                    <label for="number"><b>Before</b></label>
                    <input class="demo-default" type="number" value="0">
                </div>
                <div>
                    <label for="number"><b>After</b></label>
                    <input class="demo-hidden" type="number" value="0" style="-moz-appearance: textfield">
                </div>
            </div>

<pre class="language-css line-numbers code-toolbar"><code>/* Chrome, Safari, Edge, Opera */
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none; 
    appearance: none;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</code></pre>

            <style>
                .demo-from-id-3{display: flex;gap: 12px;flex-wrap: wrap;}
                .demo-from-id-3 div{display: flex;flex-direction: column;}
                .demo-from-id-3 div input{height: 40px;font-size: 1rem;padding: 4px 8px;}

                .demo-from-id-3 div .demo-hidden::-webkit-inner-spin-button,
                .demo-from-id-3 div .demo-hidden::-webkit-outer-spin-button{
                    -webkit-appearance: none;
                    appearance: none;
                }
            </style>
   `},
    {
        id: 4,
        day: 6,
        month: "Aug",
        year: 2023,
        title: "Update Website v1.1.0",
        subtitle: "BarakaUI Theme Update v1.1.0",
        thumbnails: "blog-4.jpg",
        display: "",
        content: `
            <div>
                <h4 id="barakaui-theme">BarakaUI Theme</h4>
                <ul class="list-style-unset pl-20 mt-10">
                    <li>Theme Name: BarakaUI</li>
                    <li>Author: github.com/suhag10</li>
                    <li>Version: 1.1.0</li>
                    <li>Creation: 2022-Jul</li>
                    <li>Update: 2023-Aug-6</li>
                    <li>Writing code with Javascript!</li>
                </ul>

                <!-- <h5 >link</h5> -->
                <p class="mt-15">&#128279;  : 
                    <a href="https://www.linkedin.com/in/suhag11/" title="Linkedin">Linkedin</a> &#10625; 
                    <a href="https://twitter.com/suhag41" title="Twitter">Twitter</a> &#10625; 
                    <a href="https://github.com/suhag10" title="Github">Github</a>
                </p>

                <!-- <h5>code used</h5> -->
                <p>
                    <img src="https://img.shields.io/badge/HTML5-gray?logo=html5" alt="">
                    <img src="https://img.shields.io/badge/CSS3-gray?logo=css3" alt=""> 
                    <img src="https://img.shields.io/badge/SASS-gray?logo=sass" alt=""> 
                    <img src="https://img.shields.io/badge/Javascript-gray?logo=javascript" alt="">
                </p>

                <!-- <h5>Update info</h5> -->
                <p>
                    <img src="https://img.shields.io/badge/Creation-Jul%202022-green" alt="">
                    <img src="https://img.shields.io/badge/Update-Aug%202023-teal" alt="">
                    <img src="https://img.shields.io/badge/Version-v2.2.1-blue" alt="">
                </p>
            </div>
        `
    },
];
// code, kbd, pre, samp
