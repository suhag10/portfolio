// JavaScript
(function ($) {
    'use strict';

    window.onload = function() {
        $("#loading").fadeOut(500);
        $('body').removeClass('overflow-y-hidden');
    }

    const HTML = $('html');
    const BODY = $('body');

    const sanitize = (input) => {
        const encodedCharacters = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;'
        }

        return input.replace(/[&<>"'/]/g, match => encodedCharacters[match]);
    };

    const storage = {
        get: (key, defaultValue = null) => {
            const value = localStorage.getItem(key);
            return (value ? value : defaultValue);
        },
        set: (key, value) => localStorage.setItem(key, sanitize(value)),
        remove: (key) => localStorage.removeItem(key),
        clear: () => localStorage.clear(),
    };

    jQuery.fn.toggleAttr = function(attr, val) {
        return this.each(function() {
            let $this = $(this);

            if ($this.attr(attr) === val) {
                $this.removeAttr(attr);
            } else {
                $this.attr(attr, val);
            }
        });
    };

    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // =======================
    // data - background color
    $("#themeGroup > button").each(function() {
        let color  = $(this).val();
        let filter = color.replace(/(#*)/g, '');

        $(this).css("background-color", '#' + filter);
    });

    // ========================
    // HEX to RGB Color Convert
    function hexToRgb(hex) {
        // Check if the hex value is valid
        if (!hex || typeof hex !== 'string') {
            console.error('Invalid hex value:', hex);
            return null;
        }

        // Ensure it starts with '#' and matches valid hex color patterns
        let match = hex.match(/^#(([\da-fA-F]{3}){1,2}|([\da-fA-F]{4}){1,2})$/);
        if (!match) {
            console.error('Invalid hex format:', hex);
            return null;
        }

        // Remove the '#'
        let filter = hex.replace(/^#/, '');
        var bigint = parseInt(filter, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return r + "," + g + "," + b;
    }

    // =================================
    // Initialize the main menu function
    $('#mainMenu').each(function() {
        var element = '';

        for (const key in mainMenu) {
            var submenuElement = '';

            if (mainMenu[key].submenu !== null) {
                submenuElement += `<ul class="submenu bg-secondary dark:bg-gray-800">`;
                for (const i in mainMenu[key].submenu) {
                    submenuElement += `<li><a class="bg-white dark:bg-slate-500 text-heading dark:text-white" href="${mainMenu[key].submenu[i].url}">${mainMenu[key].submenu[i].name}</a></li>`;
                }
                submenuElement += `</ul>`;
            }

            element += (
                `<li>
                    <a href="${mainMenu[key].url}"
                        class="block py-8 px-12 font-inter font-medium text-15 text-heading dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    >${mainMenu[key].name}</a>
                    ${submenuElement}
                </li>
            `);
        }

        $(this).html(element);
    });

    // =====================================
    // Initialize the choose themes function
    HTML.each(function() {
        var data = storage.get("data-theme");
        if (!data) data = '#008080';

        var setTheme = (`
            --theme-primary: ${data} !important;
            --theme-primary-rgb: ${hexToRgb(data)} !important;
        `);

        HTML.attr('style', setTheme.replace(/[\n|' ']/g, '').replace(/[","]/g, ' '));
        $("#themeCustomInput").val(data);
        $("#themeCustomLabel").css("background-color", data);
    });

    $("#themeGroup > button").on("click", function() {
        if (!$(this).val()) return null;

        var primary    = $(this).val();
        var primaryRgb = hexToRgb(primary);

        var setTheme = (`
            --theme-primary: ${primary} !important;
            --theme-primary-rgb: ${primaryRgb} !important;
        `);

        HTML.attr('style', setTheme.replace(/[\n|' ']/g, '').replace(/[","]/g, ' '));
        storage.set("data-theme", primary);
        $("#themeCustomInput").val(primary);
        $("#themeCustomLabel").css("background-color", primary);
    });

    $("#themeCustomInput").on("change", function() {
        if (!$(this).val()) return null;

        var primary    = $(this).val();
        var primaryRgb = hexToRgb(primary);

        var setTheme = (`
            --theme-primary: ${primary} !important;
            --theme-primary-rgb: ${primaryRgb} !important;
        `);

        HTML.attr('style', setTheme.replace(/[\n|' ']/g, '').replace(/[","]/g, ' '));
        storage.set("data-theme", primary);
        $("#themeCustomInput").val(primary);
        $("#themeCustomLabel").css("background-color", primary);
    });

    // =========================================
    // Initialize the get social media functions
    function getSocialMedia(id, isRounded = false) {
        $(id).each(function(){
            let element = '',
                rounded = '';

            if (isRounded === true) rounded = 'rounded-full';

            for (const link in socialMedia) {
                const change = {
                    'facebook': 'facebook-f',
                    'linkedin': 'linkedin-in',
                };

                const brandsName = link.replace(/facebook|linkedin/g, match => change[match]);
                element += `<a class="inline-block w-40 h-40 mr-4 mb-4 text-sm text-center text-slate-500 hover:!text-white hover:bg-primary leading-38 border border-slate-300 hover:!border-primary dark:border-slate-600 ${rounded} transition_all" target="_blank" rel="noopener" href="${socialMedia[link]}"><i class="fa-brands fa-${brandsName}"></i></a>`;
            }

            $(this).html(element);
        });
    }

    getSocialMedia('#socialMediaSidebar', true);
    getSocialMedia('#socialMedia');

    // =====================
    // mobile menu functions
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
        meanMenuOpen: ['<i class="fa-regular fa-plus text-[#03041C]"></i>'],
        meanMenuClose: ['<i class="fa-regular fa-plus rotate-45 text-[#03041C]"></i>'],
	});

    $("ul.submenu").each(function() {
        // $('a.meanmenu-reveal').trigger('click');
        $(this).parent('li').addClass('has-dropdown z-10');

        if (!$(this).next('a').hasClass('mean-expand')) {
            $(this).next('a').addClass('mean-expand');
        }
    });

    $(".main-menu").on('click', 'ul > li a', function(e) {
        $(".main-menu ul > li a[aria-current='page']").removeAttr('aria-current');
        $(this).attr('aria-current', 'page');

        if (!$(this).is('[aria-current="page"]')) {
            e.preventDefault();
        }
    });

    $(".mobile-menu nav").on('click', 'ul > li a', function(e) {
        $(".mobile-menu nav ul > li a[aria-current='page']").removeAttr('aria-current');
        $(this).attr('aria-current', 'page');

        if (!$(this).is('[aria-current="page"]')) {
            e.preventDefault();
        }
    });

    // ======================
    // sticky header function
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

    // ===============================
    // Initialize the sidebar function
    var body_overlay = $('.body-overlay');

    $(".navbar-open-btn").on("click", function () {
        $('#drawer-navigation').removeClass('translate-x-full');
        BODY.addClass('overflow-hidden');
        // show
        if (body_overlay.hasClass('hidden')) {
            body_overlay.removeClass('hidden');
        }
    });

    $(".navbar-close-btn").on("click", function () {
        $('#drawer-navigation').addClass('translate-x-full');
        BODY.removeClass('overflow-hidden');
        // hidden
        if (!body_overlay.hasClass('hidden')) {
            body_overlay.addClass('hidden');
        }
    });

    body_overlay.on("click", function () {
        $('#drawer-navigation').addClass('translate-x-full');
        BODY.removeClass('overflow-hidden');
        // hidden
        if (!body_overlay.hasClass('hidden')) {
            body_overlay.addClass('hidden');
        }
    });

    // =========================================
    // Initialize the light & dark mode function
    function lightMode() {
        HTML.removeAttr('data-theme-mode');

        $('#dark-btn-moon').removeClass('hidden').addClass('show');
        $('#dark-btn-sun').removeClass('show').addClass('hidden');
        storage.set('data-theme-mode', 'light');
    }

    function darkMode() {
        HTML.attr('data-theme-mode', 'dark');

        $('#dark-btn-sun').removeClass('hidden').addClass('show');
        $('#dark-btn-moon').removeClass('show').addClass('hidden');
        storage.set('data-theme-mode', 'dark');
    }

    if (storage.get('data-theme-mode') === 'dark' || (!storage.get('data-theme-mode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        darkMode();
    } else {
        lightMode();
    }

    $('#dark-mode').on("click", function () {
        HTML.toggleAttr('data-theme-mode', 'dark');

        if (HTML.attr('data-theme-mode') == 'dark') {
            darkMode()
        } else {
            lightMode()
        }
    });

    // ========================================
    // Initialize the toggle direction function
    if (storage.get('data-rtl-mode') === 'rtl') {
        HTML.attr('dir', 'rtl');
    } else {
        HTML.attr('dir', 'ltr');
    }

    $('#rtl-mode').on("click", function () {
        if (HTML.attr('dir') === 'rtl') {
            HTML.attr('dir', 'ltr');
            $(this).text('RTL');
            storage.set('data-rtl-mode', 'ltr');
        } else {
            HTML.attr('dir', 'rtl');
            $(this).text('LTR');
            storage.set('data-rtl-mode', 'rtl');
        }
    });

    try { new WOW().init() } catch (error) {}
    try { new PureCounter() } catch (error) {}

})(jQuery);