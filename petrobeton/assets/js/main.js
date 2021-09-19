/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");


document.addEventListener("DOMContentLoaded", function () {});
/*
window.onload = function () {
  //Мобильное меню
  document.querySelector('#mobile-menu-toggle').addEventListener('click', function () {
    document.body.classList.toggle('mobile-menu');
  }); //Слайдер в блоке Фото и видео галерея	

  var galleryThumbs = new Swiper('.section--gallery .gallery-slider-thumb', {
    spaceBetween: 23,
    slidesPerView: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  var gallerySlider = new Swiper('.section--gallery .slider-col .swiper-container', {
    navigation: {
      nextEl: '.section--gallery .slider-col .swiper-next',
      prevEl: '.section--gallery .slider-col .swiper-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    }
  }); //Слайдер в блоке Каталог типовых изделий

  var swiperNavMenu = {
    name: 'swiperNavMenu',
    params: {
      navMenuEl: false
    },
    on: {
      init: function init(swiper) {
        if (!swiper.params.navMenuEl) return;
        var sliderMenuLinks = document.querySelectorAll(swiper.params.navMenuEl + ' li a');
        sliderMenuLinks.forEach(function (link) {
          link.addEventListener('click', function (event) {
            event.preventDefault();
            var firstSlideInGroup = document.querySelector(swiper.params.el + ' .swiper-slide[data-group="' + this.dataset.group + '"]');
            var firstSlideInGroupIndex = [].indexOf.call(firstSlideInGroup.parentElement.children, firstSlideInGroup);
            swiper.slideTo(firstSlideInGroupIndex);
            return false;
          });
        });
      },
      slideChange: function slideChange(swiper) {
        if (!swiper.params.navMenuEl) return;
        var activeSlidesGroup = document.querySelectorAll(swiper.params.el + ' .swiper-slide')[this.activeIndex].dataset.group;
        var sliderMenuLinks = document.querySelectorAll(swiper.params.navMenuEl + ' li a');
        sliderMenuLinks.forEach(function (link) {
          link.dataset.group == activeSlidesGroup ? link.classList.add('active') : link.classList.remove('active');
        });
      }
    }
  };
  Swiper.use(swiperNavMenu);
  var catTypicalSlider = new Swiper('.section--catalog-typical .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 60,
    navigation: {
      nextEl: '.section--catalog-typical .swiper-next',
      prevEl: '.section--catalog-typical .swiper-prev'
    },
    navMenuEl: '.section--catalog-typical .slider-nav-menu',
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 20
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 3.5,
        spaceBetween: 20
      },
      1025: {
        slidesPerView: 2,
        spaceBetween: 60
      }
    }
  }); //Слайдер в блоке Изделия по индивидуальному проекту	

  var catIndividualSlider = new Swiper('.section--catalog-individual .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 50,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    navigation: {
      nextEl: '.section--catalog-individual .swiper-next',
      prevEl: '.section--catalog-individual .swiper-prev--range'
    },
    persenPosition: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 15,
        centeredSlides: true
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 15,
        centeredSlides: true
      },
      600: {
        slidesPerView: 2.5,
        spaceBetween: 15,
        centeredSlides: true
      },
      1025: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: false,
        loop: false
      },
      1500: {
        spaceBetween: 150,
        centeredSlides: false
      }
    }
  });

  function catIndividualSlider_setSlide() {
    if (window.innerWidth <= 1024 && catIndividualSlider.activeIndex == 0) {
      catIndividualSlider.slideTo(1);
    }
  }

  catIndividualSlider_setSlide();
  window.addEventListener("resize", function () {
    catIndividualSlider_setSlide();
  }, false); //Управление

  var swiperRange = document.querySelector('.section--catalog-individual input[type="range"]');
  if (swiperRange) rangeSlider.create(swiperRange, {
    polyfill: true,
    root: document,
    rangeClass: 'rangeSlider',
    disabledClass: 'rangeSlider--disabled',
    fillClass: 'rangeSlider__fill',
    bufferClass: 'rangeSlider__buffer',
    handleClass: 'rangeSlider__handle',
    startEvent: ['mousedown', 'touchstart', 'pointerdown'],
    moveEvent: ['mousemove', 'touchmove', 'pointermove'],
    endEvent: ['mouseup', 'touchend', 'pointerup'],
    min: 0,
    max: document.querySelectorAll('.section--catalog-individual .swiper-container .swiper-slide').length - 4,
    step: 0.01,
    value: 0,
    onSlideStart: function onSlideStart(position, value) {
      document.querySelector('.section--catalog-individual .rangeSlider').classList.add('active');
    },
    onSlide: function onSlide(position, value) {
      catIndividualSlider.slideTo(position);
    },
    onSlideEnd: function onSlideEnd(position, value) {
      document.querySelector('.section--catalog-individual .rangeSlider').classList.remove('active');
    }
  });
  catIndividualSlider.on('slideChange', function () {
    if (!document.querySelector('.section--catalog-individual .rangeSlider').classList.contains('active')) {
      swiperRange.rangeSlider.update({
        value: catIndividualSlider.activeIndex
      }, false);
    }
  });
  var instaSliderInterval = setInterval(function () {
    //Слайдер в блоке Инстаграм виджет
    if (document.querySelectorAll('.section--instagram .swiper-container .swiper-slide').length > 0) {
      console.log('test');
      var instaSlider = new Swiper('.section--instagram .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        grabCursor: true,
        preloadImages: true,
        navigation: {
          nextEl: '.section--instagram .swiper-next',
          prevEl: '.section--instagram .swiper-prev'
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 15
          },
          550: {
            slidesPerView: 2.5,
            spaceBetween: 15
          },
          769: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      });
      clearTimeout(instaSliderInterval);
    }
  }, 1000); //Слайдер в блоке Отзывы наших клиентов

  var reviewsSlider = new Swiper('.section--reviews .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: '.section--reviews .swiper-next',
      prevEl: '.section--reviews .swiper-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      450: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  }); //Раскрытие элементов аккордеона в FAQ

  var faqElems = document.querySelectorAll('.section--faq .faq .faq__elem');
  faqElems.forEach(function (elem) {
    elem.querySelector('.faq__title').addEventListener('click', function (event) {
      faqElems.forEach(function (elem) {
        elem !== event.target.closest('.faq__elem') ? elem.classList.remove('opened') : '';
      });
      event.target.closest('.faq__elem').classList.toggle('opened');
    });
  }); //Показать все вопросы

  var faqLoadMore = document.querySelector('.section--faq .faq-load-more');
  if (faqLoadMore !== null) faqLoadMore.addEventListener('click', function (event) {
    faqElems.forEach(function (elem) {
      elem.classList.contains('d-none') ? elem.classList.remove('d-none') : '';
    });
    event.target.style.display = 'none';
  }); //Галереи

  var galleries = document.querySelectorAll('.gallery');
  galleries.forEach(function (gallery) {
    lightGallery(gallery, {
      'selector': 'a'
    });
  }); //Карта

  var mapContainer = document.querySelector('#map');

  if (mapContainer !== null) {
    
	var fired = false;
	window.addEventListener('scroll', () => {
    if (fired === false) {
        fired = true;
        setTimeout(() => {
	var script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9e336a8b3d6ddda15a1470c6a205e03ba6c38e26cd7b19df37147c53b74fc4cb&amp;width=100%25&amp;height=502&amp;lang=ru_RU&amp;scroll=true';

      mapContainer.appendChild(script);
    }, 1000);
    }
});
	
	
  } //Слайдер с картинками на текстовой странице


  var textImageSlider = document.querySelectorAll('.section--text-type2 .swiper-container');
  if (textImageSlider) textImageSlider.forEach(function (slider) {
    new Swiper('#' + slider.id, {
      slidesPerView: 2,
      spaceBetween: 40,
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }
    });
  }); //Ховер на хлебных крошках

  var breadcrumbsLinks = document.querySelectorAll('.breadcrumbs a');
  var breadcrumbsSpan = document.querySelector('.breadcrumbs span');
  breadcrumbsLinks.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      breadcrumbsSpan.classList.add('disabled');
    });
    link.addEventListener('mouseleave', function () {
      breadcrumbsSpan.classList.remove('disabled');
    });
  }); //Ховер на элементах меню

  var mainMenu = document.querySelector('.header__nav ul');
  var mainMenuActiveLink = document.querySelector('.header__nav .current-menu-item a span');
  var mainMenuLinks = document.querySelectorAll('.header__nav a');
  var activeLine = document.querySelector('.header__nav .line');

  function returnToActivePosition() {
    if (mainMenuActiveLink !== null) {
      activeLine.style.transform = "translate(" + (mainMenuActiveLink.getBoundingClientRect().left - mainMenu.getBoundingClientRect().left) + "px, 0)";
      activeLine.style.width = mainMenuActiveLink.getBoundingClientRect().width + "px";
    }
  }

  mainMenuLinks.forEach(function (link) {
    link.addEventListener('mouseenter', function (event) {
      activeLine.style.transform = "translate(" + (event.target.querySelector('span').getBoundingClientRect().left - mainMenu.getBoundingClientRect().left) + "px, 0)";
      activeLine.style.width = event.target.querySelector('span').getBoundingClientRect().width + "px";
    });
    link.addEventListener('mouseleave', function (event) {
      returnToActivePosition();
    });
  });
  returnToActivePosition();
  mainMenu.classList.add('active-line');
  window.addEventListener("resize", function () {
    returnToActivePosition();
  }, false); //Маска для поля телефон

  var inputsTypeTel = document.querySelectorAll('input[type="tel"]');
  var im = new Inputmask('+7 999 999 99 99');
  im.mask(inputsTypeTel); //Модальные окна

  var modalParams = {
    onShow: function onShow(modal) {
      document.body.classList.add('overflow-hidden');
    },
    onClose: function onClose(modal) {
      document.body.classList.remove('overflow-hidden');
    }
  };
  micromodal__WEBPACK_IMPORTED_MODULE_1__["default"].init(modalParams); //Формы

  document.querySelectorAll('.form input').forEach(function (input) {
    input.addEventListener('input', function () {
      this.classList.remove('wpcf7-not-valid');
    });
  }); //Сообщение об успешной отправке
	
	const modalQuizSuccess = document.querySelector('#modalQuizSuccess');

  document.addEventListener('wpcf7mailsent', function (response) {
    var openedModal = document.querySelector('.modal.is-open');

    if (openedModal) {
      openedModal.classList.remove('is-open');
    }
	  
	  yaCounter35989655.reachGoal('otpravka forma');

    setTimeout(function () {
      //micromodal__WEBPACK_IMPORTED_MODULE_1__["default"].show('modal-success', modalParams);
		document.querySelector('#modalQuizSuccess').click();
    }, 2000);
  }, false);
}

*/
/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var rangeslider_pure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rangeslider-pure */ "./node_modules/rangeslider-pure/dist/range-slider.js");
/* harmony import */ var rangeslider_pure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rangeslider_pure__WEBPACK_IMPORTED_MODULE_2__);
 //import svg4everybody from 'svg4everybody';
