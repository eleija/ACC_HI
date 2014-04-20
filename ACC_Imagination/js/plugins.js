// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
* Uses the built in easing capabilities added In jQuery 1.1
* to offer multiple easing options
* Open source under the BSD License.
* Copyright © 2008 George McGinley Smith
* All rights reserved.
*
*/
jQuery.easing.jswing = jQuery.easing.swing; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (e, f, a, h, g) { return jQuery.easing[jQuery.easing.def](e, f, a, h, g) }, easeInQuad: function (e, f, a, h, g) { return h * (f /= g) * f + a }, easeOutQuad: function (e, f, a, h, g) { return -h * (f /= g) * (f - 2) + a }, easeInOutQuad: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f + a } return -h / 2 * ((--f) * (f - 2) - 1) + a }, easeInCubic: function (e, f, a, h, g) { return h * (f /= g) * f * f + a }, easeOutCubic: function (e, f, a, h, g) { return h * ((f = f / g - 1) * f * f + 1) + a }, easeInOutCubic: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f + a } return h / 2 * ((f -= 2) * f * f + 2) + a }, easeInQuart: function (e, f, a, h, g) { return h * (f /= g) * f * f * f + a }, easeOutQuart: function (e, f, a, h, g) { return -h * ((f = f / g - 1) * f * f * f - 1) + a }, easeInOutQuart: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f + a } return -h / 2 * ((f -= 2) * f * f * f - 2) + a }, easeInQuint: function (e, f, a, h, g) { return h * (f /= g) * f * f * f * f + a }, easeOutQuint: function (e, f, a, h, g) { return h * ((f = f / g - 1) * f * f * f * f + 1) + a }, easeInOutQuint: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f * f + a } return h / 2 * ((f -= 2) * f * f * f * f + 2) + a }, easeInSine: function (e, f, a, h, g) { return -h * Math.cos(f / g * (Math.PI / 2)) + h + a }, easeOutSine: function (e, f, a, h, g) { return h * Math.sin(f / g * (Math.PI / 2)) + a }, easeInOutSine: function (e, f, a, h, g) { return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a }, easeInExpo: function (e, f, a, h, g) { return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a }, easeOutExpo: function (e, f, a, h, g) { return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a }, easeInOutExpo: function (e, f, a, h, g) { if (f == 0) { return a } if (f == g) { return a + h } if ((f /= g / 2) < 1) { return h / 2 * Math.pow(2, 10 * (f - 1)) + a } return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a }, easeInCirc: function (e, f, a, h, g) { return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a }, easeOutCirc: function (e, f, a, h, g) { return h * Math.sqrt(1 - (f = f / g - 1) * f) + a }, easeInOutCirc: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a } return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a }, easeInElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e }, easeOutElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e }, easeInOutElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k / 2) == 2) { return e + l } if (!j) { j = k * (0.3 * 1.5) } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } if (h < 1) { return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e } return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e }, easeInBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * (f /= h) * f * ((g + 1) * f - g) + a }, easeOutBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a }, easeInOutBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } if ((f /= h / 2) < 1) { return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a } return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a }, easeInBounce: function (e, f, a, h, g) { return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a }, easeOutBounce: function (e, f, a, h, g) { if ((f /= g) < (1 / 2.75)) { return h * (7.5625 * f * f) + a } else { if (f < (2 / 2.75)) { return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a } else { if (f < (2.5 / 2.75)) { return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a } else { return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a } } } }, easeInOutBounce: function (e, f, a, h, g) { if (f < g / 2) { return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a } return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a } });


