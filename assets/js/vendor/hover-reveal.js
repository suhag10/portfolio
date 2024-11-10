/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
{
    const mapNumber = (X,A,B,C,D) => (X-A)*(D-C)/(B-A)+C;
    // from http://www.quirksmode.org/js/events_properties.html#position
	const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
		if (!e) e = window.event;
		if (e.pageX || e.pageY) {
            posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
        return { x : posx, y : posy }
    }
    // Generate a random float.
    const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

    // mousePoint Effect 1
    class HoverPortfolio {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'portfolio-popup-wrapper fixed pointer-events-none transition_all z-10';
            this.DOM.reveal.innerHTML = `<div class="portfolio-popup-wrapper_inner w-0 group-hover:w-220 transition_all">
                <div class="portfolio_hover-wrapper bg-white min-w-200 py-15 px-20 border">
                    <h4 class="font-medium">${this.DOM.el.dataset.title ? this.DOM.el.dataset.title: ''}</h4>
                    <span class="pl-25 text-sm font-normal text-gray-500 relative before:absolute before:content-[''] before:w-17 before:h-2 before:bg-gray-400 before:left-0 before:top-10">
                        <a href="${this.DOM.el.dataset.metaTagLink ? this.DOM.el.dataset.metaTagLink: '#'}">${this.DOM.el.dataset.metaTag ? this.DOM.el.dataset.metaTag: ''}</a>
                    </span>
                </div>
            </div>`;
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.portfolio-popup-wrapper_inner');
            this.DOM.revealInner.style.overflow = 'hidden';

            this.initEvents();
        }
        initEvents() {
            this.positionElement = (ev) => {
                const mousePos = getMousePos(ev);
                const docScrolls = {
                    left : document.body.scrollLeft + document.documentElement.scrollLeft, 
                    top : document.body.scrollTop + document.documentElement.scrollTop
                };
                this.DOM.reveal.style.top = `${mousePos.y+20-docScrolls.top}px`;
                this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;
            };
            this.mouseenterFn = (ev) => {
                this.positionElement(ev);
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                this.positionElement(ev);
            });

            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        }
    }

    [...document.querySelectorAll('[data-fx="1"] > .portfolio_grid-item, .portfolio_grid-item[data-fx="1"]')].forEach(link => new HoverPortfolio(link));
}