//import $ from 'jquery';
//svg4everybody();
//window.$ = $;
//window.jQuery = $;
//require('ninelines-ua-parser');
// core version + navigation, pagination modules:


swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_1__["Thumbs"]]);
window.Swiper = swiper__WEBPACK_IMPORTED_MODULE_1__["default"];

__webpack_require__(/*! lightgallery.js */ "./node_modules/lightgallery.js/lib/js/lightgallery.js");

__webpack_require__(/*! lg-video.js */ "./node_modules/lg-video.js/dist/lg-video.js");

var MicroModal = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");

__webpack_require__(/*! ../../node_modules/inputmask/dist/inputmask.min */ "./node_modules/inputmask/dist/inputmask.min.js");


window.rangeSlider = rangeslider_pure__WEBPACK_IMPORTED_MODULE_2___default.a;

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map

/*Additional Scripts*/

const roistatPhones1 = document.querySelectorAll('[href="tel:+74998775625"]');
const roistatPhones2 = document.querySelectorAll('[href="tel:+74998775680"]');

if(roistatPhones1) {
	roistatPhones1.forEach((phone) => phone.classList.add('roistat-number'));
}

if(roistatPhones2) {
	roistatPhones2.forEach((phone) => phone.classList.add('roistat-number'));
}
/*
function controlSliderArrows () {
	
	const rangeSliderHandle = document.querySelector('.rangeSlider__handle');
	const sliderRangeNext = document.createElement('span');
	sliderRangeNext.className = 'slider-range__next';

	const sliderRangePrev = document.createElement('span');
	sliderRangePrev.className = 'slider-range__prev';
	
	rangeSliderHandle.before(sliderRangeNext);
	rangeSliderHandle.after(sliderRangePrev);
	
	rangeSliderHandle.classList.add('disabled-prev');
	sliderRangePrev.classList.add('disabled-prev');
		
	const controlMovingNext = () => {
		if(rangeSliderHandle.style.transform >= 'translateX(600)') {
			rangeSliderHandle.classList.add('disabled-next');
			sliderRangeNext.classList.add('disabled-next');
		}
		if(rangeSliderHandle.style.transform > 'translateX(10)') {
			rangeSliderHandle.classList.remove('disabled-prev');
			sliderRangePrev.classList.remove('disabled-prev');
		}
	}

	const controlMovingPrev = () => {
		if(rangeSliderHandle.style.transform <= 'translateX(10)') {
			rangeSliderHandle.classList.add('disabled-prev');
			sliderRangePrev.classList.add('disabled-prev');
		}
		if(rangeSliderHandle.style.transform < 'translateX(600)') {
			rangeSliderHandle.classList.remove('disabled-next');
			sliderRangeNext.classList.remove('disabled-next');
		}
	}
	
	sliderRangeNext.addEventListener('click', () => {
		document.querySelector('.swiper-next--range').click();
		sliderRangeNext.style.transform = rangeSliderHandle.style.transform;
		sliderRangePrev.style.transform = rangeSliderHandle.style.transform;
		
		controlMovingNext();
	});
		
	sliderRangePrev.addEventListener('click', () => {
		if(rangeSliderHandle.style.transform <= 'translateX(205)') {
			rangeSliderHandle.style.transform = 'translateX(0)';
		} else document.querySelector('.swiper-prev--range').click();
		
		sliderRangeNext.style.transform = rangeSliderHandle.style.transform;
		sliderRangePrev.style.transform = rangeSliderHandle.style.transform;
		
		controlMovingPrev();
	});
		
	rangeSliderHandle.addEventListener('click', () => {
		sliderRangeNext.style.transform = rangeSliderHandle.style.transform;
		sliderRangePrev.style.transform = rangeSliderHandle.style.transform;
		
		controlMovingNext();
		controlMovingPrev();
	});
}

setTimeout(controlSliderArrows, 5000);
*/