/*!
 * Hero Carousel - jQuery Plugin
 * Copyright (c) 2011 Paul Welsh
 * Version: 1.3 (26/05/2011)
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

jQuery.fn.heroCarousel = function(options){

	options = jQuery.extend({
		animationSpeed: 1000,
		navigation: true,
		easing: '',
		timeout: 10000,
		pause: true,
		pauseOnNavHover: true,
		prevText: 'Previous',
		nextText: 'Next',
		css3pieFix: false,
		currentClass: 'hc-current',
		onLoad: function(){},
		onStart: function(){},
		onComplete: function(){}
	}, options);

	return this.each(function(){var carousel=jQuery(this),elements=carousel.children();currentItem=1;childWidth=elements.width();childHeight=elements.height();if(elements.length > 2){elements.each(function(i){if(options.itemClass){jQuery(this).addClass(options.itemClass);}});elements.filter(':first').addClass(options.currentClass).before(elements.filter(':last'));var carouselWidth=Math.round(childWidth * carousel.children().length),carouselMarginLeft='-'+ Math.round(childWidth + Math.round(childWidth / 2) ) +'px';carousel.addClass('hero-carousel-container').css({'position': 'relative','overflow': 'hidden','left': '50%','top': 0,'margin-left': carouselMarginLeft,'height': childHeight,'width': carouselWidth});carousel.before('<ul class="hero-carousel-nav"><li class="prev"><a href="#">'+options.prevText+'</a></li><li class="next"><a href="#">'+options.nextText+'</a></li></ul>');var carouselNav=carousel.prev('.hero-carousel-nav'),timeoutInterval;if(options.timeout > 0){var paused=false;if(options.pause){carousel.hover(function(){paused=true;},function(){paused=false;});}if(options.pauseOnNavHover){carouselNav.hover(function(){paused=true;},function(){paused=false;});}function autoSlide(){if(!paused){carouselNav.find('.next a').trigger('click');}}timeoutInterval=window.setInterval(autoSlide, options.timeout);}carouselNav.find('a').data('disabled', false).click(function(e){e.preventDefault();var navItem=jQuery(this),isPrevious=navItem.parent().hasClass('prev'),elements=carousel.children();if(navItem.data('disabled')===false){options.onStart(carousel, carouselNav, elements.eq(currentItem), options);if(isPrevious){animateItem(elements.filter(':last'), 'previous');}else{animateItem(elements.filter(':first'), 'next');}navItem.data('disabled', true);setTimeout(function(){navItem.data('disabled', false);}, options.animationSpeed+200);if(options.timeout > 0){window.clearInterval(timeoutInterval);timeoutInterval=window.setInterval(autoSlide, options.timeout);}}});function animateItem(object,direction){var carouselPosLeft=parseFloat(carousel.position().left),carouselPrevMarginLeft=parseFloat(carousel.css('margin-left'));if(direction==='previous'){object.before( object.clone().addClass('carousel-clone') );carousel.prepend( object );var marginLeft=Math.round(carouselPrevMarginLeft - childWidth);var plusOrMinus='+=';}else{object.after( object.clone().addClass('carousel-clone') );carousel.append( object );var marginLeft=carouselMarginLeft;var plusOrMinus='-=';}if(options.css3pieFix){fixPieClones(jQuery('.carousel-clone'));}carousel.css({'left': carouselPosLeft,'width': Math.round(carouselWidth + childWidth),'margin-left': marginLeft}).animate({'left':plusOrMinus+childWidth}, options.animationSpeed, options.easing, function(){carousel.css({'left': '50%','width': carouselWidth,'margin-left': carouselPrevMarginLeft});jQuery('.carousel-clone').remove();finishCarousel();});}function fixPieClones(clonedObject){var itemPieId=clonedObject.attr('_pieId');if(itemPieId){clonedObject.attr('_pieId', itemPieId+'_cloned');}clonedObject.find('*[_pieId]').each(function(i, item){var descendantPieId=$(item).attr('_pieId');$(item).attr('_pieId', descendantPieId+'_cloned');});}function finishCarousel(){var elements=carousel.children();elements.removeClass(options.currentClass).eq(currentItem).addClass(options.currentClass);options.onComplete(carousel, carousel.prev('.hero-carousel-nav'), elements.eq(currentItem), options);}options.onLoad(carousel, carouselNav, carousel.children().eq(currentItem), options);}});

};