var mediaGallery = new Swiper('.media__gallery', {
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-nav .swiper-next',
        prevEl: '.swiper-nav .swiper-prev',
      },
    breakpoints: {
        500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 6,
            
        },
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 8
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
           spaceBetween: 10
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 12
        },
        1200: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 14
        }
    }
  });

  var examplesGallery = new Swiper('.complects-examples__items', {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 14,
	breakpoints: {
		500: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 20,
			navigation: {
				nextEl: '.complects-examples .swiper-nav .swiper-next',
				prevEl: '.complects-examples .swiper-nav .swiper-prev',
			}
		}
	}
    
  });
  
    var recordsGallery = new Swiper('.records__items', {
        slidesPerView: 1.3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        breakpoints: {
            500: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 40,
            },
            1440: {
                slidesPerView: 5,
                slidesPerGroup: 1,
                spaceBetween: 40,
            }
        }
  });

  let isMobile = false; 

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}

if(isMobile || window.innerWidth < 768) {
    var teamGallery = new Swiper('.about-team__team', {
        slidesPerView: 1.3,
        slidesPerGroup: 1,
        spaceBetween: 20
     });
	 
	 var nontypicalProductsGallery = new Swiper ('.nontypical-products__products', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.nontypical-products .swiper-nav .swiper-next',
            prevEl: '.nontypical-products .swiper-nav .swiper-prev',
          },
          breakpoints: {
              500: {
                slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.nontypical-products .swiper-nav .swiper-next',
            prevEl: '.nontypical-products .swiper-nav .swiper-prev',
          }
              }
          }
      });
}

  if(isMobile || window.innerWidth < 500) {
     
    var solutionsGallery = new Swiper('.solutions__items', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.solutions .swiper-nav .swiper-next',
            prevEl: '.solutions .swiper-nav .swiper-prev',
          },
        
      });
  }
  
  const header = document.querySelector('header.header');
  
  window.addEventListener('scroll', function() {
	if(this.pageYOffset > 100) header.classList.add('fixed');
	else header.classList.remove('fixed');
	if(this.pageYOffset > 110) header.style.top = 0;
	else header.style.top = '';
  });
  
  /*var aboutGainsItems = document.querySelector('.about-gains__items');
  
    lightGallery(aboutGainsItems, {
		'selector': 'a'
	});*/
	
//Bitrix
const title1 = document.querySelector('h1');
const title2 = document.querySelector('h2');
const productPrice = document.querySelector('.product-block p.price');
const productContactForms = document.querySelectorAll('div.wpcf7 form');
const productContactFormNames = document.querySelectorAll('div.wpcf7 form input[name="user-name"]');
const productContactFormSpans = document.querySelectorAll('span.user-name');
const productContactFormPhones = document.querySelectorAll('div.wpcf7 form input[type="tel"]');
const productPage = document.querySelector('#productPage');

let hiddenTitle;	
let hiddenProductName;
let hiddenCurrentPage;
let hiddenName;
let hiddenNames;
let hiddenPhone;
let hiddenPhones;
let hiddenProductPrice;

let hiddenUtmSource;
let hiddenUtmMedium;
let hiddenUtmCampaign;
let hiddenUtmTerm;
let hiddenUtmContent;
        
for(let i = 0; i < productContactForms.length; i++) {
	let productContactForm = productContactForms[i];
	
	createHiddenField(hiddenTitle, 'DATA[TITLE]', '');
	
	if(title1) {
		if(location.pathname === '/') createHiddenField(hiddenCurrentPage, 'DATA[CURRENT_PAGE]', 'Главная страница');
		else createHiddenField(hiddenCurrentPage, 'DATA[CURRENT_PAGE]', title1.innerText);
	} else createHiddenField(hiddenCurrentPage, 'DATA[CURRENT_PAGE]', title2.innerText);
	
	createHiddenField(hiddenUtmSource, 'DATA[UTM_SOURCE]', sessionStorage.getItem('utm-source'));
	createHiddenField(hiddenUtmMedium, 'DATA[UTM_MEDIUM]', sessionStorage.getItem('utm-medium'));
	createHiddenField(hiddenUtmCampaign, 'DATA[UTM_CAMPAIGN]', sessionStorage.getItem('utm-campaign'));
	createHiddenField(hiddenUtmTerm, 'DATA[UTM_TERM]', sessionStorage.getItem('utm-term'));
	createHiddenField(hiddenUtmContent, 'DATA[UTM_CONTENT]', sessionStorage.getItem('utm-content'));
	
	if(productPage) createHiddenField(hiddenProductName, 'DATA[PRODUCT_NAME]', title1.innerText);
	if(productPrice) createHiddenField(hiddenProductPrice, 'DATA[PRODUCT_PRICE]', productPrice.innerText);

	hiddenPhone = document.createElement('input');
	hiddenPhone.type = 'hidden';
	hiddenPhone.className = 'hidden-input-phone';
	hiddenPhone.name = 'DATA[PHONE_MOBILE]';
	productContactForm.append(hiddenPhone);
	
	function createHiddenField(input, name, value) {
		input = document.createElement('input');
		input.type = 'hidden';
		input.name = name;
		input.value = value;
		
		productContactForm.append(input);
	} 

}

if(productContactFormNames.length > 0) {
	productContactFormNames.forEach((formName) => {
		hiddenName = document.createElement('input');
		hiddenName.type = 'hidden';
		hiddenName.name = 'DATA[NAME]';
		
		formName.after(hiddenName);
	});
	
	for(let i = 0; i < productContactFormNames.length; i++) {
		productContactFormNames[i].addEventListener('change', function() {
			document.querySelectorAll('input[name="DATA[NAME]"]')[i].value = this.value;
		});
	}
} 
		
hiddenPhones = document.querySelectorAll('input.hidden-input-phone');
		
for (let i = 0; i < productContactForms.length; i++) {
	productContactForms[i].addEventListener('submit', () => {
		hiddenPhones[i].value = productContactFormPhones[i].value;
	});
}
	
$('div.wpcf7 form').submit(function() {
	if($(this).find('input[type="tel"]').val().length > 0) {
		$.ajax({
				type: "POST",
				url: "/wp-content/themes/petrobeton/includes/bitrix.php",
				data: $(this).serialize()
		}).done(function() {
			console.log('Отправлено в Битрикс');
		}).fail(function() {
			console.log('Не удалось отправить в Битрикс');
		});
		return false;
	}
});

const formTriggers = document.querySelectorAll('.form-trigger');
const dataTitleInputs = document.querySelectorAll('input[name="DATA[TITLE]"]');

formTriggers.forEach((trigger) => {
	trigger.addEventListener('click', function() {
		dataTitleInputs.forEach((input) => input.value = this.dataset.destination);
	});
});



